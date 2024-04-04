#include "MathRace.h"
#include <iostream>

MathRace::MathRace() : mathLevel(1), currentNumberOfStudents(0) {}

void MathRace::setMathLevel(int level)
{
    mathLevel = level;
}

bool MathRace::addStudent(std::string name)
{
    if (currentNumberOfStudents >= MAX_STUDENTS)
    {
        return false; // Cannot add more students, the array is full.
    }

    students[currentNumberOfStudents++] = {name, 0, 0};
    return true;
}

void MathRace::updateScoreAndTime(std::string name, int score, int time)
{
    for (int i = 0; i < currentNumberOfStudents; i++)
    {
        if (students[i].name == name)
        {
            students[i].score = score;
            students[i].time = time;
            return;
        }
    }

    std::cout << "Student not found.\n";
}

void MathRace::showStudents()
{

    std::cout << "Students:\n";
    for (int i = 0; i < currentNumberOfStudents; i++)
    {
        std::cout << "Name: " << students[i].name << ", Score: " << students[i].score << ", Time: " << students[i].time << " seconds\n";
    }
}