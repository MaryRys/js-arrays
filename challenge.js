

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

//   Print to DOM string building functions

  const printToDom = (stringToPrint, divId) => {
      const selectedDiv = document.getElementById(divId);
      selectedDiv.innerHTML = stringToPrint;
  };

  const congressionalDistrictStringBuilder = () => {
      const newString = `<h3>Congressional District: ${elizabethSanger.congressionalDistrict}</h3>`;
      printToDom(newString, 'congressionalDistrict');
  }
  const eventsStringBuilder = () => {
    let newString = '';
    for(let i=0; i <elizabethSanger.events.length; i++) {
      newString += `<div class="events">`
      newString += `<h3>${elizabethSanger.events[i].date}</h3>`
      newString += `<h6>${elizabethSanger.events[i].title}</h6>`
      newString += `<h6>${elizabethSanger.events[i].description}</h6>`
      newString += `</div>`;
    }
    printToDom(newString, 'events');
};


  const volunteersStringBuilder = () => {
    let newString = '';
    for(let i=0; i <elizabethSanger.volunteers.length; i++) {
      newString += `<div class="volunteers">`
      newString += `<h3>${elizabethSanger.volunteers[i].name}</h3>`
      newString += `<h6>${elizabethSanger.volunteers[i].address}</h6>`
      newString += `<h6>${elizabethSanger.volunteers[i].email}</h6>`
      newString += `<h6>${elizabethSanger.volunteers[i].phone}</h6>`
      newString += `<h6>${elizabethSanger.volunteers[i].availability}</h6>`
      newString += `<h6>${elizabethSanger.volunteers[i].activities}</h6>`
      newString += `</div>`;
    }
    printToDom(newString, 'volunteers')
};

const biographyStringBuilder = () => {
    const newString = `<p>biography: ${elizabethSanger.biography}</p>`;
    printToDom(newString, 'biography');
};

const imagesStringBuilder = () => {
    let newString = '';
    for(let i=0; i <elizabethSanger.images.length; i++) {
      newString += `<div class="images">`
      newString += `<img src="https://${elizabethSanger.images[i].imageUrl}"></img>`
      newString += `<p>${elizabethSanger.images[i].description}</p>`
      newString += `<p>${elizabethSanger.images[i].type}</p>`
      newString += `</div>`;
    }
    printToDom(newString, 'images')
  };


  const voterRegistrationStringBuilder = () => {
      const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to vote here!</a>`;
      printToDom(newString, 'voterRegistration');
  };

  const donationFormStringBuilder = () => {
      const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate here!</a>`;
      printToDom(newString, 'donationForm');
  };

  const statementsStringBuilder = () => {
      let newString = '';
      for(let i=0; i <elizabethSanger.length; i++) {
        newString += `<div class="statements">`
        newString += `<h3>${elizabethSanger.statements[i].statement}</h3>`
        newString += `<h6>${elizabethSanger.statements[i].category}</h6>`
        newString += `</div>`;
      }
      printToDom(newString, 'statements')
  };


  const missionStatementStringBuilder = () => {
    const newString = `<p>Mission Statement: ${elizabethSanger.missionStatement}</p>`;
    printToDom(newString, 'missionStatement');
  }

//   calling all string building functions

  voterRegistrationStringBuilder();
  donationFormStringBuilder();
  statementsStringBuilder();
  eventsStringBuilder();
  congressionalDistrictStringBuilder();
  volunteersStringBuilder();
  biographyStringBuilder();
  imagesStringBuilder();
  missionStatementStringBuilder();

//   Functions to update all string builders

  const updateVoterRegistration = (newUrl) => {
      elizabethSanger.voterRegistrationUrl = newUrl;
      voterRegistrationStringBuilder();
  };

  const updateCongresstionalDistrict = (newString) => {
      elizabethSanger.congressionalDistrict = newString;
      congressionalDistrictStringBuilder();
  };

  const updateDonationFormUrl = (newUrl) => {
      elizabethSanger.donationFormUrl = newUrl;
      donationFormStringBuilder();
  };

  const updateVolunteers = (newUrl) => {
      elizabethSanger.volunteers.push(newUrl);
      volunteersStringBuilder();
  };

  const updateBiography = (newString) => {
      elizabethSanger.biography = newString;
      biographyStringBuilder();
  };

  const updateImages = (newImg) => {
      elizabethSanger.images.push(newImg)
      imagesStringBuilder();
  };

  const updateMissionStatement = (newString) => { 
      elizabethSanger.missionStatement = newString;
      missionStatementStringBuilder();
  };   

// updateVoterRegistration ('classtracker.com/zoeames');
