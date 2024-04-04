/********************************************************************************
** Form generated from reading UI file 'widget.ui'
**
** Created by: Qt User Interface Compiler version 6.6.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_WIDGET_H
#define UI_WIDGET_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_Widget
{
public:
    QVBoxLayout *verticalLayout;
    QLabel *label;
    QHBoxLayout *horizontalLayout;
    QLabel *label_2;
    QPushButton *addStudentPushButton;
    QHBoxLayout *horizontalLayout_2;
    QLabel *label_3;
    QPushButton *CheckInforPushButton;

    void setupUi(QWidget *Widget)
    {
        if (Widget->objectName().isEmpty())
            Widget->setObjectName("Widget");
        Widget->resize(187, 72);
        verticalLayout = new QVBoxLayout(Widget);
        verticalLayout->setObjectName("verticalLayout");
        label = new QLabel(Widget);
        label->setObjectName("label");

        verticalLayout->addWidget(label);

        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName("horizontalLayout");
        label_2 = new QLabel(Widget);
        label_2->setObjectName("label_2");

        horizontalLayout->addWidget(label_2);

        addStudentPushButton = new QPushButton(Widget);
        addStudentPushButton->setObjectName("addStudentPushButton");

        horizontalLayout->addWidget(addStudentPushButton);


        verticalLayout->addLayout(horizontalLayout);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName("horizontalLayout_2");
        label_3 = new QLabel(Widget);
        label_3->setObjectName("label_3");

        horizontalLayout_2->addWidget(label_3);

        CheckInforPushButton = new QPushButton(Widget);
        CheckInforPushButton->setObjectName("CheckInforPushButton");

        horizontalLayout_2->addWidget(CheckInforPushButton);


        verticalLayout->addLayout(horizontalLayout_2);


        retranslateUi(Widget);

        QMetaObject::connectSlotsByName(Widget);
    } // setupUi

    void retranslateUi(QWidget *Widget)
    {
        Widget->setWindowTitle(QCoreApplication::translate("Widget", "Widget", nullptr));
        label->setText(QCoreApplication::translate("Widget", "Welcome Teachers", nullptr));
        label_2->setText(QCoreApplication::translate("Widget", "Add new students", nullptr));
        addStudentPushButton->setText(QCoreApplication::translate("Widget", "Add Student", nullptr));
        label_3->setText(QCoreApplication::translate("Widget", "Check scores and time", nullptr));
        CheckInforPushButton->setText(QCoreApplication::translate("Widget", "Check information", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Widget: public Ui_Widget {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_WIDGET_H
