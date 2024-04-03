#ifndef MATHRACE_H
#define MATHRACE_H

#include <string>

#define MAX_STUDENTS 200 // Max aantal studenten ingesteld

struct Student
{
    std::string name;
    int score;
    int time;
};

class MathRace
{

private:
    Student students[MAX_STUDENTS];
    int mathLevel;
    int currentNumberOfStudents;

public:
    MathRace();
    void setMathLevel(int level);
    bool addStudent(std::string name);
    void updateScoreAndTime(std::string name, int score, int time);
    void showStudents();
};

#endif // MATHRACE_H