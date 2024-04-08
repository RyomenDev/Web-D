
// Browser Events
Events
respond to Events
data stored in Event
stop an Event
lifecycle of event 

//

monitorEvents: if any event trigger it helps to see it

monitorEvents(document)
unmonitorEvents(document) // opposite

//
{
class : blueprint
object : instance of class (like reality)

interface : blueprint (in js)
}

// EventTarget : like a interface implemented by objects that can recieve and may have listeners for them.

// listeners -> action on recieved events 

EventTarget
1: addEventListener()
2: removeEventListener()
3: dispatchEvent()

:eventtarget is top level interface with no parent.

:node inherit from eventTarget  --> all methods propertis in eventtarget are in node also(with nodes specific).

:element inherit from node --> all methods propertis in node are in element also. 

