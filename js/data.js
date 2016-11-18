dataIndexSelected = 0;

response = {
    "Case":[
        {
            "MonitoringCondition":[
                {
                    "IsCompliant":false,
                    "IsNonCompliant":false,
                    "Condition":"Refrain from getting arrested",
                    "Comment":"xczv"
                },
                {
                    "IsCompliant":false,
                    "IsNonCompliant":false,
                    "Condition":"Maintain Active employment",
                    "Comment":"vczxv"
                },
                {
                    "IsCompliant":false,
                    "IsNonCompliant":false,
                    "Condition":"Maintain employment, or actively seek employment",
                    "Comment":""
                }
            ],
            "CaseNumber":"ATL-06-000012-001"
        },
        {
            "MonitoringCondition":[
                {
                    "IsCompliant":false,
                    "IsNonCompliant":false,
                    "Condition":"Refrain from getting arrested",
                    "Comment":"xczv"
                },
                {
                    "IsCompliant":false,
                    "IsNonCompliant":false,
                    "Condition":"Maintain Active employment",
                    "Comment":"vczxv"
                },
                {
                    "IsCompliant":false,
                    "IsNonCompliant":false,
                    "Condition":"Maintain employment, or actively seek employment",
                    "Comment":""
                }
            ],
            "CaseNumber":"ATL-06-000024-001"
        }
    ],
    "Interview":[
        {
            "PhoneExt":0,
            "AppointmentLocation":"CAPE MAY COURT HOUSE",
            "PhoneNumber":"(609) 463-6550",
            "AppointmentType":"Office Visit",
            "AppointmentTime":"04:15 PM",
            "AppointmentDate":"20161027T000000.000 GMT"
        }
    ],
    "ContactDetails":{
        "SupplementalContactEmail":"testemail@hotmail.com",
        "SupplementalContactPerson":"",
        "PrimaryHome":"(111) 222-3335",
        "SupplementalContactPhone":"(111) 222-3337",
        "PrimaryMobile":"(111) 222-3335",
        "CallLanguage":"EN",
        "SecondaryMobile":"(111) 222-3333",
        "Relationship":"",
        "Email":"testemail@gmail.com",
        "EmergencyPhone":"(111) 222-0000",
        "NotificationMode":""
    },
    "DemographicInfo":{
        "MiddleName":"L",
        "LastName":"TAKUR'S",
        "Gender":"",
        "HairColor":"2",
        "SSN":"111-01-0001",
        "EyeColor":"1",
        "HeightFt":1,
        "InterpreterRequired":"",
        "SpokenLanguage":"",
        "FirstName":"ADITHI",
        "HeightInches":1,
        "Ethnicity":""
    },
    "SBINumber":"402653B",
    "pyID":"D-836",
    "EmpDetails":[
        {
            "Contact":0,
            "PhoneExt":0,
            "ApproxLengthOFEmployment":"",
            "EmploymentName":"Test Employment",
            "EmpStatus":"Active",
            "Occupation":"Programmer",
            "EmployerPhoneNumber":0
        }
    ],
    "CurrentAddress":{
        "Zip":"23345",
        "CurAddressLengthStay":"",
        "City":"Trenton",
        "Address1":"25 Market Street",
        "Address2":"Apt 300"
    },
    "AddressDetails":{
        "Zip":"23345",
        "CurAddressLengthStay":"",
        "City":"Trenton",
        "Address1":"25 Market Street",
        "Address2":"Apt 300"
    }
};
//FixME State and County data missing from CurrentAddress/AddressDetails
//FixMe No secondary email available
data = [
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":"xczv"
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":"vczxv"
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"ATL-06-000012-001"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":"xczv"
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":"vczxv"
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"ATL-06-000024-001"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"CAPE MAY COURT HOUSE",
                "PhoneNumber":"(609) 463-6550",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"04:15 PM",
                "AppointmentDate":"20161027T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"testemail@hotmail.com",
            "SupplementalContactPerson":"",
            "PrimaryHome":"(111) 222-3335",
            "SupplementalContactPhone":"(111) 222-3337",
            "PrimaryMobile":"(111) 222-3335",
            "CallLanguage":"EN",
            "SecondaryMobile":"(111) 222-3333",
            "Relationship":"",
            "Email":"testemail@gmail.com",
            "EmergencyPhone":"(111) 222-0000",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"L",
            "LastName":"TAKUR'S",
            "Gender":"",
            "HairColor":"2",
            "SSN":"111-01-0001",
            "EyeColor":"1",
            "HeightFt":1,
            "InterpreterRequired":"",
            "SpokenLanguage":"",
            "FirstName":"ADITHI",
            "HeightInches":1,
            "Ethnicity":""
        },
        "SBINumber":"402653B",
        "pyID":"D-836",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"Test Employment",
                "EmpStatus":"Active",
                "Occupation":"Programmer",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"23345",
            "CurAddressLengthStay":"",
            "City":"Trenton",
            "Address1":"25 Market Street",
            "Address2":"Apt 300"
        },
        "AddressDetails":{
            "Zip":"23345",
            "CurAddressLengthStay":"",
            "City":"Trenton",
            "Address1":"25 Market Street",
            "Address2":"Apt 300"
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from meeting the defendant",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from meeting the defendant",
                        "Comment":""
                    }
                ],
                "CaseNumber":"W-2016-000001-0102"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from meeting the defendant",
                        "Comment":""
                    }
                ],
                "CaseNumber":"W-2016-000002-0102"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"Atlantic CourtHouse 2",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"03:15 AM",
                "AppointmentDate":"19700101T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"(300) 400-5000",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"EN",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"testemail@njj.gov",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"LEBORN",
            "Gender":"F",
            "HairColor":"1",
            "SSN":"901-37-9373",
            "EyeColor":"1",
            "HeightFt":2,
            "InterpreterRequired":"",
            "SpokenLanguage":"",
            "FirstName":"JAMES",
            "HeightInches":0,
            "Ethnicity":"H"
        },
        "SBINumber":"888666J",
        "pyID":"D-852",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Notification Only",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"07047",
            "CurAddressLengthStay":"",
            "City":"hfgh",
            "Address1":"gfhdddd",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"12345",
            "CurAddressLengthStay":"",
            "City":"hfgh",
            "Address1":"hjfg",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":true,
                        "Condition":"Refrain from getting arrested",
                        "Comment":"kjl;"
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-ATL-000002-16"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":true,
                        "Condition":"Refrain from getting arrested",
                        "Comment":"kjl;"
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-ATL-000002-16"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"ATLANTIC COUNTY CRIMINAL COURT COMPLEX",
                "PhoneNumber":"(609) 909-8086",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"02:15 PM",
                "AppointmentDate":"20161112T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"(908) 768-1020",
            "CallLanguage":"EN",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"(908) 768-1020",
            "NotificationMode":"PMT"
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"MOORE",
            "Gender":"M",
            "HairColor":"4",
            "SSN":"912-47-0909",
            "EyeColor":"6",
            "HeightFt":1,
            "InterpreterRequired":"",
            "SpokenLanguage":"",
            "FirstName":"ROBERT",
            "HeightInches":0,
            "Ethnicity":"N"
        },
        "SBINumber":"1000XX",
        "pyID":"D-855",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Active",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"45435",
            "CurAddressLengthStay":"",
            "City":"Trenton",
            "Address1":"13 Pumpkin Place",
            "Address2":"Apt A"
        },
        "AddressDetails":{
            "Zip":"45435",
            "CurAddressLengthStay":"",
            "City":"Trenton",
            "Address1":"13 Pumpkin Place",
            "Address2":"Apt A"
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from meeting the defendant",
                        "Comment":""
                    }
                ],
                "CaseNumber":"ATL-16-000100-001"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"btr",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"11:15 AM",
                "AppointmentDate":"19700101T000000.000 GMT"
            },
            {
                "PhoneExt":0,
                "AppointmentLocation":"btr",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"12:15 PM",
                "AppointmentDate":"19700101T000000.000 GMT"
            },
            {
                "PhoneExt":0,
                "AppointmentLocation":"btr",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"03:00 AM",
                "AppointmentDate":"19700101T000000.000 GMT"
            },
            {
                "PhoneExt":0,
                "AppointmentLocation":"btr",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"02:15 PM",
                "AppointmentDate":"19700101T000000.000 GMT"
            },
            {
                "PhoneExt":0,
                "AppointmentLocation":"btr",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"05:30 PM",
                "AppointmentDate":"19700101T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"(500) 600-7000",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"(345) 678-7895",
            "CallLanguage":"",
            "SecondaryMobile":"(800) 600-4567",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"KOHLI",
            "Gender":"M",
            "HairColor":"1",
            "SSN":"111-11-1111",
            "EyeColor":"2",
            "HeightFt":3,
            "InterpreterRequired":"Y",
            "SpokenLanguage":"CHINESE",
            "FirstName":"VIRAT",
            "HeightInches":9,
            "Ethnicity":""
        },
        "SBINumber":"333222K",
        "pyID":"D-861",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Active",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"34536",
            "CurAddressLengthStay":"",
            "City":"trenton",
            "Address1":"test dr",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"34536",
            "CurAddressLengthStay":"",
            "City":"trenton",
            "Address1":"test dr",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":"fdsgfds"
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-ATL-000002-16"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"--TBD--",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"06:30 AM",
                "AppointmentDate":"20161031T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"EN",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"T",
            "LastName":"LION",
            "Gender":"M",
            "HairColor":"1",
            "SSN":"065-75-6757",
            "EyeColor":"1",
            "HeightFt":1,
            "InterpreterRequired":"N",
            "SpokenLanguage":"",
            "FirstName":"SCAR",
            "HeightInches":1,
            "Ethnicity":""
        },
        "SBINumber":"321123A",
        "pyID":"D-900",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Active",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"08536",
            "CurAddressLengthStay":"",
            "City":"SECAUCAS",
            "Address1":"56 STREET",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"08506",
            "CurAddressLengthStay":"",
            "City":"Plainsboro",
            "Address1":"606 Deer Creek Dr",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":true,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-ATL-000006-03"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"BTR",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"04:15 PM",
                "AppointmentDate":"20161029T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"EN",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"LName",
            "Gender":"F",
            "HairColor":"0",
            "SSN":"123-45-6789",
            "EyeColor":"1",
            "HeightFt":1,
            "InterpreterRequired":"",
            "SpokenLanguage":"",
            "FirstName":"Lisa",
            "HeightInches":1,
            "Ethnicity":""
        },
        "SBINumber":"136638C",
        "pyID":"D-920",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Active",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"",
            "CurAddressLengthStay":"",
            "City":"sdafa",
            "Address1":"dsaf",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"34567",
            "CurAddressLengthStay":"",
            "City":"fdgd",
            "Address1":"sd",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":"Last try of inserting SOR, after no try to insert"
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-ATL-000431-02"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"--TBD--",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"05:45 AM",
                "AppointmentDate":"20161029T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"ewr",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"EN",
            "SecondaryMobile":"",
            "Relationship":"16",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"ROBERTS",
            "Gender":"M",
            "HairColor":"1",
            "SSN":"999-99-9999",
            "EyeColor":"2",
            "HeightFt":5,
            "InterpreterRequired":"N",
            "SpokenLanguage":"",
            "FirstName":"VICTOR",
            "HeightInches":0,
            "Ethnicity":""
        },
        "SBINumber":"907658B",
        "pyID":"D-922",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Active",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"08908",
            "CurAddressLengthStay":"",
            "City":"OCEAN CITY",
            "Address1":"437 WEST AVENUE 2ND FLOOR",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"08908",
            "CurAddressLengthStay":"",
            "City":"OCEAN CITY",
            "Address1":"437 WEST AVENUE 2ND FLOOR",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-HUD-000409-05"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-HUD-000398-05"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-HUD-000399-05"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"Atlantic CourtHouse 2",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"03:15 AM",
                "AppointmentDate":"19700101T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"Barone",
            "Gender":"",
            "HairColor":"",
            "SSN":"",
            "EyeColor":"",
            "HeightFt":0,
            "InterpreterRequired":"",
            "SpokenLanguage":"",
            "FirstName":"Debbie",
            "HeightInches":0,
            "Ethnicity":""
        },
        "SBINumber":"89876U",
        "pyID":"D-928",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"Active",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"",
            "CurAddressLengthStay":"",
            "City":"",
            "Address1":"",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"",
            "CurAddressLengthStay":"",
            "City":"",
            "Address1":"",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-HUD-000409-05"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-HUD-000398-05"
            },
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"FO-HUD-000399-05"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"Atlantic CourtHouse 2",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"03:15 AM",
                "AppointmentDate":"19700101T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"Barone",
            "Gender":"",
            "HairColor":"",
            "SSN":"",
            "EyeColor":"",
            "HeightFt":0,
            "InterpreterRequired":"",
            "SpokenLanguage":"",
            "FirstName":"Debbie",
            "HeightInches":0,
            "Ethnicity":""
        },
        "SBINumber":"71113U",
        "pyID":"D-933",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"",
            "CurAddressLengthStay":"",
            "City":"",
            "Address1":"",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"",
            "CurAddressLengthStay":"",
            "City":"",
            "Address1":"",
            "Address2":""
        }
    },
    {
        "Case":[
            {
                "MonitoringCondition":[
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Refrain from getting arrested",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain Active employment",
                        "Comment":""
                    },
                    {
                        "IsCompliant":false,
                        "IsNonCompliant":false,
                        "Condition":"Maintain employment, or actively seek employment",
                        "Comment":""
                    }
                ],
                "CaseNumber":"ATL-06-001187-001"
            }
        ],
        "Interview":[
            {
                "PhoneExt":0,
                "AppointmentLocation":"Atlantic CourtHouse 2",
                "PhoneNumber":"",
                "AppointmentType":"Office Visit",
                "AppointmentTime":"03:15 AM",
                "AppointmentDate":"19700101T000000.000 GMT"
            }
        ],
        "ContactDetails":{
            "SupplementalContactEmail":"",
            "SupplementalContactPerson":"",
            "PrimaryHome":"",
            "SupplementalContactPhone":"",
            "PrimaryMobile":"",
            "CallLanguage":"EN",
            "SecondaryMobile":"",
            "Relationship":"",
            "Email":"",
            "EmergencyPhone":"",
            "NotificationMode":""
        },
        "DemographicInfo":{
            "MiddleName":"",
            "LastName":"BARONE",
            "Gender":"F",
            "HairColor":"1",
            "SSN":"123-45-6789",
            "EyeColor":"1",
            "HeightFt":7,
            "InterpreterRequired":"N",
            "SpokenLanguage":"",
            "FirstName":"RUBY",
            "HeightInches":1,
            "Ethnicity":"H"
        },
        "SBINumber":"569955D",
        "pyID":"D-934",
        "EmpDetails":[
            {
                "Contact":0,
                "PhoneExt":0,
                "ApproxLengthOFEmployment":"",
                "EmploymentName":"",
                "EmpStatus":"",
                "Occupation":"",
                "EmployerPhoneNumber":0
            }
        ],
        "CurrentAddress":{
            "Zip":"08628",
            "CurAddressLengthStay":"3 Years",
            "City":"trenton",
            "Address1":"2 main t",
            "Address2":""
        },
        "AddressDetails":{
            "Zip":"08628",
            "CurAddressLengthStay":"",
            "City":"trenton",
            "Address1":"2 main t",
            "Address2":""
        }
    }
];