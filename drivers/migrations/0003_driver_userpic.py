# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drivers', '0002_auto_20150813_0836'),
    ]

    operations = [
        migrations.AddField(
            model_name='driver',
            name='userpic',
            field=models.ImageField(default='/media/', upload_to=b''),
            preserve_default=False,
        ),
    ]
