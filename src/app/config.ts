import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';


export const BASE_URL = environment.server.baseUrl;
export const TOKEN = new InjectionToken('TOKEN');
