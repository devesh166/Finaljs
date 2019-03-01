     var doctorListing = [
        {
            "docName": "Shashank",
            "doctorID": 100,
            "specialization": "Dental",
            "qualification": "BDS",
            "rating": 5,
            "experience": 7,
            "cost": 500,
            "gender": "male",
            "address": [
                {
                    "addressLineOne": "Khetrapal Nursing Home",
                    "addressLineTwo": "Gn 5, F N g Sector Rajouri Garden",
                    "city": "New Delhi",
                    "state": "Delhi",
            }
        ]
        }
        ];
          function clickbtn()
          {
          var div1 = document.createElement('div');
          div1.setAttribute('id',"100");
          if(div1.id == doctorListing[0].doctorID)
          {
          var text1 = document.createTextNode(doctorListing[0].address[0].addressLineOne);
          }
          var div2 = document.createElement('div');
          div2.setAttribute('id',"100");
          if(div2.id == doctorListing[0].doctorID)
          {
          var text2 = document.createTextNode(doctorListing[0].address[0].addressLineTwo);
          }
          var divbox1 = document.getElementById("btnfield1");
          var divbox2 = document.getElementById("btnfield2");
          divbox1.innerHTML = ""
          divbox2.innerHTML = ""
          divbox1.appendChild(text1);
          divbox2.appendChild(text2);
          document.body.appendChild(divbox1);
          document.body.appendChild(divbox2);
        }