export declare const error: (...args: any[]) => Error;

export declare const exitOnNotDefined: (code: string) => void;

export declare const checkFunction: (subject: Function, name: string) => void;

export declare class Errors {
  constructor({}: {
    factory?: any;
    notDefined?: any;
    i18n?: any;
    prefix?: any;
    codePrefix?: string;
    messagePrefix?: string;
    filterStackSources?: any[];
  });
  i18n: (__: any) => Errors;
  E: (code: string, preset?: any, factory?: any) => Errors;
  TE: (code: string, message?: string) => Errors;
  _decorateCode: (code: string) => string;
  _create: (code: string, ...args: any[]) => Errors;
  error: (...args: any[]) => any;
}
