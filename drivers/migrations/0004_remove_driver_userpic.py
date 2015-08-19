# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drivers', '0003_driver_userpic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='driver',
            name='userpic',
        ),
    ]
