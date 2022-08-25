export const isDoable = (company, category) => {
  switch (company) {
    case 'ENDO':
      return endo.includes(category);
    case 'MUSCLESCP':
      return muslceSCP.includes(category);
  }
};

const endo = ['JDM', '<100k', '<150k', 'Muscle', 'Classic', '<100k && Classic'];

const muslceSCP = ['Muscle', 'Classic', '<100k && Classic'];
