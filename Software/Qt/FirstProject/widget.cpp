#include "widget.h"
#include "./ui_widget.h"
#include <QDebug>

Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{
    ui->setupUi(this);
}

Widget::~Widget()
{
    delete ui;
}

void Widget::on_submitButton_clicked()
{
    // qDebug() << "Hello world! clicked ";
    // qDebug() << "Last Name: " << ui->lastNameLineEdit->text();
    // qDebug() << "First Name: " << ui->firstNameLineEdit->text();
    // qDebug() << "Message: " << ui->messageTextEdit->toPlainText();

}

