import throttle from 'lodash/throttle'

/**
 * Scrolls the page vertically
 */
export default {
  models: 'weboji',
  enabled: false,

  tags: ['browser'],

  // Number of frames the current element is the same as the last
  numFramesFocused: 0,
  // The last scrollable target focused
  $lastTarget: null,
  // The current scrollable target
  $target: null,

  config: {
    // Number of frames over the same element before activating that element
    framesToFocus: 10,

    vertScroll: {
      // The multiplier to scroll by. Lower numbers are slower
      scrollSpeed: 0.15,
      // How many pixels from the top/bottom of the scroll area to scroll
      scrollZone: 100
    }
  },

  onUse () {
    this.$target = window
  },

  /**
   * Scroll the page when the cursor goes above/below the threshold
   */
  onFrame (data) {
    // @FIXME we shouldn't need to do this, but this is occasionally reset to {x: 0, y: 0} when running in client mode
    if (!data.pointer.x && !data.pointer.y) return

    // Check for hover
    this.checkForFocus(data)
    let isScrolling = false

    // Get bounds
    let bounds
    let scrollTop = this.getTargetScrollTop()

    if (this.$target.getBoundingClientRect) {
      bounds = this.$target.getBoundingClientRect()
    } else {
      bounds = { top: 0, bottom: window.innerHeight }
    }

    // Check on click
    if (data.pointer.state === 'mouseDown') {
      this.numFramesFocused = 0
      this.maybeSetTarget(data)
    }

    // Scroll up
    if (data.pointer.y < bounds.top + this.config.vertScroll.scrollZone) {
      this.$target.scrollTo(
        0,
        scrollTop +
          (data.pointer.y - bounds.top - this.config.vertScroll.scrollZone) *
            this.config.vertScroll.scrollSpeed
      )

      isScrolling = true
    }

    // Scroll down
    if (data.pointer.y > bounds.bottom - this.config.vertScroll.scrollZone) {
      this.$target.scrollTo(
        0,
        scrollTop -
          (bounds.bottom -
            data.pointer.y -
            this.config.vertScroll.scrollZone) *
            this.config.vertScroll.scrollSpeed
      )

      isScrolling = true
    }

    isScrolling && this.maybeSelectNewTarget()
  },

  /**
   * Check that the scroll is actually happening, otherwise traverse up the DOM
   */
  maybeSelectNewTarget() {
    let curScrollTop = this.getTargetScrollTop()
    let didNotScroll = false

    // Check if we have scrolled up
    this.$target.scrollTo(0, curScrollTop + 1)
    if (curScrollTop === this.getTargetScrollTop()) {
      didNotScroll = true
    } else {
      this.$target.scrollTo(0, curScrollTop - 1)
      return
    }

    // Check if we have scrolled down
    this.$target.scrollTo(0, curScrollTop - 1)
    if (curScrollTop === this.getTargetScrollTop()) {
      if (didNotScroll) {
        this.numFramesFocused = 0

        this.selectTarget(
          this.recursivelyFindScrollbar(this.$target.parentElement)
        )
      }
    } else {
      this.$target.scrollTo(0, curScrollTop + 1)
      return
    }
  },

  /**
   * Gets the scrolltop, taking account the window object
   */
  getTargetScrollTop() {
    return this.$target?.scrollY || this.$target?.scrollTop || 0
  },

  /**
   * Checks to see if we've hovered over an element for x turns
   */
  checkForFocus: throttle(function(data) {
    let $potTarget = document.elementFromPoint(
      data.pointer.x,
      data.pointer.y
    )
    if (!$potTarget) return
    $potTarget = this.recursivelyFindScrollbar($potTarget)

    if ($potTarget === this.$lastTarget) {
      ++this.numFramesFocused
    } else {
      this.numFramesFocused = 0
    }

    if (this.numFramesFocused > this.config.framesToFocus) {
      this.selectTarget($potTarget)
    }

    this.$lastTarget = $potTarget
  }, 100),

  /**
   * Select and style the element
   */
  selectTarget($potTarget) {
    // Check required in case the window is the target
    if (this.$target.classList) {
      this.$target.classList.remove('handsfree-scroll-focus')
    }
    if ($potTarget && $potTarget.classList) {
      $potTarget.classList.add('handsfree-scroll-focus')
    }

    if ($potTarget.nodeName === 'HTML' || !$potTarget.nodeName) {
      $potTarget = window
    }

    this.$target = $potTarget
  },

  /**
   * Sets a new scroll target on click
   */
  maybeSetTarget(data) {
    if (data.pointer.state === 'mouseDown' && data.pointer.$target) {
      this.selectTarget(this.recursivelyFindScrollbar(data.pointer.$target))
    }
  },

  /**
   * Traverses up the DOM until a scrollbar is found, or until we hit the body/window
   */
  recursivelyFindScrollbar($target) {
    const styles =
      $target && $target.getBoundingClientRect ? getComputedStyle($target) : {}

    if (
      $target &&
      $target.scrollHeight > $target.clientHeight &&
      (styles.overflow === 'auto' ||
        styles.overflow === 'auto scroll' ||
        styles.overflowY === 'auto' ||
        styles.overflowY === 'auto scroll')
    ) {
      return $target
    } else {
      if ($target && $target.parentElement) {
        return this.recursivelyFindScrollbar($target.parentElement)
      } else {
        return window
      }
    }
  }
}
