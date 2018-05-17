var clndr = {};

$( function() {

  // PARDON ME while I do a little magic to keep these events relevant for the rest of time...
  var currentMonth = moment().format('YYYY-MM');
  //var nextMonth    = moment().add('month', 1).format('YYYY-MM');

  var events = [
                { date: '2015-09-01', title: 'Journal Club', timeslot: '15:30-16:30' },
                { date: '2015-09-08', title: 'Journal Club', timeslot: '15:30-16:30' },
                { date: '2015-09-15', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date:  '2015-09-22', title: 'Journal Club', timeslot: '15:30-16:30' },
                { date: '2015-09-23', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-09-24', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15'},
                { date:  '2015-09-29', title: 'Journal Club', timeslot: '15:30-16:30' },
                { date: '2015-09-30', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-10-01', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15'},
                { date: '2015-10-06', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-10-06', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-10-06', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-10-07', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-10-08', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15'},
                { date: '2015-10-13', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-10-13', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-10-13', title: 'Journal Club', timeslot: '15:30-16:30' },
                { date: '2015-10-13', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-10-14', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-10-15', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-10-20', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-10-20', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-10-20', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-10-20', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-10-21', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-10-22', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-10-27', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-10-27', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-10-27', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-10-27', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-10-28', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-10-29', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-11-03', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-11-03', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-11-03', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-11-03', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-11-04', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-11-05', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-11-10', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-11-10', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-11-10', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-11-10', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-11-11', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-11-12', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-11-17', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-11-17', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-11-17', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-11-17', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-11-18', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-11-19', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-11-24', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-11-24', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-11-24', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-11-24', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-11-25', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date: '2015-12-01', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-12-01', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-12-01', title: 'Journal Club', timeslot: '15:30-16:15' },
                { date: '2015-12-01', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-12-02', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-12-03', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15'},
                { date: '2015-12-08', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-12-08', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-12-08', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-12-08', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-12-09', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-12-10', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-12-15', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-12-15', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-12-15', title: 'Journal Club', timeslot: '15:30-16:30' },
                { date: '2015-12-15', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                { date: '2015-12-16', title: 'Introduction to Programming for Health Informatics-Dr.Ge', timeslot: '18:30-21:00'  },
                { date:  '2015-12-17', title: 'Database Systems - Dr. Yao', timeslot: '18:30-21:15' },
                { date: '2015-12-22', title: 'Individual Meeting', timeslot: '10:00-11:00'  },
                { date: '2015-12-22', title: 'Individual Meeting', timeslot: '14:30-15:30'  },
                { date: '2015-12-22', title: 'Journal Club', timeslot: '15:30-16:30'  },
                { date: '2015-12-22', title: 'Individual Meeting', timeslot: '16:30-17:30'  },
                //{ startDate: '2015-12-24', endDate: '2015-12-31', title: 'Winter Break' }
  ];



  $('#mini-clndr').clndr({
    template: $('#mini-clndr-template').html(),
    events: events,
    clickEvents: {
      click: function(target) {
        if(target.events.length) {
          var daysContainer = $('#mini-clndr').find('.days-container');
            //Added
            
             $('.events-list .event').each(function(index, event) {
            var hide = true;
            for (var i = 0; i < target.events.length; ++ i) {
              if (event.innerHTML.indexOf(target.events[i].date) != -1) {
                hide = false;
              }
            }
            if (hide)
              $(event).hide();
            else
              $(event).show();
          });//
            
          daysContainer.toggleClass('show-events', true);
          $('#mini-clndr').find('.x-button').click( function() {
            daysContainer.toggleClass('show-events', false);
          });
        }
      }
    },
    adjacentDaysChangeMonth: true,
    forceSixRows: true,
    //showAdjacentMonths: false
  });


  // $('#clndr-4').clndr({
  //   template: $('#clndr-4-template').html(),
  //   events: events,
  //   lengthOfTime: {
  //     days: 7,
  //     interval: 7
  //   }
  // });
});