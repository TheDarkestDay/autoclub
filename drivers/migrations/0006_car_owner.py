# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drivers', '0005_car'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='owner',
            field=models.ForeignKey(default=1, to='drivers.Driver'),
            preserve_default=False,
        ),
    ]
