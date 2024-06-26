import * as classNames from 'classnames';
import { Kebab } from '@console/internal/components/utils';

export const tableColumnClasses = (showNamespace: boolean) => [
  classNames('pf-v5-c-table__action', Kebab.columnClass),
  '', // name
  classNames('pf-m-hidden', 'pf-m-visible-on-xl'), // provider
  classNames('pf-m-hidden', 'pf-m-visible-on-xl'), // support level
  classNames('pf-m-hidden', { 'pf-m-visible-on-lg': showNamespace }), // namespace
  classNames('pf-m-hidden', 'pf-m-visible-on-md'), // boot source
  classNames('pf-m-hidden', 'pf-m-visible-on-md', 'kubevirt-vm-template-actions'), // details button
  classNames('pf-v5-c-table__action', Kebab.columnClass), // actions
];
