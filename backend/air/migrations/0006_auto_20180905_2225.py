# Generated by Django 2.0.5 on 2018-09-05 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('air', '0005_auto_20180905_1736'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
