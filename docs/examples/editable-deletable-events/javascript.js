angular
  .module('mwl.calendar.docs')
  .controller('EditableDeletableEventsCtrl', function(moment, alert, calendarConfig) {

    var vm = this;

    vm.events = [
      {
        title: 'Editable event',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('month').toDate(),
        editable: true,
        deletable: false
      }, {
        title: 'Deletable event',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().startOf('month').toDate(),
        deletable: true,
        editable: false
      }, {
        title: 'Non editable and deletable event',
        color: calendarConfig.colorTypes.important,
        startsAt: moment().startOf('month').toDate(),
        editable: false,
        deletable: false
      }
    ];

    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    vm.isCellOpen = true;

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

  });
