# Generated by Django 2.0.5 on 2018-09-05 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('air', '0002_auto_20180905_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='picture',
            field=models.ImageField(blank=True, default='http://127.0.0.1:8000/media/pic_folder/default-profile.png', null=True, upload_to='pic_folder/'),
        ),
    ]
