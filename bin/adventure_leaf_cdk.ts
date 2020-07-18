#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AdventureLeafCdkStack } from '../lib/adventure_leaf_cdk-stack';

const app = new cdk.App();
new AdventureLeafCdkStack(app, 'AdventureLeafCdkStack');
