# Generated by Django 4.1 on 2022-09-08 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0002_alter_apiuser_options_alter_apiuser_managers_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apiuser',
            name='apikey',
            field=models.CharField(blank=True, max_length=33),
        ),
    ]
