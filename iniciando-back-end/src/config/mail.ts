interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'lccoronel7.larg.page@larg.page',
      name: 'Diego da Rocketseat',
    },
  },
} as IMailConfig;
