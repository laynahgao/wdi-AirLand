# Generated by Django 2.0.5 on 2018-09-05 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('air', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='picture',
            field=models.ImageField(blank=True, default='default-profile.png', null=True, upload_to='pic_folder/'),
        ),
    ]
