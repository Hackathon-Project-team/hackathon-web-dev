Principal LogIn

* Shool Name
* School Address
* Medium of language
* Drop-down of 7 days
* Each Drop-down ___ - ___

* Monday carret-down
    * 8:00 - 10:00 [REMOVE]
    * ____ - ____ [Ok]

    When you click on ok run validations
* Tuesday
    * ____ - ____

* ....

* Database


School1 : {
    Address : 
    Princpal Name :
}

```
Volunteer : {
    Address :
    Languages :
    Number of hrs :
}


Week : {
    Monday : {
        Language1 : {
            arrV = // Filter by language
            
            School1 : {
                SlotTime
                // Filter by SlotTime free

                vws[arrV[i]][j].weekday == monday {
                    endTime<SlotTimeStart{
                        FreeVols . push(arrV[i]);
                    }
                }

                // Sort according to Worked for less time will be assigned
                // FreeVols[0]

                //filter according to dist in FreeVols
                nearestVws 

                vws[FreeVols[0]].push({
                    monday
                    SlotStartTime
                    SlotEndTime
                })
            }
            School2 : {
                Slot
            }
        }
        Language2 : {

        }
    }
}


Volunteer Work Schedule : [
    {
        weekday :
        StartTime :
        EndTime :
    }
]



Volunteer LogIn

* Address
* Languages 
* Number of working hours per week
* Since : (Given by us)



Weeks : {
    Monday : {
        school1{
            // v1,v2 - english
            // v1,v2 - Slotfree
            // v1,v2
            // mn = INF

            // v1 alloted
        }
        school2{
            // v1,v2 - english
            // v2 - Slotfree
            // v2
            // mn = INF

            // v2 alloted
        }
        school3{
            // v3


            // v3 alloted
        }
    }
}



v1=[10 , {
    school1
    slot : 9 to 10
}]
v2=[10]
v3=[10]



Principal Login:
[
    {
    school_name : "school1",
    school_address : " Kalyan", 
    school_language : "english",
    "monday" : [9:00,10:00], 
    "tuesday" : [9:30,10:30],
    "wednesday" : [11:00,12:00], 
    "thursday" : [11:30,12:00], 
    "friday" : [12:00,13:00]
    }

    {
    school_name : "school2",
    school_address : " Thane",
    school_language : "english",
    "monday" : [9:00,10:00],
    "tuesday" : [10:30,11:30],
    "wednesday" : [12:00,13:00], 
    "thursday" : [14:00,15:00], 
    "friday" : [15:00,16:00] 
    
    }

    {
    school_name : "school3",
    school_address : "Borivali",
    school_language : "Hindi",
    "monday" : [9:00,10:00], 
    "tuesday" : [10:30,11:30],
    "wednesday" : [14:00,15:00], 
    "thursday" : [14:00,15:00], 
    "friday" : [16:00,17:00]
    }

]


Volunteer Login : 
[
    {
    volunteer_address : "Kalyan",
    volunteer_language: ["english"],
    volunteer_hours : 10
    }
    {
    volunteer_address : "Thane",
    volunteer_language: ["english","hindi"],
    volunteer_hours : 10
    }
    {
    volunteer_address : "Thane",
    volunteer_language : ["hindi"],
    volunteer_hours : 10
    }
]