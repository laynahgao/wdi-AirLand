# Generated by Django 2.0.5 on 2018-09-06 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('air', '0008_auto_20180906_0629'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='room_amenities',
        ),
        migrations.RemoveField(
            model_name='room',
            name='room_spaces',
        ),
    ]
