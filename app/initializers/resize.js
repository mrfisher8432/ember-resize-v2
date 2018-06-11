import ResizeService from 'ember-resize-v2/services/resize';
import config from '../config/environment';

export function initialize() {
  let application = arguments[1] || arguments[0];

  const { resizeServiceDefaults } = config;
  const { injectionFactories } = resizeServiceDefaults;

  application.register('config:resize-service', resizeServiceDefaults, { instantiate: false });
  application.register('service:resize', ResizeService);
  application.inject('service:resize', 'resizeServiceDefaults', 'config:resize-service');

  injectionFactories.forEach(factory => {
    application.inject(factory, 'resizeService', 'service:resize');
  });
}

export default {
  name: 'resize',
  initialize: initialize
};
