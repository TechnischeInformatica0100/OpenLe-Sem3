#ifndef ADDSTUDENTSWIDGET_H
#define ADDSTUDENTSWIDGET_H

#include <QWidget>

QT_BEGIN_NAMESPACE
namespace Ui { class AddStudentsWidget; }
QT_END_NAMESPACE

class AddStudentsWidget : public QWidget
{
    Q_OBJECT

public:
    explicit AddStudentsWidget(QWidget *parent = nullptr);
    ~AddStudentsWidget();

private:
    Ui::AddStudentsWidget *ui;
};

#endif // ADDSTUDENTSWIDGET_H
