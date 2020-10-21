import random
from datetime import datetime
"""
1. Details about the college like address, contact numbers and location
2. Various courses which are currently offered by this college.
3. Placement information regarding this academic year
4. Fee structure for every course
5. Regarding various sports encouraged by college as well as their achievements
6. Details about the internships and projects gained by this college
7. Details regarding the hostel facilities and fee structure per each hostel
8. Information about different activities like music club, cultural club etc.
9. Regarding all the latest notifications from the college.
10. Details about the research projects handled currently.
"""
contact_number =  "08816251333" 


#List of college bot options

def college_bot_main_options():
    print("------------------------")
    print("1. About our college: ")
    print("2. Courses offered in our college: ")
    print("3. Placements in our college: ")
    print("4. Fee structure of our college: ")
    print("5. Sports & NCC: ")
    print("6. Internships and projects: ")
    print("7. Reserch Work: ")
    print("8. Miscelleneous: ")
    print("9. Extracurricuilar Activities: ")
    print("10. Notification: ")
    print("0. For Exit: ")
    print("---------------------")
    try:
        return int(input("enter your choice: "))
    except:
        print("only given choice 1 to 10")
    return 0

# this method gives the information about the college

def about_college():
    address = "Vishnupur, Kovvada Rd, Kovvada, Andhra Pradesh 534202"
    contact_number =  "08816251333" 
    messsage = address + "\n" + " If you have any queries please contact this number "+ contact_number
    return messsage

#this method gives the information about the college

def courses_offered():
    messsage = "we are offering UG,PG courses"
    ug_courses = "B.Tech in CSE ECE EEE MECH CIVIL"
    pg_courses = "M.Tech in CSE ECE EEE MECH CIVIL"
    return messsage + ug_courses + pg_courses + "along with B.Tech and M.Tech we provide MBA also"

#This method gives the fee structure of our college


def fee_structure():
    message = " General college fee for B.Tech is 95,000"
    return message +"\n"+ "If you want to know about NRI fee details contact" + contact_number

#This method gives the placements details of our college

def Placement_offered():
    message = "For 2021 passedout students,major companies like TCS,Capgemni,Amazon,Amdocs,SenecaGlobal,Infosys etc.. "
    return message

#This method gives the sports and NCC details of our college

def sports_and_NCC():
    message = "Our students are encouraged to particpate in different tournments for Cricket,volleyball,BasketBall,Throwball,Badminton etc..We have special sports club to maintain all these."
    return message
#This method gives the projects and internships of our college

def internships_and_projects():
    message = "Every year our students are doing interships at different multinational companies"
    return message

#This method gives the Miscellaneous fees and other factors of our college

def Miscellaneous():
    message = "Apart from academic subjects,our college provides various additional courses like Pega,Game Development,Android App Development etc.. for students career development"
    return message

#This method gives the information about Extracurricular activities of our college like music... etc

def Extracurricular_activities():
    message =  "We have Different clubs to support students interests like Music,Dance,Photography,Astronomy,Coding etc.."
    return message

# method is used to greet the user\

def greet_and_introduce():
    #declare some list of responses
    responses = [ "Hi There! I am Bot. I am here to help you. May I know your name please ?", 
    "Hi It is so nice to be in touch with you. Can you tell me your name ? "
    ]
    #pick a responses at random
    print(random.choice(responses))


#this method is used to find the current time 

def get_timeofday_greeting():
    current_time = datetime.today()
    timeofday_greeting = "Good Morning"
    if current_time.hour <= 12 and current_time.hour  < 17:
        timeofday_greeting = "Good Afternoon"
    elif current_time.hour >= 17 and current_time.hour < 22:
        timeofday_greeting = "Good Evening"
    else:
        timeofday_greeting ="Hi, Thats late"
    return timeofday_greeting

# this message used to print the welcome message

def welcome(name):
    messages = ["Nice to meet you", "Glad that you are here"]
    print(get_timeofday_greeting()+ " " + random.choice(messages) +"\n"+ "hiiii "+ name + " welcome to our college")

#this method gives the information about reserch work and conferences of our college

def Reserch_Work():
    return "we have reserch departemt to spouncer the projects and conferences"

#this method gives the information about new notifications of our college

def Notification():
    return "now we don't have any new notifications"

#this method for good bye message at the time of exit

def good_bye_message():
    print("Thank You for visiting our site")

#this method is for bot functionality

def bot():
    greet_and_introduce()
    name = input("May I know your good name:")
    welcome(name)
    choice = college_bot_main_options()
    while choice != 0:

        #if you choose choice one then it will about_college() method
        if choice == 1:
            print()
            print("-----------About College--------------")
            print(about_college(),end="\n")

        elif choice == 2:
            print()
            print("-----------Courses offered--------------")
            print(courses_offered(),end="\n")

        elif choice == 3:
            print()
            print("----------Plcaments--------------")
            print(Placement_offered(),end="\n")

        elif choice == 4:
            print()
            print("----------Fee Structure--------------")
            print(fee_structure(),end="\n")

        elif choice == 5:
            print()
            print("----------Sports And NCC--------------")
            print(sports_and_NCC(),end="\n")

        elif choice == 6:
            print()
            print("----------Internships and Projects--------------")
            print(internships_and_projects(),end="\n")

        elif choice == 7:
            print()
            print("----------Research Work--------------")
            print(Reserch_Work(),end="\n")

        elif choice == 8:
            print()
            print("----------Miscelaneous--------------")
            print(Miscellaneous(),end="\n")

        elif choice == 9:
            print()
            print("----------Extracurricular_activities--------------")
            print(Extracurricular_activities(),end="\n")

        elif choice == 10:
            print()
            print("----------Notification--------------")
            print(Notification(),end="\n")
        
        choice = college_bot_main_options()
    
    good_bye_message()
        
bot()