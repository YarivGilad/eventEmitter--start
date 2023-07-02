class EventEmitter {
  /**
   * Essential tasks
   **/
  on() {
    //adds a callback to be called when an event occurs
  }
  off() {
    //removes a callback from a given event name
  }
  emit() {
    //calls all callbacks registered to a given event
    //takes an event name, and any payload/s to pass to its registered callbacks.
  }

  /**
   * Bonus tasks
   **/
  once() {
    // adds a callback to be called when an event occures
    // same as `on` but happens only once!
  }
  listeners() {
    // returns ALL callbacks of a given event name
  }
  eventNames() {
    // returns ALL event names
  }
  removeAllListeners() {
    // removes all listeners of a given event name
  }
}
