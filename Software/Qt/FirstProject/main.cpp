#include "widget.h"

#include <QApplication>
#include "addstudentswidget.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    // AddStudentsWidget addStudentsWindow;
    // addStudentsWindow.show();

    Widget w;
    w.show();
    return a.exec();
}
