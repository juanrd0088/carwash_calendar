$(document).ready(function() {

 //Login ventana modal
 $('#myModal').modal('show');

 /* initialize the external events
 -----------------------------------------------------------------*/

 $('#external-events .fc-event').each(function() {

  // store data so the calendar knows to render an event upon drop
  $(this).data('event', {
   title: $.trim($(this).text()), // use the element's text as the event title
   stick: true, // maintain when user navigates (see docs on the renderEvent method)
   color: "green"
  });

  // make the event draggable using jQuery UI
  $(this).draggable({
   zIndex: 999,
   revert: true,      // will cause the event to go back to its
   revertDuration: 0  //  original position after the drag
  });

 });


 /* initialize the calendar
 -----------------------------------------------------------------*/

 $('#calendar').fullCalendar({
  header: {
   left: 'prev,next today',
   center: 'title',
   right: 'month,agendaWeek,agendaDay'
  },
  editable: true,
  droppable: true, // this allows things to be dropped onto the calendar
  drop: function() {
    // if so, remove the element from the "Draggable Events" list
    $(this).remove();
   //Juan
   alert("Ahora llamamos a book");
  },
  eventDrop: function(event, delta, revertFunc) {

       alert(event.title + " was dropped on " + event.start.format());

       if (!confirm("Are you sure about this change?")) {
           revertFunc();
       }
   },
   //Eventos de ejemplo
   events: [
    {
     title: 'All Day Event',
     start: '2017-01-30',
     constraint: 'null'
    },
    {
     title: 'Completo',
     start: '2017-01-30',
     constraint: 'null'
    }
   ]
 });
});
