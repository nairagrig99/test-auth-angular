export enum RegExpEnum {
  REG_EXP_FOR_PSW = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}',
  REG_EXP_FOR_NAME = '^[a-zA-Z][a-zA-Z0-9_]{3,29}$'
}
