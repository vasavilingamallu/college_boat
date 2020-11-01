name_of_the_user="";
        contact_number = "08816251333";
        address = "Vishnupur, Kovvada Rd, Kovvada, Andhra Pradesh 534202";
        var reply = "";
        var Menu_data = {
            about_college: "Vishnu Institute of Technology, was established in 2008 by Sri Vishnu Educational Society (SVES)," +
                "a leading educational trust to promote quality education, under the aegis of eminent philanthropist Padma Bhushan Dr. B.V.Raju (Late)." +
                "The institute is approved by AICTE and is permanently affiliated to JNTUK, Kakinada. It is also accredited by NBA and NAAC 'A++' with 3.51 CGPA.",
            courses_offered: "1. Computer Science & Engineering." +
                "2. Electronics & Communication Engineering." +
                "3. Electrical & Electronics Engineering." +
                "4. Mechanical Engineering." +
                "5. Information Technology." +
                "6. Civil Engineering." +
                "7. Basic Sciences" +
                "8. Business Administration",
            fee_structure: address + "\n" + "General college fee for B.Tech is 95,000 If you want to know about NRI fee details contact" + contact_number,
            placement_offered: "For 2021 passedout students,major companies like TCS,Capgemni,Amazon,Amdocs,SenecaGlobal,Infosys etc.. ",
            sports_and_NCC: "Our students are encouraged to particpate in different tournments for Cricket,volleyball,BasketBall," +
                "Throwball,Badminton etc..We have special sports club to maintain all these.",
            internships_and_projects: "Every year our students are doing interships at different Multinational companies",
            research: "We have a separate research department to sponsor the prestigious projects like R&D,DRDO etc. We have Innovation centre to enhance students skills and to implement new ideas",
            miscellaneous: "Apart from academic subjects,our college provides various additional courses like Pega,Game Development,Android App Development etc.. for students career development",
            Extracurricular_activities: "We have Different clubs to support students interests like Music,Dance,Photography,Astronomy,Coding etc..",
            Notification: "Now we don't have any new notifications",

            display_about_college: function () {
                $('.chat-body').append('<p class="chat-reply">About Our College </p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.about_college + '</a></p><br>');
            },
            display_courses_offered: function () {
                $('.chat-body').append('<p class="chat-reply">About Courses Offered</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.courses_offered + '</p><br>');
            },
            display_fee_structure: function () {
                $('.chat-body').append('<p class="chat-reply">About Fee Structure</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.fee_structure + '</p><br>');
            },
            display_placements_offered: function () {
                $('.chat-body').append('<p class="chat-reply">About Placements Offered</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.placement_offered + '</p><br>');
            },
            display_sports_NCC: function () {
                $('.chat-body').append('<p class="chat-reply">Sports and NCC</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.sports_and_NCC + '</p><br>');
            },
            display_internships_and_projects: function () {
                $('.chat-body').append('<p class="chat-reply">About Internships&projects</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.internships_and_projects + '</p><br>');
            },
            disaplay_miscellaneous: function () {
                $('.chat-body').append('<p class="chat-reply">About Miscellaneous Fee</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.miscellaneous + '</p><br>');
            },
            display_Extracurricular_activities: function () {
                $('.chat-body').append('<p class="chat-reply">About Extracurricular Activities</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.Extracurricular_activities + '</p><br>');
            },
            display_Notification: function () {
                $('.chat-body').append('<p class="chat-reply">About Notification</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.Notification + '</p><br>');
            },
            display_research: function () {
                $('.chat-body').append('<p class="chat-reply">About Reserch</p><br>');
                $('.chat-body').append('<p class="chat-send">' + Menu_data.research + '</p><br>');
            }

        };
        $("#msg").keyup(function(event) {
            if (event.keyCode === 13) {
                $(".btn").click();
            }
        });
        function show_menu_buttons() {
            return '<button type="button" class="about_college">About College</button>' +
                '<button type="button" class="Courses_offered">Courses offered </button>' +
                '<button type="button" class="placements">Placements</button>' +
                '<button type="button" class="Fee">Fee structure</button>' +
                '<button type="button" class="sports">Sports & NCC</button>' +
                '<button type="button" class="projects">Internships&projects</button>' +
                '<button type="button" class="research">Reserch Work</button>' +
                '<button type="button" class="mfee">Miscelleneous</button>' +
                '<button type="button" class="EActivities">Extracurricuilar Activities</button>' +
                '<button type="button" class="notification">Notification:</button>';
        }

        $('.openChatBtn').click(function () {
            document.querySelector(".openChat").style.display = "block";
        });
        $('.close').click(function () {
            document.querySelector(".openChat").style.display = "none";
        });
        var greetings = true;
        $(document).ready(function () {
            $('.btn').click(function () {
                reply = read_message();
                $('#msg').val("");
                if (greetings) {
                    name_of_the_user = reply;
                    $('.chat-body').append('<p class="chat-reply">' + reply + '</p><br>');
                    $('.chat-body').append('<p class="chat-send">' + greeting_message() + '</p><br>');
                    $('.chat-body').append('<p class="chat-send">' + get_time_greet() + " " + reply + '</p><br>');
                    $('.chat-body').append('<p class="chat-send"> What information do you want from me ? </p><br>');
                    $('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
                }
                // // if (ignore_case(reply, "YES")) {
                //     $('.chat-body').append('<p class="chat-reply">' + reply + '</p>');
                //     $('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
                // } else if (ignore_case(reply, "NO")) {
                //     $('.chat-body').append('<p class="chat-reply">' + reply + '</p>');
                //     $('.chat-body').append('<p class="chat-send">This chat bot is made for college</p>');
                //     $('.chat-body').append('<p class="chat-send">sorry for inconvinience....please use valid keywords as shown given web site</p>');
                // }
                if(!greetings){
                    if (ignore_case(reply, "About college")) {
                        Menu_data.display_about_college();
                    } else if (ignore_case(reply, "Courses offered")) {
                        Menu_data.display_courses_offered();
                    } else if (ignore_case(reply, "Placements")) {
                        Menu_data.display_placements_offered();
                    } else if (ignore_case(reply, "Fee structure")) {
                        Menu_data.display_fee_structure();
                    } else if (ignore_case(reply, "Sports and NCC")) {
                        Menu_data.display_sports_NCC();
                    } else if (ignore_case(reply, "Internships and projects")) {
                        Menu_data.display_internships_and_projects();
                    } else if (ignore_case(reply, "Research Work")) {
                        Menu_data.display_research();
                    } else if (ignore_case(reply, "Miscelleneous")) {
                        Menu_data.disaplay_miscellaneous();
                    } else if (ignore_case(reply, "Extracurricular Activities")) {
                        Menu_data.display_Extracurricular_activities();
                    } else if (ignore_case(reply, "Notification")) {
                        Menu_data.display_Notification();
                    }
                    else if (ignore_case(reply, 'Menu')) {
                        $('.chat-body').append('<p class="chat-reply">' + reply + '</p>');
                        $('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');
                    }
                    else{
                        $('.chat-body').append('<p class="chat-reply">' + reply + '</p>');
                        $('.chat-body').append('<p class="chat-send">' + name_of_the_user+" sorry! for your inconvinince plsease enter valid keyword or use button Menu to interact with Bot"+'</p>');
                        $('.chat-body').append('<p class="chat-send">' + show_menu_buttons() + '</p>');   
                    }
                }

                
                    $('.about_college').click(function () {
                        Menu_data.display_about_college();
                    });
                    $('.Courses_offered').click(function () {
                        Menu_data.display_courses_offered();
                    });
                    $('.placements').click(function () {
                        Menu_data.display_placements_offered();
                    });
                    $('.Fee').click(function () {
                        Menu_data.display_fee_structure();
                    });
                    $('.sports').click(function () {
                        Menu_data.display_sports_NCC();
                    });
                    $('.projects').click(function () {
                        Menu_data.display_internships_and_projects();
                    });
                    $('.research').click(function () {
                        Menu_data.display_research();
                    });
                    $('.mfee').click(function () {
                        Menu_data.disaplay_miscellaneous();
                    });
                    $('.EActivities').click(function () {
                        Menu_data.display_Extracurricular_activities();
                    });
                    $('.notification').click(function () {
                        Menu_data.display_Notification();
                    });
                greetings = false;
            });

        });

        function ignore_case(str, c_str) {
            return str.toUpperCase() == c_str.toUpperCase() || str.toLowerCase() == c_str.toLowerCase();
        }

        function greeting_message() {
            greeting_messages = ["I am here to help you with college information", "A very warm welcome to our college i will help you to give information about our college"]
            index = Math.floor(Math.random() * 2);
            return greeting_messages[index];
        }

        function get_time_greet() {
            var d = new Date();
            var hour = d.getHours();
            var msg;
            if (hour < 12)
                msg = "Good Morning";
            if (hour > 12 && hour <= 17)
                msg = "Good Afternoon";
            else if (hour > 17 && hour <= 21)
                msg = "Good Evening";
            else
                msg = "hey it's late Night";
            return msg;
        }

        function read_message() {
            return document.getElementById('msg').value;
        }