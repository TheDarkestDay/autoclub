# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drivers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='driver',
            name='profile',
            field=models.CharField(default='N/A', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='driver',
            name='name',
            field=models.CharField(max_length=10),
            preserve_default=True,
        ),
    ]
