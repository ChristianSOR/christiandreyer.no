// CV data — edit this file to update your CV across the site

export const cv = {
  name: 'Christian Dreyer',
  title: 'Engineer',
  email: 'christian.sorbu@gmail.com',
  location: 'Norway',
  summary:
    'Engineer with a focus on fluid mechanics, thermal systems, and computational methods. Interested in bridging physical intuition with modern software tools.',

  education: [
    {
      institution: 'Norwegian University of Science and Technology (NTNU)',
      degree: 'M.Sc. Mechanical Engineering',
      field: 'Fluid Mechanics & Thermal Energy',
      period: '2020 – 2022',
      notes: 'Thesis on turbulent heat transfer in confined geometries.',
    },
    {
      institution: 'Norwegian University of Science and Technology (NTNU)',
      degree: 'B.Sc. Mechanical Engineering',
      field: 'Energy and Process Engineering',
      period: '2017 – 2020',
      notes: '',
    },
  ],

  experience: [
    {
      company: 'Company Name',
      role: 'Engineer',
      period: '2022 – Present',
      location: 'Norway',
      bullets: [
        'Thermal analysis and simulation of industrial systems',
        'CFD modelling using OpenFOAM and ANSYS Fluent',
        'Python-based post-processing and data analysis pipelines',
      ],
    },
    {
      company: 'Research Group, NTNU',
      role: 'Research Assistant',
      period: '2021 – 2022',
      location: 'Trondheim',
      bullets: [
        'Experimental and numerical investigation of heat exchangers',
        'Developed automated data acquisition scripts',
      ],
    },
  ],

  skills: {
    technical: [
      'CFD (OpenFOAM, Fluent)',
      'Python (NumPy, SciPy, Matplotlib)',
      'MATLAB',
      'FEA (Abaqus, Ansys)',
      'Linux / Bash',
      'Git',
    ],
    domain: [
      'Fluid mechanics',
      'Heat transfer',
      'Thermodynamics',
      'Turbulence modelling',
      'Numerical methods',
    ],
    languages: ['Norwegian (native)', 'English (fluent)'],
  },

  certifications: [
    // { name: 'AWS Certified Solutions Architect', year: '2023' },
  ],
};
