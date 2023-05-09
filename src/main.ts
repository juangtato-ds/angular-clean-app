import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Hack to run this on stackblitz
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
