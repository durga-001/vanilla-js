student = {}

while True:
    print("\n----Student Manager App-----")
    print("1. Add Student")
    print("2. View Students")
    print("3. Check Result")
    print("4. Exit")

    choice = input("Enter your choice: ")

    # Add student
    if choice == "1":
        name = input("Enter student name: ")
        mark = int(input("Enter marks: "))
        student[name] = mark
        print(f"{name} Successfully Added!")

    # View students
    elif choice == "2":
        if not student:
            print("No student found!")
        else:
            for name, mark in student.items():
                print(name, ":", mark)

    # Check result
    elif choice == "3":
        name = input("Enter student name: ")
        if name in student:
            mark = student[name]
            if mark >= 40:
                print("Pass")
            else:
                print("Fail")
        else:
            print("Student Not Found!")

    # Exit
    elif choice == "4":
        print("Exiting...")
        break

    else:
        print("Invalid input")