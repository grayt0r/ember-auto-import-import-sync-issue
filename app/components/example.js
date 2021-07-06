import Component from '@glimmer/component';
import { importSync } from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';

export default class ExampleComponent extends Component {
  get whichComponent() {
    // this compiles
    // const module = importSync('ember-auto-import-import-sync-issue/components/nested/one');

    // this also compiles
    // const module = importSync(`ember-auto-import-import-sync-issue/components/nested/one`);

    // this does not compile
    const componentName = 'one';
    const module = importSync(`ember-auto-import-import-sync-issue/components/nested/${componentName}`);

    return ensureSafeComponent(module.default, this);
  }
}
