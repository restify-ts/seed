import * as http from 'http';
import { RootModule } from '@ditsmod/core';
import { ServiceProvider } from '@ditsmod/core';
import { OAS_OBJECT, OpenapiModule } from '@ditsmod/openapi';

import { HelloWorldModule } from './modules/routed/hello-world/hello-world.module';
import { DefaultsModule } from './modules/services/defaults/defaults.module';
import { oasObject } from './oas-object';

const providersPerApp: ServiceProvider[] = [{ provide: OAS_OBJECT, useValue: oasObject }];
const openapiModuleWithParams = OpenapiModule.withParams(providersPerApp);

/**
 * Any one of these options are optional.
 */
@RootModule({
  httpModule: http,
  serverName: 'Node.js',
  serverOptions: {},
  // Here works the application and serve OpenAPI documentation.
  listenOptions: { host: 'localhost', port: 8080 },
  prefixPerApp: '',
  imports: [HelloWorldModule, openapiModuleWithParams],
  exports: [DefaultsModule, openapiModuleWithParams],
  controllers: [],
  providersPerApp: [],
  providersPerMod: [],
  providersPerReq: [],
})
export class AppModule {}
