import { InjectionToken } from '@angular/core';
import { APISettings } from '../interfaces/api-settings';

export const APIToken = new InjectionToken<APISettings>('API');
