Warning: truncated output (original token count: 328767)
... 266491 bytes omitted ...

'use strict';

const COURSES={
 'site-carpentry-v1-4':{
  id:'site-carpentry-v1-4',name:'Site Carpentry',standard:'ST0264',version:'1.4',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[['S1','Follow health and safety procedures'],['S2','Use PPE, RPE and LEV correctly'],['K1','Health and safety legislation'],['K2','Safety control equipment'],['K3','Safe systems of work'],['B1','Prioritise health and safety']]},
   {n:2,title:'Standards, Regulations & Sustainability',ksbs:[['S3','Follow environmental procedures'],['S4','Follow industry regulations'],['K4','Sustainable working practices'],['K7','Building standards and regulations'],['K40','Employment and business basics'],['B2','Work sustainably']]},
   {n:3,title:'Preparation & Drawings',ksbs:[['S5','Prepare a safe working area'],['S6','Interpret drawings and specifications'],['K5','Building construction principles'],['K6','Digital design principles'],['K8','Read drawings and specifications'],['B4','Develop skills and knowledge']]},
   {n:4,title:'Estimates & Materials',ksbs:[['S7','Estimate materials and cutting lists'],['S16','Size timber from tables'],['K9','Timber types and properties'],['K10','Timber decay and repairs'],['K12','Material estimating techniques']]},
   {n:5,title:'Tools & Equipment',ksbs:[['S9','Use hand tools safely'],['S10','Use power tools safely'],['S11','Maintain and sharpen hand tools'],['K14','Hand tool techniques'],['K15','Tool maintenance techniques'],['K17','Power tool techniques']]},
   {n:6,title:'Jigs & Levels',ksbs:[['S12','Produce woodworking jigs'],['S19','Use laser levels'],['K16','Jig construction techniques'],['K29','Laser level operation']]},
   {n:7,title:'Communication & Teamwork',ksbs:[['S8','Communicate using construction terminology'],['S13','Support wellbeing'],['K13','Construction communication'],['K18','Effective teamwork'],['K19','Equality, diversity and inclusion'],['K20','Mental health awareness'],['B3','Promote inclusion'],['B5','Work effectively in teams']]},
   {n:8,title:'Structural & Partition Walls',ksbs:[['S14','Construct structural and partition walls'],['S15','Install structural fixings'],['K22','Structural fixings and timber sizing']]},
   {n:9,title:'Floor Joists & Coverings',ksbs:[['S14','Install floor joists and coverings'],['K27','Floor joist installation techniques']]},
   {n:10,title:'Service Encasement & Cladding',ksbs:[['S17','Install service encasements and cladding'],['K28','Encasement and cladding techniques']]},
   {n:11,title:'Wall & Floor Units',ksbs:[['S17','Install wall and floor units'],['S20','Form timber connections'],['K11','Carpentry products and ironmongery'],['K28','Wall and floor unit installation']]},
   {n:12,title:'Stairs, Handrails & Spindles',ksbs:[['S14','Construct straight flights of stairs'],['S17','Install handrails and spindles'],['K21','Measure and fit stair components'],['K27','Stair installation techniques'],['K28','Handrail and spindle installation']]},
   {n:13,title:'Doors & Windows',ksbs:[['S17','Install internal and external doors'],['S21','Measure, cut, hinge and recess doors'],['K28','Door installation techniques']]},
   {n:14,title:'Skirting & Architrave',ksbs:[['S17','Install skirting and architraves'],['S22','Splice and scribe timber'],['K24','Timber splicing and scribing'],['K28','Skirting and architrave installation']]},
   {n:15,title:'Roofing',ksbs:[['S18','Construct pitched and trussed roofs'],['K25','Pitched roof installation'],['K26','Warm and cold flat roof systems']]}
  ]
 },
 'bricklayer-st0095-v1-2':{
  id:'bricklayer-st0095-v1-2',name:'Bricklayer',standard:'ST0095',version:'1.2',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[['S1','Comply with health and safety regulations, standards, and guidance.'],['S2','Identify and use personal protective equipment (PPE).'],['K1','Health and safety regulations, CoSHH, fire safety, asbestos, manual handling, signage, working at height, electrical safety, RPE and dust suppression.'],['K2','Safety control equipment and correct use of PPE.'],['K3','Safe systems of work including inductions, toolbox talks, risk assessments, method statements and hazard identification.'],['B1','Put health, safety and wellbeing first.']]},
   {n:2,title:'Standards, Regulations & Sustainability',ksbs:[['S3','Comply with environmental and sustainability requirements and segregate resources for reuse, recycling and disposal.'],['S4','Comply with industry regulations, standards, and guidance.'],['K4','Environmental impact, efficient resource use, recycling, reuse, contamination prevention and safe waste disposal.'],['K5','Sustainability considerations including thermal qualities, airtightness and ventilation.'],['K7','British Standards, building regulations and warranty provider standards.'],['B2','Consider the environment when using resources and carrying out processes.']]},
   {n:3,title:'Preparation & Drawings',ksbs:[['S5','Read and interpret information from drawings and specifications.'],['S7','Prepare and maintain a safe working area.'],['K10','Interpret and extract relevant information from drawings and specifications.'],['K9','Modern methods of construction including precast components, profiles, frame and cladding systems and masonry supports.'],['K11','Basic principles of digital design and modelling systems.']]},
   {n:4,title:'Estimates & Materials',ksbs:[['S6','Estimate and select bricks, blocks, mortar, wall ties, insulation and other required resources.'],['K8','Materials and characteristics including masonry units, mortar, DPC, ties, lintels, fire stopping and insulation.'],['K6','Building principles including foundations, walls, roofs, floors, services, insulation and moisture, air and fire protection.'],['K12','Simple resource estimation for masonry units, mortar, ties, DPCs, trays and lintels.']]},
   {n:5,title:'Tools & Equipment',ksbs:[['S8','Select and use hand tools.'],['S9','Maintain and store hand tools.'],['K13','Use, maintenance and storage of bricklaying hand tools.'],['K14','Use and limitations of disc cutters, mixers and drills.'],['B1','Put health, safety and wellbeing first.']]},
   {n:6,title:'Cavity Walling',ksbs:[['S10','Set out a brick and block cavity wall with an opening to given tolerances.'],['S11','Construct a cavity wall with return and opening, lintel, soldiers, sill, closure, insulation, fire stopping, cavity tray, DPC and weep holes.'],['K21','Cavity wall setting out using openings, levels, profiles, gauge rods and squares.'],['K22','Cavity wall construction, openings, ties, insulation, DPCs, trays, weep holes, lintels and fire stopping.'],['B3','Take ownership of given work.']]},
   {n:7,title:'Jointing & Mixing Mortar',ksbs:[['S12','Apply half round, flush, weather struck and recessed joint finishes.'],['S14','Gauge and hand mix mortar to ratio.'],['K17','Joint finishes: half round, flush, weather struck and recessed.'],['K19','Principles of expansion joints.'],['K20','Mortar ratios, silos, pre-mixed mortar, gauging, hand and mechanical mixing.']]},
   {n:8,title:'Solid Walling',ksbs:[['S13','Set out and construct a simple brick solid wall with capping.'],['K15','English, Flemish, garden wall and broken bonds.'],['K16','Solid wall setting out, construction and capping methods.'],['K18','Decorative walling and piers including projecting and contrasting brick, piers and banding.'],['K23','Brick-on-edge and soldier course setting out and construction.']]},
   {n:9,title:'Repair & Protection',ksbs:[['S16','Carry out a simple repair such as replacing damaged bricks.'],['K24','Construction defects and repair methods.'],['S17','Protect materials and finished work.'],['K25','Protection from frost, water and construction damage.']]},
   {n:10,title:'Communication & Teamwork',ksbs:[['S18','Communicate verbally using construction terminology.'],['S20','Apply team-working principles to own work and the wider build team.'],['K26','Verbal communication techniques and construction terminology.'],['K27','Principles of good team working.'],['B6','Team-focus to meet team goals and consider the wider build team.'],['B5','Seek learning and development opportunities.']]},
   {n:11,title:'EDI & Wellbeing',ksbs:[['S19','Follow equity, diversity and inclusion guidance.'],['S21','Identify wellbeing support available to self and others.'],['K28','Inclusion, equity and diversity in the workplace.'],['K31','Mental and physical wellbeing and how to access support.'],['B4','Contribute to an inclusive and diverse culture.']]},
   {n:12,title:'Raked Walling & Cutting',ksbs:[['S22','Construct a brick wall with a raking cut, such as a gable or garden wall.'],['S15','Measure and cut bricks and blocks using hand tools to given tolerances.'],['K30','Setting out and construction techniques for brick walls with raking cuts.'],['K29','Methods of cutting bricks and blocks using hand tools.']]}
  ]
 },
 'architectural-joiner-st0264-v1-4':{
  id:'architectural-joiner-st0264-v1-4',name:'Architectural Joiner',standard:'ST0264',version:'1.4',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[['S1','Comply with health and safety regulations, standards and guidance.'],['S2','Identify and use PPE, RPE, dust suppression and LEV.'],['K1','Health and safety regulations, CoSHH, fire safety, asbestos awareness, manual handling, PUWER, electrical safety and workplace hazards.'],['K2','Selection and use of PPE, RPE, LEV and other safety control equipment.'],['K3','Safe systems of work including inductions, toolbox talks, risk assessments, method statements and hazard identification.'],['B1','Put health, safety and wellbeing first.']]},
   {n:2,title:'Standards, Regulations & Sustainability',ksbs:[['S3','Comply with environmental and sustainability requirements and segregate resources for reuse, recycling and disposal.'],['S4','Comply with relevant industry regulations, standards and guidance.'],['K4','Efficient resource use, recycling, reuse, waste disposal and sustainable forestry.'],['K7','British standards, building regulations and warranty-provider standards relevant to joinery.'],['K40','Employment types, small-business start-up principles and tax.'],['B2','Consider the environment when using resources and carrying out processes.']]},
   {n:3,title:'Preparation & Drawings',ksbs:[['S5','Prepare and maintain a safe working area.'],['S6','Interpret and use information from drawings and specifications.'],['K5','Building principles and modern construction methods relevant to joinery installation and manufacture.'],['K6','Basic principles of digital design and modelling systems.'],['K8','Interpret and extract relevant information from drawings and specifications.'],['B4','Seek learning and development opportunities.']]},
   {n:4,title:'Estimates & Materials',ksbs:[['S7','Estimate required materials and produce an accurate cutting list.'],['K9','Characteristics and uses of hardwood, softwood, boards, laminated timber and carcassing.'],['K10','Timber moisture, wet rot, dry rot, insect attack and suitable repair methods.'],['K12','Estimate timber lengths, fixings and other materials and produce cutting lists.']]},
   {n:5,title:'Tools & Equipment',ksbs:[['S9','Select, use and store joinery hand tools.'],['S10','Select, use and store portable power tools.'],['S11','Maintain and sharpen hand tools.'],['K14','Use and storage of chisels, planes, saws, hammers, squares, bevels, gauges and levels.'],['K15','Hand-tool maintenance and sharpening techniques.'],['K17','Use and storage of circular saws, drills, planers, routers, sanders, multifunction tools and nail guns.']]},
   {n:6,title:'Jigs and Levels',ksbs:[['S12','Produce accurate jigs for repeatable joinery work.'],['K16','Jig design and production techniques.'],['K29','Use, calibrate and store laser levels safely and accurately.']]},
   {n:7,title:'Communication & Teamwork',ksbs:[['S8','Communicate verbally using appropriate construction and joinery terminology.'],['S13','Identify wellbeing support available to self and others.'],['K13','Effective verbal communication techniques and construction terminology.'],['K18','Principles of effective team working.'],['K19','Inclusion, equity and diversity in the workplace.'],['K20','Mental and physical wellbeing and how to access support.'],['B3','Contribute to an inclusive and diverse culture.'],['B5','Work with the wider team to meet shared goals.']]},
   {n:8,title:'Setting Out',ksbs:[['S23','Produce setting-out details and rods and mark out timber joinery products accurately.'],['K32','Setting-out and marking-out techniques and the effects of marking errors on joinery manufacture.']]},
   {n:9,title:'Joints and Connections',ksbs:[['S24','Produce dovetail, bridle, mortise-and-tenon and halving joints.'],['S25','Form joinery connections using dowels, biscuits, staples and adhesives.'],['K11','Uses of mastics, preservatives, wood fillers, plastics and ironmongery in joinery products.'],['K33','Types and production methods for dovetail, mortise-and-tenon, bridle and halving joints.'],['K35','Joinery connection methods using dowels, biscuits, staples and adhesives.']]},
   {n:10,title:'Windows',ksbs:[['S26','Manufacture and assemble a timber window with casement, glazing rebates and associated ironmongery.'],['K34','Manufacture and assembly techniques for standard right-angled timber windows.']]},
   {n:11,title:'Door Frames & Linings',ksbs:[['S27','Manufacture and assemble timber door frames and linings.'],['K36','Manufacture and assembly techniques for timber door frames and linings.'],['K39','Select and install appropriate ironmongery for frames and linings.']]},
   {n:12,title:'Staircases',ksbs:[['S27','Manufacture and assemble a straight timber staircase.'],['S28','Manufacture staircase spindles and balustrade components as second-fix joinery products.'],['K36','Manufacture and assembly techniques for straight timber staircases.'],['K37','Second-fix manufacture techniques relevant to staircase components, mouldings and associated timber products.']]},
   {n:13,title:'Timber Doors',ksbs:[['S28','Manufacture and assemble timber doors as second-fix joinery products.'],['S29','Fit door locks, handles, hinges and latches accurately.'],['K37','Manufacture and assembly techniques for timber doors.'],['K30','Requirements of compliant fire-door assemblies.']]},
   {n:14,title:'Wall & Floor Units',ksbs:[['S28','Manufacture and assemble timber wall and floor units.'],['K37','Manufacture and assembly techniques for timber wall and floor units.'],['K38','Finish manufactured timber products by sanding, painting, waxing, polishing, oiling or applying preservative.']]},
   {n:15,title:'Machinery',ksbs:[['S30','Inspect, prepare and operate fixed joinery machinery safely.'],['K31','Safe inspection, preparation and operation of crosscut saws, band saws, planers, thicknessers and mortisers.']]}
  ]
 }
 , 'property-maintenance-operative-st0171-v1-1':{
  id:'property-maintenance-operative-st0171-v1-1',name:'Property Maintenance Operative',standard:'ST0171',version:'1.1',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[
    ['K3','Health and safety regulations, relevance to the occupation and the operative’s responsibilities. Health and Safety at Work Act Control of Substances Hazardous to Health (COSHH). Manual handling. Personal Protective Equipment (PPE). Working at height. Safety equipment: guards, signage, fire extinguishers.'],
    ['K4','Risks and hazards associated with property maintenance activities, and their mitigation using risk assessment.'],
    ['S3','Comply with statutory health and safety regulations and requirements.'],
    ['S4','Comply with risk assessments, and organise the workplace, to safeguard themselves and the property.'],
    ['B2','Prioritise and promote health and safety.']
   ]},
   {n:2,title:'Planning & Preparing Maintenance Work',ksbs:[
    ['K1','The principles and requirements of planned preventative maintenance (PPM) and reactive maintenance.'],
    ['K2','The range of building types and characteristic uses, their common methods of construction and typical defects, and the impact that property maintenance operations may have on building safety.'],
    ['K6','Importance of establishing a safe and tidy work area, using appropriate access equipment, providing protection to adjacent areas, and consideration for the safety of other property users.'],
    ['S1','Plan the sequence of work required to carry out routine property maintenance operations.'],
    ['S6','Uses safe working practices when carrying out property maintenance tasks including the use of PPE, signage, barriers, access equipment and ensuring work area is prepared and reinstated.'],
    ['B3','Takes responsibility for completion of own work.']
   ]},
   {n:3,title:'Regulations, Materials & Technical Information',ksbs:[
    ['K5','Key regulatory and legislative requirements (including building regulations, the building safety bill, and BSI Flex 8670), and an awareness of how these apply to varying property types, and their impact on property maintenance operatives’ responsibilities.'],
    ['K23','Technical sources of information and data used in property maintenance operations.'],
    ['K30','The rights and responsibilities of an employee and employer and an awareness of equality, diversity and inclusion, safeguarding and prevent.'],
    ['S2','Identify and select the appropriate materials and components for property maintenance tasks, ensuring these are compliant with relevant regulatory requirements and manufacturer’s specifications.'],
    ['S5','Comply with key regulatory and legislative requirements, including building regulations.'],
    ['B5','Contribute to equality, diverse and inclusive culture.']
   ]},
   {n:4,title:'Tools, Equipment & Safe Isolation',ksbs:[
    ['K7','Common hand and power tools and equipment used in routine property maintenance tasks and how to use safely.'],
    ['K8','The common components of electrical and electronic systems, how to safely isolate electrical supplies and the procedures for correctly reporting identified faults.'],
    ['S7','Select, and use work tools and equipment for property maintenance tasks, applying all safeguards, and ensuring the correct functioning of equipment.'],
    ['S8','Safely isolate and secure electrical or electronic supplies prior to performing property maintenance operations.']
   ]},
   {n:5,title:'Emergency Systems & Routine Testing',ksbs:[
    ['K9','The common forms of emergency equipment and signage, their importance within buildings and the preventative and possible corrective maintenance required.'],
    ['K31','The purpose of continuing professional development (CPD) and how this supports them to understand their limits for personal authority and competence.'],
    ['S9','Apply and implement routine emergency system checks, testing and routine maintenance, identifying and reporting faults as required.'],
    ['S25','Escalates issues beyond their level of competence and authority.'],
    ['B6','Seek learning and development opportunities.']
   ]},
   {n:6,title:'Plumbing & Drainage Repairs',ksbs:[
    ['K10','The principles and components of plumbing systems, how to safely isolate, store and drain down water supplies to diagnose faults and clear blockages.'],
    ['K11','The principles and components of common above and below ground drainage systems, the issues that poor drainage can have on properties and how to diagnose faults and clear blockages.'],
    ['K12','The principles of good water hygiene to preserve and maintain the health of water systems within buildings and how these are checked and legally certified to minimise water hygiene and legionella risks.'],
    ['S10','Perform maintenance and repairs to plumbing systems, including fault identification, safe isolation of supply, replacing components and clearing blockages.'],
    ['S11','Perform maintenance and repairs to external drainage systems, including clearing blockages and replacing components.']
   ]},
   {n:7,title:'Environmental & Energy Systems',ksbs:[
    ['K13','The principles and components of common environmental and energy management systems and their methods of operation.'],
    ['K25','The purpose of quality assurance and continuous improvement and how these improve commonly occurring faults or inefficiencies.'],
    ['S12','Perform maintenance and repairs to environmental and energy management systems, including fault identification, safe isolation of supply, replacing components.'],
    ['S21','Inspect own work, ensuring it is delivered to the given specifications.']
   ]},
   {n:8,title:'Windows, Doors & Glazing Repairs',ksbs:[
    ['K14','The common defects found in windows, doors, and glazing systems, the characteristics, uses and limitations of the materials and components used within them, and how these are used to meet statutory regulations.'],
    ['K27','Methods of communication and when to use industry terminology to match the style to the audience.'],
    ['K28','The importance of customer service to their organisation, how to provide feedback to ensure customers are informed of property maintenance.'],
    ['S13','Use carpentry and joinery skills to perform repairs to windows, doors and glazing units, and their associated fittings.'],
    ['S24','Provide customer feedback whilst maintaining customer service.']
   ]},
   {n:9,title:'Plastering, Painting & Decorating Repairs',ksbs:[
    ['K15','The common types of materials and processes used to prepare, repair and finish plaster defects.'],
    ['K16','The common causes of painting and decorating defects, and the types of materials, chemicals and processes used in painting and decorating activities. How paints and chemicals are stored and disposed of safely.'],
    ['K26','Environmental regulations and requirements: Environmental Protection Act, safe disposal of waste, minimising waste (re-use and re-cycle), waste contractors permit, energy efficiency, and contribution to net zero outcomes.'],
    ['S14','Perform repairs to plastered surfaces, including surface preparation, fixing and mixing materials and compounds.'],
    ['S15','Use painting and decorating skills to prepare surfaces for decoration, apply paint using brushes and rollers, and complete sealing activities using gun appliances.']
   ]},
   {n:10,title:'Wall & Floor Finishes',ksbs:[
    ['K17','The common causes of tiling defects and the types of materials and processes used in tiling activities.'],
    ['K18','The common causes of flooring defects and the types of materials and processes used in flooring repairs.'],
    ['S16','Perform tiling repairs, including setting out, surface preparation and cutting around obstacles.'],
    ['S17','Perform flooring repairs, including setting out, surface preparation and cutting around obstacles.']
   ]},
   {n:11,title:'Masonry Repairs',ksbs:[
    ['K19','The common forms of masonry and damp proofing defects, materials and processes used in masonry repair activities: Mixing mortars, replacing defective pointing, laying and bonding of masonry, coping repairs and damp-proofing.'],
    ['K29','The roles and responsibilities of property maintenance operatives and the purpose and inter-dependencies of other trade operatives.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.']
   ]},
   {n:12,title:'Roofing Repairs',ksbs:[
    ['K20','The common types of roof structures, defects and the types of materials and processes used in remedial and temporary repair.'],
    ['K25','The purpose of quality assurance and continuous improvement and how these improve commonly occurring faults or inefficiencies.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.'],
    ['S21','Inspect own work, ensuring it is delivered to the given specifications.'],
    ['B4','Team focuses to meet goals.']
   ]},
   {n:13,title:'Fencing & Railing Repairs',ksbs:[
    ['K21','The common types of fencing and railing systems, their typical defects, and the types of materials and processes used in repairs.'],
    ['K27','Methods of communication and when to use industry terminology to match the style to the audience.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.'],
    ['S23','Use and adapt communication methods for different situations and when, working with colleagues and stakeholders, using industry terminology as appropriate.']
   ]},
   {n:14,title:'Groundwork & Landscaping Repairs',ksbs:[
    ['K22','The common types of groundwork and landscaping systems, their typical defects and the types of materials and processes used in remedial repair.'],
    ['K26','Environmental regulations and requirements: Environmental Protection Act, safe disposal of waste, minimising waste (re-use and re-cycle), waste contractors permit, energy efficiency, and contribution to net zero outcomes.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.'],
    ['S22','Comply with environmental regulations and procedures. Segregate resources for reuse, recycling and disposal.'],
    ['B1','Prioritise and promote sustainable working practices.']
   ]},
   {n:15,title:'Quality, Reporting & Professional Practice',ksbs:[
    ['K24','The methods to record information and data via written and digital means and the importance of data protection and security.'],
    ['K25','The purpose of quality assurance and continuous improvement and how these improve commonly occurring faults or inefficiencies.'],
    ['K31','The purpose of continuing professional development (CPD) and how this supports them to understand their limits for personal authority and competence.'],
    ['S19','Select and use technical literature and other sources of information and data to address property maintenance problems.'],
    ['S20','Record and report information, using digital and written techniques.']
   ]}
  ]
 }
, 'trowel-nvq-6570-05':{
  id:'trowel-nvq-6570-05',name:'Level 3 NVQ Diploma in Trowel Occupations',standard:'6570-05',version:'1.1',level:'3',nvqUnits:true,
  assignments:[
   {n:1,unit:'102',glh:17,optional:false,title:'Conforming to general health, safety and welfare in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4 • 1.5 • 1.6 • 1.7 • 1.8',LO2:'2.1 • 2.2 • 2.3 • 2.4 • 2.5 • 2.6',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5 • 3.6 • 3.7 • 3.8',LO4:'4.1 • 4.2 • 4.3',LO5:'5.1 • 5.2'},ksbs:[['LO1','Comply with all workplace health, safety and welfare legislation requirements.'],['LO2','Recognise hazards associated with the workplace that have not been previously controlled and report them in accordance with organisational procedures.'],['LO3','Comply with organisational policies and procedures to contribute to health, safety and welfare.'],['LO4','Work responsibly to contribute to workplace health, safety and welfare whilst carrying out work in the relevant occupational area.'],['LO5','Comply with and support all organisational security arrangements and approved procedures.']]},
   {n:2,unit:'234',glh:120,optional:false,title:'Erecting masonry cladding in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting masonry cladding.'],['LO2','Know how to comply with relevant legislation and official guidance when erecting masonry cladding.'],['LO3','Maintain safe and healthy working practices when erecting masonry cladding.'],['LO4','Select the required quantity and quality of resources for the methods of work to erect masonry cladding.'],['LO5','Minimise the risk of damage to the work and surrounding area when erecting masonry cladding.'],['LO6','Complete the work within the allocated time when erecting masonry cladding.'],['LO7','Comply with the given contract information to erect masonry cladding to the required specification.']]},
   {n:3,unit:'235',glh:160,optional:false,title:'Erecting masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance when erecting masonry structures.'],['LO3','Maintain safe and healthy working practices when erecting masonry structures.'],['LO4','Select the required quantity and quality of resources for the methods of work to erect masonry structures.'],['LO5','Minimise the risk of damage to the work and surrounding area when erecting masonry structures.'],['LO6','Complete the work within the allocated time when erecting masonry structures.'],['LO7','Comply with the given contract information to erect masonry structures to the required specification.']]},
   {n:4,unit:'303',glh:47,optional:false,title:'Confirming the occupational method of work in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4'},ksbs:[['LO1','Assess available project data accurately to determine the occupational method of work.'],['LO2','Obtain additional information from alternative sources where the available project data is insufficient.'],['LO3','Identify work methods that make best use of resources and meet project, statutory and contractual requirements.'],['LO4','Confirm and communicate the selected work method to relevant personnel.']]},
   {n:5,unit:'300',glh:43,optional:false,title:'Confirming work activities and resources for an occupational work area in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4 • 1.5',LO2:'2.1 • 2.2 • 2.3 • 2.4 • 2.5',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5'},ksbs:[['LO1','Identify work activities, assess required resources and plan the sequence of work.'],['LO2','Obtain clarification and advice where the resources required are not available.'],['LO3','Evaluate the work activities and the requirements of any significant external factors against the project requirements.'],['LO4','Identify work activities which influence each other and make the best use of resources.'],['LO5','Identify changed circumstances that require alterations to the work programme and justify them to decision makers.']]},
   {n:6,unit:'313',glh:190,optional:false,title:'Erect masonry to form architectural and decorative structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting masonry to form architectural and decorative structures.'],['LO2','Know how to comply with relevant legislation and official guidance when erecting architectural and decorative masonry.'],['LO3','Maintain safe and healthy working practices when erecting architectural and decorative masonry.'],['LO4','Select the required quantity and quality of resources for the methods of work.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to erect architectural and decorative masonry to the required specification.']]},
   {n:7,unit:'502',glh:37,optional:false,title:'Developing and maintaining good occupational working relationships in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3',LO2:'2.1 • 2.2 • 2.3 • 2.4',LO3:'3.1 • 3.2 • 3.3',LO4:'4.1 • 4.2 • 4.3',LO5:'5.1 • 5.2'},ksbs:[['LO1','Develop, maintain and encourage working relationships to promote goodwill and trust.'],['LO2','Inform relevant people about work activities with an appropriate level of detail and urgency.'],['LO3','Offer advice and help to relevant people about work activities and encourage questions, clarification and comments.'],['LO4','Clarify proposals with relevant people and discuss alternative suggestions.'],['LO5','Resolve differences of opinion in ways that minimise offence and maintain goodwill, trust and respect.']]},
   {n:8,unit:'701',glh:123,optional:false,title:'Setting out to form masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6'},ksbs:[['LO1','Interpret the given information relating to the work and resources when setting out masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance when setting out masonry structures.'],['LO3','Maintain safe and healthy working practices when setting out masonry structures.'],['LO4','Select the required quantity and quality of resources for the methods of work.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to set out masonry structures to the required specification.']]},
   {n:9,unit:'',optional:true,selectOptional:true,title:'Select an optional unit',criteria:{},ksbs:[]}
  ],
  optionalUnits:[
   {n:9,unit:'238',glh:127,optional:true,title:'Erecting thin joint masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting thin joint masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance.'],['LO3','Maintain safe and healthy working practices.'],['LO4','Select the required quantity and quality of resources.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to erect thin joint masonry structures to the required specification.']]},
   {n:9,unit:'690',glh:143,optional:true,title:'Repairing and maintaining masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when repairing and maintaining masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance.'],['LO3','Maintain safe and healthy working practices.'],['LO4','Select the required quantity and quality of resources.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to repair and maintain masonry structures to the required specification.']]},
   {n:9,unit:'828',glh:150,optional:true,title:'Installing and forming specialist masonry elements in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when installing and forming specialist masonry elements.'],['LO2','Know how to comply with relevant legislation and official guidance.'],['LO3','Maintain safe and healthy working practices.'],['LO4','Select the required quantity and quality of resources.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to install and form specialist masonry elements to the required specification.']]},
   {n:9,unit:'837',glh:110,optional:true,title:'Installing drainage in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when installing drainage.'],['LO2','Know how to comply with relevant legislation and official guidance when installing drainage.'],['LO3','Maintain safe and healthy working practices when installing drainage.'],['LO4','Select the required quantity and quality of resources for the methods of work.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to install drainage to the required specification.']]}
  ]
 }


};


const NVQ_ASSESSMENT_CRITERIA={"102":[{"code":"1.1","text":"comply with information from workplace inductions and any health, safety and welfare briefings attended relevant to the occupational area","type":"practical","lo":"LO1"},{"code":"1.2","text":"use health and safety control equipment safely to carry out the activity in accordance with legislation and organisational requirements","type":"practical","lo":"LO1"},{"code":"1.3","text":"comply with statutory requirements, safety notices and warning notices displayed within the workplace and/or on equipment","type":"practical","lo":"LO1"},{"code":"1.4","text":"state why and when health and safety control equipment, identified by the principles of protection, should be used relating to types, purpose and limitations of each type, the work situation, occupational use and the general work environment, in relation to: a Collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO1"},{"code":"1.5","text":"state how the health and safety control equipment relevant to the work should be used in accordance with the given instructions","type":"theory","lo":"LO1"},{"code":"1.6","text":"state which types of health, safety and welfare legislation, notices and warning signs are relevant to the occupational area and associated equipment","type":"theory","lo":"LO1"},{"code":"1.7","text":"state why health, safety and welfare legislation, notices and warning signs are relevant to the occupational area","type":"theory","lo":"LO1"},{"code":"1.8","text":"state how to comply with control measures that have been identified by risk assessments and safe systems of work.","type":"theory","lo":"LO1"},{"code":"2.1","text":"report any hazards created by changing circumstances within the workplace in accordance with organisational procedures","type":"practical","lo":"LO2"},{"code":"2.2","text":"list typical hazards associated with the work environment and occupational area in relation to: resources, substances, asbestos, equipment, obstructions, storage, services and work activities","type":"theory","lo":"LO2"},{"code":"2.3","text":"list the current health and safety executive top ten safety risks","type":"theory","lo":"LO2"},{"code":"2.4","text":"list the current health and safety executive top five health risks","type":"theory","lo":"LO2"},{"code":"2.5","text":"state how changing circumstances within the workplace could cause hazards","type":"theory","lo":"LO2"},{"code":"2.6","text":"state the methods used for reporting changed circumstances, hazards and incidents in the workplace.","type":"theory","lo":"LO2"},{"code":"3.1","text":"interpret and comply with given instructions to maintain safe systems of work and quality working practices","type":"practical","lo":"LO3"},{"code":"3.2","text":"contribute to discussions by offering/providing feedback relating to health, safety and welfare","type":"practical","lo":"LO3"},{"code":"3.3","text":"contribute to the maintenance of workplace welfare facilities in accordance with workplace welfare procedures","type":"practical","lo":"LO3"},{"code":"3.4","text":"safely store health and safety control equipment in accordance with given instructions","type":"practical","lo":"LO3"},{"code":"3.5","text":"dispose of waste and/or consumable items in accordance with legislation","type":"practical","lo":"LO3"},{"code":"3.6","text":"state the organisational policies and procedures for health, safety and welfare, in relation to: a dealing with accidents and emergencies associated with the work and environment b methods of receiving or sourcing information c reporting d stopping work e evacuation f fire risks and safe exit procedures g consultation and feedback","type":"theory","lo":"LO3"},{"code":"3.7","text":"state the appropriate types of fire extinguishers relevant to the work","type":"theory","lo":"LO3"},{"code":"3.8","text":"state how and when the different types of fire extinguishers are used in accordance with legislation and official guidance.","type":"theory","lo":"LO3"},{"code":"4.1","text":"demonstrate behaviour which shows personal responsibility for general workplace health, safety and welfare","type":"practical","lo":"LO4"},{"code":"4.2","text":"state how personal behaviour demonstrates responsibility for general workplace health, safety and welfare, in relation to: a recognising when to stop work in the face of serious and imminent danger to self and/or others b contributing to discussions and providing feedback c reporting changed circumstances and incidents in the workplace d complying with the environmental requirements of the workplace","type":"theory","lo":"LO4"},{"code":"4.3","text":"give examples of how the behaviour and actions of individuals could affect others within the workplace.","type":"theory","lo":"LO4"},{"code":"5.1","text":"provide appropriate support for security arrangements in accordance with approved procedures: a during the working day b on completion of the day’s work c for unauthorised personnel (other operatives and the general public) d for theft","type":"practical","lo":"LO5"},{"code":"5.2","text":"state how security arrangements are implemented in relation to: a the workplace b the general public c site personnel d resources Unit 102 Conforming to general health, safety and welfare in the workplace","type":"theory","lo":"LO5"}],"234":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufacturers’ information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c current legislation d schedules e method statements f risk assessments g manufacturers' information h oral and written instructions i sketches j electronic data k official guidance l current regulations associated with erecting masonry cladding","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents, health hazards and the environment, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement/storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment and access equipment safely to carry out the activity in accordance with current legislation and organisational requirements when erecting masonry cladding","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when erecting masonry cladding in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to erecting masonry cladding, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities.","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a bricks b blocks c mortars d frames e insulation f damp-proof barriers g brick slips h cloak systems i cavity closers j fire breaks k lintels l fixings m ties n hand and power tools and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate quantity, length, area and wastage of materials associated with the method and procedure to erect masonry cladding.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when erecting masonry cladding: a measuring b marking out c laying d positioning e levelling f plumb g fitting h fixing i securing","type":"practical","lo":"LO7"},{"code":"7.2","text":"use and maintain hand and power tools and equipment","type":"practical","lo":"LO7"},{"code":"7.3","text":"erect brick and block and/or local material cladding to given working instructions, including the formation of openings and joint finishes, for at least one of the following structures: a pre-erected timber frame b pre-erected concrete c pre-erected steel d existing masonry structure","type":"practical","lo":"LO7"},{"code":"7.4","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a erect brick, block and thin joint blocks cladding to pre-erected timber frame, concrete, steel and existing structures b clad structures using local materials c install brick slips d position and secure wall ties including spaces, particularly around openings and movement joints e form and maintain the integrity of cavities f install and maintain the integrity of fire barriers and breaks g form joint finishes h form openings i position, level, plumb, fix and integrate brick soffit systems j install masonry support angles k prop and support structures l remove temporary structures m position, fix and bed damp-proof barriers, cloak systems and cavity trays n form and install weep holes and vents o position, bond and tape installation materials p install wind posts q mix mortar r recognise and determine when specialist skills and knowledge are required and report accordingly s identify and follow the installation quality requirements t work with, around and in close proximity to plant and machinery u use hand and power tools, and equipment v work at height w use access equipment","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe the needs of other occupations and how to communicate effectively within a team when erecting masonry cladding","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to maintain the tools and equipment used when erecting masonry cladding. Unit 234 Erecting masonry cladding in the workplace","type":"theory","lo":"LO7"}],"235":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufactures’ information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c current legislation d schedules e method statements f risk assessments g manufacturers information h oral and written instructions i sketches j electronic data k official guidance l current regulations governing buildings associated with erecting masonry structures","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents, health hazards and the environment, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement/storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment safely and comply with the methods of work to carry out the activity in accordance with current legislation and organisational requirements when erecting masonry structures","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when erecting masonry structures in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to erecting masonry structures, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given working instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a bricks b blocks c mortars d frames e insulation f damp-proof barriers g cloak systems h cills i copings and cappings j lintels k fixings l ties m hand and power tools, and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate quantity, length, area and wastage of materials associated with the method/procedure to erect masonry structures.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when erecting masonry structures: a measuring b marking out c laying d positioning e plumb f levelling g securing","type":"practical","lo":"LO7"},{"code":"7.2","text":"use and maintain hand and power tools, and equipment","type":"practical","lo":"LO7"},{"code":"7.3","text":"erect masonry in brick and block and/or local materials to given working instructions for the following: a cavity wall structures b blockwork structures c solid wall structures d form openings e joint finishes f cills, cappings and copings","type":"practical","lo":"LO7"},{"code":"7.4","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a erect cavity walling and solid walling using brick and block and local materials b erect walling of the local style c lay blocks (traditional and thin joint) d determine brick and block bonds e form and maintain the integrity of cavities f install lintels g install movement joints h install wind posts i cut bricks, blocks and local materials j form joint finishes, including mechanical pointing systems k form openings l position, level, plumb, fix and integrate brick soffit systems m position and fix cills, copings and cappings n install masonry support angles o prop and support structures p complete and remove temporary works q position, bond and tape insulation materials r position, fix and bed damp-proof barriers, cloak systems and cavity trays s form and install weep holes and vents t install and maintain the integrity of fire barriers and breaks u position and secure wall ties, including spacing, particularly around openings and movement joints v mix mortar w recognise and determine when specialist skills and knowledge are required and report accordingly x identify and follow the installation quality requirements y work with, around and in close proximity to plant and machinery z use hand and power tools, and equipment aa work at height bb use access equipment","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe the needs of other occupations and how to communicate effectively within a team when erecting masonry structures","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to maintain the tools and equipment used when erecting masonry structures. Unit 235 Erecting masonry structures in the workplace","type":"theory","lo":"LO7"}],"238":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufacturers’ information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c current legislation d schedules e method statements f risk assessments g manufactures’ information h oral and written instructions i sketches j electronic data k official guidance l current regulations associated with erecting thin joint masonry structures","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents and health hazards, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement and storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment and access equipment safely to carry out the activity in accordance with current legislation and organisational requirements when erecting thin joint masonry structures","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when erecting thin joint masonry structures in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to erecting thin joint masonry structures, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a blocks b joining compounds c frames d insulation e damp-proof barriers f cloak systems g lintels h fixings i ties j hand and power tools, and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate quantity, length, area and wastage of materials associated with the method and procedure to erect thin joint masonry structures.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when erecting thin joint masonry structures: a measuring b marking out c cutting d preparing e laying f positioning g securing","type":"practical","lo":"LO7"},{"code":"7.2","text":"erect thin joint masonry block structures to given working instructions for at least three of the following: a cavity wall structures b solid wall structures c form openings d mix jointing compounds","type":"practical","lo":"LO7"},{"code":"7.3","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a erect cavity walling and solid walling using thin joint blocks b determine thin joint block bonds c level bed (course one) d check plumb e form and maintain the integrity of cavities f form openings g position, level, plumb, fix and integrate brick soffit systems h install masonry support angles i position, fix and bed damp-proof barriers, cloak systems and cavity trays j position and secure wall ties, including spacing, particularly around openings k form and install movement joints l install and maintain the integrity of fire barriers and breaks m form and install weep holes and vents n position, bond and tape insulation materials o install wind posts p mix jointing compound q recognise and determine when specialist skills and knowledge are required and report accordingly r identify and follow the installation quality requirements s work with, around and in close proximity to plant and machinery t use hand and power tools, and equipment u work at height v use access equipment","type":"theory","lo":"LO7"},{"code":"7.4","text":"describe the needs of other occupations and how to communicate effectively within a team when erecting thin joint masonry structures","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe how to maintain the tools and equipment used when erecting thin joint masonry structures. Unit 238 Erecting thin joint masonry structures in the workplace","type":"theory","lo":"LO7"}],"303":[{"code":"1.1","text":"interpret and extract information from: a drawings b specifications c schedules d manufacturer's information e methods of work f risk assessments g programmes of work","type":"practical","lo":"LO1"},{"code":"1.2","text":"explain how to summarise the following project data: a required quantities b specifications c detailed drawings d health and safety requirements e timescales f scope of works","type":"theory","lo":"LO1"},{"code":"1.3","text":"explain the different methods of assessing available project data","type":"theory","lo":"LO1"},{"code":"1.4","text":"explain how to use project data to interpret the work method, in relation to: a standard work procedures b sequence of work c organisation of resources (people, equipment, materials) d work techniques e working conditions (health, safety and welfare) f risk assessment.","type":"theory","lo":"LO1"},{"code":"2.1","text":"collect and collate additional information from alternative sources to clarify the work to be carried out","type":"practical","lo":"LO2"},{"code":"2.2","text":"explain different methods and techniques of obtaining additional information from the following alternative sources when available project data is insufficient: a customers or representatives b suppliers c regulatory authorities d manufacturer’s literature.","type":"theory","lo":"LO2"},{"code":"3.1","text":"examine potential work methods to carry out the occupational work activity","type":"practical","lo":"LO3"},{"code":"3.2","text":"determine which work methods will make best use of relevant resources and meet health and safety requirements relating to technical and/or project criteria","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain how to identify work methods that make best use of resources and meet project, statutory and contractual requirements against technical criteria, in relation to: a health and safety welfare (principles of protection) b fire protection c access and egress d equipment availability e availability of competent workforce f pollution risk g waste and disposal h zero and low carbon outcomes i weather conditions","type":"theory","lo":"LO3"},{"code":"3.4","text":"explain how to identify work methods that make best use of resources and meet project, statutory and contractual requirements against project criteria, in relation to: a conforming to statutory requirements b customer and user needs c contract requirements in terms of time, quantity and quality d environmental considerations","type":"theory","lo":"LO3"},{"code":"3.5","text":"explain how different methods of work can achieve zero/low carbon outcomes.","type":"theory","lo":"LO3"},{"code":"4.1","text":"confirm the selected occupational work method that meets project, statutory and contractual requirements","type":"practical","lo":"LO4"},{"code":"4.2","text":"communicate appropriately to relevant people on the selected occupational work method","type":"practical","lo":"LO4"},{"code":"4.3","text":"describe the different techniques and methods of confirming and communicating work methods to relevant people","type":"theory","lo":"LO4"},{"code":"4.4","text":"explain the principles of equality and diversity and how to apply them when working and communicating with others. Unit 303 Confirming the occupational method of work in the workplace","type":"theory","lo":"LO4"}],"300":[{"code":"1.1","text":"identify work activities, assess required resources and plan the sequence of work","type":"practical","lo":"LO1"},{"code":"1.2","text":"identify work activities and formulate a plan for their own sequence of work","type":"practical","lo":"LO1"},{"code":"1.3","text":"explain the types of work relative to the occupational area and how to identify different work activities","type":"theory","lo":"LO1"},{"code":"1.4","text":"explain methods of assessing the resources needed from a range of available information","type":"theory","lo":"LO1"},{"code":"1.5","text":"explain the required information and the different methods used to prepare a work programme relative to the occupational area.","type":"theory","lo":"LO1"},{"code":"2.1","text":"seek advice and clarity from appropriate sources on resources available and the alternatives that can be used for the work when required resources are not available","type":"practical","lo":"LO2"},{"code":"2.2","text":"explain the different sources and methods that can be used to obtain clarification and advice when the required resources are not available.","type":"theory","lo":"LO2"},{"code":"3.1","text":"assess progress of work against project requirements, taking into account external factors relating to: a other occupations and /or customers b resources c weather conditions d health and safety requirements","type":"practical","lo":"LO3"},{"code":"3.2","text":"explain different methods of evaluating work activities against the following project requirements: a contract conditions b contract programme c health and safety requirements of operatives","type":"theory","lo":"LO3"},{"code":"3.3","text":"evaluate the requirements of significant external factors that could affect the progress of work, in relation to: a other related programmes b special working conditions c weather conditions d other occupations/people e resources f health and safety requirements","type":"practical","lo":"LO3"},{"code":"4.1","text":"determine work activities that have an influence on each other","type":"practical","lo":"LO4"},{"code":"4.2","text":"evaluate which work activities make the best use of available resources in relation to: a occupations and/or customers associated with the work b tools, plant and/or ancillary equipment c materials and components","type":"practical","lo":"LO4"},{"code":"4.3","text":"explain different methods and sources that can identify which work activities influence each other","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how to determine the sequence of work activities and how long each work activity will take","type":"theory","lo":"LO4"},{"code":"4.5","text":"describe what zero and low carbon requirements are","type":"theory","lo":"LO4"},{"code":"4.6","text":"explain how work activities and different ways of using resources can impact on zero and low carbon requirements, and make a positive contribution to the environment.","type":"theory","lo":"LO4"},{"code":"5.1","text":"evaluate project progress against the work programme to identify any changed circumstances","type":"practical","lo":"LO5"},{"code":"5.2","text":"inform line management and/or customers on the type and extent of any required changes to the work programme","type":"practical","lo":"LO5"},{"code":"5.3","text":"explain how to identify possible alterations to the work programme to meet changed circumstances relating to: a actions lists b method statements c duration d schedules e occupation specific requirements","type":"theory","lo":"LO5"},{"code":"5.4","text":"explain how to assess contractual/work effects resulting from alterations to the work programme","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain the methods used to justify to decision makers on the effects resulting from alterations to the work programme. Unit 300 Confirming work activities and resources for an occupational work area in the workplace","type":"theory","lo":"LO5"}],"313":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufacturers' information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c current legislation d schedules e method statements f risk assessments g manufacturers information h oral and written instructions i sketches j electronic data k official guidance l current regulations governing buildings associated with the erection of masonry to form architectural and decorative structures","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents, health hazards and the environment, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement/storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment and access equipment safely to carry out the activity in accordance with current legislation and organisational requirements when erecting masonry to form architectural and decorative structures.","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when erecting masonry to form architectural and decorative structures in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to erecting masonry to form architectural and decorative, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b personal protective equipment (PPE) c respiratory protective equipment (RPE) d local exhaust ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities.","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a bricks b blocks c mortars d frames e insulation f damp-proof barriers g cloak systems h lintels i ties j components k fixings l hand and power tools, and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate quantity, length, area and wastage of materials associated with the method and procedure to erect masonry to form architectural and decorative structures.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance Learning Outcome","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when erecting masonry to form architectural and decorative structures: a measuring b checking c marking out d laying e positioning f securing","type":"practical","lo":"LO7"},{"code":"7.2","text":"use and maintain hand and power tools, and equipment","type":"practical","lo":"LO7"},{"code":"7.3","text":"erect masonry in brick and block and/or local materials to given working instructions, to form architectural and decorative features including forming joint finishes, for at least three of the following : a arches (rough ringed, axed, gauged) b chimney stack c fireplace d walls with flush, projecting or decorative features e walls curved on plan f walls curved in elevation g walls splayed on plan","type":"practical","lo":"LO7"},{"code":"7.4","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a erect cavity walling and solid walling using brick, blocks and thin joint blocks b erect walls in local styles using local materials c work overhand d position, install and secure fixings and cramps e position and secure wall ties including spacing particularly around openings and movement joints f form and maintain the integrity of cavities g install masonry support angles h form and install weep holes and vents i form arches (rough ringed, axed, gauged) j form chimney stacks k form fireplaces l form walls flush, projecting and with decorative features m form walls curved on plan and check with trammel, templates and bay moulds n form walls splayed on plan and check with templates and bay moulds o form walls curved and ramped in elevation and set out and check with trammels and profiles p prop and support structures q install movement joints r install wind posts s cut bricks, blocks and local materials t complete and remove temporary works u form joint finishes v select and install vertical and horizontal reinforcement w position, fix and bed damp-proof barriers, cloak systems and cavity trays x position, bond and tape insulation materials y install and maintain the integrity of fire barriers and breaks z mix mortar aa provide information for Building Information Modelling (BIM) bb recognise and determine when specialist skills and knowledge are required and report accordingly cc determine specific requirements for structures of special interest, traditional build (pre 1919) and historical significance dd identify and follow the installation quality requirements ee work with, around and in close proximity to plant and machinery ff use hand and power tools, and equipment gg work at height hh use access equipment","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe the needs of other occupations and how to communicate effectively within a team when erecting masonry to form architectural and decorative structures","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to maintain the tools and equipment used when erecting masonry to form architectural and decorative structures. Unit 313 Erecting masonry to form architectural and decorative structures in the workplace","type":"theory","lo":"LO7"}],"502":[{"code":"1.1","text":"give appropriate advice and information to relevant people about the occupational work activities and/or associated occupations involved","type":"practical","lo":"LO1"},{"code":"1.2","text":"apply the principles of equality and diversity by considering the needs of individuals when working and communicating with others","type":"practical","lo":"LO1"},{"code":"1.3","text":"explain the methods and techniques used and personal attributes required to encourage and maintain working relationships that promote goodwill and trust with relevant people","type":"theory","lo":"LO1"},{"code":"1.4","text":"explain the principles of equality and diversity and how to apply them when working and communicating with others.","type":"theory","lo":"LO1"},{"code":"2.1","text":"communicate on the following work activity information to relevant people following organisational procedures: a appropriate timescales b health and safety requirements c co-ordination of work procedures","type":"practical","lo":"LO2"},{"code":"2.2","text":"explain the different methods and techniques used to inform relevant people about work activities","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain the effects of not informing relevant people with the expected level of urgency","type":"theory","lo":"LO2"},{"code":"2.4","text":"explain the different types of work activity related information and to what level of detail the following people would expect to receive: a colleagues b employers c customers d contractors e suppliers of products and services f other people affected by the work/project.","type":"theory","lo":"LO2"},{"code":"3.1","text":"give appropriate advice and information to relevant people about the different methods of carrying out occupational work activities to achieve the required outcome","type":"practical","lo":"LO3"},{"code":"3.2","text":"explain the techniques of encouraging questions and/or requests for clarification and comments","type":"theory","lo":"LO3"},{"code":"3.3","text":"explain the different ways of offering advice and help to different people about work activities, in relation to: a progress b results c achievements d occupational problems e occupational opportunities f health and safety requirements g co-ordinated work.","type":"theory","lo":"LO3"},{"code":"4.1","text":"engage regular discussions with relevant people about the occupational work activity and/or other occupations involved","type":"practical","lo":"LO4"},{"code":"4.2","text":"explain the methods of clarifying alternative proposals with relevant people","type":"theory","lo":"LO4"},{"code":"4.3","text":"explain the methods of suggesting alternative proposals.","type":"theory","lo":"LO4"},{"code":"5.1","text":"examine and agree the work activities that satisfy all people involved and will meet the required outcome of the proposed method of work","type":"practical","lo":"LO5"},{"code":"5.2","text":"explain the methods and techniques used to resolve differences of opinion in ways which minimise offence and maintain goodwill, trust and respect. Unit 502 Developing and maintaining good occupational working relationships in the workplace","type":"theory","lo":"LO5"}],"690":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufacturers’ information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c current legislation d schedules e method statements f risk assessments g manufactures’ information h oral and written instructions i sketches j electronic data k official guidance l current regulations governing buildings associated with the repair and maintenance of masonry structures","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents and health hazards, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement/storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment and access equipment safely to carry out the activity in accordance with current legislation and organisational requirements when repairing and maintaining masonry structures","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when repairing and maintaining masonry structures in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to repairing and maintaining masonry structures, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities.","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a bricks b blocks c natural stones d mortars e sand f lime g additives h frames i insulation j damp-proof barriers k cloak systems l lintels m ties n fittings and fixings o hand and power tools, and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate quantity, length, area and wastage of materials associated with the method and procedure to repair and maintain masonry structures.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when repairing and maintaining masonry structures: a measuring b mark out c cut d remove e lay f position g secure","type":"practical","lo":"LO7"},{"code":"7.2","text":"use and maintain hand and power tools, and equipment","type":"practical","lo":"LO7"},{"code":"7.3","text":"prepare, repair and maintain existing brick, and/or block masonry and/or local style structures to given working instructions for at least three of the following: a match existing materials b continue existing bonding c match existing quality of structure d form openings e prop existing walls and floors f form internal and external angles","type":"practical","lo":"LO7"},{"code":"7.4","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a prepare, repair and maintain existing masonry structures in brick, traditional and thin joint blocks or local materials and styles b identify material and components and restore structures to original state c form joint finishes d form openings e prop existing walls and floors f form and maintain the integrity of cavities g position, fix and bed damp-proof barriers, cloak systems and cavity trays h form and install weep holes and vents i form internal and external angles j position, bond and tape insulation materials k install and maintain the integrity of fire barriers and breaks l dress surfaces m form finishes n mix mortars o recognise and determine when specialist skill and knowledge are required and report accordingly p determine specific requirements for structures of special interest, traditional build (pre 1919) and historical significance q identify and follow the installation quality requirements r work with, around and in close proximity to plant and machinery s use hand and power tools, and equipment t work at height u use access equipment","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe the needs of other occupations and how to communicate effectively within a team when repairing and maintaining masonry structures","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to maintain the tools and equipment used when repairing and maintaining masonry structures. Unit 690 Repairing and maintaining masonry structures in the workplace","type":"theory","lo":"LO7"}],"701":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufacturers' information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c current legislation d schedules e method statements f risk assessments g manufacturers information h oral and written instructions i sketches j electronic data k official guidance l current regulations governing buildings associated with setting out to form masonry structures","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents, health hazards and the environment, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement and storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment safely and comply with the methods of work to carry out the activity in accordance with current legislation and organisational requirements when setting out to form masonry structures","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when setting out to form masonry structures in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to setting out to form masonry structures, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given working instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d setting out equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a levels b lines c trammels d templates e profiles f tape measures g pegs h squares i fixings j hand and power tools k setting out equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate distances, length, quantity, length, levels and diagonals, area and wastage of materials associated with the method and procedure to set out to form masonry structures.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when setting out to form masonry structures: a measuring b marking out c levelling d plumb e positioning f transferring g transposing h fixing i securing","type":"practical","lo":"LO7"},{"code":"7.2","text":"use and maintain hand and power tools and setting out equipment","type":"practical","lo":"LO7"},{"code":"7.3","text":"determine dimensions and positions using line, level, depth, area, height and angle to given working instructions to establish at least four of the following lines: a straight (180 degrees) b right angles (90 degrees) c obtuse angles (between 90 and 180 degrees including batters) d acute angles (between 0 and 90 degrees) e curves on plan f curves in elevation g openings","type":"practical","lo":"LO7"},{"code":"7.4","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a measure and set out to form masonry structures on level and sloping ground b identify and mark datum points c make trammels, templates and profiles d mark straight lines, right angles, obtuse angles, acute angles, curves on plan, curves in elevation and openings e set out using trammels, templates and profiles f plumb from ranging lines g transfer lines and levels (spirit level, straight-edge, water levels and laser level) h determine convex and concave curves using pegs and line i recognise and determine when specialist skills and knowledge are required and report accordingly j identify and follow the installation quality requirements k work with, around and in close proximity to plant and machinery l use hand and power tools, and setting out equipment m work at height n use access equipment","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe the needs of other occupations and how to communicate effectively within a team when setting out to form masonry structures","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to maintain the tools and equipment used when setting out to form masonry structures. Unit 701 Setting out to form masonry structures in the workplace","type":"theory","lo":"LO7"}],"828":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b specifications c schedules d method statements e risk assessments f manufacturers’ information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b specifications c schedules d method statements e risk assessments f manufacturers' information g oral and written instructions h sketches i electronic data j official guidance k regulations associated with the installing and forming specialist masonry support elements","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents, health hazards and the environment, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement and storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative e vehicles","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety and comply with the methods of work to carry out the activity in accordance with current legislation and organisational requirements when installing and forming specialist masonry elements","type":"practical","lo":"LO3"},{"code":"3.2","text":"demonstrate compliance with given information and relevant legislation when installing and forming specialist masonry element in relation to the following: a safe use of access equipment b safe use, storage and handling of materials, tools and equipment c specific risks to health","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of prevention, should be used, relating to install and form specialist masonry elements, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given working instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related activities.","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components c fixings d tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a specialist masonry support elements b fittings c fixings d hand and power tools, and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how to confirm that the resources and materials conform to the specification","type":"theory","lo":"LO4"},{"code":"4.4","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.5","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.7","text":"describe how to calculate quantity, length, area and wastage of materials associated with the method and procedure to install and form specialist masonry elements","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"maintain a clear and tidy work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the estimated allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of productivity targets and time scales b how times are estimated c organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when: a positioning b levelling c plumb d adjusting e fixing","type":"practical","lo":"LO7"},{"code":"7.2","text":"use and maintain hand and power tools and equipment","type":"practical","lo":"LO7"},{"code":"7.3","text":"install and/or form fire barriers and/or breaks and support angles plus at least two of the following specialist masonry support elements to given working instructions: a brick soffit systems b channel systems c wind posts d vapour and/or moisture barriers e wall starter kits","type":"practical","lo":"LO7"},{"code":"7.4","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a identify the types, uses and characteristics of specialist masonry support elements; brick soffit systems, support angles, fire barriers and breaks, wind posts and wall starter kits b position, level, plumb, fix and integrate brick soffit systems c install and adjust masonry support angles d install and maintain the integrity of fire barriers and breaks e form and maintain the integrity of cavities f position and secure wall ties including spacing, particularly around openings g position and fix damp-proof barriers, cloak systems and cavity trays h form and install weep holes and vents i position bond and tape insulation materials j install wind posts k use wall starter kits l recognise and determine when specialist skills and knowledge are required and report accordingly m identify and follow the installation quality requirements n work with, around and in close proximity to plant and machinery o use hand and power tools, and equipment p work at height q use access equipment","type":"theory","lo":"LO7"},{"code":"7.5","text":"describe the needs of other occupations and how to communicate effectively within a team when installing and forming specialist masonry elements","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to maintain the tools and equipment used when installing and forming specialist masonry elements Unit 828 Installing and forming specialist masonry elements in the workplace","type":"theory","lo":"LO7"}],"837":[{"code":"1.1","text":"interpret and extract relevant information from: a drawings b risk assessments c method statements d specifications e schedules f manufacturers’ information","type":"practical","lo":"LO1"},{"code":"1.2","text":"comply with information and/or instructions derived from risk assessments and method statements","type":"practical","lo":"LO1"},{"code":"1.3","text":"describe the organisational procedures developed to report and rectify inappropriate information and unsuitable resources and how they are implemented","type":"theory","lo":"LO1"},{"code":"1.4","text":"describe different types of information, their source and how they are interpreted in relation to: a drawings b risk assessments c method statements d specifications e schedules f manufacturers' information g regulations governing the installation and construction of drainage systems.","type":"theory","lo":"LO1"},{"code":"2.1","text":"describe their responsibilities regarding potential accidents and health hazards, whilst working: a in the workplace b below ground level c in confined spaces d at height e with tools and equipment f with materials and substances g with movement/storage of materials h by manual handling and mechanical lifting","type":"theory","lo":"LO2"},{"code":"2.2","text":"describe the organisational security procedures for tools, equipment and personal belongings in relation to: a site b workplace c company d operative","type":"theory","lo":"LO2"},{"code":"2.3","text":"explain what the accident reporting procedures are and who is responsible for making reports.","type":"theory","lo":"LO2"},{"code":"3.1","text":"use health and safety control equipment and access equipment safely to carry out the activity in accordance with current legislation and organisational requirements when installing drainage","type":"practical","lo":"LO3"},{"code":"3.2","text":"comply with information relating to specific risks to health when installing drainage","type":"practical","lo":"LO3"},{"code":"3.3","text":"explain why and when health and safety control equipment, identified by the principles of protection, should be used, relating to installing drainage, and the types, purpose and limitations of each type, the work situation and general work environment, in relation to: a collective protective measures b Personal Protective Equipment (PPE) c Respiratory Protective Equipment (RPE) d Local Exhaust Ventilation (LEV)","type":"theory","lo":"LO3"},{"code":"3.4","text":"describe how the relevant health and safety control equipment should be used in accordance with the given instructions","type":"theory","lo":"LO3"},{"code":"3.5","text":"describe how emergencies should be responded to in accordance with organisational authorisation and personal skills when involved with: a fires b spillages c injuries d other task-related hazards.","type":"theory","lo":"LO3"},{"code":"4.1","text":"select resources associated with own work in relation to: a materials b components and fixings c tools and equipment","type":"practical","lo":"LO4"},{"code":"4.2","text":"describe the characteristics, quality, uses, sustainability, limitations and defects associated with the resources in relation to: a pipes, fittings and ancillary components b pre-cast (metal, concrete, clay or plastic) components c bricks, blocks and sandbags d granular materials, aggregates, cement, concrete, mortars and sand e sealant materials (adhesives, compounds, solvents) f hand and/or powered tools and equipment","type":"theory","lo":"LO4"},{"code":"4.3","text":"describe how the resources should be used correctly and how problems associated with the resources are reported","type":"theory","lo":"LO4"},{"code":"4.4","text":"explain why the organisational procedures have been developed and how they are used for the selection of required resources","type":"theory","lo":"LO4"},{"code":"4.5","text":"describe any potential hazards associated with the resources and methods of work","type":"theory","lo":"LO4"},{"code":"4.6","text":"describe how to calculate quantity, length, area and wastage associated with the method/procedure to install drainage.","type":"theory","lo":"LO4"},{"code":"5.1","text":"protect the work and its surrounding area from damage in accordance with safe working practices and organisational procedures","type":"practical","lo":"LO5"},{"code":"5.2","text":"minimise damage and maintain a clean work space","type":"practical","lo":"LO5"},{"code":"5.3","text":"dispose of waste in accordance with current legislation","type":"practical","lo":"LO5"},{"code":"5.4","text":"describe how to protect work from damage and the purpose of protection in relation to: a general workplace activities b other occupations c adverse weather conditions","type":"theory","lo":"LO5"},{"code":"5.5","text":"explain why the disposal of waste should be carried out safely in accordance with: a environmental responsibilities b organisational procedures c manufacturers’ information d statutory regulations e official guidance.","type":"theory","lo":"LO5"},{"code":"6.1","text":"demonstrate completion of the work within the allocated time","type":"practical","lo":"LO6"},{"code":"6.2","text":"describe the purpose of the work programme and explain why deadlines should be kept in relation to: a types of progress charts, timetables and estimated times b organisational procedures for reporting circumstances which will affect the work programme.","type":"theory","lo":"LO6"},{"code":"7.1","text":"demonstrate the following work skills when installing drainage: a measuring b marking out c laying d positioning e fitting f levelling g plumbing h aligning i securing j testing","type":"practical","lo":"LO7"},{"code":"7.2","text":"install and test new and/or replacement, foul and/or surface water drainage for two of the following to given working instructions: a pipework (e.g. clay, concrete, metal, or plastic) b inspection chambers (e.g. brick, concrete, metal or plastic) c surface water systems (e.g. cells, culverts, high capacity, linear, balancing ponds, interceptors, recycling equipment, soak-a-ways, sustainable urban drainage systems) d foul water systems (e.g. cess pools, septic tanks, reed beds, treatment plants)","type":"practical","lo":"LO7"},{"code":"7.3","text":"safely use: a materials b hand tools c portable power tools d ancillary equipment","type":"practical","lo":"LO7"},{"code":"7.4","text":"safely store the materials, tools and equipment used when installing drainage","type":"practical","lo":"LO7"},{"code":"7.5","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a excavate trenches and provide trench support b confirm ground conditions, site and excavations are suitable for the drainage installation work c prepare bedding for pipework d determine levels and gradients e identify the differences between surface and foul water drainage f lay, position, level, plumb, align, fit, fix and secure new and replacement drainage systems g construct structures of a drainage system (storm alleviation, culverts, inspection chambers, lateral drains, overflows, sumps, filter drains, sustainable urban drainage systems)","type":"theory","lo":"LO7"},{"code":"7.6","text":"describe how to apply safe and healthy work practices, follow procedures, report problems and establish the authority needed to rectify them, to: a assemble pre-cast components (metal, concrete, clay and plastic) of a drainage system structure (inspection chambers, street iron work) b connect and seal new systems to existing systems c conduct smoke, water, ball, air mandrel and close circuit television tests on drainage systems d work with plant and machinery e use hand tools, power tools and equipment f work at height and below ground level g use access equipment","type":"theory","lo":"LO7"},{"code":"7.7","text":"describe the needs of other occupations and how to effectively communicate within a team when installing drainage","type":"theory","lo":"LO7"},{"code":"7.8","text":"describe how to maintain the tools and equipment used when installing drainage. Unit 837 Installing drainage in the workplace","type":"theory","lo":"LO7"}]};

// Short learner-facing prompt titles. Full KSB wording remains unchanged for
// assessment scoring, evidence records, version history and PDF generation.
const LEARNER_PROMPTS={
 'bricklayer-st0095-v1-2':{
  1:{S1:'Safe working',S2:'PPE & RPE',K1:'Site hazards',K2:'Safety equipment',K3:'Safe systems',B1:'Health & wellbeing'},
  2:{S3:'Waste management',S4:'Industry standards',K4:'Environmental impact',K5:'Building performance',K7:'Building regulations',B2:'Sustainable working'},
  3:{S5:'Read drawings',S7:'Prepare workspace',K10:'Drawing details',K9:'Modern construction',K11:'Digital design'},
  4:{S6:'Estimate resources',K8:'Masonry materials',K6:'Building principles',K12:'Quantity calculations'},
  5:{S8:'Use hand tools',S9:'Maintain tools',K13:'Hand tools',K14:'Power tools',B1:'Safe tool use'},
  6:{S10:'Set out cavity',S11:'Build cavity wall',K21:'Cavity setting out',K22:'Cavity components',B3:'Own your work'},
  7:{S12:'Joint finishes',S14:'Mix mortar',K17:'Joint types',K19:'Expansion joints',K20:'Mortar ratios'},
  8:{S13:'Build solid wall',K15:'Brick bonds',K16:'Wall construction',K18:'Decorative brickwork',K23:'Edge courses'},
  9:{S16:'Repair brickwork',K24:'Defects & repairs',S17:'Protect work',K25:'Weather protection',B3:'Own your work'},
  10:{S18:'Site communication',S20:'Team working',K26:'Construction terms',K27:'Good teamwork',B6:'Team goals',B5:'Keep developing'},
  11:{S19:'Follow EDI',S21:'Wellbeing support',K28:'Inclusive workplace',K31:'Mental wellbeing',B4:'Support inclusion'},
  12:{S22:'Raking cuts',S15:'Cut bricks',K30:'Raked walling',K29:'Hand cutting',B2:'Reduce waste'}
 },
 'architectural-joiner-st0264-v1-4':{
  1:{S1:'Safe working',S2:'PPE & RPE',K1:'Workshop hazards',K2:'Safety equipment',K3:'Safe systems',B1:'Health & wellbeing'},
  2:{S3:'Waste management',S4:'Industry standards',K4:'Sustainable timber',K7:'Building regulations',K40:'Employment basics',B2:'Sustainable working'},
  3:{S5:'Prepare workspace',S6:'Read drawings',K5:'Building methods',K6:'Digital design',K8:'Drawing details',B4:'Keep developing'},
  4:{S7:'Cutting lists',K9:'Timber types',K10:'Timber defects',K12:'Material estimates'},
  5:{S9:'Use hand tools',S10:'Use power tools',S11:'Sharpen tools',K14:'Hand tools',K15:'Tool maintenance',K17:'Power tools'},
  6:{S12:'Produce jigs',K16:'Jig techniques',K29:'Laser levels'},
  7:{S8:'Site communication',S13:'Wellbeing support',K13:'Construction terms',K18:'Good teamwork',K19:'Inclusive workplace',K20:'Mental wellbeing',B3:'Support inclusion',B5:'Team goals'},
  8:{S23:'Setting out',K32:'Marking accuracy'},
  9:{S24:'Timber joints',S25:'Joinery connections',K11:'Joinery products',K33:'Joint techniques',K35:'Connection methods'},
  10:{S26:'Make windows',K34:'Window assembly'},
  11:{S27:'Frames & linings',K36:'Frame assembly',K39:'Fit ironmongery'},
  12:{S27:'Make staircases',S28:'Spindles & balustrades',K36:'Stair assembly',K37:'Second-fix products'},
  13:{S28:'Make timber doors',S29:'Fit door ironmongery',K37:'Door assembly',K30:'Fire doors'},
  14:{S28:'Make fitted units',K37:'Unit assembly',K38:'Timber finishes'},
  15:{S30:'Operate machinery',K31:'Machine safety'}
 }
 , 'property-maintenance-operative-st0171-v1-1':{
  1:{K3:'Safety law',K4:'Risk assessment',S3:'Follow safety rules',S4:'Control workplace risks',B2:'Promote safety'},
  2:{K1:'Planned & reactive work',K2:'Buildings & defects',K6:'Prepare work area',S1:'Plan work sequence',S6:'Set up safely',B3:'Complete own work'},
  3:{K5:'Building regulations',K23:'Technical information',K30:'Workplace responsibilities',S2:'Select correct materials',S5:'Meet regulations',B5:'Support inclusion'},
  4:{K7:'Tools & equipment',K8:'Electrical systems',S7:'Use tools safely',S8:'Isolate supplies safely'},
  5:{K9:'Emergency systems',K31:'Limits & development',S9:'Test emergency systems',S25:'Escalate faults',B6:'Keep developing'},
  6:{K10:'Plumbing systems',K11:'Drainage systems',K12:'Water hygiene',S10:'Repair plumbing',S11:'Repair drainage'},
  7:{K13:'Energy systems',K25:'Quality improvement',S12:'Repair energy systems',S21:'Inspect finished work'},
  8:{K14:'Doors & glazing defects',K27:'Adapt communication',K28:'Customer service',S13:'Repair doors & windows',S24:'Customer handover'},
  9:{K15:'Plaster defects',K16:'Decorating defects',K26:'Environmental duties',S14:'Repair plaster',S15:'Prepare & decorate'},
  10:{K17:'Tiling defects',K18:'Flooring defects',S16:'Repair tiling',S17:'Repair flooring'},
  11:{K19:'Masonry defects',K29:'Trade responsibilities',S18:'Repair masonry'},
  12:{K20:'Roof defects',K25:'Quality checks',S18:'Repair roofing',S21:'Inspect repair',B4:'Work as team'},
  13:{K21:'Fencing defects',K27:'Trade communication',S18:'Repair fencing',S23:'Communicate with others'},
  14:{K22:'Groundwork defects',K26:'Environmental duties',S18:'Repair groundworks',S22:'Reuse & recycle',B1:'Work sustainably'},
  15:{K24:'Record information',K25:'Quality improvement',K31:'Professional development',S19:'Use technical guidance',S20:'Report completed work'}
 }

};
function learnerPromptTitle(assignmentNumber,code,fallback){
 return LEARNER_PROMPTS[COURSE.id]?.[assignmentNumber]?.[code]||fallback;
}

const APP_VERSION='V2.89';
function paintPdfPageBackground(ctx,W,H){ctx.fillStyle='#ffffff';ctx.fillRect(0,0,W,H);const r=Math.min(W,H)*0.58,g=ctx.createRadialGradient(0,0,0,0,0,r);g.addColorStop(0,'#DDF3D6');g.addColorStop(.42,'#EFF8EC');g.addColorStop(1,'#FFFFFF');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)}

const PORTFOLIO_UPLOAD_LIMIT_BYTES=1_000_000_000;
const PORTFOLIO_SAFE_TARGET_BYTES=900_000_000;
const APP_VIDEO_BITS_PER_SECOND=1_400_000;
const APP_VIDEO_AUDIO_BITS_PER_SECOND=64_000;
const APP_VOICE_BITS_PER_SECOND=48_000;
const APP_VIDEO_MINUTE_ESTIMATE_BYTES=Math.round((APP_VIDEO_BITS_PER_SECOND+APP_VIDEO_AUDIO_BITS_PER_SECOND)*60/8);
const APP_VOICE_MINUTE_ESTIMATE_BYTES=Math.round(APP_VOICE_BITS_PER_SECOND*60/8);

const TECHNICAL_DRAWING_BASE='./drawings/';
const TECHNICAL_DRAWING_PREFIX={
 'bricklayer-st0095-v1-2':'BWK',
 'site-carpentry-v1-4':'SC',
 'architectural-joiner-st0264-v1-4':'AJ',
 'property-maintenance-operative-st0171-v1-1':'PMO'
};
function technicalDrawingInfo(assignmentNumber){
 const prefix=TECHNICAL_DRAWING_PREFIX[COURSE.id],number=Number(assignmentNumber);
 if(!prefix||!Number.isFinite(number))return null;
 const assignment=courseAssignments().find(item=>Number(item.n)===number),file=`${prefix}AS${number}.png`;
 return {file,url:`${TECHNICAL_DRAWING_BASE}${file}`,title:assignment?.title||`Practical Assessment ${number}`,assignmentNumber:number};
}
function technicalDrawingCard(assignmentNumber){
 const info=technicalDrawingInfo(assignmentNumber);
 if(!info)return'';
 return `<section class="technical-drawing-preview no-print" data-technical-drawing-card="${assignmentNumber}"><button type="button" class="technical-drawing-preview-button" data-open-technical-drawing="${assignmentNumber}" aria-label="Open ${esc(info.title)} full screen"><img src="${esc(info.url)}" alt="${esc(info.title)} technical drawing" loading="lazy"><span class="technical-drawing-preview-overlay"><strong>${appIcon('drawing')} Technical drawing</strong><small>Tap to open full screen, pinch to zoom, print or save as PDF</small></span></button><div class="technical-drawing-preview-missing" hidden><strong>Drawing coming soon</strong><span>${esc(info.file)} has not been uploaded yet.</span></div></section>`;
}
async function technicalDrawingImageData(info){
 const response=await fetch(info.url,{cache:'no-store'});if(!response.ok)throw new Error(`Drawing unavailable (${response.status})`);
 const blob=await response.blob();return await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob)});
}
function loadAppImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=src})}
async function downloadTechnicalDrawingPDF(info,button,previewWindow){
 const original=button?.innerHTML;if(button){button.disabled=true;button.textContent='Creating PDF…'}
 try{
  const source=await technicalDrawingImageData(info),image=await loadAppImage(source),W=1240,H=1754;
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d',{alpha:false});ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);
  const scale=Math.min(W/image.naturalWidth,H/image.naturalHeight),w=image.naturalWidth*scale,h=image.naturalHeight*scale,x=(W-w)/2,y=(H-h)/2;ctx.drawImage(image,x,y,w,h);
  const jpeg=canvas.toDataURL('image/jpeg',.98),bytes=makeImagePDF([dataUrlBytes(jpeg)],W,H),name=info.file.replace(/\.png$/i,'.pdf'),blob=new Blob([bytes],{type:'application/pdf'}),url=URL.createObjectURL(blob);
  // Opening the PDF in the device viewer is more reliable than a hidden download in installed Android PWAs.
  if(previewWindow&&!previewWindow.closed){previewWindow.location.replace(url)}else window.open(url,'_blank');
  const a=document.createElement('a');a.href=url;a.download=name;a.rel='noopener';a.style.display='none';document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),120000);
  toast('A4 PDF opened. Use the download icon to save it.');
 }catch(error){try{previewWindow?.close()}catch{}console.error('Technical drawing PDF failed',error);toast('Unable to create the PDF. Use Print and choose Save as PDF.')}finally{if(button){button.disabled=false;button.innerHTML=original}}
}
function printTechnicalDrawing(info){
 const win=window.open('','_blank');if(!win)return toast('Allow pop-ups to print this drawing');
 win.document.write(`<!doctype html><html><head><title>${esc(info.title)}</title><style>@page{size:A4 portrait;margin:0}html,body{margin:0;width:210mm;height:297mm;background:#fff}body{display:flex;align-items:center;justify-content:center}img{display:block;width:210mm;height:297mm;object-fit:contain}</style></head><body><img src="${esc(info.url)}" alt="${esc(info.title)}"></body></html>`);win.document.close();
 const image=win.document.querySelector('img');image.onload=()=>setTimeout(()=>{win.focus();win.print()},250);image.onerror=()=>{win.close();toast('Drawing unavailable')};
 
}
function openTechnicalDrawing(assignmentNumber){
 const info=technicalDrawingInfo(assignmentNumber);
 if(!info)return toast('No technical drawing is configured for this course');
 
 try{
  sessionStorage.setItem('apprenticeplus.drawingReturn.v1',JSON.stringify({href:location.href,scrollY:window.scrollY||0,title:info.title}));
 }catch{}
 const params=new URLSearchParams({src:info.url,title:info.title,file:info.file||'',assignment:String(assignmentNumber)});
 location.href=`technical-drawing-viewer.html?${params.toString()}`;
}
function bindTechnicalDrawingButtons(scope=document){
 scope.querySelectorAll('[data-technical-drawing-card]').forEach(card=>{const image=card.querySelector('img'),button=card.querySelector('.technical-drawing-preview-button'),missing=card.querySelector('.technical-drawing-preview-missing');if(!image||!button||!missing)return;const available=()=>{button.hidden=false;missing.hidden=true},unavailable=()=>{button.hidden=true;missing.hidden=false};image.onload=available;image.onerror=unavailable;if(image.complete)(image.naturalWidth?available:unavailable)()});
 scope.querySelectorAll('[data-open-technical-drawing]').forEach(button=>button.onclick=()=>openTechnicalDrawing(Number(button.dataset.openTechnicalDrawing)));
}

let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstallPrompt=event;});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;document.getElementById('installAppModal')?.remove();toast('Apprentice+ installed');});
let ACTIVE_COURSE_ID='trowel-nvq-6570-05';
let COURSE=COURSES[ACTIVE_COURSE_ID];

const app=document.getElementById('app');
const toastEl=document.getElementById('toast');
let state={view:'home',assignment:null,section:null,profile:null,data:{},dev:false,academySearch:'',academyTopic:null,epaMock:null,knowledgeTest:null,walkthroughCode:null,resourceSearch:'',notepadSearchOpen:false,editingNoteId:null,branding:null,projectMateTab:'home',activeProjectId:null,otjMateTab:'home',editingOtjId:null,otjSelectedActivity:null,glhAssignment:null,remindMateTab:'home',editingReminderId:null,reviewMateTab:'targets',reviewMateDraft:null,reviewMatePlusDraft:null,learningSupportTab:'home',epaDiscussion:null,epaPractical:null,functionalTest:null,tradeTest:null};
let db;
const NAV_STATE_KEY='apprenticeplus.navigation.v1';
let restoringNavigation=false;
let navigationReady=false;
let lastNavigationSignature='';
function navigationSnapshot(scrollY=window.scrollY||0){return {view:state.view,assignment:state.assignment,section:state.section,academyTopic:state.academyTopic,academySearch:state.academySearch,walkthroughCode:state.walkthroughCode,resourceSearch:state.resourceSearch,notepadSearchOpen:state.notepadSearchOpen,editingNoteId:state.editingNoteId,projectMateTab:state.projectMateTab,activeProjectId:state.activeProjectId,otjMateTab:state.otjMateTab,editingOtjId:state.editingOtjId,otjSelectedActivity:state.otjSelectedActivity,glhAssignment:state.glhAssignment,remindMateTab:state.remindMateTab,editingReminderId:state.editingReminderId,reviewMateTab:state.reviewMateTab,learningSupportTab:state.learningSupportTab,scrollY,courseId:ACTIVE_COURSE_ID}}
function navigationSignature(snapshot){return JSON.stringify([snapshot.courseId,snapshot.view,snapshot.assignment,snapshot.section,snapshot.academyTopic,snapshot.walkthroughCode])}
function saveNavigationSnapshot(snapshot=navigationSnapshot()){
 try{localStorage.setItem(NAV_STATE_KEY,JSON.stringify(snapshot))}catch{}
}
function loadNavigationSnapshot(){try{return JSON.parse(localStorage.getItem(NAV_STATE_KEY)||'null')}catch{return null}}
function validRestoredView(snapshot){
 const allowed=new Set(['home','course','toolkit','assignment','academy','library','trade-courses','trade-test','trade-result','functional-skills','functional-test','functional-result','knowledge-slides','academy-knowledge','certificates','lesson','epa','epa-results','epa-test','epa-result','epa-discussion','epa-discussion-result','epa-practical','knowledge-test','knowledge-result','walkthrough','section','resources','notepad','tools','measuremate','materialmate','drawingmate','cadmate','skillscard','feedbackmate','projectmate','otjmate','remindmate','reviewmate','learning-support','settings']);
 if(!snapshot||snapshot.courseId!==ACTIVE_COURSE_ID||!allowed.has(snapshot.view))return false;
 if(['assignment','walkthrough','section'].includes(snapshot.view)&&!assignment(Number(snapshot.assignment)))return false;
 if(snapshot.view==='section'&&!['photos','statement','discussion','professionalDiscussion','witness','supporting','rpl'].includes(snapshot.section))return false;
 return true;
}
function applyNavigationSnapshot(snapshot){
 if(!validRestoredView(snapshot))return false;
 state.view=snapshot.view;state.assignment=snapshot.assignment==null?null:Number(snapshot.assignment);state.section=snapshot.section||null;state.academyTopic=snapshot.academyTopic||null;state.academySearch=snapshot.academySearch||'';state.walkthroughCode=snapshot.walkthroughCode||null;state.resourceSearch=snapshot.resourceSearch||'';state.notepadSearchOpen=!!snapshot.notepadSearchOpen;state.editingNoteId=snapshot.editingNoteId||null;state.projectMateTab=snapshot.projectMateTab||'home';state.activeProjectId=snapshot.activeProjectId||null;state.otjMateTab=snapshot.otjMateTab||'home';state.editingOtjId=snapshot.editingOtjId||null;state.otjSelectedActivity=snapshot.otjSelectedActivity||null;state.glhAssignment=snapshot.glhAssignment||null;state.remindMateTab=snapshot.remindMateTab||'home';state.editingReminderId=snapshot.editingReminderId||null;state.reviewMateTab=snapshot.reviewMateTab||'targets';state.learningSupportTab=snapshot.learningSupportTab||'home';
 return true;
}
function recordNavigation(){
 if(!navigationReady)return;
 const snapshot=navigationSnapshot(0),signature=navigationSignature(snapshot);
 saveNavigationSnapshot(snapshot);
 if(restoringNavigation){lastNavigationSignature=signature;return}
 if(!lastNavigationSignature){history.replaceState(snapshot,'');lastNavigationSignature=signature;return}
 if(signature!==lastNavigationSignature){history.pushState(snapshot,'');lastNavigationSignature=signature}else history.replaceState(snapshot,'');
}
let scrollSaveTimer=0;
window.addEventListener('scroll',()=>{clearTimeout(scrollSaveTimer);scrollSaveTimer=setTimeout(()=>{if(!navigationReady)return;const snapshot=navigationSnapshot();saveNavigationSnapshot(snapshot);history.replaceState(snapshot,'')},100)},{passive:true});
window.addEventListener('popstate',event=>{
 const snapshot=event.state;
 if(!validRestoredView(snapshot))return;
 restoringNavigation=true;applyNavigationSnapshot(snapshot);lastNavigationSignature=navigationSignature(snapshot);render();requestAnimationFrame(()=>{window.scrollTo(0,Number(snapshot.scrollY)||0);restoringNavigation=false});
});

function cloneData(value){
 try{if(typeof globalThis.structuredClone==='function')return globalThis.structuredClone(value)}catch(error){console.warn('structuredClone failed; using JSON fallback',error)}
 try{return JSON.parse(JSON.stringify(value))}catch(error){console.warn('JSON clone failed; returning original value',error);return value}
}
function uid(){
 try{if(globalThis.crypto&&typeof globalThis.crypto.randomUUID==='function')return globalThis.crypto.randomUUID()}catch(error){console.warn('randomUUID unavailable',error)}
 return Date.now().toString(36)+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)
}
function today(){return new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date())}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function appIcon(name,extra=''){
 const paths={
  observation:'<path d="M9 5h6M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2Z"/><path d="m8 14 2.2 2.2L16 10.5"/>',
  camera:'<path d="M4 8a2 2 0 0 1 2-2h2l1.2-2h5.6L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="12.5" r="3.5"/>',
  statement:'<path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h5"/><path d="m15.5 18.5 3-3 1.5 1.5-3 3-2 .5Z"/>',
  supporting:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M8 12h8M8 16h5"/>',
  discussion:'<path d="M12 3a8 8 0 0 0-8 8c0 2.2.9 4.2 2.4 5.7L5 21l4.5-2.1c.8.2 1.6.3 2.5.3a8 8 0 1 0 0-16.2Z"/><path d="M8.5 10.5h7M8.5 14h4"/><path d="M18 16v3M16.5 17.5h3"/>',
  witness:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  hammer:'<path d="m14 5 5 5"/><path d="m12.5 6.5 3-3 5 5-3 3"/><path d="M13.5 9.5 5 18a2.1 2.1 0 0 0 3 3l8.5-8.5"/>',
  gallery:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m5 17 4-4 3 3 2-2 5 5"/>',
  video:'<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3Z"/>',
  file:'<path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h6"/>',
  resources:'<path d="M4 4h6a2 2 0 0 1 2 2v14a3 3 0 0 0-3-3H4Z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a3 3 0 0 1 3-3h5Z"/>',
  toolbox:'<path d="M4 8h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20M10 13v2h4v-2"/>',
  microphone:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
  note:'<path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  course:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8v8H8z"/>',
  academy:'<path d="m3 10 9-7 9 7-9 5Z"/><path d="M7 13v5c3 2 7 2 10 0v-5M21 10v6"/>',
  revision:'<path d="M12 3a9 9 0 1 0 8.2 5.3"/><path d="M20 3v6h-6M12 7v5l3 2"/>',
  library:'<path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15H6a2 2 0 0 1-2-2Z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
  questionPack:'<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 7h8"/><path d="M9.5 11a2.5 2.5 0 1 1 4.1 1.9c-.9.7-1.6 1.1-1.6 2.1"/><path d="M12 18h.01"/><path d="M3 7v12a2 2 0 0 0 2 2"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  tools:'<path d="M14.7 6.3a4 4 0 0 0-5 5L3.5 17.5a2.1 2.1 0 0 0 3 3l6.2-6.2a4 4 0 0 0 5-5l-2.4 2.4-3-3Z"/><path d="m15 15 5 5"/><path d="m17 13 4 4"/>',
  project:'<path d="M4 4h16v16H4z"/><path d="M8 4V2h8v2M8 9h8M8 13h5M8 17h3"/><path d="m15 16 2 2 4-5"/>',
  drawing:'<path d="M4 3h16v18H4z"/><path d="M8 7h8M8 11h5M8 15h8"/><path d="m15 13 3 3-4 4-3-3Z"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  college:'<path d="m3 10 9-6 9 6"/><path d="M5 10v9h14v-9M9 19v-6h6v6M3 21h18"/>',
  qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3zM18 14h3M14 18v3"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  award:'<circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9"/>',
  functional:'<path d="M4 5a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H4Z"/><path d="M20 5a2 2 0 0 0-2-2h-1a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h3Z"/><path d="m7 10 2 2 3-4"/>',
  certificate:'<path d="M6 3h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 7h8M8 11h5"/><circle cx="15.5" cy="13.5" r="2.5"/><path d="m14 16-1 5 2.5-1.5L18 21l-1-5"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-4v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3.1V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 10v7M12 7h.01"/>',
  eye:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeSquint:'<path d="M3 12s3.5-3.5 9-3.5 9 3.5 9 3.5-3.5 3.5-9 3.5S3 12 3 12Z"/><path d="M8 12h8M6.5 8.5 5 7M17.5 8.5 19 7"/>',
  moveVertical:'<path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4"/>',
  volume:'<path d="M11 5 6.5 9H3v6h3.5L11 19Z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/>',
  previousSentence:'<path d="M6 5v14"/><path d="m18 6-8 6 8 6Z"/>',
  nextSentence:'<path d="M18 5v14"/><path d="m6 6 8 6-8 6Z"/>',
  pause:'<path d="M8 5v14M16 5v14"/>',
  stopSquare:'<rect x="6" y="6" width="12" height="12" rx="1"/>',
  warning:'<path d="M12 3 2.8 20h18.4Z"/><path d="M12 9v5M12 17h.01"/>'
 };
 return `<svg class="app-icon ${extra}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${paths[name]||paths.file}</svg>`;
}
function statusMark(status){return status==='complete'?'<span class="modern-status complete">✓</span>':status==='incomplete'?'<span class="modern-status warning">!</span>':'<span class="modern-status pending"></span>'}
let toastTimer=null;
function toast(msg,duration=1900,kind=''){clearTimeout(toastTimer);toastEl.textContent=msg;toastEl.classList.toggle('portfolio-save-toast',kind==='portfolio');toastEl.classList.add('show');const a=typeof accessibilitySettings==='function'?accessibilitySettings():null;if(a?.visualAlerts)toastEl.classList.add('a11y-toast');if(a?.vibration&&navigator.vibrate)navigator.vibrate(25);toastTimer=setTimeout(()=>toastEl.classList.remove('show','a11y-toast','portfolio-save-toast'),duration)}
function showEvidenceSavedConfirmation(){toast('Evidence saved to your portfolio',3000,'portfolio')}
function key(a,s){return `${COURSE.id}:${a}:${s}`}
function legacyKey(a,s){return `${a}:${s}`}
function sectionData(a,s){return state.data[key(a,s)]||{draft:blankSection(s),versions:[]}}
function blankSection(s){
 const base={id:uid(),submitted:false,date:'',signature:'',createdAt:Date.now()};
 if(s==='practical')return {...base,observerRole:'',tutor:'',activityTaskType:'observation',activity:'',activitySpecId:'',activityGeneratedAt:'',practicalDrawing:null,ksbEvidence:[],scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',photos:[],outcomePhotos:{}};
 if(s==='photos')return {...base,photos:[],outcomePhotos:{},ksbEvidence:[],captions:{}};
 if(s==='statement')return {...base,text:'',ksbEvidence:[]};
 if(s==='witness')return {...base,type:'Witness testimony',personName:'',role:'',contactDetails:'',organisation:'',activity:'',scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',files:[],outcomePhotos:{}};
 if(s==='discussion'||s==='professionalDiscussion')return {...base,assessor:'',activity:'',recordings:{},notes:{},voiceSubmissions:[]};
 return {...base,tab:'files',type:'Supporting evidence',personName:'',role:'',organisation:'',activity:'',scores:{},ksbEvidence:[],feedbackSummary:'',feedbackDevelopment:'',feedback:'',files:[],outcomePhotos:{}};
}
function optionalSelectionKey(){return `${COURSE.id}:optionalUnitSelection`}
function selectedOptionalUnitNumber(){return String(state.data[optionalSelectionKey()]||'')}
function selectedOptionalUnit(){const number=selectedOptionalUnitNumber();return (COURSE.optionalUnits||[]).find(a=>String(a.unit)===number)||null}
function assignment(n){
 const base=COURSE.assignments.find(a=>a.n===n);
 if(base?.selectOptional){const selected=selectedOptionalUnit();return selected?{...selected,n:base.n,optional:true,selectOptional:false}:{...base}}
 return base;
}
function courseAssignments(){return COURSE.assignments.map(a=>assignment(a.n))}

function current(a,s){return sectionData(a,s).draft}
function completed(a,s){return sectionData(a,s).versions.length>0}
function sectionHasEvidence(a,s){
 const sd=sectionData(a,s),d=sd.draft||{};
 if(sd.versions.length>0)return true;
 if(s==='practical')return !!(d.tutor||d.activity||d.signature||(d.photos||[]).length||Object.keys(d.scores||{}).length);
 if(s==='photos')return !!((d.photos||[]).length||Object.keys(d.outcomePhotos||{}).length||d.signature);
 if(s==='statement')return !!((d.text||'').trim()||d.signature);
 if(s==='discussion'||s==='professionalDiscussion')return !!(d.assessor||d.activity||d.signature||Object.keys(d.recordings||{}).length||(d.voiceSubmissions||[]).length||Object.values(d.notes||{}).some(Boolean));
 return !!(d.personName||d.role||d.contactDetails||d.organisation||d.activity||d.signature||(d.files||[]).length||Object.keys(d.scores||{}).length);
}
function sectionStatus(a,s){if(!sectionHasEvidence(a,s))return 'none';return sectionReadyForPack(a,s)?'complete':'incomplete'}
function latestVersion(a,s){const versions=sectionData(a,s).versions;return versions.length?versions[versions.length-1]:null}
function skillCriteriaFor(a){
 const skills=a.ksbs.filter(([code])=>String(code).toUpperCase().startsWith('S'));
 return skills.map(([code,summary])=>({code,summary,criteria:buildSkillCriteria(summary)}));
}
function buildSkillCriteria(summary){
 const text=String(summary||'').replace(/[.]+$/,'').trim();
 const lower=text.toLowerCase();
 const action=text.charAt(0).toLowerCase()+text.slice(1);
 let prep='Selected the correct tools, equipment and materials needed to '+action+'.';
 let method='Used an appropriate sequence and working method to '+action+'.';
 let accuracy='Completed the work accurately and in line with the drawing, specification or required tolerance.';
 let quality='Checked the finished work, corrected defects and left it to the required quality standard.';
 if(/health|safety|ppe|rpe|lev|safe working/.test(lower)){prep='Identified the main hazards and selected the correct PPE, RPE and control measures.';method='Followed the safe system of work and used tools, equipment and controls correctly.';accuracy='Applied the relevant safety requirements consistently throughout the activity.';quality='Maintained good housekeeping, protected others and left the work area safe.'}
 else if(/communicat|team|wellbeing|inclusion|equity|diversity/.test(lower)){prep='Identified who needed information, support or involvement before starting the activity.';method='Used clear, appropriate communication and worked constructively with others.';accuracy='Shared accurate information using suitable trade terminology and checked understanding.';quality='Responded professionally, supported the team and reflected on how communication could improve.'}
 else if(/interpret|drawing|specification|digital design/.test(lower)){prep='Selected the correct drawing, specification or digital information for the task.';method='Extracted the relevant dimensions, symbols, notes and construction requirements.';accuracy='Transferred the information accurately into the practical work or setting-out process.';quality='Cross-checked the completed work against the source information and corrected discrepancies.'}
 else if(/estimate|select.*material|resource|cutting list|size timber/.test(lower)){prep='Identified the materials, quantities and specification required for the task.';method='Used an appropriate estimating, measuring or selection method.';accuracy='Calculated or selected resources accurately with suitable allowances for waste and cutting.';quality='Checked the result against the task requirements and justified the final selection.'}
 else if(/tool|equipment|maintain|sharpen/.test(lower)){prep='Selected tools and equipment that were suitable, serviceable and safe for the task.';method='Set up and used each tool correctly, following manufacturer and workplace guidance.';accuracy='Controlled the tools accurately to achieve the required dimensions and finish.';quality='Checked, cleaned, maintained and stored the tools correctly after use.'}
 else if(/set out|measure|level|laser|mark out/.test(lower)){prep='Selected suitable measuring, marking and setting-out equipment.';method='Established accurate datum points, lines, levels, centres or profiles in the correct sequence.';accuracy='Checked all dimensions, angles, levels and tolerances throughout the work.';quality='Verified the completed setting out against the drawing or specification before work continued.'}
 else if(/construct|build|install|fit|form|produce|apply|mix|repair|cut|splice|scribe/.test(lower)){prep='Selected and prepared the correct tools, equipment, materials and work area for this skill.';method='Used the correct practical sequence and trade technique to '+action+'.';accuracy='Maintained the required measurements, alignment, tolerances and component positioning.';quality='Checked workmanship, finish and compliance with the specification, correcting defects where needed.'}
 else if(/environment|sustainab|recycl|waste/.test(lower)){prep='Identified the environmental controls and resource requirements before starting.';method='Used materials efficiently and followed the correct reuse, recycling and disposal procedures.';accuracy='Segregated resources correctly and prevented contamination or avoidable waste.';quality='Left the area compliant, tidy and with environmental impacts minimised.'}
 return [prep,method,accuracy,quality];
}
function practicalScoreKeys(a){return skillCriteriaFor(a).flatMap(s=>s.criteria.map((_,i)=>`${s.code}::${i+1}`))}
function practicalScoringSummary(a,d){const scores=d?.scores||{},keys=practicalScoreKeys(a),graded=keys.map(k=>+scores[k]||0).filter(v=>v>=1&&v<=5);if(graded.length)return {graded:graded.length,achieved:graded.reduce((sum,v)=>sum+v,0),maximum:graded.length*5,percentage:Math.round((graded.reduce((sum,v)=>sum+v,0)/(graded.length*5))*100)};const legacy=skillCriteriaFor(a).map(s=>+scores[s.code]||0).filter(v=>v>=1&&v<=5);if(legacy.length)return {graded:legacy.length,achieved:legacy.reduce((sum,v)=>sum+v,0),maximum:legacy.length*5,percentage:Math.round((legacy.reduce((sum,v)=>sum+v,0)/(legacy.length*5))*100)};return {graded:0,achieved:0,maximum:0,percentage:null}}
function practicalPercentageScore(a,d){return practicalScoringSummary(a,d).percentage}
function practicalHasScores(a,d){return practicalScoringSummary(a,d).graded>0}
function practicalResultText(a,d){const result=practicalScoringSummary(a,d);return result.percentage===null?'Not yet graded':`${result.percentage}% — ${gradeForPercentage(result.percentage)}`}
function percentageScore(a,d){const max=a.ksbs.length*5;if(!max)return 0;const achieved=a.ksbs.reduce((sum,[code])=>sum+(+d?.scores?.[code]||0),0);return Math.round((achieved/max)*100)}
function gradeForPercentage(p){return p>=90?'Distinction':p>=80?'Merit':p>=70?'Pass':'Fail'}
function assessmentPassed(a,d,isPractical=false){if(!d)return false;const pct=isPractical?practicalPercentageScore(a,d):percentageScore(a,d);return pct!==null&&pct>=70}
function sectionReadyForPack(n,s){const latest=latestVersion(n,s);if(!latest)return false;if(s==='practical')return COURSE.nvqUnits?true:assessmentPassed(assignment(n),latest,true);if(s==='witness')return true;if(s==='supporting'&&latest.tab!=='files')return assessmentPassed(assignment(n),latest);return true}
function packStatusKey(n){return `${COURSE.id}:packStatus:${n}`}
function invalidatePackStatus(n){const current=state.data[packStatusKey(n)];if(!current||current.rpl)return;state.data[packStatusKey(n)]={...current,downloaded:false,uploaded:false,changedAt:new Date().toISOString()}}
function knowledgeResultKey(n){return `${COURSE.id}:knowledgeAssessment:${n}`}
function knowledgeAttempts(n){return Array.isArray(state.data[knowledgeResultKey(n)])?state.data[knowledgeResultKey(n)]:[]}
function knowledgePassedAttempts(n){return knowledgeAttempts(n).filter(x=>Number(x.percentage)>=70)}
function knowledgeStatus(n){const attempts=knowledgeAttempts(n);if(!attempts.length)return 'none';return knowledgePassedAttempts(n).length?'complete':'incomplete'}
function walkthroughMetaKey(n){return `${COURSE.id}:walkthrough:${n}`}
function walkthroughMeta(n){return state.data[walkthroughMetaKey(n)]||{}}
function walkthroughCriteria(a){return COURSE.nvqUnits?(a?.ksbs||[]):(a?.ksbs||[]).filter(([code])=>/^[SB]/i.test(String(code)))}
function walkthroughKnowledge(a){return walkthroughCriteria(a)}
function walkthroughSharedSubmissions(n){const meta=walkthroughMeta(n);return Array.isArray(meta._submissions)?meta._submissions.filter(item=>item?.blobKey):[]}
function walkthroughLegacyEntries(n){const meta=walkthroughMeta(n);return Object.entries(meta).filter(([code,item])=>!String(code).startsWith('_')&&item?.blobKey).map(([code,item])=>({id:`legacy-${code}`,blobKey:item.blobKey,name:item.name,type:item.type,size:item.size,mediaHash:item.mediaHash,duration:item.duration,optimised:item.optimised,date:item.date,createdAt:item.createdAt,intendedCodes:[code],confirmedCodes:[code],legacyCode:code}))}
function walkthroughAllSubmissions(n){return [...walkthroughSharedSubmissions(n),...walkthroughLegacyEntries(n)]}
function walkthroughComplete(n,code){return walkthroughAllSubmissions(n).some(item=>(item.confirmedCodes||[]).includes(code))}
function walkthroughSaved(n){return !!walkthroughMeta(n)._saved}
function walkthroughStatus(n){const a=assignment(n),items=walkthroughKnowledge(a);if(!items.length)return 'complete';const done=items.filter(([code])=>walkthroughComplete(n,code)).length;return walkthroughSaved(n)&&done>0?'complete':done?'incomplete':'none'}
function walkthroughCount(n){const items=walkthroughKnowledge(assignment(n));return {done:items.filter(([code])=>walkthroughComplete(n,code)).length,total:items.length,videos:walkthroughAllSubmissions(n).length}}
async function saveWalkthroughVideo(n,codes,video,{name,type,duration='',optimised=false,intendedCodes=[]}={}){
 const confirmed=[...new Set((Array.isArray(codes)?codes:[codes]).map(String).filter(Boolean))];if(!confirmed.length)throw new Error('Select at least one KSB covered by the video');
 if(!video||!String(type||video.type||'').startsWith('video/'))throw new Error('A valid video recording is required');
 if(!video.size)throw new Error('The recording is empty');
 video=await normaliseRecordedBlob(video,type||video.type||'video/webm');
 const media=await uniqueEvidenceMedia(video,{kind:'video'});if(!media)return false;
 const mime=String(video.type||type||'video/webm').split(';')[0].trim()||'video/webm',id=uid(),blobKey=`walkthrough-video:${COURSE.id}:${n}:shared:${id}`;
 const buffer=await video.arrayBuffer();await putStore(blobKey,{kind:'walkthrough-video',buffer,type:mime});
 const meta=walkthroughMeta(n),defaultExt=mediaExtensionForMime(mime,'video'),submissions=Array.isArray(meta._submissions)?meta._submissions:[];
 submissions.push({id,blobKey,name:name||video.name||`assignment-${n}-video-${Date.now()}.${defaultExt}`,type:mime,size:video.size,mediaHash:media.hash,duration,optimised,date:today(),createdAt:Date.now(),intendedCodes:[...new Set((intendedCodes.length?intendedCodes:confirmed).map(String))],confirmedCodes:confirmed});
 meta._submissions=submissions;meta._saved=false;state.data[walkthroughMetaKey(n)]=meta;invalidatePackStatus(n);await saveData();
 state.view='walkthrough';state.assignment=n;state.walkthroughCode=null;saveNavigationSnapshot(navigationSnapshot(window.scrollY||0));renderWalkthrough();toast(`Video saved · ${confirmed.length} KSB${confirmed.length===1?'':'s'} linked`);return true;
}
function storedWalkthroughBlob(value,meta){if(value instanceof Blob)return value;if(value?.kind==='walkthrough-video'&&value.buffer)return new Blob([value.buffer],{type:value.type||meta?.type||'video/webm'});if(value instanceof ArrayBuffer)return new Blob([value],{type:meta?.type||'video/webm'});return null}
async function saveWalkthroughOverall(n){const count=walkthroughCount(n);if(!count.videos)return toast('Add at least one video before saving');const meta=walkthroughMeta(n);meta._saved=true;meta._savedAt=Date.now();state.data[walkthroughMetaKey(n)]=meta;invalidatePackStatus(n);await saveData();state.assignment=n;state.section=null;state.walkthroughCode=null;state.view='assignment';render();window.scrollTo(0,0);showEvidenceSavedConfirmation()}
async function removeWalkthroughSubmission(n,id){const scrollY=window.scrollY||0,meta=walkthroughMeta(n);if(String(id).startsWith('legacy-')){const code=String(id).slice(7),item=meta[code];if(item?.blobKey){try{await deleteStore(item.blobKey)}catch(error){console.warn(error)}}delete meta[code]}else{const submissions=Array.isArray(meta._submissions)?meta._submissions:[],item=submissions.find(x=>x.id===id);if(item?.blobKey){try{await deleteStore(item.blobKey)}catch(error){console.warn(error)}}meta._submissions=submissions.filter(x=>x.id!==id)}meta._saved=false;state.data[walkthroughMetaKey(n)]=meta;invalidatePackStatus(n);await saveData();state.view='walkthrough';state.assignment=n;state.walkthroughCode=null;saveNavigationSnapshot(navigationSnapshot(scrollY));renderWalkthrough();requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo(0,scrollY)))}
function walkthroughPrompt(code,text,a){return learnerPromptTitle(a.n,code,text)||text}
function mediaExtensionForMime(type,kind='audio'){
 const mime=String(type||'').toLowerCase();
 if(mime.includes('ogg'))return 'ogg';
 if(mime.includes('mpeg'))return 'mp3';
 if(mime.includes('wav'))return 'wav';
 if(mime.includes('mp4'))return kind==='audio'?'m4a':'mp4';
 return 'webm';
}
function sniffMediaBytes(bytes,fallback=''){
 const b=bytes instanceof Uint8Array?bytes:new Uint8Array(bytes||[]);
 if(b.length>=4&&b[0]===0x1a&&b[1]===0x45&&b[2]===0xdf&&b[3]===0xa3)return fallback.startsWith('video/')?'video/webm':'audio/webm';
 if(b.length>=4&&String.fromCharCode(...b.slice(0,4))==='OggS')return fallback.startsWith('video/')?'video/ogg':'audio/ogg';
 if(b.length>=12&&String.fromCharCode(...b.slice(0,4))==='RIFF'&&String.fromCharCode(...b.slice(8,12))==='WAVE')return 'audio/wav';
 if(b.length>=8&&String.fromCharCode(...b.slice(4,8))==='ftyp')return fallback.startsWith('video/')?'video/mp4':'audio/mp4';
 if(b.length>=3&&String.fromCharCode(...b.slice(0,3))==='ID3')return 'audio/mpeg';
 if(b.length>=2&&b[0]===0xff&&(b[1]&0xe0)===0xe0)return 'audio/mpeg';
 return String(fallback||'').split(';')[0].trim();
}
async function normaliseRecordedBlob(blob,fallback='audio/webm'){
 if(!blob||!blob.size)throw new Error('The recording is empty');
 const header=await blob.slice(0,32).arrayBuffer(),detected=sniffMediaBytes(new Uint8Array(header),blob.type||fallback)||String(blob.type||fallback).split(';')[0];
 return blob.slice(0,blob.size,detected);
}
function preferredAudioMime(){
 const apple=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const types=apple?['audio/mp4','audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/ogg']:['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/ogg','audio/mp4'];
 return types.find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||'';
}
function preferredWalkthroughMime(){
 const apple=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const types=apple?['video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4','video/webm;codecs=vp8,opus','video/webm;codecs=vp8','video/webm']:['video/webm;codecs=vp8,opus','video/webm;codecs=vp8','video/webm','video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4'];
 return types.find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||'';
}
function formatMediaSize(bytes){
 const size=Math.max(0,Number(bytes)||0);
 if(size<1_000)return `${Math.round(size)} B`;
 if(size<1_000_000)return `${Math.max(1,Math.round(size/1_000))} KB`;
 if(size<1_000_000_000)return `${(size/1_000_000).toFixed(size<10_000_000?1:0)} MB`;
 return `${(size/1_000_000_000).toFixed(2)} GB`;
}
function dataUrlStoredBytes(value){
 const data=String(value||''),comma=data.indexOf(',');if(comma<0||!data.startsWith('data:'))return 0;
 const payload=data.slice(comma+1);if(!/;base64/i.test(data.slice(0,comma)))try{return new TextEncoder().encode(decodeURIComponent(payload)).length}catch{return payload.length}
 const padding=(payload.endsWith('==')?2:payload.endsWith('=')?1:0);return Math.max(0,Math.floor(payload.length*3/4)-padding);
}
function evidenceMediaKind(source,type=''){
 const mime=String(type||source?.type||'').toLowerCase(),data=typeof source==='string'?source.toLowerCase():'';
 if(mime.startsWith('image/')||data.startsWith('data:image/'))return'image';
 if(mime.startsWith('video/')||data.startsWith('data:video/'))return'video';
 return'';
}
function evidenceDataUrlBytes(value){
 const data=String(value||''),comma=data.indexOf(',');if(comma<0||!data.startsWith('data:'))return null;
 const header=data.slice(0,comma),payload=data.slice(comma+1);if(!/;base64/i.test(header))return new TextEncoder().encode(decodeURIComponent(payload));
 const binary=atob(payload),bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);return bytes;
}
async function evidenceMediaBytes(source){
 if(typeof source==='string'){const bytes=evidenceDataUrlBytes(source);if(bytes)return bytes}
 if(source instanceof Blob)return new Uint8Array(await source.arrayBuffer());
 if(source instanceof ArrayBuffer)return new Uint8Array(source);
 if(ArrayBuffer.isView(source))return new Uint8Array(source.buffer,source.byteOffset,source.byteLength);
 if(source?.kind==='walkthrough-video'&&source.buffer)return evidenceMediaBytes(source.buffer);
 throw new Error('Unsupported evidence media');
}
async function evidenceMediaHash(source){
 const bytes=await evidenceMediaBytes(source);
 if(globalThis.crypto?.subtle){const digest=new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256',bytes));return`sha256:${[...digest].map(value=>value.toString(16).padStart(2,'0')).join('')}`}
 let a=2166136261,b=0x9e3779b9;for(const value of bytes){a=Math.imul(a^value,16777619);b=Math.imul(b+(value^a),2246822519)}return`fnv:${(a>>>0).toString(16).padStart(8,'0')}${(b>>>0).toString(16).padStart(8,'0')}:${bytes.length}`;
}
function evidenceMediaSize(source,item={}){if(typeof source==='string')return dataUrlStoredBytes(source);if(source instanceof Blob)return source.size;if(source instanceof ArrayBuffer)return source.byteLength;if(ArrayBuffer.isView(source))return source.byteLength;if(source?.buffer)return source.buffer.byteLength||0;return Number(item.size)||0}
function evidenceSectionLabel(section){return({photos:'Photographic evidence',practical:'Assessor observation',discussion:'Video walkthrough',walkthrough:'Video walkthrough',professionalDiscussion:'Professional discussion',supporting:'Supporting evidence',witness:'Witness testimony'})[section]||section}
function evidenceMediaLocation(courseId,assignmentNumber,section,detail='',attempt=''){
 const course=COURSES[courseId],a=[...(course?.assignments||[]),...(course?.optionalUnits||[])].find(item=>Number(item.n)===Number(assignmentNumber)),code=course?.nvqUnits?`EP${assignmentNumber}`:`AS${assignmentNumber}`,title=a?.title?` - ${a.title}`:'',courseName=course?.name||courseId;
 return`${courseName} · ${code}${title} · ${evidenceSectionLabel(section)}${detail?` · ${detail}`:''}${attempt?` · ${attempt}`:''}`;
}
function evidenceRecordMediaEntries(record,{courseId,assignmentNumber,section,attempt,tokenBase}){
 const entries=[],add=(source,item,detail,token,type='')=>{const kind=evidenceMediaKind(source,type||item?.type);if(!kind||!source)return;entries.push({source,item,kind,size:evidenceMediaSize(source,item),token:`${tokenBase}:${token}`,location:evidenceMediaLocation(courseId,assignmentNumber,section,detail,attempt)})};
 (record?.photos||[]).forEach((item,index)=>{if(item?.data)add(item.data,item,item.name||`Photo ${index+1}`,`photo:${index}`)});
 Object.entries(record?.outcomePhotos||{}).forEach(([code,item])=>{if(item?.data)add(item.data,item,`${code} photo`,`outcome:${code}`)});
 Object.entries(record?.skillPhotos||{}).forEach(([code,items])=>(items||[]).forEach((item,index)=>{if(item?.data)add(item.data,item,`${code} photo ${index+1}`,`skill:${code}:${index}`)}));
 Object.entries(record?.recordings||{}).forEach(([code,item])=>{if(item?.data)add(item.data,item,`${code} ${evidenceMediaKind(item.data,item.type)==='video'?'video':'audio'}`,`recording:${code}`,item.type)});
 (record?.voiceSubmissions||[]).forEach((item,index)=>{if(item?.data)add(item.data,item,`${(item.confirmedCodes||[]).join(', ')||'K/B'} audio`,`voice:${item.id||index}`,item.type)});
 (record?.files||[]).forEach((item,index)=>{if(item?.data)add(item.data,item,item.evidenceName||item.name||`File ${index+1}`,`file:${index}`,item.type)});
 return entries;
}
async function allEvidenceMediaEntries(kind){
 const entries=[];
 for(const [dataKey,value] of Object.entries(state.data||{})){
  const sectionMatch=dataKey.match(/^(.+):(\d+):(practical|photos|discussion|professionalDiscussion|witness|supporting)$/);if(sectionMatch){const [,courseId,assignmentNumber,section]=sectionMatch,versions=Array.isArray(value?.versions)?value.versions:[];versions.forEach((record,index)=>entries.push(...evidenceRecordMediaEntries(record,{courseId,assignmentNumber,section,attempt:`Submitted attempt ${index+1}`,tokenBase:`${dataKey}:version:${index}`})));if(value?.draft)entries.push(...evidenceRecordMediaEntries(value.draft,{courseId,assignmentNumber,section,attempt:'Current evidence',tokenBase:`${dataKey}:draft`}));continue}
  const walkthroughMatch=dataKey.match(/^(.+):walkthrough:(\d+)$/);if(!walkthroughMatch)continue;const [,courseId,assignmentNumber]=walkthroughMatch;
  const shared=Array.isArray(value?._submissions)?value._submissions:[];for(const item of shared){if(!item?.blobKey)continue;entries.push({item,kind:'video',size:Number(item.size)||0,token:`${dataKey}:shared:${item.id}`,location:evidenceMediaLocation(courseId,assignmentNumber,'walkthrough',`${(item.confirmedCodes||[]).join(', ')||'KSB'} video`,item.date?`Saved ${item.date}`:'Saved video'),load:async()=>{const stored=await getStore(item.blobKey);return storedWalkthroughBlob(stored,item)}})}for(const [code,item] of Object.entries(value||{})){if(code.startsWith('_')||!item?.blobKey)continue;entries.push({item,kind:'video',size:Number(item.size)||0,token:`${dataKey}:${code}`,location:evidenceMediaLocation(courseId,assignmentNumber,'walkthrough',`${code} video`,item.date?`Saved ${item.date}`:'Saved video'),load:async()=>{const stored=await getStore(item.blobKey);return storedWalkthroughBlob(stored,item)}})}
 }
 return entries.filter(entry=>entry.kind===kind);
}
let duplicateEvidenceMediaNotice=null;
function showDuplicateEvidenceMedia(kind,duplicate){
 duplicateEvidenceMediaNotice={kind,duplicate};
 document.getElementById('duplicateEvidenceMediaModal')?.remove();const label=kind==='video'?'video':'photo';
 app.insertAdjacentHTML('beforeend',`<div class="modal duplicate-evidence-media-modal" id="duplicateEvidenceMediaModal"><div class="modal-card duplicate-evidence-media-card" role="alertdialog" aria-modal="true" aria-labelledby="duplicateEvidenceMediaTitle"><div class="duplicate-evidence-media-icon">${appIcon(kind==='video'?'video':'camera')}</div><div class="number">DUPLICATE EVIDENCE BLOCKED</div><h2 id="duplicateEvidenceMediaTitle">This ${label} has already been evidenced</h2><p>The identical ${label} is already saved in:</p><strong>${esc(duplicate.location)}</strong><p class="muted">Choose a different ${label} that provides new evidence.</p><button class="btn" id="closeDuplicateEvidenceMedia">Choose another ${label}</button></div></div>`);
 document.getElementById('closeDuplicateEvidenceMedia').onclick=()=>document.getElementById('duplicateEvidenceMediaModal')?.remove();
}
async function uniqueEvidenceMedia(source,{kind=evidenceMediaKind(source),excludeToken='',location='this selection'}={},staged=[]){
 if(!kind)return null;const size=evidenceMediaSize(source),hash=await evidenceMediaHash(source),stagedMatch=staged.find(item=>item.hash===hash&&item.size===size);if(stagedMatch){showDuplicateEvidenceMedia(kind,stagedMatch);return null}
 const entries=await allEvidenceMediaEntries(kind);for(const entry of entries){if(entry.token===excludeToken)continue;if(size&&entry.size&&size!==entry.size)continue;try{const existingHash=entry.item?.mediaHash||await evidenceMediaHash(entry.load?await entry.load():entry.source);if(entry.item&&!entry.item.mediaHash)entry.item.mediaHash=existingHash;if(existingHash===hash){showDuplicateEvidenceMedia(kind,entry);return null}}catch(error){console.warn('Unable to compare saved evidence media',error)}}
 return{hash,size,kind,location};
}
function optimisedAudioConstraints(){return {channelCount:{ideal:1},echoCancellation:{ideal:true},noiseSuppression:{ideal:true},autoGainControl:{ideal:true}}}
function optimisedVideoConstraints(){return {facingMode:{ideal:'environment'},width:{ideal:1280,max:1280},height:{ideal:720,max:720},frameRate:{ideal:24,max:30}}}
function createOptimisedMediaRecorder(stream,kind,mime=''){
 const bitrate=kind==='video'?{videoBitsPerSecond:APP_VIDEO_BITS_PER_SECOND,audioBitsPerSecond:APP_VIDEO_AUDIO_BITS_PER_SECOND}:{audioBitsPerSecond:APP_VOICE_BITS_PER_SECOND};
 const attempts=[mime?{mimeType:mime,...bitrate}:bitrate,mime?{mimeType:mime}:null,null];
 let lastError;
 for(const options of attempts)try{return options?new MediaRecorder(stream,options):new MediaRecorder(stream)}catch(error){lastError=error}
 throw lastError||new Error('Media recording is unavailable');
}
async function getOptimisedVideoStream(){
 try{return await navigator.mediaDevices.getUserMedia({video:optimisedVideoConstraints(),audio:optimisedAudioConstraints()})}
 catch(error){if(!/Overconstrained|ConstraintNotSatisfied/i.test(String(error?.name||'')))throw error;return navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:true})}
}
async function recordOptimisedVideo({title='Video recording',instruction='Hold the phone in landscape and keep the subject clearly in view.',detail='',criterionCode='',fallbackInput=null,saveLabel='Save video'}={}){
 if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined'){toast('In-app recording is not supported on this device');fallbackInput?.click();return null}
 let stream;try{stream=await getOptimisedVideoStream()}catch(error){console.warn('Camera permission or access failed',error);toast('Camera access was unavailable. Choose a video instead.');fallbackInput?.click();return null}
 const promptCode=criterionCode?`<span class="phone-video-prompt-code">${esc(criterionCode)}</span>`:'<span class="phone-video-prompt-code">PROMPT</span>',chooseButton=fallbackInput?`<button type="button" class="phone-video-library" id="optimisedVideoChoose" aria-label="Choose an existing video">${appIcon('gallery')}<small>Videos</small></button>`:'<span class="phone-video-control-space" aria-hidden="true"></span>';
 app.insertAdjacentHTML('beforeend',`<div class="phone-video-recorder" id="optimisedVideoModal"><div class="phone-video-surface"><video class="phone-video-preview" id="optimisedVideoPreview" autoplay muted playsinline webkit-playsinline></video><video class="phone-video-playback hide" id="optimisedVideoPlayback" controls playsinline webkit-playsinline></video><div class="phone-video-topbar"><button type="button" class="phone-video-close" id="optimisedVideoCancel" aria-label="Exit video recorder">×</button><details class="phone-video-prompt-drawer" id="optimisedVideoPrompt"><summary>${promptCode}<span class="phone-video-prompt-title">${esc(title)}</span><span class="phone-video-prompt-toggle">Prompt⌄</span></summary><div class="phone-video-prompt-body"><strong>${esc(instruction)}</strong>${detail?`<p>${esc(detail)}</p>`:''}</div></details><div class="phone-video-state" id="optimisedVideoState"><span></span>Ready · 720p</div></div><div class="phone-video-quality">Optimised 720p · about ${formatMediaSize(APP_VIDEO_MINUTE_ESTIMATE_BYTES)}/min</div><div class="phone-video-controls" id="optimisedVideoControls">${chooseButton}<button type="button" class="phone-video-record-button" id="optimisedVideoStart" aria-label="Start recording"><span></span><small>Record</small></button><span class="phone-video-control-space" aria-hidden="true"></span></div><div class="phone-video-review hide" id="optimisedVideoReview"><button type="button" class="phone-video-review-button" id="optimisedVideoRetake">Retake</button><button type="button" class="phone-video-review-button primary" id="optimisedVideoUse">${esc(saveLabel)}</button></div></div></div>`);
 const modal=document.getElementById('optimisedVideoModal'),preview=document.getElementById('optimisedVideoPreview'),playback=document.getElementById('optimisedVideoPlayback'),stateEl=document.getElementById('optimisedVideoState'),controls=document.getElementById('optimisedVideoControls'),review=document.getElementById('optimisedVideoReview'),startButton=document.getElementById('optimisedVideoStart'),startLabel=startButton.querySelector('small'),promptDrawer=document.getElementById('optimisedVideoPrompt');preview.srcObject=stream;document.documentElement.classList.add('video-recorder-open');
 return new Promise(resolve=>{
  let recorder=null,chunks=[],started=0,seconds=0,blob=null,url='',timer=null,settled=false;
  const clearTimer=()=>{if(timer){clearInterval(timer);timer=null}};
  const clearRecording=()=>{if(url)URL.revokeObjectURL(url);url='';blob=null;playback.pause();playback.removeAttribute('src');playback.load()};
  const finish=result=>{if(settled)return;settled=true;clearTimer();stream?.getTracks().forEach(track=>track.stop());preview.srcObject=null;clearRecording();document.documentElement.classList.remove('video-recorder-open');modal.remove();resolve(result)};
  const reset=()=>{clearRecording();preview.classList.remove('hide');playback.classList.add('hide');controls.classList.remove('hide');review.classList.add('hide');modal.classList.remove('is-recording','is-reviewing');stateEl.innerHTML='<span></span>Ready · 720p';startButton.classList.remove('recording');startButton.setAttribute('aria-label','Start recording');startLabel.textContent='Record'};
  const stop=()=>{if(recorder?.state==='recording'){stateEl.innerHTML='<span></span>Finishing…';recorder.stop()}};
  const start=()=>{const mime=preferredWalkthroughMime();chunks=[];started=Date.now();seconds=0;if(promptDrawer)promptDrawer.open=false;try{recorder=createOptimisedMediaRecorder(stream,'video',mime)}catch(error){console.error(error);toast('Unable to start the video recorder');return}recorder.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data)};recorder.onerror=error=>{console.error('Optimised video recorder error',error);toast('The video could not be completed on this device')};recorder.onstop=async()=>{clearTimer();modal.classList.remove('is-recording');try{const type=String(recorder.mimeType||mime||'video/webm').split(';')[0].trim()||'video/webm';blob=await normaliseRecordedBlob(new Blob(chunks,{type}),'video/webm');if(!blob.size)throw new Error('Recording is empty');seconds=Math.max(1,Math.round((Date.now()-started)/1000));url=URL.createObjectURL(blob);playback.src=url;playback.load();preview.classList.add('hide');playback.classList.remove('hide');controls.classList.add('hide');review.classList.remove('hide');modal.classList.add('is-reviewing');stateEl.innerHTML=`<span></span>Review · ${formatDuration(seconds)} · ${formatMediaSize(blob.size)}`;startButton.classList.remove('recording');startLabel.textContent='Record'}catch(error){console.error('Video validation failed',error);toast('The video recording was empty or invalid');reset()}};recorder.start(1000);modal.classList.add('is-recording');startButton.classList.add('recording');startButton.setAttribute('aria-label','Stop recording');startLabel.textContent='Stop';stateEl.innerHTML='<span></span>Recording · 00:00';timer=setInterval(()=>{const elapsed=Math.max(0,Math.floor((Date.now()-started)/1000));stateEl.innerHTML=`<span></span>Recording · ${String(Math.floor(elapsed/60)).padStart(2,'0')}:${String(elapsed%60).padStart(2,'0')}`},250)};
  startButton.onclick=()=>recorder?.state==='recording'?stop():start();document.getElementById('optimisedVideoCancel').onclick=()=>{if(recorder?.state==='recording'&&!confirm('Stop and discard this video?'))return;if(recorder?.state==='recording'){recorder.onstop=()=>finish(null);try{recorder.stop()}catch{finish(null)}}else finish(null)};document.getElementById('optimisedVideoChoose')?.addEventListener('click',()=>{finish(null);setTimeout(()=>fallbackInput?.click(),0)});document.getElementById('optimisedVideoRetake').onclick=reset;document.getElementById('optimisedVideoUse').onclick=()=>{if(!blob)return;const result={blob,duration:formatDuration(seconds),seconds,size:blob.size,type:blob.type};blob=null;finish(result)};
 });
}
function walkthroughRecorderIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="6.5" width="12.5" height="11" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 10l4-2v8l-4-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9.75" cy="12" r="2.1" fill="none" stroke="currentColor" stroke-width="2"/></svg>`}
async function reviewWalkthroughCoverage(n,a,video,{name='',type='',duration='',optimised=false,intendedCodes=[]}={}){
 const valid=new Set(walkthroughKnowledge(a).map(([code])=>code)),intended=[...new Set(intendedCodes.filter(code=>valid.has(code)))];if(!intended.length)return toast('Select at least one Skill or Behaviour before recording');
 const url=URL.createObjectURL(video);app.insertAdjacentHTML('beforeend',`<div class="modal" id="walkCoverageReview"><div class="modal-card video-modal"><div class="number">Review your video</div><h2>Did you actually cover these KSBs?</h2><p class="muted">Watch your video back. Untick anything you planned to cover but did not actually demonstrate. You can always record another video afterwards.</p><video id="walkCoveragePlayback" controls playsinline webkit-playsinline preload="metadata" style="width:100%;max-height:360px;border-radius:14px"></video><div class="walkthrough-review-list">${walkthroughKnowledge(a).filter(([code])=>intended.includes(code)).map(([code,text])=>`<label class="walkthrough-review-row"><input type="checkbox" data-review-walk-code="${esc(code)}" checked><span><strong>${esc(code)} · ${esc(learnerPromptTitle(a.n,code,text))}</strong><small>${esc(text)}</small></span></label>`).join('')}</div><div class="btn-row"><button type="button" class="btn secondary" id="cancelWalkCoverage">Discard video</button><button type="button" class="btn" id="confirmWalkCoverage">Save video</button></div></div></div>`);
 const modal=document.getElementById('walkCoverageReview'),player=document.getElementById('walkCoveragePlayback');player.src=url;player.load();const cleanup=()=>{player.pause();player.removeAttribute('src');player.load();URL.revokeObjectURL(url);modal.remove()};document.getElementById('cancelWalkCoverage').onclick=cleanup;document.getElementById('confirmWalkCoverage').onclick=async()=>{const confirmed=[...modal.querySelectorAll('[data-review-walk-code]:checked')].map(x=>x.dataset.reviewWalkCode);if(!confirmed.length)return toast('Keep at least one Skill or Behaviour that the video actually covers');document.getElementById('confirmWalkCoverage').disabled=true;try{await saveWalkthroughVideo(n,confirmed,video,{name,type,duration,optimised,intendedCodes:intended});cleanup()}catch(error){console.error('Walkthrough video save failed',error);document.getElementById('confirmWalkCoverage').disabled=false;toast('The video could not be saved')}};
}
async function openWalkthroughRecorder(n,a,intendedCodes,fallbackInput){
 const labels=walkthroughKnowledge(a).filter(([code])=>intendedCodes.includes(code)).map(([code,text])=>`${code} — ${learnerPromptTitle(a.n,code,text)}`),detail=labels.join(' · ');
 const result=await recordOptimisedVideo({title:'Record a Video',instruction:'Record as much or as little as you need. There is no time limit.',detail,criterionCode:`${intendedCodes.length} KSB${intendedCodes.length===1?'':'s'}`,fallbackInput,saveLabel:'Review video'});if(!result)return;
 const mime=result.type||result.blob.type||'video/webm',ext=mediaExtensionForMime(mime,'video'),recordingName=`assignment-${n}-video-${Date.now()}.${ext}`;await reviewWalkthroughCoverage(n,a,result.blob,{name:recordingName,type:mime,duration:result.duration,optimised:true,intendedCodes});
}
function renderWalkthrough(){
 const a=assignment(state.assignment);if(!a){state.view='home';render();return}
 const items=walkthroughKnowledge(a),progress=walkthroughCount(a.n),submissions=walkthroughAllSubmissions(a.n),thumbnailUrls=[];
 if(!items.length){app.innerHTML=shell(`<button class="back" id="walkBack">← EP${a.n}</button><section class="card panel"><h2>Record a Video</h2><p class="muted">No ${COURSE.nvqUnits?'Learning Outcomes':'Skill or Behaviour criteria'} are mapped to this Evidence Pack.</p></section>`);document.getElementById('walkBack').onclick=()=>{state.view='assignment';render()};return}
 const selector=items.map(([code,text])=>`<label class="walkthrough-review-row"><input type="checkbox" data-walk-plan-code="${esc(code)}"><span><strong>${esc(code)} · ${esc(learnerPromptTitle(a.n,code,text))}</strong><small>${esc(text)}</small></span></label>`).join('');
 const saved=submissions.map((item,index)=>{const codes=item.confirmedCodes||[],label=codes.join(', ');return `<article class="walkthrough-mini-tile complete"><div class="walkthrough-mini-copy"><strong class="walkthrough-mini-code">Video ${index+1}</strong><h3>${esc(label||'Saved video')}</h3><p>${codes.length} ${COURSE.nvqUnits?'LO':'KSB'}${codes.length===1?'':'s'} confirmed${item.duration?` · ${esc(item.duration)}`:''}${item.size?` · ${formatMediaSize(item.size)}`:''}</p><div class="walkthrough-mini-actions"><button class="link-button" data-view-walk-submission="${esc(item.id)}">View</button><button class="link-button" data-remove-walk-submission="${esc(item.id)}">Remove</button></div></div><video class="walkthrough-video-thumbnail" data-walk-submission-thumb="${esc(item.id)}" muted playsinline preload="metadata"></video></article>`}).join('');
 app.innerHTML=shell(`<button class="back no-print" id="walkBack">← EP${a.n}</button><section class="walkthrough-head"><div><div class="number">Record a Video</div><h2>${esc(a.title)}</h2><p>Select the ${COURSE.nvqUnits?'Learning Outcomes':'Skills and Behaviours'} you intend to cover, then record one video. There is no time limit.</p></div><span class="status-pill ${walkthroughSaved(a.n)?'done':''}">${progress.done}/${progress.total}</span></section><section class="card panel"><div class="panel-body"><div class="field"><label>${COURSE.nvqUnits?'Learning Outcomes':'Skills and Behaviours'} you plan to cover</label><p class="help">Choose every ${COURSE.nvqUnits?'Learning Outcome':'Skill or Behaviour'} you intend to demonstrate in this video. After recording, you will check this list again and remove anything you did not actually cover.</p><div class="walkthrough-review-list">${selector}</div></div><input class="sr-only" id="walkSharedVideoInput" type="file" accept="video/*"><div class="video-source-row"><button class="btn video-source-btn" id="recordSharedWalkVideo" disabled>${appIcon('video','button-icon')}<span>Record video</span></button><button class="btn secondary video-source-btn" id="chooseSharedWalkVideo" disabled>${appIcon('gallery','button-icon')}<span>Choose existing</span></button></div></div></section>${saved?`<section class="walkthrough-head"><div><div class="number">Saved evidence</div><h2>${submissions.length} video${submissions.length===1?'':'s'}</h2><p>You can record another video at any time to cover other Skills or Behaviours.</p></div></section><section class="walkthrough-tile-list">${saved}</section>`:''}<section class="card panel walkthrough-save-panel ${walkthroughSaved(a.n)?'complete':''}"><div><h3>${walkthroughSaved(a.n)?'Video evidence saved':'Save video evidence'}</h3><p class="muted">${submissions.length?`${progress.done} of ${progress.total} ${COURSE.nvqUnits?'Learning Outcomes':'Skills/Behaviours'} currently have video evidence. Save when you are happy with this evidence; you can add more videos later.`:'Record at least one video first.'}</p></div><button class="btn" id="saveWalkthroughOverall" ${submissions.length?'':'disabled'}>${walkthroughSaved(a.n)?'Save updated video evidence':'Save video evidence'}</button></section>`);
 const selectedCodes=()=>[...document.querySelectorAll('[data-walk-plan-code]:checked')].map(x=>x.dataset.walkPlanCode),recordBtn=document.getElementById('recordSharedWalkVideo'),chooseBtn=document.getElementById('chooseSharedWalkVideo'),input=document.getElementById('walkSharedVideoInput'),syncButtons=()=>{const any=selectedCodes().length>0;recordBtn.disabled=!any;chooseBtn.disabled=!any};document.querySelectorAll('[data-walk-plan-code]').forEach(x=>x.onchange=syncButtons);syncButtons();
 const releaseThumbs=()=>thumbnailUrls.splice(0).forEach(url=>URL.revokeObjectURL(url));document.getElementById('walkBack').onclick=()=>{releaseThumbs();state.view='assignment';state.walkthroughCode=null;render()};document.getElementById('saveWalkthroughOverall').onclick=()=>saveWalkthroughOverall(a.n);recordBtn.onclick=()=>{const codes=selectedCodes();if(!codes.length)return toast(`Select at least one ${COURSE.nvqUnits?'Learning Outcome':'Skill or Behaviour'} first`);releaseThumbs();openWalkthroughRecorder(a.n,a,codes,input)};chooseBtn.onclick=()=>{if(!selectedCodes().length)return toast(`Select at least one ${COURSE.nvqUnits?'Learning Outcome':'Skill or Behaviour'} first`);input.click()};input.onchange=async e=>{const file=e.target.files?.[0],codes=selectedCodes();e.target.value='';if(!file||!codes.length)return;await reviewWalkthroughCoverage(a.n,a,file,{name:file.name,type:file.type,intendedCodes:codes})};
 document.querySelectorAll('[data-remove-walk-submission]').forEach(button=>button.onclick=async()=>{releaseThumbs();await removeWalkthroughSubmission(a.n,button.dataset.removeWalkSubmission);toast('Video removed')});document.querySelectorAll('[data-view-walk-submission]').forEach(button=>button.onclick=async()=>{const item=walkthroughAllSubmissions(a.n).find(x=>x.id===button.dataset.viewWalkSubmission),stored=await getStore(item?.blobKey),blob=storedWalkthroughBlob(stored,item);if(!blob)return toast('Video file could not be opened');const url=URL.createObjectURL(blob);app.insertAdjacentHTML('beforeend',`<div class="modal" id="walkVideoModal"><div class="modal-card video-modal"><video id="walkSavedPlayback" controls playsinline webkit-playsinline preload="metadata"></video><div class="btn-row"><button class="btn secondary" id="openWalkVideoFile">Open / save video</button><button class="btn secondary" id="closeWalkVideo">Close</button></div></div></div>`);const player=document.getElementById('walkSavedPlayback');player.src=url;player.load();document.getElementById('openWalkVideoFile').onclick=()=>{const link=document.createElement('a');link.href=url;link.download=item?.name||'video-evidence.webm';document.body.appendChild(link);link.click();link.remove()};document.getElementById('closeWalkVideo').onclick=()=>{player.pause();player.removeAttribute('src');player.load();URL.revokeObjectURL(url);document.getElementById('walkVideoModal').remove()}});document.querySelectorAll('[data-walk-submission-thumb]').forEach(async video=>{const item=walkthroughAllSubmissions(a.n).find(x=>x.id===video.dataset.walkSubmissionThumb);try{const stored=await getStore(item?.blobKey),blob=storedWalkthroughBlob(stored,item);if(!blob)return;const url=URL.createObjectURL(blob);thumbnailUrls.push(url);video.src=url;video.currentTime=.1}catch(error){console.warn('Thumbnail unavailable',error)}});
}
function assignmentRPL(n){return !!state.data[packStatusKey(n)]?.rpl}
const INDIVIDUAL_RPL_KEY=()=>`${COURSE.id}:individualRpl:v1`;
function individualRplCriterionKey(n,code){const a=assignment(n);return COURSE.nvqUnits?`${a?.unit||n}:${code}`:String(code)}
function individualRplMap(){const value=state.data[INDIVIDUAL_RPL_KEY()];return value&&typeof value==='object'&&!Array.isArray(value)?value:{}}
function criterionRPL(n,code){return !!individualRplMap()[individualRplCriterionKey(n,code)]}
function assignmentIndividualRplCodes(n){const a=assignment(n);return a?(a.ksbs||[]).filter(([code])=>criterionRPL(n,code)).map(([code])=>code):[]}
function assignmentHasIndividualRPL(n){return assignmentIndividualRplCodes(n).length>0}
function individualRplCodeParts(code){
 const value=String(code||'').trim().toUpperCase(),match=value.match(/^([KSB])\s*(\d+)(?:[.\-](\d+))?/),group={K:0,S:1,B:2};
 return {group:Object.prototype.hasOwnProperty.call(group,match?.[1])?group[match[1]]:3,number:match?Number(match[2]):Number.MAX_SAFE_INTEGER,sub:match?.[3]?Number(match[3]):0,value};
}
function compareIndividualRplItems(a,b){
 if(COURSE.nvqUnits){const unit=String(a.unit||'').localeCompare(String(b.unit||''),undefined,{numeric:true,sensitivity:'base'});if(unit)return unit}
 const left=individualRplCodeParts(a.code),right=individualRplCodeParts(b.code);
 return left.group-right.group||left.number-right.number||left.sub-right.sub||left.value.localeCompare(right.value,undefined,{numeric:true,sensitivity:'base'});
}
function individualRplRecords(){const saved=individualRplMap(),records=[];for(const [criterionKey,item] of Object.entries(saved)){const matches=courseAssignments().filter(a=>!a.selectOptional&&(COURSE.nvqUnits?`${a.unit||a.n}:${item.code}`===criterionKey:(a.ksbs||[]).some(([code])=>String(code)===String(item.code))));if(!matches.length)continue;records.push({...item,unit:item.unit||matches[0]?.unit||'',criterionKey,assignments:matches.map(a=>a.n),assignmentTitles:matches.map(a=>a.title)})}return records.sort(compareIndividualRplItems)}
// Legacy practical records stay in storage but are deliberately neither exposed nor counted.
function evidenceSections(){return ['photos','statement',COURSE.nvqUnits?'discussion':'walkthrough','professionalDiscussion','supporting','witness']}
function evidenceCapability(section){
 if(COURSE.nvqUnits)return 'ALL LO';
 return ({photos:'S',statement:'K',walkthrough:'S-B',discussion:'S-B',professionalDiscussion:'K-B',supporting:'K-S-B',witness:'S-B',practical:'S-B'}[section]||'');
}
function isVideoEvidenceRecording(record){return !!record&&(String(record.type||'').toLowerCase().startsWith('video/')||String(record.data||'').toLowerCase().startsWith('data:video/'))}
function evidenceCodesFromVersion(a,section,v){
 if(!v)return [];
 if(section==='photos')return selectedKsbCodes(a,v);
 if(section==='statement')return COURSE.nvqUnits?statementSelectedKsbCodes(a,v):statementSelectedKsbCodes(a,v).filter(code=>/^K/i.test(code));
 if(section==='witness')return COURSE.nvqUnits?[...new Set([...selectedNvqOutcomes(a,v).map(([code])=>code),...selectedKsbCodes(a,v)])]:selectedKsbCodes(a,v);
 if(section==='practical')return COURSE.nvqUnits?[...new Set([...selectedNvqOutcomes(a,v).map(([code])=>code),...selectedKsbCodes(a,v)])]:selectedKsbCodes(a,v).filter(code=>/^[SB]/i.test(String(code)));
 if(section==='discussion')return Object.keys(v.recordings||{}).filter(code=>isVideoEvidenceRecording(v.recordings?.[code]));
 if(section==='professionalDiscussion')return [...new Set([...(v.voiceSubmissions||[]).flatMap(item=>item.confirmedCodes||[]),...Object.keys(v.recordings||{}).filter(code=>!!v.recordings?.[code]?.data)])];
 if(section==='supporting')return selectedKsbCodes(a,v);
 return [];
}
function previouslyUsedCodesForEvidenceType(n,section){
 const a=assignment(n),used=new Set();
 if(!a)return used;
 sectionData(n,section).versions.forEach(v=>evidenceCodesFromVersion(a,section,v).forEach(code=>used.add(code)));
 return used;
}
function applyEvidenceReuseLocks(a,section,d){
 const used=previouslyUsedCodesForEvidenceType(a.n,section);
 if(!used.size)return;
 const selectors=['[data-ksb-evidence-toggle]','[data-nvq-toggle]','[data-record-code]','[data-record-pd-code]'];
 document.querySelectorAll(selectors.join(',')).forEach(button=>{
  const code=button.dataset.ksbEvidenceToggle||button.dataset.nvqToggle||button.dataset.recordCode||button.dataset.recordPdCode;
  if(!used.has(code))return;
  button.disabled=true;
  button.setAttribute('aria-disabled','true');
  button.title=`${code} already has ${sectionTitleText(section)} evidence. Choose a different evidence type to increase coverage.`;
  const card=button.closest('.outcome-tick,.outcome-card,.skill-assessment,.discussion-outcome,.walkthrough-mini-tile')||button.parentElement;
  if(card){card.classList.add('evidence-type-used');if(!card.querySelector('.evidence-type-used-note'))card.insertAdjacentHTML('beforeend','<span class="evidence-type-used-note">Already evidenced by this type</span>')}
 });
}
function sectionTitleText(section){return ({photos:'Take Photos',statement:'Write About It',discussion:'Record a Video',walkthrough:'Record a Video',witness:'Employer Verification',practical:'Assessor Observation',professionalDiscussion:'Talk About It',supporting:COURSE.nvqUnits?'Documents':'Upload Evidence'}[section]||'this evidence type')}
function nvqOutcomeCoverage(n){
 const a=assignment(n),result={};if(!a||!COURSE.nvqUnits)return result;
 a.ksbs.forEach(([code])=>result[code]={count:0,sources:[]});
 const required=Number(COURSE.evidenceRequirement||2),add=(code,source)=>{if(result[code]&&!result[code].sources.includes(source)){result[code].sources.push(source);result[code].count=Math.min(required,result[code].sources.length)}};
 sectionData(n,'photos').versions.forEach(v=>selectedKsbCodes(a,v).forEach(code=>add(code,'Photographic evidence')));
 sectionData(n,'statement').versions.forEach(v=>selectedKsbCodes(a,v).forEach(code=>add(code,'Learner statement')));
 walkthroughKnowledge(a).forEach(([code])=>{if(walkthroughComplete(n,code))add(code,'Video walkthrough')});
 sectionData(n,'professionalDiscussion').versions.forEach(v=>evidenceCodesFromVersion(a,'professionalDiscussion',v).forEach(code=>add(code,'Professional discussion')));
 sectionData(n,'witness').versions.forEach(v=>selectedKsbCodes(a,v).forEach(code=>add(code,'Witness testimony')));
 sectionData(n,'supporting').versions.forEach(v=>selectedKsbCodes(a,v).forEach(code=>add(code,'Uploaded evidence')));
 a.ksbs.forEach(([code])=>{if(criterionRPL(n,code))result[code]={count:required,sources:['RPL'],rpl:true}});
 return result;
}
function nvqCoverageComplete(n){const required=Number(COURSE.evidenceRequirement||2),values=Object.values(nvqOutcomeCoverage(n));return values.length>0&&values.every(item=>item.count>=required)}
function nvqCoverageSummary(n){const required=Number(COURSE.evidenceRequirement||2),coverage=nvqOutcomeCoverage(n),items=Object.entries(coverage),met=items.filter(([,v])=>v.count>=required).length;return {coverage,total:items.length,met,requirementsMet:items.reduce((sum,[,v])=>sum+Math.min(required,v.count),0),requirementsTotal:items.length*required,missing:items.filter(([,v])=>v.count<required).map(([code,v])=>`${code} ${v.count}/${required}`)}}
function selectedKsbCodes(a,d){
 const valid=new Set(a.ksbs.map(([code])=>code));
 const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence:[];
 const photoLinked=Object.keys(d?.outcomePhotos||{}).filter(code=>!!d.outcomePhotos?.[code]?.data);
 const scored=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]).filter(code=>Object.entries(d?.scores||{}).some(([key,value])=>String(key).split('::')[0]===code&&Number(value)>0));
 const recorded=Object.keys(d?.recordings||{}).filter(code=>!!d.recordings?.[code]?.data);
 return [...new Set([...explicit,...photoLinked,...scored,...recorded].filter(code=>valid.has(code)))];
}
function selectedPracticalSkillCodes(a,d){
 const allowed=new Set(a.ksbs.map(([code])=>code));
 const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence.filter(code=>allowed.has(code)):[];
 if(explicit.length)return explicit;
 const scored=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]);
 return [...new Set(scored.filter(code=>allowed.has(code)))];
}
function ksbEvidenceCoverage(n){
 const a=assignment(n),result={};if(!a||COURSE.nvqUnits)return result;
 a.ksbs.forEach(([code])=>result[code]={count:0,sources:[]});
 const required=Number(COURSE.evidenceRequirement||2),add=(code,source)=>{if(result[code]&&!result[code].sources.includes(source)){result[code].sources.push(source);result[code].count=Math.min(required,result[code].sources.length)}};
 sectionData(n,'photos').versions.forEach(v=>selectedKsbCodes(a,v).filter(code=>/^S/i.test(code)).forEach(code=>add(code,'Photographic evidence')));
 sectionData(n,'statement').versions.forEach(v=>selectedKsbCodes(a,v).filter(code=>/^K/i.test(code)).forEach(code=>add(code,'Learner statement')));
 walkthroughKnowledge(a).forEach(([code])=>{if(walkthroughComplete(n,code))add(code,'Video walkthrough')});
 sectionData(n,'witness').versions.forEach(v=>selectedKsbCodes(a,v).filter(code=>/^[SB]/i.test(String(code))).forEach(code=>add(code,'Witness testimony')));
 sectionData(n,'professionalDiscussion').versions.forEach(v=>evidenceCodesFromVersion(a,'professionalDiscussion',v).filter(code=>/^[KB]/i.test(code)).forEach(code=>add(code,'Professional discussion')));
 sectionData(n,'supporting').versions.forEach(v=>selectedKsbCodes(a,v).forEach(code=>add(code,'Uploaded evidence')));
 a.ksbs.forEach(([code])=>{if(criterionRPL(n,code))result[code]={count:Number(COURSE.evidenceRequirement||2),sources:['RPL'],rpl:true}});
 return result;
}
function ksbCoverageComplete(n){const required=Number(COURSE.evidenceRequirement||2),values=Object.values(ksbEvidenceCoverage(n));return values.length>0&&values.every(item=>item.count>=required)}
function ksbCoverageSummary(n){const required=Number(COURSE.evidenceRequirement||2),coverage=ksbEvidenceCoverage(n),items=Object.entries(coverage);return {coverage,total:items.length,met:items.filter(([,v])=>v.count>=required).length,requirementsMet:items.reduce((sum,[,v])=>sum+Math.min(required,v.count),0),requirementsTotal:items.length*required,missing:items.filter(([,v])=>v.count<required).map(([code,v])=>`${code} ${v.count}/${required}`)}}
function evidenceCoverageCount(n,code){const coverage=COURSE.nvqUnits?nvqOutcomeCoverage(n):ksbEvidenceCoverage(n);return Number(coverage?.[code]?.count||0)}
function savedEvidenceOccurrenceCounts(n){
 const a=assignment(n),counts={};if(!a)return counts;(a.ksbs||[]).forEach(([code])=>counts[code]=0);
 const addCodes=codes=>new Set(codes||[]).forEach(code=>{if(Object.prototype.hasOwnProperty.call(counts,code))counts[code]++});
 for(const section of ['photos','statement','discussion','professionalDiscussion','witness','supporting'])sectionData(n,section).versions.forEach(version=>addCodes(evidenceCodesFromVersion(a,section,version)));
 walkthroughAllSubmissions(n).forEach(record=>addCodes(record.confirmedCodes||record.intendedCodes||(record.code?[record.code]:[])));
 const entries=rplDraft(n).entries||[],entryCodes=new Set();entries.forEach(entry=>{const codes=entry.codes||entry.selected||[];codes.forEach(code=>entryCodes.add(code));addCodes(codes)});
 (a.ksbs||[]).forEach(([code])=>{if(criterionRPL(n,code)&&!entryCodes.has(code))counts[code]++});
 return counts;
}
function evidenceOccurrenceCount(n,code){return Number(savedEvidenceOccurrenceCounts(n)[code]||0)}
function evidenceCoverageBadge(n,code){const count=evidenceOccurrenceCount(n,code),label=`Met ${count} time${count===1?'':'s'}`;return `<span class="evidence-status-pill evidence-occurrence-note${criterionRPL(n,code)?' evidence-rpl-note':''}" title="${label} from saved evidence records">${count}×</span>`}

function assignmentLearningHoursStats(n){
 const entries=otjEntries().filter(e=>Number(e.assignment)===Number(n));
 const total=entries.reduce((sum,e)=>sum+(Number(e.hours)||0),0);
 const allocation=courseOtjAllocation(),target=assignmentOtjTarget(n);
 const targetKnown=!!allocation?.valid&&target>0;
 const percent=targetKnown?Math.min(100,Math.round(total/target*100)):0;
 return {entries,total,target,targetKnown,percent,complete:targetKnown&&total>=target};
}
function assignmentLearningHoursComplete(n){return assignmentLearningHoursStats(n).complete}
function assignmentComplete(n){return assignmentRPL(n)||((COURSE.nvqUnits?nvqCoverageComplete(n):ksbCoverageComplete(n))&&assignmentLearningHoursComplete(n))}
function packDownloaded(n){return !!state.data[packStatusKey(n)]?.downloaded}
function packUploaded(n){return !!state.data[packStatusKey(n)]?.uploaded}
function assignmentSubmitted(n){return assignmentRPL(n)||packUploaded(n)}
function clampPct(n){return Math.max(0,Math.min(100,Math.round(Number(n)||0)))}
function courseTimeFraction(){
 const start=state.profile?.courseStartDate,end=state.profile?.plannedEndDate;if(!start||!end)return null;
 const a=new Date(`${start}T00:00:00`),b=new Date(`${end}T00:00:00`),now=new Date();
 if(!Number.isFinite(a.getTime())||!Number.isFinite(b.getTime())||b<=a)return null;
 return Math.max(0,Math.min(1,(now-a)/(b-a)));
}
function courseTimePercent(){const fraction=courseTimeFraction();return fraction===null?null:clampPct(fraction*100)}
function assignmentHasAnyEvidence(n){
 return evidenceSections().some(s=>sectionHasEvidence(n,s))||walkthroughCount(n).done>0;
}
function assignmentHasSavedPortfolioEvidence(n){
 return ['photos','statement','discussion','professionalDiscussion','witness','supporting'].some(section=>sectionData(n,section).versions.length>0)||walkthroughCount(n).done>0;
}
function completedKsbStats(){
 const required=Number(COURSE.evidenceRequirement||2),outcomes=new Map();
 courseAssignments().filter(a=>!a.selectOptional).forEach(a=>{
  const coverage=COURSE.nvqUnits?nvqOutcomeCoverage(a.n):ksbEvidenceCoverage(a.n);
  (a.ksbs||[]).forEach(([code])=>{
   // NVQ Learning Outcome numbers repeat across units, so each unit/outcome pair is separate.
   // KSB codes are course-wide and may collect distinct evidence across more than one assignment.
   const outcomeKey=COURSE.nvqUnits?`${a.unit||a.n}:${code}`:code;
   if(!outcomes.has(outcomeKey))outcomes.set(outcomeKey,{sources:new Set(),rpl:false});
   const item=outcomes.get(outcomeKey);
   if(assignmentRPL(a.n))item.rpl=true;
   if(criterionRPL(a.n,code))item.rpl=true;
   (coverage?.[code]?.sources||[]).forEach(source=>item.sources.add(source));
  });
 });
 const values=[...outcomes.values()],total=values.length||1;
 const evidenceSlots=values.reduce((sum,item)=>sum+(item.rpl?required:Math.min(required,item.sources.size)),0);
 const requirementsTotal=total*required;
 const completed=values.filter(item=>item.rpl||item.sources.size>=required).length;
 return {
  total,
  completed,
  evidenceSlots,
  requirementsTotal,
  percentage:clampPct(completed/total*100),
  evidencePercentage:clampPct(evidenceSlots/requirementsTotal*100)
 };
}
function completedKsbTypeStats(){
 if(COURSE.nvqUnits)return {knowledge:null,skills:null,behaviours:null};
 const required=Number(COURSE.evidenceRequirement||2),records=new Map();
 courseAssignments().filter(a=>!a.selectOptional).forEach(a=>{
  const coverage=ksbEvidenceCoverage(a.n);
  (a.ksbs||[]).forEach(([code])=>{
   const key=String(code||'').toUpperCase();if(!/^[KSB]\d+/.test(key))return;
   if(!records.has(key))records.set(key,{sources:new Set(),rpl:false});
   const item=records.get(key);
   if(assignmentRPL(a.n)||criterionRPL(a.n,code))item.rpl=true;
   (coverage?.[code]?.sources||[]).forEach(source=>item.sources.add(source));
  });
 });
 const pct=prefix=>{const rows=[...records.entries()].filter(([code])=>code.startsWith(prefix)).map(([,item])=>item);if(!rows.length)return 0;const complete=rows.filter(item=>item.rpl||item.sources.size>=required).length;return clampPct(complete/rows.length*100)};
 return {knowledge:pct('K'),skills:pct('S'),behaviours:pct('B')};
}
function courseProgressStats(){
 const total=courseAssignments().length||1;
 const submitted=courseAssignments().filter(a=>assignmentComplete(a.n)).length;
 const ksb=completedKsbStats();
 // Yellow shows collected evidence progress using the course evidence requirement.
 // Green shows only fully completed KSBs / Learning Outcomes.
 const green=ksb.percentage;
 const yellow=ksb.evidencePercentage;
 const red=courseTimePercent();
 let label='Add course dates',tone='neutral',difference=null;
 if(red!==null){difference=Math.max(green,yellow)-red;if(green>red+5){label='Ahead of target';tone='ahead'}else if(green>=red-5||yellow>=red){label='On target';tone='target'}else{label='Behind target';tone='behind'}}
 return {total,completed:submitted,submitted,ksbCompleted:ksb.completed,ksbTotal:ksb.total,ksbEvidenceSlots:ksb.evidenceSlots,ksbRequirementsTotal:ksb.requirementsTotal,green,yellow,red,label,tone,difference};
}
function formatDateInput(value){if(!value)return 'Not added';const d=new Date(`${value}T00:00:00`);return Number.isFinite(d.getTime())?new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'}).format(d):value}

async function openDB(){
 return new Promise((resolve,reject)=>{const r=indexedDB.open('ApprenticePlusDB',1);r.onupgradeneeded=()=>{const d=r.result;if(!d.objectStoreNames.contains('store'))d.createObjectStore('store')};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
}
async function getStore(k){return new Promise((res,rej)=>{const r=db.transaction('store').objectStore('store').get(k);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function putStore(k,v){return new Promise((res,rej)=>{const r=db.transaction('store','readwrite').objectStore('store').put(v,k);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
async function deleteStore(k){return new Promise((res,rej)=>{const r=db.transaction('store','readwrite').objectStore('store').delete(k);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
function migrateLegacyNvqWalkthroughAudio(){
 let migrated=false;
 for(const [dataKey,section] of Object.entries(state.data||{})){
  const match=dataKey.match(/^(.+):(\d+):discussion$/);if(!match||!COURSES[match[1]]?.nvqUnits||!section)continue;
  const [,courseId,assignmentNumber]=match,pdKey=`${courseId}:${assignmentNumber}:professionalDiscussion`,target=state.data[pdKey]||{draft:blankSection('professionalDiscussion'),versions:[]};target.versions=Array.isArray(target.versions)?target.versions:[];
  const splitRecord=(record,token)=>{const entries=Object.entries(record?.recordings||{}).filter(([,item])=>item?.data),audio=entries.filter(([,item])=>!isVideoEvidenceRecording(item)),video=entries.filter(([,item])=>isVideoEvidenceRecording(item));if(!audio.length)return {record,audio:null};const migrationId=`${courseId}:${assignmentNumber}:${token}`;const moved={...record,recordings:Object.fromEntries(audio),migrationId,migratedFrom:'Legacy LO Video Walkthrough audio'};return {record:{...record,recordings:Object.fromEntries(video)},audio:moved,migrationId}};
  const retained=[];for(let index=0;index<(Array.isArray(section.versions)?section.versions:[]).length;index++){const result=splitRecord(section.versions[index],`version:${index}:${section.versions[index]?.id||section.versions[index]?.date||''}`);if(result.audio&&!target.versions.some(item=>item?.migrationId===result.migrationId)){target.versions.push(result.audio);migrated=true}if(Object.keys(result.record?.recordings||{}).length)retained.push(result.record);else if(result.audio)migrated=true;else retained.push(result.record)}section.versions=retained;
  const draftResult=splitRecord(section.draft||blankSection('discussion'),`draft:${section.draft?.id||section.draft?.date||''}`);if(draftResult.audio){const targetDraft=target.draft||blankSection('professionalDiscussion'),targetDraftUsed=!!(targetDraft.submitted||targetDraft.assessor||targetDraft.activity||targetDraft.signature||Object.keys(targetDraft.recordings||{}).length);if(!targetDraftUsed||targetDraft.migrationId===draftResult.migrationId)target.draft=draftResult.audio;section.draft=Object.keys(draftResult.record.recordings||{}).length?draftResult.record:blankSection('discussion');migrated=true}
  state.data[dataKey]=section;state.data[pdKey]=target;
 }
 return migrated;
}
async function load(){
 state.profile=await getStore('profile')||null;
 state.data=await getStore('data')||{};
 state.dev=!!(await getStore('dev'));
 state.branding=await getStore(BRANDING_KEY)||null;
 const savedCustomCourses=await getStore('developerCustomCourses')||{};
 Object.entries(savedCustomCourses).forEach(([id,course])=>{if(course&&id)COURSES[id]=course});
 const importedCourse=await importCourseFromLocationHash();
 ACTIVE_COURSE_ID=await getStore('activeCourse')||'site-carpentry-v1-4';
 if(!COURSES[ACTIVE_COURSE_ID])ACTIVE_COURSE_ID='site-carpentry-v1-4';
 COURSE=COURSES[ACTIVE_COURSE_ID];
 applyAccessibilitySettings();
 // Migration safety: copy old Site Carpentry keys into course-scoped keys. Never delete legacy records.
 let migrated=false;
 Object.keys(state.data).forEach(k=>{if(/^\d+:(practical|photos|statement|supporting)$/.test(k)){const nk=`site-carpentry-v1-4:${k}`;if(state.data[nk]===undefined){state.data[nk]=state.data[k];migrated=true}}});
 Object.keys(state.data).forEach(k=>{const match=k.match(/^(.+):(\d+):supporting$/);if(!match)return;const witnessKey=`${match[1]}:${match[2]}:witness`;if(state.data[witnessKey]===undefined&&state.data[k]){state.data[witnessKey]=structuredClone(state.data[k]);migrated=true}});
 if(migrateLegacyNvqWalkthroughAudio())migrated=true;
 if(migrated)await saveData();
 let restored=null;try{restored=JSON.parse(localStorage.getItem(NAV_STATE_KEY)||'null')}catch{}
 const restoredApplied=restored?applyNavigationSnapshot(restored):false;
 try{
  localStorage.removeItem('apprenticeplus.operatingMode.v1');
  localStorage.removeItem('apprenticeplus.assessorRegisters.v1');
  document.body.classList.remove('assessor-mode');
 }catch{}
 const assessorOnlyViews=new Set(['assessor-workspace','assessor-section','assessor-reports','assessor-report-category','registers-home','register-create','register-live','register-templates','register-learners','register-history']);
 if(assessorOnlyViews.has(state.view)){
  state.view='home';
  state.assignment=null;
  state.section=null;
 }
 navigationReady=true;
 const restoredScroll=restoredApplied?Number(restored?.scrollY)||0:0;
 const initial=navigationSnapshot(restoredScroll);lastNavigationSignature=navigationSignature(initial);history.replaceState(initial,'');
 render();requestAnimationFrame(()=>window.scrollTo(0,restoredScroll));await importBrandingFromHash();if(!state.profile)showOnboarding()
}
async function saveData(){await putStore('data',state.data)}
async function saveProfile(){await putStore('profile',state.profile)}


function shell(content){
 const toolkitViews=['toolkit','academy','resources','notepad','tools','measuremate','materialmate','drawingmate','cadmate','skillscard','feedbackmate','projectmate','otjmate','remindmate','reviewmate','learning-support','settings','library','trade-courses','trade-test','trade-result','functional-skills','functional-test','functional-result','certificates','academy-knowledge','knowledge-slides','lesson'];
 const epaViews=['epa','epa-results','epa-test','epa-result','epa-discussion','epa-discussion-result','epa-practical'];
 const courseViews=['course','assignment','section','knowledge-test','knowledge-result','walkthrough'];
 const active=toolkitViews.includes(state.view)?'toolkit':epaViews.includes(state.view)?(COURSE.nvqUnits?'epa':'course'):state.view==='ksb-matrix'?'ksb-matrix':courseViews.includes(state.view)?'course':'home';
 const firstName=state.profile?.fullName?.split(' ')?.[0]||'Learner';
 const completionLabel=COURSE.nvqUnits?'Matrix':'KSB Matrix',completionView=COURSE.nvqUnits?'epa':'ksb-matrix';
 return `<main class="shell"><header class="topbar"><div class="brand"><div class="logo update-logo-wrap"><img src="logo-apprentice-plus.png" alt="Apprentice+ logo"><button type="button" class="update-notification-badge no-print" id="updateNotificationButton" aria-label="1 app update ready" hidden>1</button></div><div><div class="brand-title-row"><h1>Apprentice<span class="brand-plus">+</span></h1></div><p class="subtitle brand-tagline">Your Course, Your Way <span class="desktop-mode-indicator" aria-hidden="true">Desktop</span></p></div>${state.branding?.logo?`<div class="college-header-brand"><img src="${state.branding.logo}" alt="${esc(state.branding.name||'College')} logo"><span>${esc(state.branding.name||'')}</span></div>`:''}</div>${state.profile?`<div class="learner-help-wrap"><span class="pill learner-progress-button" id="learnerProgressBtn">${esc(firstName)}</span><button type="button" class="page-help-button no-print" id="pageHelpButton" aria-label="How to use this page">i</button></div>`:''}</header>${content}${state.view==='home'?`<button type="button" class="app-version-bottom no-print" id="developerVersionTrigger" aria-label="App version">${APP_VERSION}</button>`:''}<nav class="bottom-nav bottom-nav-four no-print" aria-label="Main navigation"><button class="bottom-nav-item ${active==='home'?'active':''}" data-nav="home" aria-label="Home"><span>${appIcon('home','nav-icon')}</span><strong>Home</strong></button><button class="bottom-nav-item ${active==='course'?'active':''}" data-nav="course" aria-label="Course"><span>${appIcon('course','nav-icon')}</span><strong>Course</strong></button><button class="bottom-nav-item ${active===completionView?'active':''}" data-nav="${completionView}" aria-label="${completionLabel}"><span>${appIcon(COURSE.nvqUnits?'course':'academy','nav-icon')}</span><strong>${completionLabel}</strong></button><button class="bottom-nav-item ${active==='toolkit'?'active':''}" data-nav="toolkit" aria-label="Toolkit"><span>${appIcon('toolbox','nav-icon')}</span><strong>Toolkit</strong></button></nav></main>`;
}
function learningHoursMateName(){return COURSE.nvqUnits?'GLHMate':'OTJMate'}
function learningHoursShortLabel(){return COURSE.nvqUnits?'GLH':'OTJ'}
function learningHoursLongLabel(){return COURSE.nvqUnits?'Guided learning hours':'Off-the-job'}
function learningHoursEntryLabel(){return COURSE.nvqUnits?'GLH entry':'OTJ entry'}
function topLevelTitleTile(title){return `<section class="main-logo-title-tile"><h2>${esc(title)}</h2></section>`}
function nvqAssignmentGlhEntries(n){return otjEntries().filter(e=>Number(e.assignment)===Number(n)&&!e.portfolioBuilding)}
function nvqAssignmentGlhStats(n){const stats=assignmentLearningHoursStats(n);return {target:stats.target,total:stats.total,percent:stats.percent,entries:stats.entries,complete:stats.complete}}
function nvqGlhActivityOptions(){return {
 college:['College session','Guided workshop','Tutor-led practical session'],
 employer:['Toolbox talk','Supervisor coaching','Practical demonstration','Site induction','Method statement briefing','Risk assessment briefing','Manual handling / H&S training','Manufacturer training'],
 assessor:['Observation with teaching','Professional discussion','Guided teaching','Oral questioning','Progress review'],
 external:['External training','Manufacturer / supplier course','Trade or CPD event'],
 other:['Other guided learning']
}}
function courseHeader(){
 const p=courseProgressStats();
 return `<section class="course-card compact-course-card course-header-simple"><div class="course-summary"><div class="course-copy"><div class="course-title-row"><h2>${COURSE.name}</h2><span class="target-status ${p.tone}">${p.label}</span></div></div></div></section>`;
}
function assignmentCardCode(a){return `EP${a.n}`}

function showWorkSearchLauncher(){const modal=document.createElement('div');modal.className='modal work-search-launcher-modal';modal.id='workSearchLauncherModal';modal.innerHTML=`<section class="modal-card work-search-launcher" role="dialog" aria-modal="true" aria-labelledby="workSearchTitle"><button class="icon-close-button" id="closeWorkSearchLauncher" aria-label="Close assignment search">${appIcon('close')}</button><div class="work-search-launcher-icon">${appIcon('search')}</div><h2 id="workSearchTitle">What are you working on today?</h2><p class="work-search-help">Choose a common activity below or describe the work in your own words.</p><div class="work-search-row"><input class="input" id="workSearchInput" type="search" autocomplete="off" placeholder="e.g. cavity walling, mortices, CNC machine, fixing a tap"><button class="btn" id="workSearchButton">Search</button></div><div class="work-search-suggestions" id="workSearchSuggestions" aria-live="polite"></div></section>`;document.body.appendChild(modal);const close=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)close()};modal.querySelector('#closeWorkSearchLauncher').onclick=close;bindWorkSearch();setTimeout(()=>modal.querySelector('#workSearchInput')?.focus(),50)}
const WORK_SEARCH_GROUPS=[
 {terms:['cnc','computer numerical control','computer controlled machine','machining centre','router'],suggestions:['CNC machine','Machine setting','Machine safety']},
 {terms:['mortice','mortise','mortices','mortises','tenon','mortice and tenon'],suggestions:['Mortice and tenon','Mortice lock','Cutting joints']},
 {terms:['cavity wall','cavity walling','cavity masonry','wall ties','insulation cavity'],suggestions:['Cavity wall','Wall ties','Cavity insulation']},
 {terms:['bricklaying','brickwork','masonry','lay bricks','laying bricks','blockwork'],suggestions:['Cavity wall','Solid wall','Raking back']},
 {terms:['tap','taps','fixing a tap','replace tap','plumbing fitting','water fitting'],suggestions:['Tap replacement','Water isolation','Leak testing']},
 {terms:['door','doors','door set','door frame','hanging a door','hinges'],suggestions:['Door lining','Door hanging','Ironmongery']},
 {terms:['window','windows','window frame','glazing'],suggestions:['Window fitting','Window frame','Glazing']},
 {terms:['roof','roofing','roof structure','rafters','truss'],suggestions:['Roof structure','Trussed roof','Roof timbers']},
 {terms:['stairs','staircase','stair','strings','treads','risers'],suggestions:['Staircase setting out','Strings and treads','Handrails and spindles']},
 {terms:['floor','flooring','joists','floor joists'],suggestions:['Floor joists','Floor structure','Floor finishes']},
 {terms:['wall','walling','partition','partitions'],suggestions:['Partition wall','Wall setting out','Wall finishes']},
 {terms:['health safety','safe working','ppe','risk assessment','method statement'],suggestions:['PPE','Risk assessment','Safe system of work']},
 {terms:['drawing','drawings','plans','specification','setting out'],suggestions:['Read drawings','Setting out','Specifications']},
 {terms:['maintenance','repair','repairs','replace','replacement'],suggestions:['Fault diagnosis','Repair work','Replacement components']},
 {terms:['painting','paint','decorating','decoration'],suggestions:['Surface preparation','Paint application','Finishing coats']},
 {terms:['tiling','tiles','tile'],suggestions:['Wall tiling','Floor tiling','Setting out tiles']},
 {terms:['plaster','plastering','render','rendering'],suggestions:['Plaster repair','Surface preparation','Rendering']}
];
const WORK_SEARCH_STOPWORDS=new Set('a an and are as at be been before being by can carry complete correctly demonstrate for from how in into is it its of on or out safely show the their them they this to use using with work working workplace relevant appropriate activities activity requirements procedures'.split(' '));
function normaliseWorkSearch(value){return String(value||'').toLowerCase().replace(/\b(mortise)\b/g,'mortice').replace(/\b(bricks)\b/g,'brick').replace(/\b(walls)\b/g,'wall').replace(/\b(doors)\b/g,'door').replace(/\b(windows)\b/g,'window').replace(/\b(tiles)\b/g,'tile').replace(/\b(repairs)\b/g,'repair').replace(/[^a-z0-9]+/g,' ').trim()}
function workStem(word){return String(word||'').replace(/(ing|tion|ments|ment|ers|ies|ed|es|s)$/,'')}
function workTokens(value){return normaliseWorkSearch(value).split(/\s+/).filter(w=>w.length>1&&!WORK_SEARCH_STOPWORDS.has(w)).map(workStem)}
function workBigrams(value){const s=normaliseWorkSearch(value).replace(/\s+/g,' '),out=new Set();for(let i=0;i<s.length-1;i++)out.add(s.slice(i,i+2));return out}
function workSimilarity(a,b){const A=workBigrams(a),B=workBigrams(b);if(!A.size||!B.size)return 0;let hit=0;A.forEach(x=>{if(B.has(x))hit++});return (2*hit)/(A.size+B.size)}
function expandedWorkTerms(query){const q=normaliseWorkSearch(query),terms=new Set(workTokens(q));WORK_SEARCH_GROUPS.forEach(group=>{const matched=group.terms.some(term=>q.includes(normaliseWorkSearch(term))||normaliseWorkSearch(term).includes(q)||workSimilarity(q,term)>.68);if(matched)[...group.terms,...group.suggestions].forEach(term=>workTokens(term).forEach(word=>terms.add(word)))});return [...terms]}
function assignmentSearchText(a){return [a.title,...(a.ksbs||[]).flatMap(k=>k)].join(' ')}
function initialWorkSearchOptions(){const assignments=courseAssignments().filter(a=>!a.selectOptional),seen=new Set(),ranked=[];const add=(label,score)=>{const clean=String(label||'').replace(/^[A-Z]+\d*[:.\-]\s*/,'').replace(/\s+/g,' ').trim();const key=normaliseWorkSearch(clean);if(clean.length<3||clean.length>34||seen.has(key))return;seen.add(key);ranked.push({label:clean,score})};assignments.forEach((a,i)=>{add(a.title,120-i);const titleTokens=workTokens(a.title);if(titleTokens.length>=2)add(titleTokens.slice(0,3).join(' '),90-i);(a.ksbs||[]).forEach(k=>{const text=String(k[1]||'');const phrases=text.split(/[.;:]/).map(x=>x.trim()).filter(Boolean);phrases.forEach(phrase=>{const tokens=workTokens(phrase);if(tokens.length>=2&&tokens.length<=5)add(tokens.join(' '),55-i)})})});WORK_SEARCH_GROUPS.forEach((g,i)=>{const corpus=normaliseWorkSearch(assignments.map(assignmentSearchText).join(' '));g.suggestions.forEach(s=>{if(workTokens(s).some(t=>corpus.includes(t)))add(s,80-i)})});return ranked.sort((a,b)=>b.score-a.score).slice(0,8).map(x=>x.label)}
function workSearchResults(query){const q=normaliseWorkSearch(query),qTokens=expandedWorkTerms(q),assignments=courseAssignments().filter(a=>!a.selectOptional);const scored=assignments.map(a=>{const title=normaliseWorkSearch(a.title),criteria=normaliseWorkSearch((a.ksbs||[]).map(k=>k.join(' ')).join(' ')),all=`${title} ${criteria}`,allTokens=new Set(workTokens(all));let score=0;if(title===q)score+=180;else if(title.includes(q)||q.includes(title))score+=125;if(criteria.includes(q))score+=85;for(const term of qTokens){if(workTokens(title).includes(term))score+=28;else if(allTokens.has(term))score+=14;else{const closest=[...allTokens].reduce((m,t)=>Math.max(m,workSimilarity(term,t)),0);if(closest>.72)score+=8*closest}}const titleFuzzy=workSimilarity(q,title),allFuzzy=workSimilarity(q,all);score+=titleFuzzy*75+allFuzzy*30;const matches=(a.ksbs||[]).map(k=>({k,score:workSimilarity(q,k.join(' '))+workTokens(k.join(' ')).filter(t=>qTokens.includes(t)).length*.35})).filter(x=>x.score>.18).sort((x,y)=>y.score-x.score).slice(0,3).map(x=>x.k);return {a,score,matches,confidence:score>=115?'Strong match':score>=55?'Close match':'Possible match'}}).sort((x,y)=>y.score-x.score||x.a.n-y.a.n);const positive=scored.filter(x=>x.score>16);return (positive.length?positive:scored).slice(0,12)}
function showWorkSearchResults(query){const results=workSearchResults(query),strong=results.some(r=>r.score>=55);const modal=document.createElement('div');modal.className='modal work-search-modal';modal.id='workSearchModal';modal.innerHTML=`<section class="modal-card work-search-results"><button class="icon-close-button" id="closeWorkSearch" aria-label="Close search results">${appIcon('close')}</button><div class="work-search-heading"><span>${appIcon('search')}</span><div><h2>${strong?'Matching Evidence Packs':'Best available matches'}</h2><p>${strong?`Results for “${esc(query)}”`:`No exact match for “${esc(query)}”, so these are the closest Evidence Packs in your course.`}</p></div></div><div class="work-search-result-list">${results.map(({a,matches,confidence},i)=>`<button class="work-search-result" data-work-assignment="${a.n}"><span class="work-search-rank">${i+1}</span><span><small>${assignmentCardCode(a)} · ${confidence}</small><strong>${esc(a.title)}</strong>${matches.length?`<em>${matches.map(k=>`${esc(k[0])}: ${esc(k[1])}`).join(' · ')}</em>`:`<em>Closest match based on the Evidence Pack title and course criteria.</em>`}</span><span class="work-search-arrow">›</span></button>`).join('')}</div><div class="work-search-refine"><strong>Not quite right?</strong><span>Try adding the task, tool, material or area of work, such as “cutting roof timbers” or “repairing a leaking tap”.</span></div><button class="btn secondary" id="closeWorkSearchBottom">Close</button></section>`;document.body.appendChild(modal);const close=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)close()};modal.querySelector('#closeWorkSearch').onclick=close;modal.querySelector('#closeWorkSearchBottom').onclick=close;modal.querySelectorAll('[data-work-assignment]').forEach(b=>b.onclick=()=>{state.assignment=Number(b.dataset.workAssignment);state.view='assignment';close();render();window.scrollTo({top:0,behavior:'instant'});showAssignmentSearchPrompt()})}
function showAssignmentSearchPrompt(){const note=document.createElement('div');note.className='assignment-search-prompt';note.innerHTML=`<strong>Gather evidence for this Evidence Pack</strong><span>Use the evidence tiles below to save what you are doing today.</span>`;document.body.appendChild(note);requestAnimationFrame(()=>note.classList.add('show'));setTimeout(()=>{note.classList.remove('show');setTimeout(()=>note.remove(),250)},2000)}
function workSearchSuggestions(query){const q=normaliseWorkSearch(query);if(!q)return initialWorkSearchOptions();const direct=WORK_SEARCH_GROUPS.filter(group=>group.terms.some(term=>q.includes(normaliseWorkSearch(term))||normaliseWorkSearch(term).includes(q)||workSimilarity(q,term)>.6)).flatMap(group=>group.suggestions);const results=workSearchResults(q).slice(0,5).map(x=>x.a.title);return [...new Set([...direct,...results])].slice(0,6)}
function renderWorkSearchSuggestions(){const input=document.getElementById('workSearchInput'),wrap=document.getElementById('workSearchSuggestions');if(!input||!wrap)return;const hasQuery=normaliseWorkSearch(input.value).length>0,suggestions=workSearchSuggestions(input.value);wrap.innerHTML=suggestions.length?`<span class="work-search-suggestion-label">${hasQuery?'Close suggestions':'Popular course activities'}</span><div class="work-search-pill-row">${suggestions.map(term=>`<button type="button" class="work-search-pill" data-work-suggestion="${esc(term)}">${esc(term)}</button>`).join('')}</div>${!hasQuery?'<span class="work-search-prehint">These options are generated from the current course Evidence Packs.</span>':''}`:'';wrap.querySelectorAll('[data-work-suggestion]').forEach(pill=>pill.onclick=()=>{input.value=pill.dataset.workSuggestion||pill.textContent;showWorkSearchResults(input.value.trim());document.getElementById('workSearchLauncherModal')?.remove()})}
function bindWorkSearch(){const input=document.getElementById('workSearchInput'),button=document.getElementById('workSearchButton');if(!input||!button)return;const run=()=>{const q=input.value.trim();if(q.length<2)return toast('Type what you are doing today');showWorkSearchResults(q);document.getElementById('workSearchLauncherModal')?.remove()};button.onclick=run;input.oninput=renderWorkSearchSuggestions;input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();run()}};renderWorkSearchSuggestions()}

let lastRenderedPageSignature='';
function currentPageSignature(){return JSON.stringify([ACTIVE_COURSE_ID,state.view,state.assignment,state.section,state.academyTopic,state.walkthroughCode,state.projectMateTab,state.learningSupportTab,state.reviewMateTab,state.reviewMateDraft?.id,state.reviewMatePlusDraft?.id])}
function scrollNewPageToTop(signature){
 if(restoringNavigation)return;
 if(lastRenderedPageSignature&&signature!==lastRenderedPageSignature){
  requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'instant'})));
 }
 lastRenderedPageSignature=signature;
}
function ensureVideoSubmissionBottomSpacer(){
 const isVideoPage=state.view==='walkthrough'||(state.view==='section'&&['discussion','walkthrough'].includes(state.section));
 if(!isVideoPage)return;
 if(app.querySelector('.video-page-bottom-spacer'))return;
 const spacer=document.createElement('div');
 spacer.className='video-page-bottom-spacer';
 spacer.setAttribute('aria-hidden','true');
 app.appendChild(spacer);
}


const REMOVED_APPRENTICE_PASS_KEY='apprenticeplus.permanentPass.v1';
try{localStorage.removeItem(REMOVED_APPRENTICE_PASS_KEY)}catch{}

function render(){const reopenAdmin=adminModalOpen&&state.dev;const pageSignature=currentPageSignature();recordNavigation();if(state.view==='toolkit')renderToolkit();else if(state.view==='course')renderCourse();else if(state.view==='ksb-matrix')renderKsbMatrix();else if(state.view==='resources')renderToolkit();else if(state.view==='notepad')renderNotepad();else if(state.view==='studymate')renderHomework();else if(state.view==='studymate-homework')renderHomeworkHomework();else if(state.view==='tools')renderTools();else if(state.view==='measuremate')renderMeasurements();else if(state.view==='materialmate')renderMaterialMate();else if(state.view==='drawingmate')renderDrawingMate();else if(state.view==='cadmate')renderCADMate();else if(state.view==='skillscard')renderSkillsCard();else if(state.view==='feedbackmate')renderFeedbackMate();else if(state.view==='projectmate')renderProjectMate();else if(state.view==='otjmate')renderOTJMate();else if(state.view==='remindmate')renderRemindMate();else if(state.view==='reviewmate')renderReviews();else if(state.view==='learning-support')renderLearningSupport();else if(state.view==='settings')renderSettings();else if(state.view==='home')renderHome();else if(state.view==='progress')renderProgressPage();else if(state.view==='assignment')renderAssignment();else if(state.view==='nvq-evidence-mode')renderNvqEvidenceMode();else if(state.view==='academy')renderToolkit();else if(state.view==='library'||state.view==='trade-courses')renderTradeCourses();else if(state.view==='trade-test')renderTradeCourseTest();else if(state.view==='trade-result')renderTradeCourseResult();else if(state.view==='functional-skills')renderFunctionalSkills();else if(state.view==='knowledge-slides')renderKnowledgeSlides();else if(state.view==='academy-knowledge')renderAcademyKnowledge();else if(state.view==='functional-test')renderFunctionalSkillsTest();else if(state.view==='functional-result')renderFunctionalSkillsResult();else if(state.view==='certificates')renderCertificates();else if(state.view==='lesson')renderAcademyLesson();else if(state.view==='epa')COURSE.nvqUnits?renderNvqEvidenceMatrix():renderEpaMockHome();else if(state.view==='epa-results')renderEpaResults();else if(state.view==='epa-test')renderEpaMockTest();else if(state.view==='epa-result')renderEpaMockResult();else if(state.view==='epa-discussion')renderEpaDiscussion();else if(state.view==='epa-discussion-result')renderEpaDiscussionResult();else if(state.view==='epa-practical')renderEpaPractical();else if(state.view==='knowledge-test')renderAssignmentKnowledgeTest();else if(state.view==='knowledge-result')renderAssignmentKnowledgeResult();else if(state.view==='walkthrough')renderWalkthrough();else renderSection();if(state.view==='home')window.ApprenticeReviewTransfer?.mountHome?.({app,shell,state,course:COURSE,render,toast,reviewMateSnapshot});ensureVideoSubmissionBottomSpacer();enhanceVoiceToText(app);applyAccessibilityToCurrentView();syncReadAloudControl();attachPageHelp();scrollNewPageToTop(pageSignature);queueMicrotask(refreshAppNotifications);if(reopenAdmin)queueMicrotask(()=>showDeveloper())}

let activeSpeechRecognition=null;
let activeSpeechButton=null;
function speechRecognitionConstructor(){return window.SpeechRecognition||window.webkitSpeechRecognition||null}
function voiceTextEligible(el){
 if(!el||el.dataset.voiceTextReady==='1'||el.disabled||el.readOnly)return false;
 if(el.matches('textarea'))return true;
 if(!el.matches('input'))return false;
 const type=(el.getAttribute('type')||'text').toLowerCase();
 return ['text','search','email','url','tel'].includes(type);
}
function spokenInsertion(base,start,end,spoken){
 const before=base.slice(0,start),after=base.slice(end),clean=String(spoken||'').trim();
 if(!clean)return base;
 const leftGap=before&&!/\s$/.test(before)?' ':'';
 const rightGap=after&&!/^\s|^[.,!?;:]/.test(after)?' ':'';
 return before+leftGap+clean+rightGap+after;
}
function stopVoiceToText(){
 if(activeSpeechRecognition){try{activeSpeechRecognition.stop()}catch{}}
}
function beginVoiceToText(target,button){
 const Recognition=speechRecognitionConstructor();
 if(!Recognition){toast('Voice to text is not supported on this browser');return}
 if(activeSpeechRecognition){
  const same=activeSpeechButton===button;
  stopVoiceToText();
  if(same)return;
 }
 const recognition=new Recognition();
 const base=target.value||'';
 const start=Number.isInteger(target.selectionStart)?target.selectionStart:base.length;
 const end=Number.isInteger(target.selectionEnd)?target.selectionEnd:start;
 let inserted=false;
 recognition.lang='en-GB';
 // Android Chromium can repeat the same final phrase several times in continuous mode.
 // Use one clean utterance per tap so spoken text is inserted exactly once.
 recognition.continuous=false;
 recognition.interimResults=false;
 recognition.maxAlternatives=1;
 activeSpeechRecognition=recognition;
 activeSpeechButton=button;
 button.classList.add('listening');
 button.setAttribute('aria-pressed','true');
 button.title='Stop voice to text';
 target.focus();
 recognition.onresult=event=>{
  if(inserted)return;
  const result=event.results?.[event.resultIndex]||event.results?.[0];
  const spoken=String(result?.[0]?.transcript||'').trim();
  if(!spoken)return;
  inserted=true;
  target.value=spokenInsertion(base,start,end,spoken);
  const insertedAt=target.value.indexOf(spoken,start);
  const cursor=insertedAt>=0?insertedAt+spoken.length:target.value.length;
  try{target.setSelectionRange(cursor,cursor)}catch{}
  target.dispatchEvent(new Event('input',{bubbles:true}));
  // Stop immediately after the first recognised phrase to prevent duplicate Android results.
  try{recognition.stop()}catch{}
 };
 recognition.onerror=event=>{
  if(event.error==='not-allowed'||event.error==='service-not-allowed')toast('Microphone permission is needed for voice to text');
  else if(event.error!=='no-speech'&&event.error!=='aborted')toast('Voice to text could not start');
 };
 recognition.onend=()=>{
  if(activeSpeechRecognition!==recognition)return;
  button.classList.remove('listening');
  button.setAttribute('aria-pressed','false');
  button.title='Voice to text';
  activeSpeechRecognition=null;
  activeSpeechButton=null;
  target.dispatchEvent(new Event('change',{bubbles:true}));
 };
 try{recognition.start();toast('Listening… speak now')}catch{recognition.onend();toast('Voice to text could not start')}
}
function enhanceVoiceToText(root=document){
 if(!accessibilitySettings().voiceInput)return;
 root.querySelectorAll('textarea,input').forEach(target=>{
  if(!voiceTextEligible(target))return;
  target.dataset.voiceTextReady='1';
  const wrap=document.createElement('div');
  wrap.className='voice-text-field';
  target.parentNode.insertBefore(wrap,target);
  wrap.appendChild(target);
  const button=document.createElement('button');
  button.type='button';
  button.className='voice-text-button no-print';
  button.innerHTML=appIcon('microphone','voice-text-icon');
  button.title='Voice to text';
  button.setAttribute('aria-label','Start voice to text');
  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();beginVoiceToText(target,button)});
  wrap.appendChild(button);
 });
}
const voiceTextObserver=new MutationObserver(records=>{
 records.forEach(record=>record.addedNodes.forEach(node=>{if(node.nodeType===1)enhanceVoiceToText(node.matches?.('textarea,input')?node.parentElement:node)}));
});
voiceTextObserver.observe(app,{childList:true,subtree:true});


function isAcademyKnowledge(code){return COURSE.nvqUnits||String(code).toUpperCase().startsWith('K')}
function courseRevisionTopics(){
 const topics=[];
 courseAssignments().forEach(a=>a.ksbs.filter(([code])=>isAcademyKnowledge(code)).forEach(([code,text],index)=>topics.push({key:`${a.n}:${code}`,code,text,title:learnerPromptTitle(a.n,code,text),assignment:a.n,assignmentTitle:a.title,index})));
 return topics;
}
function academyStyle(topic){const styles=['Explanation','Workplace scenario','Why it matters','Step by step','Problem solving','Trade insight'];return styles[(topic.assignment+topic.index-1)%styles.length]}
function academyContext(topic){
 const course=COURSE.name.toLowerCase();
 if(course.includes('brick'))return 'bricklaying work on site';
 if(course.includes('site carpentry'))return 'site carpentry work';
 if(course.includes('joiner'))return 'architectural joinery work';
 if(course.includes('property'))return 'property maintenance work';
 return 'trowel occupation work in the workplace';
}
function cleanCriterion(text){return String(text||'').trim().replace(/[.]$/,'')}
function academyLessonData(topic){
 const wording=cleanCriterion(topic.text),context=academyContext(topic),style=academyStyle(topic);
 const openings={
  'Explanation':`This topic explains how to ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Workplace scenario':`Imagine you are carrying out ${context} and must demonstrate that you can ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Why it matters':`Understanding how to ${wording.charAt(0).toLowerCase()+wording.slice(1)} is important because it affects safety, quality and the finished result.`,
  'Step by step':`A reliable approach to this topic starts by understanding the requirement to ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Problem solving':`Problems during ${context} are easier to prevent when you understand how to ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Trade insight':`Experienced workers treat the requirement to ${wording.charAt(0).toLowerCase()+wording.slice(1)} as part of professional practice, not as an extra task.`
 };
 const body=`${openings[style]} Before starting, check the relevant information, planned method, materials, tools and workplace conditions. Think about what could change the task and what controls or checks are needed. During the work, follow the agreed process, communicate concerns promptly and compare progress with the specification or expected standard. Do not rely on habit where drawings, instructions or site conditions require a different approach. A competent worker can explain why each decision was made, recognise when advice is needed and record important information. In practice, this knowledge helps you complete ${context} safely, accurately, efficiently and with less risk of defects, waste or delay.`;
 const points=[`Explain the meaning of: ${wording}.`,`Check information, resources and workplace conditions before acting.`,`Follow the agreed method and confirm the finished work meets the required standard.`];
 const questions=[
  {q:`In your own words, what does “${wording}” require you to understand?`,a:`It requires an understanding of the information, decisions and actions needed to meet this requirement during ${context}.`},
  {q:`What should you check before applying this knowledge in the workplace?`,a:'Check the relevant drawings or instructions, the planned method, resources, hazards, controls and required quality standard.'},
  {q:`How would this knowledge help prevent a problem or defect?`,a:'It supports informed decisions, early checks, correct methods and timely communication before an error affects safety, quality, cost or programme.'},
  {q:`Challenge: describe one workplace example where this requirement would change what you do.`,a:`A suitable answer should name a realistic ${context} situation, explain the decision made and link it clearly to the stated requirement.`}
 ];
 return {style,body,points,questions};
}
const ACADEMY_CERTIFICATES_KEY='academyCertificates:v1';
function academyCertificates(){const rows=state.data[ACADEMY_CERTIFICATES_KEY];return rows&&typeof rows==='object'&&!Array.isArray(rows)?rows:{}}
function certificateKey(type,subject){return `${type}:${subject}`}
function certificateThresholds(type,total){
 if(type==='functional'||type==='trade')return {passScore:13,pass:'13/15',merit:'14/15',distinction:'15/15'};
 const pass=Math.ceil(total*.70),merit=Math.ceil(total*.80),distinction=Math.ceil(total*.90);
 return {passScore:pass,pass:`${pass}/${total} (70%)`,merit:`${merit}/${total} (80%)`,distinction:`${distinction}/${total} (90%)`};
}
function certificateCourseTitle(type,subject){
 if(type==='functional')return functionalSkillsConfig(subject).title;
 if(type==='trade')return tradeCourseConfig(subject).title;
 if(type==='knowledge'){const a=courseAssignments().find(x=>String(x.n)===String(subject));return a?`EP${a.n}: ${a.title}`:`Assignment ${subject} Knowledge Assessment`}
 return 'Academy MCQ Assessment';
}
function saveAcademyCertificate(type,subject,result){
 const limits=certificateThresholds(type,result.total);
 if(result.score<limits.passScore)return false;
 const key=certificateKey(type,subject),certs=academyCertificates(),existing=certs[key];
 if(existing&&Number(existing.score)>=Number(result.score))return false;
 certs[key]={id:existing?.id||uid(),key,type,subject:String(subject),title:certificateCourseTitle(type,subject),learner:state.profile?.fullName||'Learner',college:state.branding?.name||'College name not configured',collegeLogo:state.branding?.logo||'',apprenticeLogo:'logo-apprentice-plus.png',score:result.score,total:result.total,percentage:result.percentage,grade:result.grade,date:result.date||today(),thresholds:limits,course:COURSE.name,standard:COURSE.standard||'',updatedAt:new Date().toISOString()};
 state.data[ACADEMY_CERTIFICATES_KEY]=certs;return true;
}
function certificateDocument(cert){
 const collegeLogo=cert.collegeLogo?`<img class="cert-college-logo" src="${cert.collegeLogo}" alt="${esc(cert.college)} logo">`:`<div class="cert-college-placeholder">COLLEGE</div>`;
 return `<article class="training-certificate"><div class="certificate-border"><header class="certificate-brand-row"><div>${collegeLogo}<strong>${esc(cert.college)}</strong></div><img class="cert-apprentice-logo" src="logo-apprentice-plus.png" alt="Apprentice+ logo"></header><div class="certificate-kicker">IN-HOUSE TRAINING CERTIFICATE</div><h1>Certificate of Achievement</h1><p class="certificate-presented">This certificate is presented to</p><h2>${esc(cert.learner)}</h2><p class="certificate-completed">for successfully completing the Apprentice+ MCQ assessment</p><h3>${esc(cert.title)}</h3><div class="certificate-award"><span>${esc(cert.grade)}</span><strong>${cert.score}/${cert.total} · ${cert.percentage}%</strong></div><p class="certificate-disclaimer"><strong>This is not a qualification.</strong> It is an in-house training certificate issued by ${esc(cert.college)} through Apprentice+ to recognise completion of an internal learning assessment.</p><footer><div><span>Date awarded</span><strong>${esc(cert.date)}</strong></div><div><span>Course</span><strong>${esc(cert.course)}</strong></div><div><span>Certificate ID</span><strong>${esc(cert.id)}</strong></div></footer></div></article>`;
}
function openCertificate(cert){
 const wrap=document.createElement('div');wrap.className='modal certificate-modal';wrap.innerHTML=`<section class="certificate-modal-card"><div class="certificate-toolbar no-print"><button class="btn secondary" id="closeCertificate">Close</button><button class="btn" id="printCertificate">Print / save PDF</button></div>${certificateDocument(cert)}</section>`;document.body.appendChild(wrap);wrap.querySelector('#closeCertificate').onclick=()=>wrap.remove();wrap.onclick=e=>{if(e.target===wrap)wrap.remove()};wrap.querySelector('#printCertificate').onclick=()=>window.print();
}
function renderAcademy(){
 app.innerHTML=shell(`<section class="academy-hero"><div class="number">${esc(COURSE.name)}</div><h2>Academy</h2></section><section class="academy-grid academy-square-grid"><button class="academy-square-tile knowledge" id="openKnowledgeSlides"><span class="academy-square-icon">${appIcon('library')}</span><strong>Knowledge Slides</strong></button><button class="academy-square-tile knowledge" id="openLibrary"><span class="academy-square-icon">${appIcon('questions')}</span><strong>Trade Courses</strong></button><button class="academy-square-tile epa" id="openEpaMock"><span class="academy-square-icon">${appIcon('academy')}</span><strong>EPA Academy</strong></button><button class="academy-square-tile functional" id="openFunctionalSkills"><span class="academy-square-icon">${appIcon('functional')}</span><strong>Functional Skills</strong></button><button class="academy-square-tile certificates" id="openCertificates"><span class="academy-square-icon">${appIcon('certificate')}</span><strong>Certificates</strong></button></section>`);
 document.getElementById('openKnowledgeSlides').onclick=()=>{state.view='knowledge-slides';render();window.scrollTo(0,0)};
 document.getElementById('openLibrary').onclick=()=>{state.view='trade-courses';render();window.scrollTo(0,0)};
 document.getElementById('openEpaMock').onclick=()=>{if(COURSE.nvqUnits){toast('EPA Academy is available for apprenticeship standard courses');return}state.view='epa';state.assignment=null;state.section=null;render();window.scrollTo(0,0)};
 document.getElementById('openFunctionalSkills').onclick=()=>{state.view='functional-skills';render();window.scrollTo(0,0)};
 document.getElementById('openCertificates').onclick=()=>{state.view='certificates';render();window.scrollTo(0,0)};
}
function functionalSkillsHistoryKey(subject){return `functionalSkills:${subject}:history:v1`}
function functionalSkillsHistory(subject){const rows=state.data[functionalSkillsHistoryKey(subject)];return Array.isArray(rows)?rows:[]}
function bestMcqResult(rows){return Array.isArray(rows)&&rows.length?rows.reduce((best,row)=>Number(row?.score)>Number(best?.score)?row:best,rows[0]):null}
function compactMcqStatus(result,total=15){if(!result)return 'Not Started';const score=Number(result.score)||0;const grade=score>=15?'Distinction':score===14?'Merit':score===13?'Pass':'Fail';return `${grade} ${score}/${Number(result.total)||total}`}
function functionalSkillsGrade(score){return score===15?'Distinction':score===14?'Merit':score===13?'Pass':'Not achieved'}
function startFunctionalSkillsTest(subject){
 const bank=FUNCTIONAL_SKILLS_BANKS?.[subject];
 if(!Array.isArray(bank)||bank.length!==15)return toast('This Functional Skills test is not ready.');
 state.functionalTest={subject,questions:cloneData(bank),answers:{},index:0};
 state.view='functional-test';render();window.scrollTo(0,0);
}
function functionalSkillsConfig(subject){
 const map={english1:{title:'English Level 1',short:'English L1',icon:'library'},maths1:{title:'Maths Level 1',short:'Maths L1',icon:'revision'},english:{title:'English Level 2',short:'English L2',icon:'library'},maths:{title:'Maths Level 2',short:'Maths L2',icon:'revision'}};
 return map[subject]||{title:'Functional Skills',short:'Functional Skills',icon:'functional'};
}
const ACADEMY_KNOWLEDGE_PROGRESS_KEY='academyKnowledgeProgress:v2';
function academyKnowledgeProgress(){const p=state.data[ACADEMY_KNOWLEDGE_PROGRESS_KEY];return p&&typeof p==='object'?p:{}}
function academyKnowledgeSubjects(section){return section==='functional'?['english1','maths1','english','maths']:['legislation','manualHandling','equalityDiversity','cscs','fireSafety','coshh','mentalHealth','safeguarding','environmentalAwareness']}
function academyKnowledgeSubjectConfig(section,subject){return section==='functional'?functionalSkillsConfig(subject):tradeCourseConfig(subject)}
function academyKnowledgeDeck(section,subject){
 const bank=section==='functional'?FUNCTIONAL_SKILLS_BANKS?.[subject]:window.TRADE_COURSES_BANK?.[subject],cfg=academyKnowledgeSubjectConfig(section,subject);
 return Array.isArray(bank)?bank.map((q,index)=>({...cloneData(q),subject,title:cfg.title,slide:index+1})):[];
}
function academyKnowledgeProgressId(section,subject){return `${section}:${subject}`}
function academyKnowledgeMeta(section,subject){const cfg=academyKnowledgeSubjectConfig(section,subject);return {title:`${cfg.title} Knowledge`,back:'Knowledge Slides',view:'knowledge-slides',icon:cfg.icon}}
function openAcademyKnowledge(section,subject){
 const deck=academyKnowledgeDeck(section,subject);if(!deck.length)return toast('Knowledge slides are not ready.');
 const progress=academyKnowledgeProgress(),progressId=academyKnowledgeProgressId(section,subject),saved=progress[progressId]||{};
 state.academyKnowledge={section,subject,progressId,index:Math.min(Number(saved.index)||0,deck.length-1),deck};state.view='academy-knowledge';render();window.scrollTo(0,0);
}
async function saveAcademyKnowledgePosition(progressId,index,complete=false){
 const all=academyKnowledgeProgress(),previous=all[progressId]||{};all[progressId]={index,complete:!!(complete||previous.complete),updatedAt:new Date().toISOString()};state.data[ACADEMY_KNOWLEDGE_PROGRESS_KEY]=all;await saveData();
}
function knowledgeSubjectsSection(section){
 const progress=academyKnowledgeProgress(),cards=academyKnowledgeSubjects(section).map(subject=>{const cfg=academyKnowledgeSubjectConfig(section,subject),deck=academyKnowledgeDeck(section,subject),progressId=academyKnowledgeProgressId(section,subject),saved=progress[progressId]||{},complete=!!saved.complete,viewed=complete?deck.length:Math.min((Number(saved.index)||0)+1,deck.length);return `<button class="academy-knowledge-subject ${complete?'complete':''}" data-open-knowledge-section="${section}" data-open-knowledge-subject="${subject}"><span class="academy-knowledge-subject-icon">${appIcon(cfg.icon||'library')}</span><span class="academy-knowledge-subject-copy"><small>LEARN BEFORE THE TEST</small><strong>${esc(cfg.title)} Knowledge${complete?' ✓':''}</strong><em>${deck.length} teaching slides · ${complete?'Completed':`${viewed}/${deck.length} progress`}</em></span><span class="academy-knowledge-subject-action">${complete?'Revise':'Learn'} →</span></button>`}).join('');
 return `<section class="academy-knowledge-subsection"><div class="academy-subsection-heading"><div><small>KNOWLEDGE TRAINING</small><h3>Learn by subject</h3><p>Choose the specific subject you want to train before taking its test.</p></div></div><div class="academy-knowledge-subject-grid">${cards}</div></section>`;
}
function renderKnowledgeSlides(){
 app.innerHTML=shell(`<button class="back no-print" id="knowledgeSlidesHomeBack">← Toolkit</button><section class="academy-destination-head"><div class="academy-destination-icon">${appIcon('library')}</div><div><div class="number">Academy</div><h2>Knowledge Slides</h2><p class="muted">Choose one subject to study. Every pack contains exactly 15 teaching slides and saves its progress separately.</p></div></section><section class="academy-knowledge-group"><div class="academy-subsection-heading"><div><small>TRADE KNOWLEDGE</small><h3>Trade Course slide packs</h3></div></div>${knowledgeSubjectsSection('trade')}</section><section class="academy-knowledge-group"><div class="academy-subsection-heading"><div><small>FUNCTIONAL SKILLS KNOWLEDGE</small><h3>English and Maths slide packs</h3></div></div>${knowledgeSubjectsSection('functional')}</section>`);
 document.getElementById('knowledgeSlidesHomeBack').onclick=()=>{state.view='toolkit';render()};
 document.querySelectorAll('[data-open-knowledge-subject]').forEach(b=>b.onclick=()=>openAcademyKnowledge(b.dataset.openKnowledgeSection,b.dataset.openKnowledgeSubject));
}
function renderAcademyKnowledge(){
 const session=state.academyKnowledge;if(!session?.deck?.length){state.view='knowledge-slides';render();return}
 const meta=academyKnowledgeMeta(session.section,session.subject),deck=session.deck,i=Math.max(0,Math.min(Number(session.index)||0,deck.length-1)),q=deck[i],correct=q.options?.[q.answerIndex]||'',isLast=i===deck.length-1;
 app.innerHTML=shell(`<button class="back no-print" id="knowledgeSlidesBack">← ${esc(meta.back)}</button><section class="knowledge-slide-shell"><header class="knowledge-slide-head"><div><div class="number">${esc(q.title)} · Slide ${i+1} of ${deck.length}</div><h2>${esc(q.ksb)}</h2></div><span class="status-pill">${Math.round((i+1)/deck.length*100)}%</span></header><div class="epa-progress"><span style="width:${((i+1)/deck.length)*100}%"></span></div><article class="knowledge-teaching-slide"><section class="knowledge-slide-block scenario"><small>WORKPLACE SCENARIO</small><h3>${esc(q.scenario)}</h3></section><section class="knowledge-slide-block answer"><small>KEY LEARNING</small><h3>${esc(correct)}</h3></section><section class="knowledge-slide-block explanation"><small>WHY THIS IS CORRECT</small><p>${esc(q.explanation)}</p></section><section class="knowledge-slide-block takeaway"><small>REMEMBER</small><p>${esc(q.keyTakeaway)}</p></section></article><div class="knowledge-slide-controls"><button class="btn secondary" id="knowledgeSlidePrev" ${i===0?'disabled':''}>Previous</button>${isLast?'<button class="btn" id="knowledgeSlideComplete">Complete Knowledge</button>':'<button class="btn" id="knowledgeSlideNext">Next</button>'}</div></section>`);
 document.getElementById('knowledgeSlidesBack').onclick=async()=>{await saveAcademyKnowledgePosition(session.progressId,i,false);state.academyKnowledge=null;state.view=meta.view;render()};
 document.getElementById('knowledgeSlidePrev').onclick=async()=>{session.index=Math.max(0,i-1);await saveAcademyKnowledgePosition(session.progressId,session.index,false);renderAcademyKnowledge()};
 const next=document.getElementById('knowledgeSlideNext');if(next)next.onclick=async()=>{session.index=Math.min(deck.length-1,i+1);await saveAcademyKnowledgePosition(session.progressId,session.index,false);renderAcademyKnowledge()};
 const complete=document.getElementById('knowledgeSlideComplete');if(complete)complete.onclick=async()=>{await saveAcademyKnowledgePosition(session.progressId,i,true);toast('Knowledge slides completed');state.academyKnowledge=null;state.view=meta.view;render();window.scrollTo(0,0)};
}
function renderFunctionalSkills(){
 const subjects=['english1','maths1','english','maths'];
 const cards=subjects.map(subject=>{const cfg=functionalSkillsConfig(subject),rows=functionalSkillsHistory(subject),r=bestMcqResult(rows);return `<article class="academy-destination-card functional-test-card"><span>${appIcon(cfg.icon)}</span><h3>${esc(cfg.title)}</h3><span class="status-pill mcq-best-status ${r?.score>=13?'done':r?'fail':''}">${esc(compactMcqStatus(r))}</span><div class="epa-tile-stat"><strong>${rows.length}</strong><span>attempt${rows.length===1?'':'s'} recorded</span></div><button class="btn" data-start-functional="${subject}">Start test</button></article>`}).join('');
 app.innerHTML=shell(`<button class="back no-print" id="functionalSkillsBack">← Toolkit</button><section class="academy-destination-head"><div class="academy-destination-icon">${appIcon('functional')}</div><div><div class="number">Academy</div><h2>Functional Skills</h2><p class="muted">Level 1 and Level 2 tests · Pass 13/15 · Merit 14/15 · Distinction 15/15.</p></div></section><section class="academy-destination-grid">${cards}</section>`);
 document.getElementById('functionalSkillsBack').onclick=()=>{state.view='toolkit';render()};
 document.querySelectorAll('[data-start-functional]').forEach(b=>b.onclick=()=>startFunctionalSkillsTest(b.dataset.startFunctional));
}
function renderFunctionalSkillsTest(){
 const test=state.functionalTest;if(!test?.questions?.length){state.view='functional-skills';render();return}
 const i=test.index,q=test.questions[i],committed=test.answers[i],picked=test.pendingAnswer?.index===i?test.pendingAnswer.value:committed,total=test.questions.length,title=functionalSkillsConfig(test.subject).title;
 const options=q.options.map((o,n)=>`<label class="epa-option ${picked===n?'selected':''}"><input type="radio" name="functionalAnswer" value="${n}" ${picked===n?'checked':''}><span><b>${String.fromCharCode(65+n)}</b>${esc(o)}</span></label>`).join('');
 app.innerHTML=shell(`<button class="back no-print" id="quitFunctional">← Functional Skills</button><section class="epa-test-head"><div><div class="number">${esc(title)} · Question ${i+1} of ${total}</div><h2>${esc(q.ksb)}</h2></div><span class="status-pill">${Object.keys(test.answers).length}/${total} answered</span></section><div class="epa-progress"><span style="width:${((i+1)/total)*100}%"></span></div><section class="card panel epa-question"><h3>${esc(q.scenario)}</h3><div class="epa-options">${options}</div></section><div class="mcq-question-actions"><button class="btn secondary" id="functionalPrev" ${i===0?'disabled':''}>Previous</button><button class="btn" id="functionalSubmit" ${picked===undefined?'disabled':''}>${i===total-1?'Submit test':'Submit answer'}</button></div>`);
 document.getElementById('quitFunctional').onclick=()=>{if(Object.keys(test.answers).length&&!confirm('Leave this test? Your current answers will not be saved.'))return;state.functionalTest=null;state.view='functional-skills';render()};
 document.querySelectorAll('input[name="functionalAnswer"]').forEach(r=>r.onchange=()=>{test.pendingAnswer={index:i,value:Number(r.value)};renderFunctionalSkillsTest()});
 document.getElementById('functionalPrev').onclick=()=>{test.pendingAnswer=null;test.index=Math.max(0,i-1);renderFunctionalSkillsTest();window.scrollTo(0,0)};
 document.getElementById('functionalSubmit').onclick=async()=>{if(picked===undefined)return;test.answers[i]=Number(picked);test.pendingAnswer=null;if(i<total-1){test.index=i+1;renderFunctionalSkillsTest();window.scrollTo(0,0);return}if(Object.keys(test.answers).length<total)return toast(`Answer all ${total} questions before submitting`);const score=test.questions.reduce((n,x,j)=>n+(test.answers[j]===x.answerIndex?1:0),0),result={id:uid(),date:today(),subject:test.subject,score,total,percentage:Math.round(score/total*100),grade:functionalSkillsGrade(score),questions:cloneData(test.questions),answers:cloneData(test.answers)};const history=functionalSkillsHistory(test.subject);history.push(result);state.data[functionalSkillsHistoryKey(test.subject)]=history;saveAcademyCertificate('functional',test.subject,result);await saveData();state.functionalTest={...test,result};state.view='functional-result';render();window.scrollTo(0,0)};
}
function renderFunctionalSkillsResult(){
 const test=state.functionalTest,r=test?.result;if(!test||!r){state.view='functional-skills';render();return}
 const title=functionalSkillsConfig(test.subject).title,wrong=test.questions.map((q,i)=>({q,i,picked:test.answers[i]})).filter(x=>x.picked!==x.q.answerIndex),achieved=r.score>=13;
 app.innerHTML=shell(`<button class="back no-print" id="functionalResultBack">← Functional Skills</button><section class="card panel"><div class="panel-body"><div class="number">${esc(title)} Functional Skills result</div><h2>${r.score}/${r.total} · ${r.percentage}%</h2><span class="status-pill ${achieved?'done':''}">${esc(r.grade)}</span><p class="muted" style="margin-top:12px">${achieved?`You achieved ${esc(r.grade)}. This attempt has been recorded.`:'You need at least 13 correct answers to pass. This attempt has been recorded.'}</p><div class="functional-grade-scale"><span class="${r.score===13?'active':''}">Pass 13/15</span><span class="${r.score===14?'active':''}">Merit 14/15</span><span class="${r.score===15?'active':''}">Distinction 15/15</span></div></div></section>${wrong.length?`<section class="card panel"><div class="panel-body"><h3>Review incorrect answers</h3>${wrong.map(({q,i,picked})=>`<div class="functional-review-item"><strong>${i+1}. ${esc(q.scenario)}</strong><p><b>Your answer:</b> ${esc(q.options[picked]||'Not answered')}</p><p><b>Correct answer:</b> ${esc(q.options[q.answerIndex])}</p><p>${esc(q.explanation)}</p><div class="key-takeaway"><b>Key takeaway</b><span>${esc(q.keyTakeaway)}</span></div></div>`).join('')}</div></section>`:'<section class="card panel"><div class="panel-body"><h3>All answers correct</h3><p class="muted">You achieved Distinction with 15/15.</p></div></section>'}<div class="btn-row"><button class="btn" id="functionalResit">Take another attempt</button><button class="btn secondary" id="functionalDone">Return to Functional Skills</button></div>`);
 document.getElementById('functionalResit').onclick=()=>startFunctionalSkillsTest(test.subject);
 document.getElementById('functionalDone').onclick=document.getElementById('functionalResultBack').onclick=()=>{state.functionalTest=null;state.view='functional-skills';render()};
}

function tradeCourseConfig(subject){
 const map={
  legislation:{title:'Legislation',description:'UK construction health, safety, environmental and building legislation.',icon:'course'},
  manualHandling:{title:'Manual Handling',description:'TILE assessments, lifting technique, team handling and mechanical aids.',icon:'toolbox'},
  equalityDiversity:{title:'Equality & Diversity',description:'Equality Act duties, inclusion, discrimination and workplace behaviour.',icon:'functional'},
  cscs:{title:'CSCS',description:'Construction-site health, safety and environmental awareness practice.',icon:'academy'},
  fireSafety:{title:'Fire Safety',description:'Fire prevention, alarms, evacuation, extinguishers and emergency controls.',icon:'academy'},
  coshh:{title:'COSHH',description:'Hazardous substances, exposure controls, RPE, storage, spills and health protection.',icon:'academy'},
  mentalHealth:{title:'Mental Health Awareness',description:'Recognising warning signs, managing stress, supporting colleagues and accessing professional help.',icon:'academy'},
  safeguarding:{title:'Safeguarding & Professional Standards',description:'Safeguarding, GDPR, conduct, whistleblowing, British values, Prevent, ethics and professional responsibilities.',icon:'academy'},
  environmentalAwareness:{title:'Environmental Awareness',description:'Pollution prevention, protected species, sustainable sourcing, resource efficiency and environmental site controls.',icon:'academy'}
 };
 return map[subject]||{title:'Trade Course',description:'Trade knowledge test.',icon:'library'};
}
function tradeCourseHistoryKey(subject){return `tradeCourse:${subject}:history:v1`}
function tradeCourseHistory(subject){const rows=state.data[tradeCourseHistoryKey(subject)];return Array.isArray(rows)?rows:[]}
function tradeCourseGrade(score){return score===15?'Distinction':score===14?'Merit':score===13?'Pass':'Not achieved'}
function startTradeCourseTest(subject){
 const bank=window.TRADE_COURSES_BANK?.[subject];
 if(!Array.isArray(bank)||bank.length!==15)return toast('This Trade Course test is not ready.');
 state.tradeTest={subject,questions:cloneData(bank),answers:{},index:0};
 state.view='trade-test';render();window.scrollTo(0,0);
}
function renderTradeCourses(){
 const subjects=['legislation','manualHandling','equalityDiversity','cscs','fireSafety','coshh','mentalHealth','safeguarding','environmentalAwareness'];
 const cards=subjects.map(subject=>{const config=tradeCourseConfig(subject),rows=tradeCourseHistory(subject),r=bestMcqResult(rows);return `<article class="academy-destination-card functional-test-card"><span>${appIcon(config.icon)}</span><h3>${esc(config.title)}</h3><p>${esc(config.description)}</p><span class="status-pill mcq-best-status ${r?.score>=13?'done':r?'fail':''}">${esc(compactMcqStatus(r))}</span><div class="epa-tile-stat"><strong>${rows.length}</strong><span>attempt${rows.length===1?'':'s'} recorded</span></div><button class="btn" data-start-trade="${subject}">Start ${esc(config.title)} test</button></article>`}).join('');
 app.innerHTML=shell(`<button class="back no-print" id="tradeCoursesBack">← Toolkit</button><section class="academy-destination-head"><div class="academy-destination-icon">${appIcon('library')}</div><div><div class="number">Academy</div><h2>Trade Courses</h2><p class="muted">Each course contains 15 questions. Pass: 13/15 · Merit: 14/15 · Distinction: 15/15.</p></div></section><section class="academy-destination-grid">${cards}</section>`);
 document.getElementById('tradeCoursesBack').onclick=()=>{state.view='toolkit';render()};
 document.querySelectorAll('[data-start-trade]').forEach(b=>b.onclick=()=>startTradeCourseTest(b.dataset.startTrade));
}
function renderTradeCourseTest(){
 const test=state.tradeTest;if(!test?.questions?.length){state.view='trade-courses';render();return}
 const config=tradeCourseConfig(test.subject),i=test.index,q=test.questions[i],committed=test.answers[i],picked=test.pendingAnswer?.index===i?test.pendingAnswer.value:committed,total=test.questions.length;
 const options=q.options.map((o,n)=>`<label class="epa-option ${picked===n?'selected':''}"><input type="radio" name="tradeAnswer" value="${n}" ${picked===n?'checked':''}><span><b>${String.fromCharCode(65+n)}</b>${esc(o)}</span></label>`).join('');
 app.innerHTML=shell(`<button class="back no-print" id="quitTradeTest">← Trade Courses</button><section class="epa-test-head"><div><div class="number">${esc(config.title)} · Question ${i+1} of ${total}</div><h2>${esc(q.ksb)}</h2></div><span class="status-pill">${Object.keys(test.answers).length}/${total} answered</span></section><div class="epa-progress"><span style="width:${((i+1)/total)*100}%"></span></div><section class="card panel epa-question"><h3>${esc(q.scenario)}</h3><div class="epa-options">${options}</div></section><div class="mcq-question-actions"><button class="btn secondary" id="tradePrev" ${i===0?'disabled':''}>Previous</button><button class="btn" id="tradeSubmit" ${picked===undefined?'disabled':''}>${i===total-1?'Submit test':'Submit answer'}</button></div>`);
 document.getElementById('quitTradeTest').onclick=()=>{if(Object.keys(test.answers).length&&!confirm('Leave this test? Your current answers will not be saved.'))return;state.tradeTest=null;state.view='trade-courses';render()};
 document.querySelectorAll('input[name="tradeAnswer"]').forEach(r=>r.onchange=()=>{test.pendingAnswer={index:i,value:Number(r.value)};renderTradeCourseTest()});
 document.getElementById('tradePrev').onclick=()=>{test.pendingAnswer=null;test.index=Math.max(0,i-1);renderTradeCourseTest();window.scrollTo(0,0)};
 document.getElementById('tradeSubmit').onclick=async()=>{if(picked===undefined)return;test.answers[i]=Number(picked);test.pendingAnswer=null;if(i<total-1){test.index=i+1;renderTradeCourseTest();window.scrollTo(0,0);return}if(Object.keys(test.answers).length<total)return toast(`Answer all ${total} questions before submitting`);const score=test.questions.reduce((n,x,j)=>n+(test.answers[j]===x.answerIndex?1:0),0),result={id:uid(),date:today(),subject:test.subject,score,total,percentage:Math.round(score/total*100),grade:tradeCourseGrade(score),questions:cloneData(test.questions),answers:cloneData(test.answers)};const history=tradeCourseHistory(test.subject);history.push(result);state.data[tradeCourseHistoryKey(test.subject)]=history;saveAcademyCertificate('trade',test.subject,result);await saveData();state.tradeTest={...test,result};state.view='trade-result';render();window.scrollTo(0,0)};
}
function renderTradeCourseResult(){
 const test=state.tradeTest,r=test?.result;if(!test||!r){state.view='trade-courses';render();return}
 const config=tradeCourseConfig(test.subject),wrong=test.questions.map((q,i)=>({q,i,picked:test.answers[i]})).filter(x=>x.picked!==x.q.answerIndex),achieved=r.score>=13;
 app.innerHTML=shell(`<button class="back no-print" id="tradeResultBack">← Trade Courses</button><section class="card panel"><div class="panel-body"><div class="number">${esc(config.title)} result</div><h2>${r.score}/${r.total} · ${r.percentage}%</h2><span class="status-pill ${achieved?'done':''}">${esc(r.grade)}</span><p class="muted" style="margin-top:12px">${achieved?`You achieved ${esc(r.grade)}. This attempt has been recorded.`:'You need at least 13 correct answers to pass. This attempt has been recorded.'}</p><div class="functional-grade-scale"><span class="${r.score===13?'active':''}">Pass 13/15</span><span class="${r.score===14?'active':''}">Merit 14/15</span><span class="${r.score===15?'active':''}">Distinction 15/15</span></div></div></section>${wrong.length?`<section class="card panel"><div class="panel-body"><h3>Review incorrect answers</h3>${wrong.map(({q,i,picked})=>`<div class="functional-review-item"><strong>${i+1}. ${esc(q.scenario)}</strong><p><b>Your answer:</b> ${esc(q.options[picked]||'Not answered')}</p><p><b>Correct answer:</b> ${esc(q.options[q.answerIndex])}</p><p>${esc(q.explanation)}</p><div class="key-takeaway"><b>Key takeaway</b><span>${esc(q.keyTakeaway)}</span></div></div>`).join('')}</div></section>`:'<section class="card panel"><div class="panel-body"><h3>All answers correct</h3><p class="muted">You achieved Distinction with 15/15.</p></div></section>'}<div class="btn-row"><button class="btn" id="tradeResit">Take another attempt</button><button class="btn secondary" id="tradeDone">Return to Trade Courses</button></div>`);
 document.getElementById('tradeResit').onclick=()=>startTradeCourseTest(test.subject);
 document.getElementById('tradeDone').onclick=document.getElementById('tradeResultBack').onclick=()=>{state.tradeTest=null;state.view='trade-courses';render()};
}
function renderCertificates(){
 const certs=Object.values(academyCertificates()).sort((a,b)=>new Date(b.updatedAt||0)-new Date(a.updatedAt||0));
 const cards=certs.map(c=>`<article class="certificate-library-card"><div class="certificate-library-head"><span>${appIcon('certificate')}</span><div><small>${esc(c.type==='functional'?'Functional Skills':c.type==='trade'?'Trade Course':'Course Knowledge')}</small><h3>${esc(c.title)}</h3></div></div><div class="certificate-library-score"><strong>${esc(c.grade)}</strong><span>${c.score}/${c.total} · ${c.percentage}%</span></div><p>${esc(c.learner)} · ${esc(c.date)}</p><button class="btn" data-open-certificate="${esc(c.key)}">View / download</button></article>`).join('');
 app.innerHTML=shell(`<button class="back no-print" id="certificatesBack">← Toolkit</button><section class="academy-destination-head"><div class="academy-destination-icon">${appIcon('certificate')}</div><div><div class="number">Academy</div><h2>Certificates</h2><p class="muted">The best passing certificate for each non-EPA MCQ assessment is stored here.</p></div></section>${certs.length?`<section class="certificate-library-grid">${cards}</section>`:`<section class="card panel"><div class="panel-body academy-empty-state"><span>${appIcon('certificate')}</span><h3>No certificates yet</h3><p>Pass a Functional Skills, Trade Course or assignment knowledge MCQ to earn an in-house training certificate.</p></div></section>`}`);
 document.getElementById('certificatesBack').onclick=()=>{state.view='toolkit';render()};document.querySelectorAll('[data-open-certificate]').forEach(b=>b.onclick=()=>{const cert=academyCertificates()[b.dataset.openCertificate];if(cert)openCertificate(cert)});
}
function renderKnowledgeLibrary(){
 const q=String(state.academySearch||'').trim().toLowerCase();
 const all=courseRevisionTopics();
 const assignments=courseAssignments().map(a=>{const items=all.filter(t=>t.assignment===a.n).filter(t=>!q||`${t.code} ${t.title} ${t.text} ${a.title}`.toLowerCase().includes(q));return {...a,topics:items}}).filter(a=>a.topics.length);
 app.innerHTML=shell(`<button class="back no-print" id="academyBack">← Toolkit</button><section class="library-head"><div class="number">${esc(COURSE.name)} · ${esc(COURSE.standard)}</div><h2>Knowledge Library</h2><p class="muted">Lessons are built automatically from the course wording. Only Knowledge KSBs are shown for apprenticeship standards; NVQ sessions use the Learning Outcome wording.</p><div class="field academy-search"><label for="academySearch">Search knowledge sessions</label><input class="input" id="academySearch" value="${esc(state.academySearch||'')}" placeholder="Search topics or assignments..."></div></section><section class="revision-assignment-list">${assignments.length?assignments.map(a=>`<details class="revision-assignment" ${q?'open':''}><summary><span><small>${COURSE.nvqUnits?`Unit ${esc(a.unit||'Optional')}`:`Assignment ${a.n}`}</small><strong>${esc(a.title)}</strong></span><span class="topic-count">${a.topics.length}</span></summary><div class="revision-topic-list">${a.topics.map(t=>`<button class="revision-topic academy-topic-button" data-topic="${esc(t.key)}"><div><small>${esc(t.code)} · ${esc(academyStyle(t))}</small><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div><span class="status-pill">Open lesson</span></button>`).join('')}</div></details>`).join(''):`<section class="card panel"><h3>No matching knowledge sessions</h3><p class="muted" style="margin-top:6px">Try another search.</p></section>`}</section>`);
 document.getElementById('academyBack').onclick=()=>{state.view='toolkit';render()};
 document.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>{state.academyTopic=b.dataset.topic;state.view='lesson';render();window.scrollTo(0,0)});
 const search=document.getElementById('academySearch');search.oninput=()=>{state.academySearch=search.value;renderKnowledgeLibrary();const next=document.getElementById('academySearch');next.focus();next.setSelectionRange(next.value.length,next.value.length)};
}
function renderAcademyLesson(){
 const topic=courseRevisionTopics().find(t=>t.key===state.academyTopic);if(!topic){state.view='library';render();return}
 const lesson=academyLessonData(topic);const a=courseAssignments().find(x=>x.n===topic.assignment);
 app.innerHTML=shell(`<button class="back no-print" id="lessonBack">← Knowledge Library</button><article class="academy-lesson"><header class="lesson-head"><div class="number">${COURSE.nvqUnits?`Unit ${esc(a?.unit||'Optional')} · ${esc(topic.code)}`:`Assignment ${topic.assignment} · ${esc(topic.code)}`}</div><h2>${esc(topic.text)}</h2><span class="lesson-style">${esc(lesson.style)}</span></header><section class="lesson-card teaching-block"><h3>What this means</h3><p>${esc(lesson.body)}</p></section><section class="lesson-card"><h3>Key points</h3><ul>${lesson.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section class="lesson-card"><h3>Quick check</h3><div class="lesson-questions">${lesson.questions.map((x,i)=>`<details class="lesson-question"><summary><span>${i===lesson.questions.length-1?'Challenge':`Question ${i+1}`}</span>${esc(x.q)}</summary><div class="model-answer"><strong>Model answer</strong><p>${esc(x.a)}</p></div></details>`).join('')}</div></section><section class="lesson-card framework-note"><strong>Generated from the course framework</strong><p>This session uses the original ${COURSE.nvqUnits?'Learning Outcome':'Knowledge KSB'} wording. No XP or scores are attached.</p></section></article>`);
 document.getElementById('lessonBack').onclick=()=>{state.view='library';render()};
}



// v1.3.20 EPA professional-judgement banks: Bricklayer, Site Carpentry and Architectural Joinery
// Locked MCQ writing standard: realistic workplace judgement, four plausible trade-language answers,
// no joke/"I do not care" distractors, no official-sounding giveaway, and an explanation for coaching.
// Questions are deliberately stored as an approved, fixed bank. Nothing is generated at runtime.
const EPA_MCQ_WRITING_STANDARD=Object.freeze({
 id:'apprentice-plus-professional-judgement-v1',
 title:'Professional judgement MCQ standard',
 rules:Object.freeze([
  'Use a realistic workplace scenario rather than a definition-only question.',
  'Write four answers that a competent tradesperson could genuinely consider.',
  'Do not use joke, careless, reckless or “I do not care” distractors.',
  'Make the EPA best-practice answer sound like natural trade language.',
  'Keep answer length and tone balanced so wording does not reveal the answer.',
  'Use realistic alternatives: a common shortcut, a logical partial answer or a reasonable decision that misses one key point.',
  'Test professional judgement without trick wording.',
  'Include an explanation and a short key takeaway for coaching after an incorrect answer.'
 ])
});
const EPA_KNOWLEDGE_PRACTICE_BANKS={
 'bricklayer-st0095-v1-2':[
  {
   code:'K1',
   question:'You are about to cut a chase in an old internal wall, but the refurbishment survey does not clearly cover that room. What is the best next step?',
   options:["Use hand tools and keep the dust down while you open a small test area","Wear suitable RPE and make the chase in short sections","Ask someone who worked in the building whether asbestos was found elsewhere","Check the survey information with the supervisor before disturbing the wall"],
   correct:3,
   explanation:'Checking the survey first is the strongest choice because the material must be confirmed before it is disturbed. Using hand tools or RPE may reduce exposure, but neither tells you whether asbestos is present. Asking someone familiar with the job is useful background, but it is not a reliable substitute for the survey.',
   keyTakeaway:'When asbestos information is unclear, confirm it before breaking into the material.',
   id:'brick-epa-v139-k1'
  },
  {
   code:'K2',
   question:'While dry-cutting dense blocks outside, you are wearing a face-fit-tested mask, but the water suppression keeps stopping. What is the best way to carry on?',
   options:["Cut in shorter bursts and step away while the dust settles","Keep the mask on and position yourself upwind of the cutter","Stop cutting until the suppression is working properly again","Swap with another bricklayer so neither person gets the full exposure"],
   correct:2,
   explanation:'Stopping until the suppression works controls the dust where it is made. The mask is still important, but it should not be relied on as the main control. Short bursts, working upwind or sharing the cutting may reduce individual exposure, yet the same uncontrolled dust is still being produced.',
   keyTakeaway:'Control silica dust at the cutter first; RPE is the backup, not the whole plan.',
   id:'brick-epa-v139-k2'
  },
  {
   code:'K3',
   question:'You arrive at a plot where the method statement covers the walling, but access has changed and materials are now being lifted over the work area. What should you do before starting?',
   options:["Start the low-level work and review the lifting once the first course is laid","Agree a safe exclusion area with the lifting team and have the plan reviewed","Keep one person watching the lift while the rest of the gang carries on","Move the brick stacks closer so less time is spent under the lifting route"],
   correct:1,
   explanation:'The changed access and lifting route alter the risks, so the work plan needs reviewing before the gang starts. A lookout can help during an agreed lift, but it does not replace a proper exclusion area. Starting part of the task or moving materials closer still puts people into a changed setup that has not been assessed.',
   keyTakeaway:'When site conditions change, update the safe system before work begins.',
   id:'brick-epa-v139-k3'
  },
  {
   code:'K4',
   question:'At the end of a walling job, you have clean half-bricks, hardened mortar, plastic packaging and a small amount of usable sand left. What is the best way to deal with them?',
   options:["Keep the usable materials together and put each waste type in its proper stream","Put everything in the general skip because the quantities are small","Save the half-bricks and sand, then put the mortar and plastic together","Leave the materials by the plot so the next trade can take what they need"],
   correct:0,
   explanation:'Separating reusable materials from each waste stream gives the best chance of reuse and recycling while avoiding contamination. A mixed skip is convenient but can make recovery harder. Saving only some materials is partly right, although mortar and plastic still need separating. Leaving items for others can create clutter and does not confirm they will be managed properly.',
   keyTakeaway:'Reuse what is sound, then separate the remaining waste correctly.',
   id:'brick-epa-v139-k4'
  },
  {
   code:'K5',
   question:'A delivery of bricks arrives just as the site team is discussing a change to the opening size. You need the bricks near the scaffold without blocking access. What is the best response?',
   options:["Ask for the final detail, then agree a safe storage point with the relevant people","Unload beside the scaffold and adjust the stacks once the opening is agreed","Put the packs where they were shown on the original logistics plan","Split the delivery between two nearby spaces so one route stays open"],
   correct:0,
   explanation:'Confirming the latest information and agreeing the storage point prevents wasted handling, blocked access and materials ending up in the wrong place. Following the old plan may normally be reasonable, but the job has changed. Splitting or temporarily placing the packs keeps work moving, although it risks extra handling and confusion.',
   keyTakeaway:'Clear, timely communication prevents small site changes becoming bigger problems.',
   id:'brick-epa-v139-k5'
  },
  {
   code:'K6',
   question:'You are working in an occupied area and the client asks why the doorway cannot be used for the next hour. How should you explain it?',
   options:["Tell them the area is closed because that is how the job has been set up","Say the site manager has decided it and direct any questions to the office","Give a brief warning about falling materials and ask them to use another door","Explain the work taking place, the temporary risk and the safe alternative route"],
   correct:3,
   explanation:'A clear explanation of the task, the temporary risk and the alternative route gives the client enough information to act safely. A brief warning may be useful, but it does not fully explain the arrangement. Referring everything elsewhere or simply stating the area is closed can sound dismissive and may leave the person unsure about what to do.',
   keyTakeaway:'Good communication tells people what is happening, why it matters and what they should do.',
   id:'brick-epa-v139-k6'
  },
  {
   code:'K7',
   question:'While setting out a cavity wall, the drawing dimension works, but the opening shown would leave less bearing for the lintel than the manufacturer requires. What should you do?',
   options:["Keep the drawing dimension because it is the latest issued information","Increase the bearing equally at both ends and record the small change","Raise the conflict before building and get the opening detail confirmed","Use a stronger mortar at the bearings to make up for the short length"],
   correct:2,
   explanation:'The drawing and lintel requirement conflict, so the detail needs confirming before masonry fixes the opening size. Following the drawing is understandable, but it could leave inadequate bearing. Changing the opening yourself may solve one issue while creating another. Stronger mortar does not replace the required lintel bearing.',
   keyTakeaway:'Do not guess when drawings and product requirements disagree; get the detail resolved first.',
   id:'brick-epa-v139-k7'
  },
  {
   code:'K8',
   question:'While you are building, a new batch of facing bricks arrives slightly wetter and darker than the packs already in use. The wall must continue today. What is the best approach?',
   options:["Use the new packs on a separate elevation so the colour difference is contained","Blend bricks from several packs and check the finished appearance as you go","Lay the wetter bricks with a slightly drier mortar to balance the suction","Leave the new packs open for an hour, then continue from the same pack"],
   correct:1,
   explanation:'Blending from several packs reduces noticeable banding and lets you monitor the appearance throughout the work. Keeping one batch on a separate elevation may still create a visible change at corners. Adjusting mortar consistency to compensate can affect joint quality. Briefly opening the packs may not bring the bricks to a consistent moisture or shade.',
   keyTakeaway:'Blend facing bricks across packs and keep checking colour and consistency during the build.',
   id:'brick-epa-v139-k8'
  },
  {
   code:'K9',
   question:'Precast masonry panels are being installed above the area where your gang is due to build. The programme shows both tasks happening together. What is the best way to plan your work?',
   options:["Build the opposite end first and move closer once each panel is fixed","Work beneath the completed panels while the next panel is being prepared","Agree separate work zones and timings so the lifting operation stays clear","Keep the gang mobile and pause whenever a panel passes over the workface"],
   correct:2,
   explanation:'Separate zones and agreed timings manage the interface between masonry work and the lifting operation. Moving around or pausing when a load approaches sounds practical, but it relies on people reacting at the right moment. Working under completed panels may still place the gang inside the lifting exclusion zone for the next installation.',
   keyTakeaway:'Modern construction methods need trades to coordinate space, sequence and lifting—not just their own task.',
   id:'brick-epa-v139-k9'
  },
  {
   code:'K10',
   question:'Before starting a return wall, you notice the plan dimension and the written specification give different cavity widths. What should you use for setting out?',
   options:["Use the plan because dimensions on drawings are normally set out first","Check the latest revision and get the conflicting information clarified","Use the specification because written information usually carries more detail","Use the cavity width already built on the next plot as the working reference"],
   correct:1,
   explanation:'Checking the revision and resolving the conflict is the only choice that confirms which requirement is current. Either the plan or specification might be correct, so choosing one by habit is risky. A neighbouring plot can offer a useful comparison, but it may have a different revision or detail.',
   keyTakeaway:'When project information conflicts, verify the current detail before setting out.',
   id:'brick-epa-v139-k10'
  },
  {
   code:'K11',
   question:'The latest tablet model shows a masonry support angle in a different position from the printed drawing in your work area. What is the best way to proceed?',
   options:["Check the revision details and get the position confirmed before building","Use the tablet model because digital information is usually the newest","Use the printed drawing because it has already been issued to the gang","Set it midway between both positions so either detail can still be adjusted"],
   correct:0,
   explanation:'The model and drawing conflict, so the revision and support position need confirming before the masonry fixes it in place. Either source could be current, which makes choosing one by format unreliable. Splitting the difference may look practical, but it creates an unapproved position that may suit neither design.',
   keyTakeaway:'Treat digital models like any other project information: check revisions and resolve conflicts before building.',
   id:'brick-epa-v139-k11'
  },
  {
   code:'K12',
   question:'You calculate 1,050 facing bricks for an elevation, but the packs contain 500 and the brick has a noticeable colour variation. What is the best order quantity?',
   options:["Order 1,050 and use any shortfall from spare bricks already on site","Order three full packs and return the unopened pack if it is not needed","Order two packs now and arrange a smaller top-up once the wall is underway","Order 1,100 so the exact estimate is covered with a small allowance"],
   correct:3,
   explanation:'Ordering 1,100 covers the measured quantity plus a sensible allowance while limiting excess material. Ordering exactly 1,050 leaves no room for cuts or damage. Three full packs create a large surplus and returning a matching batch may not be simple. A later top-up risks delay and a visible batch difference.',
   keyTakeaway:'Allow for realistic waste without creating unnecessary surplus or relying on a later matching delivery.',
   id:'brick-epa-v139-k12'
  },
  {
   code:'K13',
   question:'Your spirit level has taken a fall and now gives a slightly different reading when you turn it end for end. You still have several corners to build. What is the best response?',
   options:["Use the same face of the level each time so the readings stay consistent","Use it for short work only and check the corners later with a longer level","Adjust each reading by the amount it appears to be out","Check it against another level and take it out of use if it is inaccurate"],
   correct:3,
   explanation:'A level that gives different reversed readings may be inaccurate, so it should be checked and removed from use if faulty. Using one face or estimating a correction can repeat the same error through the work. Checking later may reveal a problem only after several courses need rebuilding.',
   keyTakeaway:'Check suspect hand tools straight away; consistent use does not make an inaccurate tool reliable.',
   id:'brick-epa-v139-k13'
  },
  {
   code:'K14',
   question:'A block needs a narrow service notch, and the large disc cutter would remove more material than the drawing allows. What is the best approach?',
   options:["Make two shallow cuts with the disc cutter and knock out the centre","Cut the notch wider and fill around the service with mortar afterwards","Use a smaller suitable tool that gives better control over the notch","Drill a row of holes and finish the shape with the disc cutter"],
   correct:2,
   explanation:'A suitable smaller tool gives the control needed to keep the notch within the required size. Shallow disc cuts or drilled holes may work in some situations, but both can still damage the unit or exceed the detail. Making the opening wider and filling it later changes the intended masonry support around the service.',
   keyTakeaway:'Choose equipment for the accuracy and limits of the task, not simply the fastest tool available.',
   id:'brick-epa-v139-k14'
  },
  {
   code:'K15',
   question:'While building a one-brick-thick wall in English bond, the corner begins to show too many straight vertical joints. What is the best way to correct it?',
   options:["Take the corner back to the point where the bond first went wrong","Use extra queen closers in the next course to break up the joints","Change to Flemish bond at the corner and continue English bond along the wall","Use three-quarter bats in the bed joints until the lap is recovered"],
   correct:0,
   explanation:'Taking the corner back to the first incorrect course restores the intended bond and lap properly. Adding closers or bats later may hide some straight joints but can introduce irregular bond and small pieces. Changing bond at the corner creates a different detail rather than correcting the original setting out.',
   keyTakeaway:'When bond is lost, correct it at the first faulty course rather than trying to disguise it higher up.',
   id:'brick-epa-v139-k15'
  },
  {
   code:'K16',
   question:'You are setting out a capped garden wall and find the pier positions leave an awkward short brick at one end. What is the best adjustment?',
   options:["Move the nearest pier slightly so the end brick becomes a half brick","Recheck the overall size, bond and pier positions before fixing the layout","Spread the small difference through the perpend joints across the wall","Keep the pier positions and cut the end brick neatly to the remaining space"],
   correct:1,
   explanation:'Rechecking the full layout shows whether the issue comes from the overall dimension, bond or pier spacing and allows an agreed adjustment before work starts. Moving one pier may affect the design, while spreading joint sizes can leave inconsistent work. A neat cut may be acceptable in some details, but it should not be the first answer to poor setting out.',
   keyTakeaway:'Set out the whole wall, bond and features together before accepting an awkward closing piece.',
   id:'brick-epa-v139-k16'
  },
  {
   code:'K17',
   question:'A freshly built wall is due to receive a weather-struck finish, but the mortar is still very soft and pulls when you test a joint. What is the best approach?',
   options:["Wait until the mortar firms enough to hold a clean, consistent profile","Finish the joints now with light pressure so the face stays clean","Brush the joints first, then strike them once the surface has dried","Add a little dry cement to the jointing tool to stop the mortar dragging"],
   correct:0,
   explanation:'Waiting for the right firmness allows the joint to compact and hold a clean weather-struck profile. Working too early can smear the face and pull mortar from the joint. Brushing first may roughen or weaken the surface, and adding dry cement changes the joint rather than solving the timing issue.',
   keyTakeaway:'Joint finish depends on timing; work the mortar when it is firm enough to shape and compact cleanly.',
   id:'brick-epa-v139-k17'
  },
  {
   code:'K18',
   question:'A decorative band is specified across a long elevation, but the contrasting bricks are a slightly different height from the main bricks. What is the best way to keep the band level?',
   options:["Use slightly thinner bed joints in the courses below the band","Gauge the band separately and agree how the difference will be taken up","Lay the band to a line and make up the height in the course above","Sort the contrasting bricks and use only the shortest ones"],
   correct:1,
   explanation:'Gauging the decorative bricks separately shows the true difference and allows it to be distributed or detailed without spoiling the line. Altering only one or two bed joints can make the variation obvious. Correcting above the band transfers the problem, and selecting only shorter units may not provide enough bricks or a consistent result.',
   keyTakeaway:'Check the gauge of decorative units before laying them and plan where any size difference will be absorbed.',
   id:'brick-epa-v139-k18'
  },
  {
   code:'K19',
   question:'An expansion joint is shown close to a return, but moving it one brick would make the bond and sealant detail much neater. What is the best decision?',
   options:["Move it one brick and keep the joint width exactly as specified","Keep it where shown and use cut bricks to maintain the bond","Split the difference by widening two nearby perpends","Check whether the designer will accept the small change before setting it out"],
   correct:3,
   explanation:'The joint position controls movement in the wall, so even a small change should be confirmed before setting out. Leaving it as shown may be correct, but the awkward detail could indicate a coordination issue worth raising. Moving it without approval or widening ordinary joints changes how the wall accommodates movement.',
   keyTakeaway:'Expansion joints are part of the movement design; do not relocate them just to simplify the brickwork.',
   id:'brick-epa-v139-k19'
  },
  {
   code:'K20',
   question:'A silo mortar delivery feels noticeably wetter than the previous batch, although the colour and mix ticket look right. What is the best next step?',
   options:["Use it on the inner leaf first and see how it handles over a few courses","Add a little cement and sand until it matches the previous batch","Pause its use and have the consistency checked before laying with it","Spread it on the boards for a while so some moisture can come out"],
   correct:2,
   explanation:'A noticeable change in consistency should be checked before it is built into the work. Trying it on the inner leaf still risks weak or inconsistent joints. Adding materials changes the designed mix, while leaving it exposed can make consistency vary further across the batch.',
   keyTakeaway:'Do not alter supplied mortar by guesswork; stop and check any unexpected change before use.',
   id:'brick-epa-v139-k20'
  },
  {
   code:'K21',
   question:'While setting out a cavity wall with a window opening, your gauge works at one jamb but leaves a narrow cut at the other. What is the best next step?',
   options:["Keep the first jamb fixed and adjust the perpends across the opening","Make the narrow cut at the less visible jamb and keep the courses level","Recheck the opening, bond and gauge from both ends before fixing the profiles","Move the window opening slightly so full and half bricks work at both jambs"],
   correct:2,
   explanation:'Rechecking the full setting out before fixing the profiles finds whether the issue comes from the opening size, bond or gauge. Adjusting perpends can make joints inconsistent, while accepting a narrow cut may weaken the detail. Moving the opening could affect the drawings and other trades, so it should not be done without agreement.',
   keyTakeaway:'Set out both jambs, the bond and the gauge together before committing to the wall position.',
   id:'brick-epa-v139-k21'
  },
  {
   code:'K22',
   question:'While building above a new window, the cavity tray is fitted but one end does not turn up as shown on the detail. What is the best response?',
   options:["Carry on and seal the end of the tray once the lintel course is complete","Form the stop end before carrying on with the brickwork above","Add an extra weep vent near the low end to deal with any water","Lap a small piece of DPC over the end and bed it into the next joint"],
   correct:1,
   explanation:'The stop end needs forming correctly before it is covered because it keeps water from running off the end of the tray into the cavity. Sealing it later may leave gaps that cannot be checked. An extra weep does not control water escaping sideways, and a loose DPC patch may not form a reliable sealed end.',
   keyTakeaway:'Complete and check cavity trays, stop ends and outlets before building over them.',
   id:'brick-epa-v139-k22'
  },
  {
   code:'K23',
   question:'You are laying a soldier course over an opening and the final joint would be much wider than the others. What is the best way to deal with it?',
   options:["Re-gauge the soldiers and share the difference evenly across the opening","Make the wider joint at the centre so it looks balanced from both sides","Cut the last soldier narrower and keep all the joints the same size","Use slightly thicker joints near each end and normal joints through the middle"],
   correct:0,
   explanation:'Re-gauging and sharing the difference evenly gives a balanced soldier course without one obvious closing joint. A single wide joint stands out, while narrowing one soldier changes the unit width and appearance. Altering only the end joints can still make the spacing look uneven.',
   keyTakeaway:'Gauge decorative courses across the full length so any difference is shared evenly.',
   id:'brick-epa-v139-k23'
  },
  {
   code:'K24',
   question:'While replacing a spalled brick, the bricks around it look sound but the joint above is cracked. What is the best approach before fitting the replacement?',
   options:["Replace the damaged brick and repoint the cracked joint once the mortar firms","Use a stronger mortar around the new brick to stop the crack returning","Fit the replacement slightly loose so any further movement is taken in the joints","Open the area enough to check what caused the damage before completing the repair"],
   correct:3,
   explanation:'Checking the cause before finishing the repair reduces the chance of replacing the brick while leaving the original problem behind. Repointing alone may hide continuing movement or moisture. Stronger mortar can push damage into the masonry, while deliberately loose work will not provide a sound repair.',
   keyTakeaway:'A lasting repair deals with the cause as well as the visible damage.',
   id:'brick-epa-v139-k24'
  },
  {
   code:'K25',
   question:'A newly built wall is finished late in the day and a sharp frost is forecast overnight. The mortar has started to firm but is not fully set. What is the best protection?',
   options:["Lay plastic sheeting directly over the top courses and weight it down with bricks","Cover the wall securely with insulated protection without trapping it against the fresh work","Brush the joints firm, then leave the wall open so the mortar can dry naturally","Build one extra sacrificial course and remove it after the cold weather passes"],
   correct:1,
   explanation:'Secure insulated protection helps retain heat and keeps frost and rain off without marking the fresh face. Plastic laid directly on the wall can smear joints and hold water against the masonry. Leaving it exposed risks frost damage, while a sacrificial course does not protect the mortar already laid.',
   keyTakeaway:'Protect fresh masonry from frost and water without letting the covering damage the work.',
   id:'brick-epa-v139-k25'
  },
  {
   code:'K26',
   question:'A telehandler driver asks where to place the next brick delivery, but the usual storage area is being used for drainage work. What is the best reply?',
   options:["Put it beside the nearest scaffold and leave enough room for the gang to pass","Split the packs between several open plots so no single route is blocked","Hold the delivery while you agree a safe location with the supervisor and driver","Use the original drop point and ask the drainage gang to work around the packs"],
   correct:2,
   explanation:'Agreeing a safe location with the people coordinating the site avoids blocked access, unstable ground and repeated handling. The nearest scaffold may not have enough capacity or safe access. Splitting packs can create several obstructions, while using the original area ignores the changed site conditions.',
   keyTakeaway:'Clear site communication means confirming changes before materials are moved or unloaded.',
   id:'brick-epa-v139-k26'
  },
  {
   code:'K27',
   question:'Your gang is ready to start the outer leaf, but the insulation team has not finished the section ahead and everyone is under programme pressure. What is the best team decision?',
   options:["Start where the insulation is complete and agree a sequence that keeps both teams moving","Build the outer leaf first and leave access points for the insulation to be fitted later","Move the bricklayers to another plot and let the insulation team finish the whole elevation","Help fit the remaining insulation so the brickwork can start at the planned position"],
   correct:0,
   explanation:'Agreeing a workable sequence uses the completed area and keeps both teams productive without covering unfinished work. Leaving access points can compromise continuity and quality. Moving the whole gang may lose time unnecessarily, while carrying out another trade’s task may create competence and responsibility issues.',
   keyTakeaway:'Good teamwork coordinates the sequence so progress does not come at the cost of finished quality.',
   id:'brick-epa-v139-k27'
  },
  {
   code:'K28',
   question:'A new labourer on the gang is quiet during the briefing and later says they did not understand some of the site terms. What is the best response?',
   options:["Give them simpler jobs until they pick up the language from the rest of the gang","Ask the supervisor to repeat future briefings more slowly for everyone","Pair them with the most experienced bricklayer and let them learn by watching","Explain the terms privately and check they are comfortable asking again"],
   correct:3,
   explanation:'A private explanation and an open invitation to ask questions helps the person understand without putting them on the spot. Simpler work or observation may help them settle in but does not confirm they understand safety and task information. Slowing every briefing may not address the specific terms they missed.',
   keyTakeaway:'An inclusive gang checks that everyone understands and makes it easy to speak up.',
   id:'brick-epa-v139-k28'
  },
  {
   code:'K29',
   question:'You need several half bricks for a tight repair where a disc cutter cannot be used. The first brick splits unevenly with the bolster. What is the best adjustment?',
   options:["Use a heavier hammer so the brick breaks cleanly with one firm strike","Cut each brick slightly oversize and trim the face after it is bedded","Soak the bricks first so they are less likely to shatter during cutting","Score the cut line around the brick, support it properly and use controlled blows"],
   correct:3,
   explanation:'Scoring the line, supporting the unit and using controlled blows gives the best chance of an accurate hand cut. A heavier strike can make the break less predictable. Trimming after laying risks disturbing the repair, while soaking does not provide reliable control of the cut.',
   keyTakeaway:'Accurate hand cutting comes from good marking, support and controlled blows rather than extra force.',
   id:'brick-epa-v139-k29'
  },
  {
   code:'K30',
   question:'While setting out a raking garden wall, the line of the slope meets the bond with several small triangular cuts near the top. What is the best next step?',
   options:["Keep the slope and use the small cuts because the coping will cover most of them","Adjust the starting height slightly and recheck the rake against the bond","Change to stack bond through the last few courses to reduce the cutting","Make the cuts from full bricks and use a stronger mortar around the narrow ends"],
   correct:1,
   explanation:'A small agreed adjustment to the starting height can improve the bond and remove weak slivers while keeping the intended rake. Accepting tiny cuts may leave fragile pieces. Changing the bond alters the appearance and strength, while stronger mortar does not make poor-shaped cuts sound.',
   keyTakeaway:'Set out the rake and the bond together so the wall finishes without weak sliver cuts.',
   id:'brick-epa-v139-k30'
  },
  {
   code:'K31',
   question:'A normally reliable bricklayer has become withdrawn, is making unusual mistakes and says they are barely sleeping. What is the best way to respond?',
   options:["Have a quiet word, listen without judging and point them towards suitable support","Reduce their workload for the day and see whether they seem better tomorrow","Tell the supervisor straight away so the problem is formally recorded","Keep them on straightforward tasks and let close workmates watch out for them"],
   correct:0,
   explanation:'A private, supportive conversation gives the person a chance to explain what is happening and helps them reach suitable support. Reducing work may help briefly but does not address the underlying issue. Escalating immediately can be necessary where there is an urgent safety concern, but otherwise it may discourage them from opening up. Quietly monitoring them is caring, yet it still leaves the person without direct support.',
   keyTakeaway:'Notice changes, speak privately and help the person reach the right support.',
   id:'brick-epa-v1316-k31'
  },
  {
   code:'S1',
   question:'You are ready to start a small return wall, but the scaffold inspection tag shows yesterday’s date and a guardrail has been moved for a delivery. What is the best action?',
   options:["Refit the guardrail, check it feels secure and then start the low-level work","Use the scaffold only for loading until the next formal inspection is completed","Stop and get the scaffold checked before using it for the brickwork","Work from the inside edge and keep materials away from the missing guardrail"],
   correct:2,
   explanation:'The altered scaffold should be checked by the right person before it is used. Replacing the rail yourself does not confirm the whole scaffold remains safe. Restricting its use or working away from the edge still means using a scaffold whose condition has changed since inspection.',
   keyTakeaway:'When access equipment has been altered, get it checked before carrying on.',
   id:'brick-epa-v1316-s1'
  },
  {
   code:'S2',
   question:'You need to rake out several mortar joints with a grinder in a partly enclosed area. The extraction is working, but fine dust is still hanging in the air. What is the best adjustment?',
   options:["Keep the extraction running and take a short break after every few joints","Use the extraction with suitable face-fit-tested RPE and improve the airflow","Change to safety goggles and work closer to the joint so the cut is quicker","Move the extraction nozzle slightly back so it catches a wider spread of dust"],
   correct:1,
   explanation:'Using effective extraction, suitable RPE and better ventilation tackles the remaining dust through more than one control. Breaks reduce individual time in the area but do not improve the air. Goggles protect the eyes rather than the lungs, and moving the nozzle away usually captures less dust at source.',
   keyTakeaway:'Match PPE and dust controls to the actual exposure, not just the tool being used.',
   id:'brick-epa-v1316-s2'
  },
  {
   code:'S3',
   question:'At the end of a repair job, you have sound reclaimed bricks, broken clean brick, mortar rubble and plastic wrapping. Space in the skip area is tight. What is the best way to clear it?',
   options:["Keep the full bricks and put the broken brick, mortar and wrapping into one mixed skip","Leave all masonry together for crushing and put the wrapping in the general waste","Use the broken brick as temporary hardstanding and clear everything else together","Stack the reusable bricks and separate the remaining materials into the correct waste streams"],
   correct:3,
   explanation:'Keeping sound bricks for reuse and separating the waste preserves value and avoids contaminating recyclable material. Mixing clean masonry with plastic reduces recovery options. Sending reusable units for crushing wastes a usable resource, while using rubble as temporary hardstanding may create housekeeping and removal problems unless it has been agreed.',
   keyTakeaway:'Reuse first, then keep waste streams clean enough to recycle properly.',
   id:'brick-epa-v1316-s3'
  },
  {
   code:'S4',
   question:'A drawing shows wall ties at the usual spacing, but the site detail beside a movement joint requires extra ties. The gang normally follows the drawing. What is the best approach?',
   options:["Follow the specific joint detail and confirm any conflict before building past it","Use the usual spacing and add one extra tie at the top of the joint","Split the difference between the usual spacing and the joint detail","Match the ties on the previous plot because it has already passed inspection"],
   correct:0,
   explanation:'The specific detail governs the work at that location, and any conflict should be resolved before it is covered. Adding a token extra tie or averaging the spacing is not a designed solution. Copying another plot may repeat a different detail or an unnoticed error.',
   keyTakeaway:'Use the detail that applies to the exact location and resolve clashes before covering the work.',
   id:'brick-epa-v1316-s4'
  },
  {
   code:'S5',
   question:'The latest drawing changes an opening by 50 mm, but the printed copy on the plot still shows the old size. The lintel delivery matches the new schedule. What should you do?',
   options:["Set out from the new schedule because the lintel confirms the change","Keep the old opening until a revised paper drawing reaches the plot","Check the current drawing revision and confirm the opening before setting out","Mark both sizes and let the supervisor choose when they next visit the plot"],
   correct:2,
   explanation:'Checking the current revision and confirming the dimension prevents the wall being built from mixed information. The lintel schedule supports the change but does not replace the drawing check. Waiting for paper may delay work unnecessarily, while marking both sizes leaves the key decision unresolved.',
   keyTakeaway:'Before setting out, make sure every dimension comes from the latest confirmed information.',
   id:'brick-epa-v1316-s5'
  },
  {
   code:'S6',
   question:'You are ordering materials for a short cavity wall with one window. Your first calculation gives exactly the number of bricks, blocks and ties shown by the dimensions. What is the best next step?',
   options:["Order the exact quantities and use offcuts from nearby plots for any shortage","Add the same percentage to every item so the order has a simple allowance","Allow separately for cuts, breakage, returns and the actual tie arrangement","Round each quantity up to the nearest full pack and keep all surplus on the plot"],
   correct:2,
   explanation:'Different materials need different allowances based on how they will be used. A single blanket percentage can over-order some items and leave others short. Exact quantities ignore normal losses, while rounding everything to full packs may create unnecessary surplus and congestion.',
   keyTakeaway:'Estimate each resource from the design, pack sizes and realistic job-specific waste.',
   id:'brick-epa-v1316-s6'
  },
  {
   code:'S7',
   question:'During the morning, another trade starts storing pipe bundles beside your mortar spot and narrows the route to the scaffold. What is the best response?',
   options:["Shift your mortar spot closer to the wall so the route remains usable","Leave a narrow pedestrian gap and ask the labourer to guide deliveries through","Move the pipe bundles to the nearest open area while the other trade is away","Agree a clear storage area with the other trade and restore the access route"],
   correct:3,
   explanation:'Speaking to the other trade and restoring an agreed route deals with the shared-workspace problem without creating a new one. Moving the mortar spot may crowd the workface. A narrow guided route is still poor access, while moving another trade’s materials without agreement can damage them or create conflict.',
   keyTakeaway:'Maintain the work area by coordinating changes, not by passing the obstruction elsewhere.',
   id:'brick-epa-v1316-s7'
  },
  {
   code:'S8',
   question:'You are trimming a small number of bricks by hand for a repair. The bolster is sound, but the club hammer has a slightly loose head. What is the best choice?',
   options:["Use lighter blows and check the head again after each brick","Swap to a sound hammer before making the cuts","Hold the hammer lower down the handle so the head moves less","Use the brick hammer instead and make several smaller cuts"],
   correct:1,
   explanation:'A loose hammer head can worsen or detach during use, so a sound tool is the right choice. Lighter blows and a lower grip do not remove the defect. A brick hammer may suit some trimming, but changing the method only to avoid replacing an unsafe tool is not the best judgement.',
   keyTakeaway:'Select a tool that suits the task and is in safe condition before you start.',
   id:'brick-epa-v1316-s8'
  },
  {
   code:'S9',
   question:'After washing down at the end of the shift, your levels and trowels are clean but still damp, and the lock-up is cold. What is the best way to leave them?',
   options:["Dry them, protect the metal surfaces and store them where they will not be damaged","Put them straight into the toolbox so they are secure before the site closes","Leave the toolbox lid open overnight so the moisture can escape naturally","Wrap the metal parts in a dry cloth and stack the tools beside the mortar mixer"],
   correct:0,
   explanation:'Drying, protecting and storing the tools properly prevents rust, damaged edges and inaccurate equipment. Locking damp tools away traps moisture. Leaving the box open reduces security, while cloth can hold damp against the metal and the mixer area is not controlled storage.',
   keyTakeaway:'Clean tools are not finished until they are dry, protected and stored safely.',
   id:'brick-epa-v1316-s9'
  }
,
  {
   code:"S10",
   question:"You are setting out the first course of a blockwork inner skin for a cavity wall. The detailed drawings call for a clear internal room length of 4,000mm between block faces. How should you establish the corner block positions before laying the rest of the course?",
   options:["Set the two end blocks in mortar using exact tape measurements, then immediately lay the full course through to line to keep up production speed.","Lay the corner blocks using a string line set to 4,005mm to leave an extra gap for plastering later.","Lay one corner block in mortar, line out the course, and chop the final block to fit whatever gap remains at the far corner.","Dry lay the first course without mortar to check the bond and measure the overall length, adjusting joint thickness slightly if needed to keep cuts to a minimum."],
   correct:3,
   explanation:"Dry laying the initial course allows you to verify brick or block bond, check overall measurements, and ensure opening sizes and tolerances match the drawings before applying mortar. Setting blocks directly in mortar without dry-checking risks improper bond or uneven cuts.",
   keyTakeaway:"Always dry lay and check gauge and bond on setting-out courses before laying in mortar.",
   id:"brick-epa-v1317-s10"
  },
  {
   code:"S11",
   question:"You are constructing a cavity wall section that includes a 900mm window opening. You are placing the cavity tray over the opening. How should the cavity tray be positioned and finished to ensure proper moisture management?",
   options:["Keep the tray completely level across the cavity and seal both ends flat against the cavity insulation without weep holes.","Slope the tray downwards towards the outer leaf, ensuring it steps over the lintel with turned-up end dams and weep holes installed directly above.","Angle the tray backwards towards the inner blockwork leaf so water drains down into the internal cavity insulation.","Tuck the tray behind the lintel without end dams, relying on standard mortar joints to absorb any water ingress."],
   correct:1,
   explanation:"Cavity trays must shed water to the outer leaf, feature end dams to prevent water spilling off the edges into the cavity, and use weep holes to drain water outside. Angling backwards or leaving ends open directs water inside the building fabric.",
   keyTakeaway:"Cavity trays must shed outwards with end dams and weep holes for reliable water discharge.",
   id:"brick-epa-v1317-s11"
  },
  {
   code:"S12",
   question:"You are completing the external brickwork joints on a house build where the specification calls for a weather struck and cut joint finish. How should this joint be profiled to meet trade quality standards?",
   options:["Recess the bottom edge of the horizontal joint into the wall while keeping the top edge flush, creating an upward slope.","Press a curved jointer iron deeply into the mortar joint to create a smooth, concave half-round profile.","Strike the horizontal joint so the top edge is recessed slightly into the wall and the bottom edge is flush with the lower brick, then cut the bottom edge crisp with a trowel.","Rake out the mortar to a depth of 10mm leaving a square, flat recessed channel with sharp interior corners."],
   correct:2,
   explanation:"A weather struck and cut joint slopes inward at the top edge so water sheds off the face of the upper brick down to the lower brick, with a clean cut line along the bottom edge. Inverting the slope catches water, while rounded or raked joints are different profile types.",
   keyTakeaway:"Weather struck joints slope inward at the top to shed rainwater away from the mortar line.",
   id:"brick-epa-v1317-s12"
  },
  {
   code:"S13",
   question:"You are building a 225mm one-brick-thick solid garden wall in English bond and capping it with a brick-on-edge coping. How should the capping course be constructed to prevent water penetration and finish cleanly?",
   options:["Lay a continuous damp proof course under the brick-on-edge, bedding bricks on a rich mortar with neat, solid perpends, overhangs, and creasing tiles if specified.","Lay the brick-on-edge directly onto dry brickwork without DPC to allow the capping mortar to key strongly into the wall below.","Set the capping bricks horizontally on their flat face using standard mortar, leaving perpends open to allow ventilation.","Pour a thin liquid grout over flat bricks laid on top of the wall to seal the top course quickly."],
   correct:0,
   explanation:"Brick-on-edge cappings require a sound bedding mortar, full perpends, and a DPC beneath, or engineering bricks and tile creasing where specified, to stop water driving down through the top of a solid wall. Omitting the water barrier or leaving perpends open leads to frost damage and water ingress.",
   keyTakeaway:"Solid wall cappings require proper water barriers and fully filled joints to resist weathering.",
   id:"brick-epa-v1317-s13"
  },
  {
   code:"S14",
   question:"You are mixing a 1:1:6 cement, lime and sand mortar mix by hand on a mixing board for external facing brickwork. What is the correct method to ensure an even mix throughout?",
   options:["Add all the water onto the board first, shovel in the sand, and mix in cement and lime at the end to prevent dust.","Shovel loose heaps of sand, cement and lime straight onto the board and splash water on top without dry mixing to save time.","Mix cement and water into a liquid slurry first, then throw sand on top and stir until thick.","Measure dry ingredients accurately using gauge boxes or buckets, heap and turn the dry materials together at least twice until uniform in colour, then add water gradually while turning."],
   correct:3,
   explanation:"Hand mixing requires batching with consistent containers and thoroughly mixing dry ingredients to a uniform colour before adding water. Adding water first or guessing shovel counts leads to weak, patchy or inconsistent mortar.",
   keyTakeaway:"Always dry-blend batched mortar ingredients thoroughly before adding water.",
   id:"brick-epa-v1317-s14"
  },
  {
   code:"S15",
   question:"You need to cut several facing bricks to form queen closers for a corner detail. Which tool and technique will produce the cleanest cut to accurate tolerances?",
   options:["Mark the top face only and hit the brick hard with the blade of a brick hammer without scoring.","Use a hand saw designed for lightweight thermal blocks to slowly saw through the facing brick.","Mark the cut line around all four faces with a pencil and square, score along the line using a bolster chisel and club hammer, then split with a sharp, firm strike.","Grip the brick in a vice and snap it over a sharp timber edge by hitting the overhang with a mallet."],
   correct:2,
   explanation:"Scoring around all four sides of a brick with a bolster chisel creates a stress line that helps produce a clean, accurate split when struck firmly. Hitting without scoring or snapping over timber is more likely to cause jagged, unusable fractures.",
   keyTakeaway:"Score all sides of a brick with a bolster chisel before striking for a clean split.",
   id:"brick-epa-v1317-s15"
  },
  {
   code:"S16",
   question:"You are replacing three spalling bricks in an existing facing brick wall. How should you remove the damaged bricks without loosening or damaging the surrounding sound brickwork?",
   options:["Hit the centre of the damaged bricks forcefully with a sledgehammer until they shatter out of the wall.","Stitch-drill small holes into the mortar joints around the damaged bricks, chisel out the joints carefully with a narrow plugging chisel, then ease the damaged bricks out.","Lever a large crowbar into the bed joint above the damaged bricks and pry upwards until the course lifts.","Use a wide bolster chisel straight into the brick face to break it apart while leaving mortar joints intact."],
   correct:1,
   explanation:"Drilling out and chiselling the mortar joints frees the damaged brick from the surrounding masonry, allowing it to be removed without transferring heavy impact forces that could crack surrounding bricks. Heavy hammering or prying risks damaging adjacent units.",
   keyTakeaway:"Isolate damaged bricks by removing surrounding mortar joints before extraction.",
   id:"brick-epa-v1317-s16"
  },
  {
   code:"S18",
   question:"You are reporting progress and material requirements to the site manager for an upcoming gable end build. Which statement uses correct construction terminology?",
   options:["“We have finished setting out the inner leaf blockwork to damp level and will need two packs of engineering bricks for the DPC course tomorrow.”","“We’ve done the bottom row of concrete blocks inside and need some dark hard bricks for the waterproof layer tomorrow.”","“The inside wall is up to the floor line, so send up some heavy grey bricks to stop the damp getting through.”","“We finished the lower part of the wall and just need some proper bricks for the ground line before we crack on.”"],
   correct:0,
   explanation:"Professional site communication relies on precise trade terminology such as inner leaf blockwork, damp level, engineering bricks and DPC course. Informal descriptions can cause confusion or lead to the wrong materials being ordered.",
   keyTakeaway:"Use precise trade terms when ordering materials or reporting site progress.",
   id:"brick-epa-v1317-s18"
  },
  {
   code:"S20",
   question:"You are working as part of a four-person bricklaying team raising a high cavity wall section. The hod carrier is struggling to keep both bricks and mortar topped up for all masons. How should the team adapt?",
   options:["Carry on laying at maximum speed so the site manager can see the bricklayers are not slowing down.","Tell the hod carrier to work faster and skip cleaning mortar boards between batches.","Stop work completely and wait in the canteen until additional labourers arrive on site.","Pause laying briefly to help stock up boards and split tasks effectively so the line rises evenly without overburdening one person."],
   correct:3,
   explanation:"Good teamwork involves supporting colleagues and adapting the workflow to maintain safety, quality and momentum across the build team. Ignoring the bottleneck can lead to poor mortar quality, safety risks or team friction.",
   keyTakeaway:"Collaborate and support team members to maintain workflow, safety and build quality.",
   id:"brick-epa-v1317-s20"
  },
  {
   code:"S22",
   question:"You are building a brick gable end wall that requires a raking cut along the roof pitch line. How should you establish and execute the raking cuts accurately?",
   options:["Lay full bricks past the pitch line, then chop off the overhanging corners with a brick hammer after the mortar hardens.","Set up a string line along the exact roof pitch angle, mark each brick individually across its face, and cut precisely using a masonry saw or bolster.","Estimate the angle by eye and cut several bricks at once on a bench before laying the course.","Step the bricks back in full headers along the gable without cutting to let the roofers cover the gaps."],
   correct:1,
   explanation:"Raking cuts require marking the pitch line accurately with a line or bevel and cutting units individually to fit tightly against the raking angle within tolerance. Cutting hardened bricks in place or guessing angles results in uneven joints and weak edges.",
   keyTakeaway:"Mark raking cuts directly from a precise pitch line to maintain accurate tolerances.",
   id:"brick-epa-v1317-s22"
  }
 ],
 'site-carpentry-v1-4':[
  {
   code:"K1",
   question:"You are preparing to cut timber in a confined area on site where dust accumulation is high. Under PUWER and CoSHH guidelines, what essential safety step must be taken regarding equipment and health protection?",
   options:["Ensure power tools have valid safety inspections and combine local dust extraction (LEV) with a fitted FFP3 respirator.","Open a far window and use a standard dust mask while disabling the saw guard for faster cutting.","Sweep up the timber dust with a dry broom after finishing all the cuts for the day.","Use cordless tools only, as respiratory protection is not required for natural timber dust."],
   correct:0,
   explanation:"PUWER requires safe, inspected equipment, while CoSHH requires controlling hazardous wood dust at source using LEV and appropriate RPE (FFP3 mask).",
   keyTakeaway:"Always combine inspected tools with effective LEV and RPE to control timber dust exposure.",
   id:"site-carp-epa-v1318-k1"
  },
  {
   code:"K2",
   question:"When operating a portable circular saw to rip down sheet materials, how should local exhaust ventilation (LEV) and personal protective equipment (PPE) be used together?",
   options:["Rely solely on safety glasses, as LEV is only needed when working with solid hardwoods.","Set the LEV hose next to the work bench without connecting it to the tool shroud.","Attach an extraction vacuum directly to the saw's dust port and wear eye protection and ear defenders.","Wear heavy leather gloves while feeding sheet material quickly past the unguarded blade."],
   correct:2,
   explanation:"Connecting LEV directly to the tool removes dust at the point of creation, while eye and hearing protection guard against flying particles and high noise levels.",
   keyTakeaway:"Directly connect extraction to power tools and wear eye and hearing protection.",
   id:"site-carp-epa-v1318-k2"
  },
  {
   code:"K3",
   question:"Before starting a first-fix roofing task on a busy site, where do you find the specific safe working sequence and control measures established for that task?",
   options:["On the delivery note attached to the roof truss timber pack.","In the general health and safety poster displayed inside the site canteen.","By asking a colleague how they installed rafters on their previous project.","In the site-specific Method Statement and Risk Assessment (RAMS) reviewed during the toolbox talk."],
   correct:3,
   explanation:"RAMS and site toolbox talks provide the task-specific safe systems of work and control measures for high-risk operations like roofing.",
   keyTakeaway:"Review task RAMS and attend safety briefings before starting structural tasks.",
   id:"site-carp-epa-v1318-k3"
  },
  {
   code:"K4",
   question:"When sourcing timber for a commercial build committed to sustainable practices, what certification ensures the wood comes from sustainably managed forests?",
   options:["CE / UKCA structural grading stamp only.","FSC (Forest Stewardship Council) or PEFC certification.","ISO 9001 quality management stamp.","Local sawmill delivery receipt."],
   correct:1,
   explanation:"FSC and PEFC chain-of-custody schemes verify that timber products originate from responsibly managed, sustainable forests.",
   keyTakeaway:"Look for FSC or PEFC certification to verify sustainable timber sourcing.",
   id:"site-carp-epa-v1318-k4"
  },
  {
   code:"K5",
   question:"Why is an airtightness membrane installed on the warm side of insulation in a modern timber-frame wall construction?",
   options:["To prevent warm, moist internal air from entering the wall cavity and causing interstitial condensation.","To provide a rigid structural backing for fixing heavy external timber cladding.","To allow external rainwater to drain quickly down into the foundation footing.","To increase the fire resistance rating of the external plasterboard lining."],
   correct:0,
   explanation:"Vapour control layers placed on the warm side stop moist room air from migrating into cold insulation layers where it would condense and rot timber frames.",
   keyTakeaway:"Vapour control layers prevent internal moisture from condensing inside the structural frame.",
   id:"site-carp-epa-v1318-k5"
  },
  {
   code:"K6",
   question:"In a digital 3D BIM (Building Information Modelling) environment, how do digital models assist site carpenters before structural floor joists are installed?",
   options:["By automatically sharpening hand chisels and saw blades prior to site delivery.","By replacing the need to use mechanical fixings or joist hangers during assembly.","By identifying spatial clashes where service pipes or ductwork cross joist locations before physical installation.","By calculating the exact moisture content of timber delivered to site."],
   correct:2,
   explanation:"3D digital design models allow trade teams to spot spatial clashes between structural timber elements and mechanical or electrical services before work begins.",
   keyTakeaway:"BIM models identify clash locations between structural members and service runs early.",
   id:"site-carp-epa-v1318-k6"
  },
  {
   code:"K7",
   question:"Which regulatory standard dictates structural safety, fire separation, and thermal insulation requirements for carpentry work in residential buildings in England?",
   options:["The Highways Act regulatory manual.","The CDM 2015 client appointment duty register.","The Consumer Rights Act standard documentation.","The Building Regulations (Approved Documents A, B, and L)."],
   correct:3,
   explanation:"Building Regulations Part A, Part B and Part L set mandatory performance standards for building works.",
   keyTakeaway:"Carpentry installations must meet the relevant Building Regulations Approved Documents.",
   id:"site-carp-epa-v1318-k7"
  },
  {
   code:"K8",
   question:"On a working architectural drawing, what does a dashed line running through a floor plan view typically represent?",
   options:["The boundary line for site material waste skips.","Hidden structural elements, such as floor joists or steel beams overhead.","An area where timber sanding is strictly prohibited.","A wall that must be constructed using non-standard metric timber."],
   correct:1,
   explanation:"In technical drawing standards, dashed lines indicate hidden details or structural members located above or below the immediate section plane.",
   keyTakeaway:"Dashed lines on structural plans denote overhead or hidden structural members.",
   id:"site-carp-epa-v1318-k8"
  },
  {
   code:"K9",
   question:"Why is manufactured Birch Plywood preferred over standard OSB/3 for constructing rigid site jigs and high-load structural gussets?",
   options:["It is significantly cheaper and lighter than low-density fibreboards.","It does not require cutting tools and can be scored and snapped by hand.","Its cross-laminated veneer construction offers superior dimensional stability, smooth faces, and high shear strength.","It completely absorbs water without expanding or delaminating over time."],
   correct:2,
   explanation:"Plywood's cross-grained thin wood veneers provide multi-directional strength, high screw-holding power, and resistance to warping under load.",
   keyTakeaway:"Plywood provides multi-directional strength and stability due to cross-laminated veneers.",
   id:"site-carp-epa-v1318-k9"
  },
  {
   code:"K10",
   question:"What maximum moisture content threshold should structural timber typically not exceed before being enclosed within a modern building envelope?",
   options:["20% (ideally 12-16% for internal finish timber).","35% moisture content.","5% moisture content.","50% moisture content."],
   correct:0,
   explanation:"Timber enclosed at over 20% moisture content is at risk of fungal decay and severe dimensional shrinkage as it dries in service.",
   keyTakeaway:"Keep timber moisture below 20% to prevent fungal attack and shrinkage.",
   id:"site-carp-epa-v1318-k10"
  },
  {
   code:"K11",
   question:"Which ironmongery component is specifically designed to allow an internal fire door to self-close fully into its frame rebate against a latch?",
   options:["An overhead hydraulic door closer compliant with BS EN 1154.","A surface-mounted straight barrel bolt.","A pair of unrated brass decorative butt hinges.","A magnetic cabinet catch set into the door head."],
   correct:0,
   explanation:"Fire doors require certified self-closing devices to ensure the leaf shuts automatically and maintains fire compartmentation.",
   keyTakeaway:"Fire doors require certified self-closing hardware to maintain fire seals.",
   id:"site-carp-epa-v1318-k11"
  },
  {
   code:"K12",
   question:"You are calculating stud lengths for a 12-metre long stud wall with studs placed at 600mm centres. How do you calculate the total number of vertical studs required, excluding openings?",
   options:["Multiply 12 metres by 0.6mm to get 7.2 studs.","Divide 12 metres by 2 and subtract 1 stud.","Divide the wall length by the spacing (12m / 0.6m = 20) and add 1 for the starting end stud (21 studs total).","Multiply 12 studs by 4 corners to equal 48 studs."],
   correct:2,
   explanation:"To calculate vertical studs for a run, divide the total length by the centre spacing distance and add one stud to cap the starting end.",
   keyTakeaway:"Number of studs equals total length divided by spacing, plus one end stud.",
   id:"site-carp-epa-v1318-k12"
  },
  {
   code:"K13",
   question:"When explaining a stair installation to a site supervisor, which term correctly describes the vertical height from top of one tread to the top of the next?",
   options:["The going.","The rise.","The margin.","The pitch line."],
   correct:1,
   explanation:"Rise is the vertical distance between consecutive treads, whereas going is the horizontal depth from nosing to nosing.",
   keyTakeaway:"Rise measures vertical step height; going measures horizontal step depth.",
   id:"site-carp-epa-v1318-k13"
  },
  {
   code:"K14",
   question:"Which hand tool is designed specifically for laying out precise 90-degree lines across timber faces prior to sawing?",
   options:["Sliding bevel.","Mortise gauge.","Chalk line reel.","Try square."],
   correct:3,
   explanation:"A try square has a fixed 90-degree stock and blade used to mark and check right-angled cuts on timber.",
   keyTakeaway:"Use a try square to mark and verify precise 90-degree angles.",
   id:"site-carp-epa-v1318-k14"
  },
  {
   code:"K15",
   question:"When sharpening a bevel-edged woodworking chisel using an oilstone or whetstone, what is the ideal primary bevel grinding angle?",
   options:["45 degrees primary and 60 degrees secondary.","10 degrees primary and 15 degrees secondary.","25 degrees, with a secondary honing angle of approximately 30 degrees.","90 degrees square to the chisel back."],
   correct:2,
   explanation:"Standard chisels are ground to a 25-degree primary angle and honed at around 30 degrees to create a durable cutting edge.",
   keyTakeaway:"Grind chisels to 25 degrees and hone a secondary micro-bevel at around 30 degrees.",
   id:"site-carp-epa-v1318-k15"
  },
  {
   code:"K16",
   question:"Why are custom router jigs constructed with dedicated guide bush collars when routing multiple identical door hinge recesses?",
   options:["To lubricate the router bit continuously during cutting.","To ensure exact repeatability and prevent the cutter from wandering outside the hinge footprint.","To eliminate the need for clamping the jig to the door edge.","To automatically adjust the routing depth between passes."],
   correct:1,
   explanation:"Jigs used with router guide bushes ensure identical, repeatable cuts across multiple workpieces without measuring each recess individually.",
   keyTakeaway:"Router jigs ensure fast, identical and repeatable cuts.",
   id:"site-carp-epa-v1318-k16"
  },
  {
   code:"K17",
   question:"When using a portable plunge saw with a guide rail to trim doors to length, what safety mechanism prevents the saw from kicking back along the track?",
   options:["Wrapping electrical tape around the rail track ends.","Increasing plunge speed as fast as possible through thick wood.","Removing the lower guard from the blade housing.","An anti-kickback cam or cleat fitted to the saw base and an integrated riving knife."],
   correct:3,
   explanation:"Anti-kickback devices and riving knives prevent the saw blade from binding in the cut and pinching back toward the operator.",
   keyTakeaway:"Anti-kickback features stop track saws binding or kicking back toward the user.",
   id:"site-carp-epa-v1318-k17"
  },
  {
   code:"K18",
   question:"How does effective communication between carpenters and dryliners improve site progress during first-fix framing?",
   options:["It ensures timber noggins are installed at correct height locations for fixing plasterboard edges and heavy wall items.","It allows dryliners to alter structural timber roof trusses without engineering approval.","It eliminates the need for site managers to inspect work quality.","It ensures all timber walls are left uninsulated until second fix."],
   correct:0,
   explanation:"Clear inter-trade communication ensures backing timber is placed where dryliners and other follow-on trades require solid fixings later.",
   keyTakeaway:"Coordinate with follow-on trades to ensure backing support is placed correctly.",
   id:"site-carp-epa-v1318-k18"
  },
  {
   code:"K19",
   question:"What is the primary goal of applying inclusion, equity, and diversity principles within a site construction team?",
   options:["To assign the heaviest physical labour strictly to new apprentices.","To restrict specialised tool usage to senior workers only.","To create a respectful environment where every worker feels valued, safe, and able to contribute.","To eliminate the need for site toolbox talks and safety inductions."],
   correct:2,
   explanation:"EDI principles foster an environment of fairness, mutual respect, and psychological safety, improving overall safety and productivity.",
   keyTakeaway:"EDI creates a fair, respectful and high-performing workplace environment.",
   id:"site-carp-epa-v1318-k19"
  },
  {
   code:"K20",
   question:"If you notice a team member showing signs of severe physical exhaustion and emotional distress on site, what is the best immediate supportive response?",
   options:["Tell them to work faster to distract themselves from their personal worries.","Assign them high-risk scaffold work to raise their energy levels.","Ignore their situation as mental health is unrelated to construction safety.","Speak to them privately, express care, and signpost them to site Mental Health First Aiders or confidential helpline resources."],
   correct:3,
   explanation:"Recognising early signs of mental or physical distress and directing colleagues to trained welfare resources promotes early intervention.",
   keyTakeaway:"Identify signs of distress early and signpost available support services.",
   id:"site-carp-epa-v1318-k20"
  },
  {
   code:"K21",
   question:"When fitting architrave around a door lining, why is a mitre joint cut at 45 degrees used at the top corners instead of a butt joint?",
   options:["It neatly joins two decorative end profiles together while hiding end grain across the corner junction.","It increases the fire resistance rating of the timber door frame.","It allows architrave mouldings to expand up to 50mm during humid weather.","It eliminates the need for wood adhesive or pin fixings."],
   correct:0,
   explanation:"Mitre joints meet at half the overall angle to align matching moulding profiles continuously.",
   keyTakeaway:"Mitring aligns decorative profiles seamlessly across corner intersections.",
   id:"site-carp-epa-v1318-k21"
  },
  {
   code:"K22",
   question:"When sizing floor joists for a residential building using standard span tables, which two main factors determine the required timber depth?",
   options:["The colour of the timber grain and the blade speed of the mitre saw.","The clear span distance between supports and the design load, including dead and imposed loads.","The brand of wood glue used on the joist ends.","The height of the skirting boards in the room below."],
   correct:1,
   explanation:"Span tables cross-reference clear span length against design loading to specify the minimum timber cross-section required for structural stability.",
   keyTakeaway:"Timber spans are determined by clear span length and imposed loading requirements.",
   id:"site-carp-epa-v1318-k22"
  },
  {
   code:"K24",
   question:"When joining two structural timber members end-to-end over a support using a spliced joint, what requirement must be met?",
   options:["The splice can be held together using standard PVA glue and masking tape.","The joint cut must be positioned in the middle of the longest unsupported span.","The splice must be structurally engineered and fixed with the specified bolts or timber connectors.","The end grain must be left unsealed with an open 10mm gap between timbers."],
   correct:2,
   explanation:"Structural timber splices must transfer shear and tensile loads safely through engineered joint geometry and specified mechanical connectors.",
   keyTakeaway:"Structural timber splices require specified mechanical fixings to transfer load safely.",
   id:"site-carp-epa-v1318-k24"
  },
  {
   code:"K25",
   question:"In traditional cut roofing, what structural member connects the feet of opposing rafters to prevent outward spread on external walls?",
   options:["Bargeboards.","Ceiling joists or suitable rafter ties.","Tilting fillets.","Fascia boards."],
   correct:1,
   explanation:"Ceiling joists or suitable ties act at the base of opposing rafters, preventing side walls from being pushed outward by roof loads.",
   keyTakeaway:"Ceiling joists or rafter ties prevent the roof from spreading the walls.",
   id:"site-carp-epa-v1318-k25"
  },
  {
   code:"K26",
   question:"In a warm flat roof design, where is the main thermal insulation layer positioned relative to the structural timber deck?",
   options:["Above the timber roof deck, keeping the deck and structure at internal warm temperatures.","Directly below the ceiling plasterboard only, leaving an unventilated cavity above.","Underneath the ground floor concrete slab.","Loosely packed between joists with continuous cross-ventilation above."],
   correct:0,
   explanation:"Warm flat roofs place insulation on top of the deck, reducing condensation risk by keeping the deck timber inside the warm zone.",
   keyTakeaway:"Warm flat roofs place insulation above the structural roof deck.",
   id:"site-carp-epa-v1318-k26"
  },
  {
   code:"K27",
   question:"When constructing a load-bearing timber stud partition, what structural component is installed directly above a door opening to transfer loads around the opening?",
   options:["A single 12mm plasterboard strip screwed to the head plate.","A softwood skirting board nailed flat across the opening.","A diagonal softwood noggin placed centrally in the doorway.","A structural header or lintel supported by jack studs."],
   correct:3,
   explanation:"Headers transfer vertical loads from above around wall openings down through the supporting studs.",
   keyTakeaway:"Headers carry loads over partition openings and transfer them to supporting studs.",
   id:"site-carp-epa-v1318-k27"
  },
  {
   code:"K28",
   question:"When fitting timber skirting boards along a wall with an internal 90-degree corner, which joint technique prevents gaps from opening up if timber shrinks?",
   options:["A square butt joint without glue or fixings.","A half-lap edge joint held with carpet tape.","A straight 45-degree bevel cut along the top edge only.","A scribed joint, cutting the profile of one board over the face of the other."],
   correct:3,
   explanation:"Internal skirting corners are scribed to match the face profile, maintaining a tight visual joint even if timber shrinks in width later.",
   keyTakeaway:"Use scribed joints on internal skirting corners to absorb timber movement cleanly.",
   id:"site-carp-epa-v1318-k28"
  },
  {
   code:"K29",
   question:"Before using a self-levelling cross-line laser to mark datum lines for joist hangers across a large room, what calibration check should be performed?",
   options:["Wipe the glass lens with heavy lubricating oil.","Place the unit on an uneven pile of loose timber cut-offs without locking the pendulum.","Check the laser line against a known datum and rotate the unit 180 degrees to confirm line-height consistency.","Charge the battery until it reaches maximum heat."],
   correct:2,
   explanation:"Verifying a laser level requires projecting a mark, rotating the level 180 degrees, and checking that the beam returns to the same height.",
   keyTakeaway:"Verify laser accuracy over distance by performing a 180-degree rotation check.",
   id:"site-carp-epa-v1318-k29"
  },
  {
   code:"K40",
   question:"What is a key tax obligation for a self-employed site carpenter working under the UK Construction Industry Scheme (CIS)?",
   options:["Registering with HMRC for CIS so contractors can deduct tax at source, typically 20%, from labour payments.","Paying no income tax as long as tool costs exceed income.","Filing VAT returns weekly regardless of turnover level.","Paying employee National Insurance directly through the site main contractor's payroll."],
   correct:0,
   explanation:"Under CIS, contractors deduct advance tax directly from subcontractor labour payments and submit it to HMRC on their behalf.",
   keyTakeaway:"CIS requires contractors to deduct advance tax at source from subcontractor labour.",
   id:"site-carp-epa-v1318-k40"
  },
  {
   code:"S1",
   question:"You notice an unguarded floor opening on the first-floor joist deck where someone could fall. How do you demonstrate compliance with safety regulations?",
   options:["Step over the gap carefully while carrying heavy timber lengths.","Stop work, secure a temporary guardrail or solid cover over the opening immediately, and label it clearly.","Cover the hole loosely with a sheet of thin cardboard.","Ignore it until floor boarding starts next week."],
   correct:1,
   explanation:"Work at height controls require effective edge protection or a secured rigid cover over floor openings.",
   keyTakeaway:"Securely cover or guard all floor voids and edges before working near them.",
   id:"site-carp-epa-v1318-s1"
  },
  {
   code:"S2",
   question:"You need to sand filled timber joints on installed window boards inside a completed room. How do you correctly apply safety control equipment?",
   options:["Blow dust off the boards using an airline hose toward the doorway.","Connect an M-Class dust extraction vacuum to the sander and wear suitable FFP2 or FFP3 respiratory protection.","Wear eye protection only while keeping all windows tightly shut without extraction.","Use a wire brush by hand without any respiratory protection."],
   correct:1,
   explanation:"Fine timber and filler dust require suitable extraction attached to the tool along with suitable RPE.",
   keyTakeaway:"Use tool extraction combined with RPE when sanding timber.",
   id:"site-carp-epa-v1318-s2"
  },
  {
   code:"S3",
   question:"At the end of a first-fix framing shift, you have clean timber offcuts, treated wood scraps, and metal joist hanger offcuts. How should you process these waste materials?",
   options:["Throw all wood and metal waste together into the general landfill skip.","Burn treated timber scraps on site to heat the working area.","Segregate untreated wood, treated wood, and scrap metal into their designated site recycling bins.","Bury metal fixings underneath the floor insulation boards."],
   correct:2,
   explanation:"Environmental guidance requires sorting site waste by material type so metals and suitable timber can be reclaimed or recycled.",
   keyTakeaway:"Sort and segregate waste streams to support site material recycling.",
   id:"site-carp-epa-v1318-s3"
  },
  {
   code:"S4",
   question:"When installing structural floor joists, the manufacturer's guidance states joist hangers must be fully nailed into solid backing using specified square twist nails. How do you ensure compliance?",
   options:["Fill every designated nail hole in the hanger flange with the specified square twist nails.","Put two drywall screws through the top holes only to hold the hanger in place.","Use smooth oval wire nails in every second hole to save time.","Weld the galvanised hanger to the timber plate using a spot torch."],
   correct:0,
   explanation:"Structural fixings must follow the manufacturer's specification, using the correct nails in all designated holes to achieve the rated capacity.",
   keyTakeaway:"Install specified fixings in all designated fixing holes to achieve the structural rating.",
   id:"site-carp-epa-v1318-s4"
  },
  {
   code:"S5",
   question:"Before setting up a chop saw station inside a room under construction, how do you prepare a safe working area?",
   options:["Set the saw directly on the floor surrounded by loose timber offcuts.","Block the main exit doorway with timber racks so materials stay close by.","Run extension leads through standing surface water across the access path.","Ensure adequate lighting, clear trip hazards, manage power cables, and set up a stable work stand with dust extraction."],
   correct:3,
   explanation:"Safe work area preparation requires clear access routes, stable equipment stands, good lighting, managed cables and suitable dust control.",
   keyTakeaway:"Maintain clean, well-lit and uncluttered work zones around power tool stations.",
   id:"site-carp-epa-v1318-s5"
  },
  {
   code:"S6",
   question:"You are reading a structural floor drawing and notice the joist spacing is specified as 400mm centres, but the site layout pencil mark shows 600mm centres. What should you do?",
   options:["Lay the joists at 600mm centres because it uses fewer materials.","Split the difference and lay joists at 500mm centres.","Halt joist layout, check the specification drawing, and correct the layout marks before fixing.","Ignore the drawing and lay joists wherever existing wall ties are located."],
   correct:2,
   explanation:"Structural drawings must be followed. If site marks contradict the drawing, stop and verify before fixing structural elements.",
   keyTakeaway:"Verify layout marks against structural drawings before installing components.",
   id:"site-carp-epa-v1318-s6"
  },
  {
   code:"S7",
   question:"You are tasked with framing a stud partition wall measuring 6m long by 2.4m high. How do you produce an accurate timber cutting list?",
   options:["Order 50 identical timber lengths without measuring the wall run.","Guess the required timber count by looking at a nearby completed room.","Order studs only and cut top plates out of spare floorboards.","Calculate top and bottom plates, studs at the specified centres, opening members and noggins, adding an appropriate waste allowance."],
   correct:3,
   explanation:"An accurate cutting list calculates plates, studs, noggins and opening components systematically from the actual dimensions, with a reasonable waste allowance.",
   keyTakeaway:"Calculate all framing components systematically when compiling timber cutting lists.",
   id:"site-carp-epa-v1318-s7"
  },
  {
   code:"S8",
   question:"You need to ask the site supervisor for additional ceiling joist timber. How do you communicate this using correct construction terminology?",
   options:["We require twenty 47x145mm C24 graded timber lengths at 4.2 metres for the ceiling joists.","We need a bunch of medium-sized wood planks for the top floor ceiling.","Send up twenty long sticks of brown wood so we can finish the roof floor.","We need some structural timber cut to whatever size is available in the yard."],
   correct:0,
   explanation:"Clear professional communication requires exact dimensions, structural grade, intended use and required lengths.",
   keyTakeaway:"Specify exact structural grade, dimensions and lengths when ordering materials.",
   id:"site-carp-epa-v1318-s8"
  },
  {
   code:"S9",
   question:"How should sharp bevel-edged chisels be safely carried and stored when moving around a busy construction site?",
   options:["Carried loose in trouser side pockets with blades facing upwards.","Stored inside a protective tool roll or box with edge guards fitted over the blades.","Tucked blade-first into a high-visibility vest chest pocket.","Balanced on top of an open stepladder while moving between rooms."],
   correct:1,
   explanation:"Protecting sharp edges in guards or tool rolls prevents edge damage and protects workers from puncture injuries.",
   keyTakeaway:"Keep sharp hand tools sheathed or stored securely when moving around site.",
   id:"site-carp-epa-v1318-s9"
  },
  {
   code:"S10",
   question:"When using a 110V plunge router to trim laminate edges, what operational step ensures tool control and user safety?",
   options:["Climb-cut rapidly by pulling the router in the same direction as cutter rotation.","Hold the workpiece with one hand and operate the router with the other.","Adjust bit depth while the motor cable is plugged in and powered.","Feed the router against the cutter rotation with both hands on the handles, allowing the bit to reach full speed before engaging."],
   correct:3,
   explanation:"Feeding against cutter rotation helps prevent the tool grabbing and running out of control. Both hands should remain on the handles.",
   keyTakeaway:"Maintain two-handed control on routers and feed against cutter rotation.",
   id:"site-carp-epa-v1318-s10"
  },
  {
   code:"S11",
   question:"While planing a hardwood door edge, your hand plane blade begins to tear the timber grain and skip. How do you return the blade to good working condition?",
   options:["Remove the iron, hone the secondary bevel on a fine stone, remove the wire burr from the back, and reset the plane correctly.","Hit the iron with a claw hammer to force it further through the sole opening.","Grind the iron on a high-speed dry bench grinder until the metal turns blue.","File the cutting edge rounded using a coarse rasp."],
   correct:0,
   explanation:"Proper sharpening requires honing a refined edge, removing the wire burr from the flat back, and resetting the plane correctly.",
   keyTakeaway:"Hone blade edges on sharpening stones and remove burrs to maintain clean cuts.",
   id:"site-carp-epa-v1318-s11"
  },
  {
   code:"S12",
   question:"You need to cut twenty identical timber wedge fillets for a flat roof firring installation. How do you produce a jig to ensure fast, safe and accurate repeatable cuts?",
   options:["Mark each wedge individually by hand and cut every one freehand.","Construct a secure plywood fence jig that holds stock at the correct angle against a suitable saw stop.","Hold short timber blocks against a bare circular saw blade with your fingers.","Judge the angle by eye on each cut without using end stops or clamps."],
   correct:1,
   explanation:"A fixed jig with stops and a secure holding method produces repeatable cuts while keeping hands away from the blade.",
   keyTakeaway:"Use custom guide jigs with end stops for accurate, safe repeatable cuts.",
   id:"site-carp-epa-v1318-s12"
  },
  {
   code:"S13",
   question:"A colleague mentions feeling overwhelmed by financial pressure and personal stress. What practical action demonstrates identifying wellbeing support?",
   options:["Advise them to work extra night shifts to double their pay.","Tell them feeling stressed is standard for site trades so they should ignore it.","Provide details for the Construction Industry Helpline or Employee Assistance Programme and encourage them to speak to a trained site representative.","Discuss their personal situation publicly with the rest of the site workforce."],
   correct:2,
   explanation:"Supporting a colleague involves connecting them with confidential industry support services and trained welfare staff.",
   keyTakeaway:"Direct colleagues to confidential industry wellbeing services and trained advisers.",
   id:"site-carp-epa-v1318-s13"
  },
  {
   code:"S14",
   question:"You are installing a straight flight of timber stairs between two structural floors. How do you ensure the stair stringers are secured accurately?",
   options:["Rest the stair stringer loosely against the plasterboard wall and nail it through the floorboards.","Support the middle of the stair flight on temporary loose brick stacks.","Fix the stair head securely to the floor trimmer using the specified structural connection, ensuring top and bottom risers suit finished floor levels.","Screw the bottom step into carpet underlay without fixing the stair head."],
   correct:2,
   explanation:"Stair flights must be structurally tied to the floor trimmer at the top and anchored securely at the base, while maintaining consistent riser heights between finished floors.",
   keyTakeaway:"Fix stair flights securely to floor trimmers, accounting for finished floor levels.",
   id:"site-carp-epa-v1318-s14"
  },
  {
   code:"S15",
   question:"When securing a heavy timber sole plate down into a concrete floor slab, which structural fixing method should be applied?",
   options:["Use 40mm panel pins driven into plastic wall plugs every 2 metres.","Drill and anchor using specified heavy-duty expansion bolts or concrete screws at the required centres.","Apply a thin bead of PVA wood glue along the damp proof membrane.","Weight the timber down with loose concrete blocks until framed walls are built on top."],
   correct:1,
   explanation:"Sole plates require rated mechanical anchors into the concrete slab to resist uplift and lateral loads.",
   keyTakeaway:"Use rated mechanical masonry anchors to secure structural sole plates to concrete.",
   id:"site-carp-epa-v1318-s15"
  },
  {
   code:"S16",
   question:"You need to select timber joists for a clear floor span of 3.8 metres. How do you size the timber correctly using standard sizing tables?",
   options:["Use the relevant span table for the 3.8m clear span and expected loading to identify the required grade and section size.","Pick any timber depth as long as the wood looks clean and free of large knots.","Measure the wall thickness and choose a timber length that matches wall height.","Use 38x89mm studding timber doubled up with wood glue."],
   correct:0,
   explanation:"Timber span tables specify the minimum grade and section required for a particular clear span, spacing and loading condition.",
   keyTakeaway:"Cross-reference span and loading against approved timber span tables to select joist sizes.",
   id:"site-carp-epa-v1318-s16"
  },
  {
   code:"S17",
   question:"You are installing internal timber window boards above radiators during second-fix operations. How should these be fitted and secured?",
   options:["Nail window boards loosely through window frame glazing beads using 100mm wire nails.","Rely on expanding foam alone without mechanical fixings or level checks.","Leave a 25mm forward slope so the board slides away from the wall line.","Cut the ends accurately to fit the reveals, pack the board level, and secure it with the specified adhesive or concealed mechanical fixings."],
   correct:3,
   explanation:"Window boards must fit the reveals neatly, be packed level and be secured using a suitable approved fixing method.",
   keyTakeaway:"Fit window boards neatly to reveals, pack them level and fix them securely.",
   id:"site-carp-epa-v1318-s17"
  },
  {
   code:"S18",
   question:"When framing a traditional cut rafter roof on site, how do you mark and cut the birdsmouth joint where rafters meet the timber wall plate?",
   options:["Chop a square notch halfway through the wall plate so the rafter sits flat.","Cut the rafter completely flat on the end and butt-nail it to the side of the wall plate.","Mark the plumb and seat cuts from the roof pitch, keeping the notch within the permitted rafter depth, then cut neatly to bear on the plate.","Saw through the entire rafter and reconnect the pieces with nail plates over the wall plate."],
   correct:2,
   explanation:"A birdsmouth combines a plumb cut and a level seat cut so the rafter bears correctly on the wall plate without excessive loss of section.",
   keyTakeaway:"Mark birdsmouth cuts from the roof pitch and keep the notch within the permitted rafter depth.",
   id:"site-carp-epa-v1318-s18"
  },
  {
   code:"S19",
   question:"You are transferring a finished floor datum level across four rooms using a self-levelling cross-line laser. How do you ensure accuracy and protect the instrument?",
   options:["Balance the laser loosely on an inverted bucket and tilt it by hand to reach high marks.","Mount the laser securely, allow it to self-level, mark points precisely, and lock the pendulum before moving it.","Leave the self-levelling lock disengaged while transporting the tool across rough ground.","Mark datum points using the wide outer edge of the laser beam."],
   correct:1,
   explanation:"Laser levels need a stable setup to self-level accurately, and the pendulum should be locked during transport to protect the mechanism.",
   keyTakeaway:"Mount laser levels securely and lock the pendulum before transport.",
   id:"site-carp-epa-v1318-s19"
  },
  {
   code:"S20",
   question:"When installing timber wall cladding outdoors, what fixing method prevents moisture from corroding nails and staining timber faces?",
   options:["Use the specified stainless steel or hot-dip galvanised ring-shank nails, driven to the required finish.","Use untreated black mild steel wire nails.","Use indoor drywall screws driven flush into timber faces.","Glue cladding panels directly to masonry walls using PVA adhesive."],
   correct:0,
   explanation:"External timber cladding requires corrosion-resistant fixings to prevent rust staining and premature fixing failure.",
   keyTakeaway:"Use stainless steel or suitably galvanised fixings for external timber cladding.",
   id:"site-carp-epa-v1318-s20"
  },
  {
   code:"S21",
   question:"You are hanging a solid softwood internal door into a newly installed timber lining. How do you mark out and cut the hinge recesses?",
   options:["Chisel a slot twice as deep as the hinge leaf so the hinge drops below the timber face.","Screw hinges directly onto the unrecessed face of the door edge.","Cut hinge recesses using a handsaw angled at 45 degrees into the door edge.","Mark hinge positions accurately, gauge the hinge-leaf depth, cut the recess cleanly, and fix the hinges flush with suitable screws."],
   correct:3,
   explanation:"Hinge recesses must be marked accurately and cut to the exact leaf thickness so the hinge sits flush and the door operates correctly.",
   keyTakeaway:"Cut hinge recesses to the exact leaf depth so the hardware sits flush.",
   id:"site-carp-epa-v1318-s21"
  },
  {
   code:"S22",
   question:"When fitting dado rails along an uneven wall face, how do you execute a scribed joint on an internal corner?",
   options:["Cut two opposing 45-degree mitres and pack any gap behind with folded paper.","Butt both pieces together and fill the front voids with dark wood filler.","Fit the first moulding square into the corner, mitre the second to expose the profile, then cope along that profile for a tight fit.","Bevel both timber ends to 30 degrees and overlap them across the corner."],
   correct:2,
   explanation:"Scribing exposes the moulding profile with a mitre and then removes the waste behind it so the second piece fits tightly over the first.",
   keyTakeaway:"Use a coping saw along the exposed profile to create tight internal scribed joints.",
   id:"site-carp-epa-v1318-s22"
  },
  {
   code:"B1",
   question:"You notice that the main guardrail on a mobile scaffold tower has been unclipped and left hanging loose by another team. How do you demonstrate putting safety and wellbeing first?",
   options:["Climb the tower quickly to grab a tool, taking care not to lean against the open side.","Stop work on or near the tower, prevent access, and report the defect so the tower can be made safe by a competent person.","Wait until the end of the shift to mention the loose guardrail.","Ignore the scaffold because your immediate carpentry task is on ground level."],
   correct:1,
   explanation:"Putting safety first means stopping exposure to the hazard and ensuring the equipment is made safe before use.",
   keyTakeaway:"Take immediate ownership of safety hazards, regardless of who caused them.",
   id:"site-carp-epa-v1318-b1"
  },
  {
   code:"B2",
   question:"When cutting short joist noggins out of 4.8m timber lengths, how do you demonstrate environmental consideration during work processes?",
   options:["Plan the cutting sequence and use suitable existing offcuts before opening new full-length timber packs.","Cut every short noggin from fresh full-length timber and discard the remaining pieces.","Throw all timber offcuts under 2 metres into the general waste skip.","Order custom short noggins regardless of suitable stock already on site."],
   correct:0,
   explanation:"Environmental responsibility includes planning cuts to reduce waste and using suitable offcuts before opening new stock.",
   keyTakeaway:"Use material offcuts productively to reduce site timber waste.",
   id:"site-carp-epa-v1318-b2"
  },
  {
   code:"B3",
   question:"A female apprentice carpenter joins your first-fix team. How do you actively contribute to an inclusive and diverse culture on site?",
   options:["Assign her light cleaning duties only so she avoids physical framing work.","Expect her to prove her skills before giving her access to power tools.","Avoid speaking to her so you do not accidentally say something wrong.","Treat her with equal respect, involve her fully in skilled framing tasks, and challenge non-inclusive behaviour."],
   correct:3,
   explanation:"An inclusive culture gives every team member equal respect, learning opportunities and access to skilled work.",
   keyTakeaway:"Treat all colleagues equally and ensure everyone can participate in skilled work.",
   id:"site-carp-epa-v1318-b3"
  },
  {
   code:"B4",
   question:"A specialist subcontractor is using a high-precision CNC timber routing system on site for prefabricated roof components. How do you demonstrate seeking learning and development opportunities?",
   options:["Dismiss the technology as unnecessary compared with traditional hand sawing.","Ask permission to observe the setup, ask relevant technical questions, and read the component fabrication information.","Assume you will never need to understand automated machinery in your career.","Complain that automated machinery reduces traditional site hours."],
   correct:1,
   explanation:"Seeking development means showing initiative and learning about modern methods, equipment and processes.",
   keyTakeaway:"Take initiative to learn modern methods and equipment from specialist trades.",
   id:"site-carp-epa-v1318-b4"
  },
  {
   code:"B5",
   question:"Your carpentry team is tasked with boarding a floor deck before dryliners arrive to erect internal partitions. How do you demonstrate a team focus to meet goals?",
   options:["Coordinate the floor layout and handover sequence with the drylining team so priority partition areas are ready on time.","Board floors randomly without discussing room priorities with follow-on trades.","Focus only on your own daily output regardless of whether partition areas are accessible.","Leave floor boarding incomplete around doorways so another trade can finish it later."],
   correct:0,
   explanation:"Team focus means coordinating with adjoining trades and considering the wider programme rather than only individual output.",
   keyTakeaway:"Coordinate actively with adjoining trades to achieve project-wide milestones.",
   id:"site-carp-epa-v1318-b5"
  }
 ],
 "architectural-joiner-st0264-v1-4":[
  {
   code:"K1",
   question:"You are preparing to cut timber in a workshop where fine wood dust accumulates quickly. Under PUWER and CoSHH regulations, what is the mandatory safety step regarding equipment and personal health protection?",
   options:["Open a far window and wear a standard paper dust mask while disabling the saw guard for speed.","Sweep up all fine timber dust with a dry yard broom once at the end of every shift.","Ensure the saw has valid safety inspections and combine localized dust extraction (LEV) with a fitted FFP3 respirator.","Use cordless hand tools only, as respiratory protection is not required for natural softwoods."],
   correct:2,
   explanation:"PUWER requires safe, inspected machinery, while CoSHH mandates controlling hazardous wood dust at the point of creation using LEV paired with appropriate RPE (FFP3 mask).",
   keyTakeaway:"Always combine inspected equipment with effective LEV and RPE to control timber dust exposure.",
   id:"arch-epa-v1319-k1-1"
  },
  {
   code:"K2",
   question:"When operating a portable circular saw or router to process MDF sheet materials, how should local exhaust ventilation (LEV) and personal protective equipment (PPE) be configured?",
   options:["Rely on safety glasses alone, as extraction systems are only required when machining solid oak.","Position an extraction hose nearby on the bench without physically connecting it to the tool shroud.","Wear heavy leather rigging gloves while feeding sheet material past an unguarded blade.","Connect continuous extraction directly to the tool dust shroud and wear eye protection along with ear defenders."],
   correct:3,
   explanation:"Directly connecting LEV removes toxic fine particulate at the source, while eye and hearing protection shield against projectile chips and high acoustic levels.",
   keyTakeaway:"Directly attach extraction hoses to power tool shrouds and wear suitable PPE.",
   id:"arch-epa-v1319-k2-2"
  },
  {
   code:"K3",
   question:"Before commencing high-risk machining or assembly work in a busy workshop, where do you find the precise safety sequence and control measures designed for that operation?",
   options:["In the task-specific Method Statement and Risk Assessment (RAMS) reviewed during the safety induction or toolbox talk.","On the delivery advice note attached to the raw timber bundle.","In the general health and safety poster mounted inside the staff breakroom.","By asking a fellow apprentice how they performed the same task on a previous job."],
   correct:0,
   explanation:"RAMS documents and safety briefings set out the legally binding, safe systems of work and control measures required for workshop tasks.",
   keyTakeaway:"Always review task RAMS and attend safety briefings prior to starting complex work.",
   id:"arch-epa-v1319-k3-3"
  },
  {
   code:"K4",
   question:"When ordering timber stock for a sustainable build project, which international certification guarantees the raw material originated from responsibly managed forests?",
   options:["CE / UKCA structural grading stamps only.","ISO 9001 quality assurance approval stamps.","FSC (Forest Stewardship Council) or PEFC certification.","Local saw mill weight delivery dockets."],
   correct:2,
   explanation:"FSC and PEFC chain-of-custody schemes verify that timber products originate from sustainably managed, environmentally sound forests.",
   keyTakeaway:"Look for FSC or PEFC certification to verify sustainable timber sourcing.",
   id:"arch-epa-v1319-k4-4"
  },
  {
   code:"K5",
   question:"Why is an airtightness membrane installed on the warm interior side of insulation in a modern timber-frame wall assembly?",
   options:["To provide a rigid backing layer for attaching heavy decorative timber cladding.","To facilitate external rainwater drainage down into the concrete foundation slab.","To increase the structural load-bearing capacity of interior plasterboard linings.","To stop warm, moist room air from migrating into the timber frame cavity and creating interstitial condensation."],
   correct:3,
   explanation:"Vapour control layers placed on the warm interior side prevent moist indoor air from penetrating cold outer insulation zones where it would condense and rot structural timber.",
   keyTakeaway:"Vapour control layers prevent internal moisture from condensing inside structural wall cavities.",
   id:"arch-epa-v1319-k5-5"
  },
  {
   code:"K6",
   question:"In a 3D digital design environment (such as BIM or CAD), how do digital models support an architectural joiner prior to manufacturing bespoke staircase components?",
   options:["By automatically setting the fence depth on workshop planer and thicknessing machinery.","By identifying spatial geometry clashes and component layout errors before cutting physical timber.","By eliminating the need to use mechanical jointing fixings or adhesives during assembly.","By calculating the exact moisture percentage contained inside incoming raw timber lots."],
   correct:1,
   explanation:"3D CAD/BIM digital models allow joiners and designers to spot geometrical clashes, headroom clearances, and assembly misalignments before physical production starts.",
   keyTakeaway:"Digital 3D models highlight layout errors and spatial clashes before timber is cut.",
   id:"arch-epa-v1319-k6-6"
  },
  {
   code:"K7",
   question:"Which mandatory regulatory framework dictates timber door fire ratings, staircase pitch angles, and structural safety parameters across England?",
   options:["The Highways Act regulatory standard manual.","The Building Regulations (such as Approved Documents B, K, and M).","The Construction (Design and Management) client appointment register.","The Consumer Rights Act standard commercial template."],
   correct:1,
   explanation:"Building Regulations set mandatory minimum standards for fire safety (Part B), stair safety and guarding (Part K), and accessibility (Part M).",
   keyTakeaway:"Joinery installations must strictly satisfy the relevant Approved Building Regulations.",
   id:"arch-epa-v1319-k7-7"
  },
  {
   code:"K8",
   question:"On an architectural joinery elevation drawing, what does a dashed hidden line running across a cabinet door opening indicate?",
   options:["The position where timber must be split and spliced together.","An area where surface sanding and clear finishing are prohibited.","The direction of swing and hinge pivot locations for the door leaf.","The location of internal moisture barrier membranes."],
   correct:2,
   explanation:"On elevation drawings, dashed or triangular lines pointing toward a frame edge indicate hinge placement and door swing direction.",
   keyTakeaway:"Dashed swing lines on elevation drawings denote hinge positions and leaf opening directions.",
   id:"arch-epa-v1319-k8-8"
  },
  {
   code:"K9",
   question:"Why is manufactured Birch Plywood preferred over standard chipboard for constructing rigid workshop jigs and curved joinery formers?",
   options:["Its cross-laminated veneer construction offers superior dimensional stability, strong screw retention, and high shear resistance.","It is significantly cheaper and softer than low-density fibreboard products.","It can be scored with a utility knife and snapped cleanly by hand without power saws.","It absorbs water without expanding, swelling, or delaminating over prolonged outdoor exposure."],
   correct:0,
   explanation:"Plywood's cross-laminated wood veneers offer multi-directional strength, high structural rigidity, excellent screw holding, and resistance to warping.",
   keyTakeaway:"Plywood provides exceptional structural stability and fix holding due to cross-laminated veneers.",
   id:"arch-epa-v1319-k9-9"
  },
  {
   code:"K10",
   question:"What maximum timber moisture content range is recommended for indoor furniture and architectural joinery before processing to prevent warping?",
   options:["22% to 28% moisture content.","35% to 40% moisture content.","0% to 2% moisture content.","8% to 12% moisture content."],
   correct:3,
   explanation:"Internal timber joinery should be conditioned to 8–12% moisture content to match heated internal environments and prevent severe shrinkage or timber movement.",
   keyTakeaway:"Internal joinery timber must be kiln-dried to 8–12% moisture content before processing.",
   id:"arch-epa-v1319-k10-10"
  },
  {
   code:"K11",
   question:"Which chemical formulation is recommended for filling pin holes and slight joint gaps in internal hardwood joinery prior to clear lacquering?",
   options:["Standard exterior masonry gap sealant.","Unmixed expandable polyurethane gap foam.","Hydrated lime mortar mixed with PVA adhesive.","A color-matched solvent or acrylic timber filler blended with fine sanding dust from the same wood species."],
   correct:3,
   explanation:"Mixing fine sanding dust from the project's hardwood with a compatible binder creates an exact grain-matched filler that accepts clear finishes smoothly.",
   keyTakeaway:"Blend project sanding dust with clear binders to create seamless, grain-matched wood fillers.",
   id:"arch-epa-v1319-k11-11"
  },
  {
   code:"K12",
   question:"You are producing a cutting list for ten identical timber window frames. What essential allowance must be added to the raw timber stick lengths before machining?",
   options:["Subtract 100mm per component to account for timber thermal expansion.","An allowance for cross-cutting square ends, tenon horns, and machine planing timber margins (typically 50mm extra per piece).","No allowance is required; order exact finished component sizes.","Multiply total cubic meters by four to cover glue line compression."],
   correct:1,
   explanation:"Cutting lists must incorporate machining allowances (over-length stock for horns, breakout, squaring, and cross-cutting trim).",
   keyTakeaway:"Always include machining allowances and horn lengths on raw material cutting lists.",
   id:"arch-epa-v1319-k12-12"
  },
  {
   code:"K13",
   question:"When discussing staircase manufacturing with a workshop manager, what trade term defines the total horizontal distance covered by a flight of stairs from first to last riser?",
   options:["The total going.","The total rise.","The margin line.","The pitch line height."],
   correct:0,
   explanation:"The 'total going' is the complete horizontal measurement from the face of the first riser to the face of the top riser.",
   keyTakeaway:"Total going measures the horizontal span; total rise measures total vertical elevation.",
   id:"arch-epa-v1319-k13-13"
  },
  {
   code:"K14",
   question:"Which marking hand tool features two parallel spur pins adjusted by a thumbscrew to lay out double lines for mortise and tenon joints simultaneously?",
   options:["Marking gauge.","Sliding bevel.","Mortise gauge.","Try square."],
   correct:2,
   explanation:"A mortise gauge features two pins (one fixed, one adjustable) to score both sides of a mortise or tenon in a single pass.",
   keyTakeaway:"Mortise gauges score twin parallel lines for precise mortise and tenon layouts.",
   id:"arch-epa-v1319-k14-14"
  },
  {
   code:"K15",
   question:"When re-sharpening a bevel-edged chisel on a sharpening stone, what critical step ensures a true cutting edge after honing the 30-degree secondary micro-bevel?",
   options:["Grinding the back face at a 45-degree angle to create a double wedge.","Cooling the steel tip rapidly in cold oil without wiping away stone slurry.","Filing the flat back in circular patterns using a coarse cabinet rasp.","Laying the flat back of the chisel completely flush on the fine stone to stroke away the remaining wire burr."],
   correct:3,
   explanation:"Removing the wire burr flat from the polished back face is essential to achieve a razor-sharp, mirror-smooth cutting edge.",
   keyTakeaway:"Keep the back of the chisel perfectly flat on fine stones to lap away wire burrs.",
   id:"arch-epa-v1319-k15-15"
  },
  {
   code:"K16",
   question:"Why are dedicated wooden routing jigs built with toggle clamps and guide fence stops when manufacturing multiple identical curved door heads?",
   options:["They reduce the electrical power consumed by overhead router motors.","They ensure precise component repeatability, secure workpiece stability, and eliminate hand positioning near cutters.","They allow joiners to use unsharpened router bits safely.","They eliminate the need to apply finish sanding to routed timber curves."],
   correct:1,
   explanation:"Routing jigs lock stock in place, guarantee identical dimensions across large batch runs, and keep hands safely away from high-speed cutters.",
   keyTakeaway:"Jigs guarantee identical repeatability while improving operator workholding safety.",
   id:"arch-epa-v1319-k16-16"
  },
  {
   code:"K17",
   question:"When setting up a biscuit jointer or plunge router to cut slot recesses in timber panels, what safety check must be performed before plugging into power?",
   options:["Remove all lower blade guards to allow chips to clear freely.","Lubricate the cutting carbide tips with mineral engine oil.","Verify cutter sharpness, ensure the plunge spring returns smoothly, check fence depth locks, and confirm correct fence angle adjustment.","Lock the plunge trigger in the 'ON' position before connecting to power."],
   correct:2,
   explanation:"Always inspect cutter integrity, guard return springs, depth stops, and locking handles before connecting machinery to power.",
   keyTakeaway:"Inspect guards, depth stops, and blade integrity prior to connecting tools to power.",
   id:"arch-epa-v1319-k17-17"
  },
  {
   code:"K18",
   question:"How does clear communication between an architectural joiner and the finishing team improve productivity when producing batch cabinetry?",
   options:["It ensures components are sanded to the correct grit level, labeled logically, and kept free of glue squeeze-out before stain application.","It allows finish sprayers to change drawer runner specifications without notice.","It eliminates the need for quality inspection checks prior to delivery.","It ensures timber joinery is shipped wet with un-cured adhesive."],
   correct:0,
   explanation:"Clear inter-departmental communication ensures machining tolerances, surface prep (sanding grit), and assembly sequences suit the final finish process.",
   keyTakeaway:"Collaborate across teams to align surface preparations with final finishing requirements.",
   id:"arch-epa-v1319-k18-18"
  },
  {
   code:"K19",
   question:"How do principles of equity and inclusion benefit a joinery workshop production environment?",
   options:["By establishing a culture where every worker feels respected, supported, and empowered to contribute ideas and report safety concerns.","By ensuring heavy timber handling is restricted exclusively to younger workers.","By limiting high-precision machinery access to senior staff members only.","By removing standardized trade assessment criteria for new apprentices."],
   correct:0,
   explanation:"Inclusive environments promote mutual respect, fair opportunities, diverse perspectives, and strong team communication.",
   keyTakeaway:"Inclusion creates a fair, supportive environment that drives safety and quality.",
   id:"arch-epa-v1319-k19-19"
  },
  {
   code:"K20",
   question:"If a workshop team member exhibits signs of acute physical fatigue or emotional burnout while operating machinery, what is the appropriate immediate action?",
   options:["Tell them to operate high-speed machinery faster to maintain production quotas.","Encourage them to take a break, offer supportive listening, and signpost them to designated Mental Health First Aiders or EAP resources.","Assign them to operate an unguarded spindle moulder to re-focus their attention.","Ignore their condition as mental health considerations do not apply in manufacturing environments."],
   correct:1,
   explanation:"Recognizing signs of distress, offering immediate support, and signposting to trained welfare resources protects worker wellbeing and workshop safety.",
   keyTakeaway:"Address signs of fatigue or distress immediately and direct staff to professional support resources.",
   id:"arch-epa-v1319-k20-20"
  },
  {
   code:"K29",
   question:"Before using a self-levelling cross-line laser to set out height datums for fitted cabinetry across a room, how do you verify its accuracy?",
   options:["Clean the front glass lens using solvent thinners while the laser is running.","Set the unit on a sloping surface without unlocking the self-levelling pendulum.","Increase room lighting to maximum brightness to sharpen the laser line beam.","Project a beam line onto a wall, mark it, rotate the laser unit 180 degrees at the same distance, and verify the line aligns with the mark."],
   correct:3,
   explanation:"Checking laser calibration involves projecting a level mark, rotating the instrument 180 degrees, and checking that the beam hits the same mark.",
   keyTakeaway:"Verify laser levels regularly using 180-degree benchmark checks.",
   id:"arch-epa-v1319-k29-21"
  },
  {
   code:"K30",
   question:"What is a mandatory requirement when assembling an FD30 rated timber fire door frame assembly?",
   options:["Fitting lightweight hollow core panels using standard plastic hinges.","Leaving a 15mm open air gap around the door perimeter without seals.","Installing approved intumescent seals into frame grooves and using fire-rated hinges installed with specified screw lengths.","Securing door linings with standard expanding foam without mechanical frame anchors."],
   correct:2,
   explanation:"Certified fire door assemblies require tested intumescent strip combinations, solid timber frame densities, and certified fire-rated ironmongery.",
   keyTakeaway:"Fire doors require certified intumescent seals, solid frames, and tested hardware.",
   id:"arch-epa-v1319-k30-22"
  },
  {
   code:"K31",
   question:"When setting up a workshop surface planer (joiner), where should the bridge guard be positioned relative to the timber stock?",
   options:["Raised 100mm above the timber cutter block so the knives are clearly visible.","Removed completely from the machine table during short production runs.","Adjusted down close to the table surface leaving only enough clearance for the timber to slide under, or set close to the fence during edge planing.","Swung back behind the machine frame out of the way of the operator."],
   correct:2,
   explanation:"Bridge guards must cover the exposed cutter block as much as possible, positioned directly over the cutter block close to the timber or fence.",
   keyTakeaway:"Bridge guards must shield the cutter block, leaving minimum operational clearance.",
   id:"arch-epa-v1319-k31-23"
  },
  {
   code:"K32",
   question:"What is the primary purpose of creating a full-size 1:1 scale setting-out rod before manufacturing complex architectural joinery?",
   options:["To serve as a disposable packing board when shipping finished joinery products.","To establish exact full-size lengths, joint details, section profiles, and hardware locations to prevent cumulative layout errors.","To calculate the total electrical consumption of workshop machinery.","To display final paint color options to the client on site."],
   correct:1,
   explanation:"Setting-out rods show 1:1 true dimensions, timber sections, and joint geometry, providing an accurate reference that eliminates measuring mistakes.",
   keyTakeaway:"Setting-out rods establish exact 1:1 dimensions and joint alignments before cutting.",
   id:"arch-epa-v1319-k32-24"
  },
  {
   code:"K33",
   question:"Which traditional joinery joint provides high resistance to tensile pull-out forces, making it ideal for connecting drawer sides to drawer fronts?",
   options:["Half-lap corner joint.","Square butt joint.","Biscuit joint.","Dovetail joint."],
   correct:3,
   explanation:"Dovetail joints interlock pins and tails, creating high mechanical strength against forward tensile pulling forces.",
   keyTakeaway:"Dovetail joints provide mechanical interlock against pulling forces.",
   id:"arch-epa-v1319-k33-25"
  },
  {
   code:"K34",
   question:"When manufacturing a traditional stormproof timber casement window frame, what design feature prevents driving rain from penetrating the frame joints?",
   options:["Machining drip grooves, weatherseal rebates, and stepped drained sills into the timber sections.","Applying clear interior PVA glue over outer frame faces.","Assembling all perimeter frame components using simple un-rebated butt joints.","Omitting lower sill slope angles so glass sits flat against timber."],
   correct:0,
   explanation:"Weatherproof timber windows rely on sloped sills, capillary drip grooves, gasket rebates, and rebate offsets to shed water outwards.",
   keyTakeaway:"Weatherproof timber windows require sloped sills, drip channels, and compression seals.",
   id:"arch-epa-v1319-k34-26"
  },
  {
   code:"K35",
   question:"When aligning and joining wide hardwood timber panels to form a tabletop, why are compressed beechwood biscuits used with PVA glue?",
   options:["They eliminate the need to apply sash clamps during glue curing time.","They align panel surface faces flush and expand when absorbing moisture from glue to form a strong mechanical bond.","They allow panels to slide freely back and forth across joints after assembly.","They make timber edges completely fireproof along seam lines."],
   correct:1,
   explanation:"Compressed wood biscuits register faces flush and swell inside cut slots upon absorbing water-based glue, locking the joint firmly.",
   keyTakeaway:"Biscuits align joint faces precisely and expand in water-based glue for a tight lock.",
   id:"arch-epa-v1319-k35-27"
  },
  {
   code:"K36",
   question:"In timber staircase assembly, what component fits underneath the front edge of a tread to support the front nosing into the riser?",
   options:["Bargeboards.","Architrave mouldings.","Wall cover fillets.","Glue blocks (glue blocks fitted into internal tread-to-riser corners)."],
   correct:3,
   explanation:"Triangular timber glue blocks are glued and screwed into the internal angles between treads and risers to eliminate squeaks and reinforce joints.",
   keyTakeaway:"Tread-to-riser glue blocks stiffen stair assemblies and prevent squeaking.",
   id:"arch-epa-v1319-k36-28"
  },
  {
   code:"K37",
   question:"When assembling a solid timber raised-and-fielded door panel inside a framed stiles-and-rails structure, how should the center panel be fitted?",
   options:["Fitted loosely into frame grooves with expansion gaps and left unglued to allow for seasonal timber movement.","Glued continuously around all four edges with epoxy resin to lock it solid.","Nailed rigidly through the front face of stiles using heavy wire nails.","Screwed tightly to rails from behind without allowance for clearance gaps."],
   correct:0,
   explanation:"Floating solid wood panels must be left unglued within frame grooves so they can expand and contract across the grain without splitting.",
   keyTakeaway:"Solid door panels must float within frame grooves to allow natural movement.",
   id:"arch-epa-v1319-k37-29"
  },
  {
   code:"K38",
   question:"Before applying a polyurethane clear varnish to manufactured oak door linings, how should timber faces be prepared?",
   options:["Washed down with heavy soap and water leaving the surface saturated.","Scuffed across the grain using coarse 40-grit steel rasp files.","Sanded progressively along the grain with fine abrasives, dusted clean, and checked for glue squeeze-out or defects.","Coated with oil-based engine grease to seal wood pores."],
   correct:2,
   explanation:"Quality timber finishing requires systematic sanding along the grain direction, removing excess glue, and thoroughly dusting timber faces.",
   keyTakeaway:"Sand timber along the grain and remove all surface dust and excess glue before sealing.",
   id:"arch-epa-v1…62152 tokens truncated…>=.8?'amber':'red';
 app.insertAdjacentHTML('beforeend',`<div class="modal progress-modal-layer" id="progressModal"><div class="modal-card progress-modal progress-review-card" role="dialog" aria-modal="true" aria-labelledby="progressReviewTitle"><div class="progress-review-title"><div><small>LEARNER PROGRESS</small><h2 id="progressReviewTitle">${esc(state.profile?.fullName||'Learner')}</h2></div><button type="button" class="progress-close" id="closeProgress" aria-label="Close">×</button></div><div class="review-tracker-list">${tracker('Evidence Packs',p.submitted,expectedAssignments,p.submitted+' / '+(expectedAssignments===null?'—':expectedAssignments),assignmentDetail)}${tracker(ksbLabel,p.ksbCompleted,expectedKsbs,p.ksbCompleted+' / '+(expectedKsbs===null?'—':expectedKsbs),ksbDetail)}${tracker(learningHoursLongLabel(),otj.total,otj.expected,`${otj.total.toFixed(1)} / ${otj.expected.toFixed(1)} hrs`,otjDetail)}${tracker('Time elapsed',elapsed??0,100,elapsed===null?'—':elapsed+'%',timeDetail,'timeline')}${epa?tracker('EPA readiness',epa.overall,100,epa.overall+'%',`Collective best scores · MCQ ${epa.knowledge??0}% · Discussion ${epa.discussion??0}% · Practical ${epa.practical??0}%`):''}</div><div class="review-quick-status ${reviewTone}"><span>Review status</span><strong>${reviewLabel}</strong><small>${elapsed===null?'Set the learner’s course dates in Settings to activate time-based targets.':`Evidence Packs, ${COURSE.nvqUnits?'learning outcomes':'KSBs'} and ${learningHoursShortLabel()} are compared only with where the learner should be today.`}</small></div><button class="btn progress-done" id="progressDone">Close</button></div></div>`);
 const modal=document.getElementById('progressModal'),close=()=>modal?.remove();
 document.getElementById('closeProgress').onclick=close;document.getElementById('progressDone').onclick=close;modal.onclick=e=>{if(e.target===modal)close()};
}


function renderOptionalUnitSelection(){
 const choices=COURSE.optionalUnits||[];
 app.innerHTML=shell(`<button class="back no-print" id="back">← Course</button><div class="assignment-title"><div class="number">EV9 · Optional Unit</div><h2>Select your optional unit</h2><p class="muted">Choose the one optional unit you will complete. Your selection is saved on this device.</p></div><section class="card panel"><div class="panel-body"><div class="optional-unit-list">${choices.map(u=>`<label class="optional-unit-choice"><input type="radio" name="optionalUnit" value="${esc(u.unit)}"><span><strong>Unit ${esc(u.unit)}</strong><small>${esc(u.title)}</small></span></label>`).join('')}</div><div class="disclaimer"><strong>Important</strong><br>Once confirmed, this unit becomes Evidence Pack 9 and the other optional units are hidden. A tutor can reset the selection in Admin Mode before evidence is added.</div></div><div class="btn-row"><button class="btn" id="confirmOptional" disabled>Confirm optional unit</button></div></section>`);
 document.getElementById('back').onclick=()=>{state.view='course';state.section=null;render()};
 const confirm=document.getElementById('confirmOptional');
 document.querySelectorAll('input[name="optionalUnit"]').forEach(r=>r.onchange=()=>{confirm.disabled=false});
 confirm.onclick=async()=>{const chosen=document.querySelector('input[name="optionalUnit"]:checked');if(!chosen)return;const unit=choices.find(u=>String(u.unit)===chosen.value);if(!unit)return;if(!window.confirm(`Select Unit ${unit.unit} — ${unit.title}? This choice will be saved as Evidence Pack 9.`))return;state.data[optionalSelectionKey()]=String(unit.unit);await saveData();state.assignment=9;render();toast(`Unit ${unit.unit} selected`)};
}

function verifiedEvidenceSummary(n){
 const sections=['witness'];
 const submitted=sections.reduce((total,section)=>total+sectionData(n,section).versions.length,0);
 const rplCount=assignmentIndividualRplCodes(n).length;
 const hasDraft=sections.some(section=>sectionStatus(n,section)==='incomplete')||!!rplDraft(n)?.files?.length;
 return {submitted:submitted+rplCount,status:(submitted||rplCount)?'complete':hasDraft?'incomplete':'empty'};
}
const RPL_EVIDENCE_KEY=n=>`${COURSE.id}:${n}:rplEvidence:v1`;
function rplDraft(n){const v=state.data[RPL_EVIDENCE_KEY(n)];return v&&typeof v==='object'&&!Array.isArray(v)?v:{selected:[],files:[],entries:[]}}
async function saveRplDraft(n,d){state.data[RPL_EVIDENCE_KEY(n)]=d;await saveData()}
function rplFileCard(f,i){const image=String(f.type||'').startsWith('image/');return `<div class="file-card" style="display:block">${image&&f.data?`<img src="${f.data}" alt="${esc(f.name||'Uploaded evidence')}" style="width:100%;max-height:180px;object-fit:contain;border-radius:12px;margin-bottom:10px">`:''}<div><strong>${esc(f.name||'Uploaded evidence file')}</strong><div class="muted">${esc(f.type||'File')}${f.size?` · ${formatMediaSize(f.size)}`:''}</div></div><div class="btn-row"><button type="button" class="btn danger" data-rpl-remove-file="${i}">Remove</button></div></div>`}
function renderRplSection(a){
 const d=rplDraft(a.n),already=new Set(assignmentIndividualRplCodes(a.n)),selected=new Set(d.selected||[]);
 const label=COURSE.nvqUnits?'Learning Outcomes':'KSBs';
 const criteria=(a.ksbs||[]).map(([code,text])=>`<label class="walkthrough-review-row ${already.has(code)?'evidence-type-used':''}"><input type="checkbox" data-rpl-select="${esc(code)}" ${selected.has(code)?'checked':''} ${already.has(code)?'disabled':''}><span><strong>${esc(code)} ${evidenceCoverageBadge(a.n,code)} · ${esc(learnerPromptTitle(a.n,code,text))}</strong><small>${esc(text)}</small>${already.has(code)?'<em class="evidence-type-used-note">Already completed through Uploads</em>':''}</span></label>`).join('');
 const history=(d.entries||[]).length?`<section class="card panel versions"><h3>Saved uploads</h3>${d.entries.slice().reverse().map((e,i)=>`<div class="version-item"><div><strong>${esc((e.codes||[]).join(', '))}</strong><div class="muted">${esc(e.date||'')} · ${(e.files||[]).length} file${(e.files||[]).length===1?'':'s'}</div></div></div>`).join('')}</section>`:'';
 app.innerHTML=shell(`<button class="back no-print" id="back">← EP${a.n}</button><div class="assignment-title"><div class="number">WITNESS AND UPLOADS · UPLOADS</div><h2>Uploads</h2><p class="muted">Add certificates or files that prove prior learning, then select the ${label} they fully cover.</p></div><section class="card panel assessor-only-panel"><div class="panel-body"><div class="field"><label>${label} completed by these uploads</label><p class="help">Select only criteria that are fully supported by the certificate or file.</p><div class="walkthrough-review-list">${criteria}</div></div><div class="upload-box"><h3>Certificates and files</h3><p class="muted">Add certificates, qualification records, training records or other suitable prior-learning evidence.</p><div class="btn-row" style="justify-content:center"><label class="btn secondary icon-btn">${appIcon('file','button-icon')}Add files<input class="hide" id="rplFileInput" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,image/*" multiple></label></div></div><div class="file-list">${(d.files||[]).map(rplFileCard).join('')}</div></div><div class="btn-row"><button class="btn" id="saveRplEvidence" ${(d.selected||[]).length&&(d.files||[]).length?'':'disabled'}>Save uploads and complete selected ${label}</button></div></section>${history}`);
 document.getElementById('back').onclick=()=>{state.view='assignment';state.section=null;render()};
 document.querySelectorAll('[data-rpl-select]').forEach(input=>input.onchange=async()=>{d.selected=[...document.querySelectorAll('[data-rpl-select]:checked')].map(x=>x.dataset.rplSelect);await saveRplDraft(a.n,d);document.getElementById('saveRplEvidence').disabled=!(d.selected.length&&d.files.length)});
 const fileInput=document.getElementById('rplFileInput');if(fileInput)fileInput.onchange=async e=>{for(const file of [...(e.target.files||[])]){try{d.files.push({id:uid(),name:file.name,type:file.type||'application/octet-stream',size:file.size||0,data:await fileToData(file)})}catch(err){console.error('RPL file save failed',err);toast(`Could not add ${file.name}`)}}await saveRplDraft(a.n,d);renderRplSection(a)};
 document.querySelectorAll('[data-rpl-remove-file]').forEach(btn=>btn.onclick=async()=>{d.files.splice(+btn.dataset.rplRemoveFile,1);await saveRplDraft(a.n,d);renderRplSection(a)});
 const save=document.getElementById('saveRplEvidence');if(save)save.onclick=async()=>{if(!d.selected.length||!d.files.length)return;const map=individualRplMap(),changedAt=new Date().toISOString();d.selected.forEach(code=>{const criterion=(a.ksbs||[]).find(([c])=>c===code);map[individualRplCriterionKey(a.n,code)]={code,summary:criterion?.[1]||'',unit:a.unit||null,assignment:a.n,rplAt:changedAt,rplEvidenceFiles:d.files.map(f=>({id:f.id,name:f.name,type:f.type,size:f.size}))}});state.data[INDIVIDUAL_RPL_KEY()]=map;d.entries=Array.isArray(d.entries)?d.entries:[];d.entries.push({id:uid(),date:today(),codes:[...d.selected],files:d.files.map(f=>({...f}))});d.selected=[];d.files=[];await saveRplDraft(a.n,d);invalidatePackStatus(a.n);await saveData();state.assignment=a.n;state.section=null;state.view='assignment';render();window.scrollTo(0,0);showEvidenceSavedConfirmation()};
}

function showVerifiedEvidenceChooser(){
 const a=assignment(state.assignment),existing=document.getElementById('verifiedEvidenceChooser');if(existing)existing.remove();
 const overlay=document.createElement('div');overlay.id='verifiedEvidenceChooser';overlay.className='evidence-choice-overlay';
 overlay.innerHTML=`<div class="evidence-choice-dialog" role="dialog" aria-modal="true" aria-labelledby="verifiedChoiceTitle"><button type="button" class="evidence-choice-close" aria-label="Close">×</button><div class="number">WITNESS AND UPLOADS</div><h2 id="verifiedChoiceTitle">Witness and Uploads</h2><p>Choose how evidence will be added.</p><div class="evidence-choice-grid"><button type="button" data-verified-section="witness"><span class="evidence-choice-icon">${appIcon('witness')}</span><strong>Witness Testimony</strong><small>Evidence completed by a suitable workplace witness.</small></button><button type="button" data-verified-section="rpl"><span class="evidence-choice-icon">${appIcon('file')}</span><strong>Uploads</strong><small>Certificates and files supporting selected criteria.</small></button></div><button type="button" class="btn secondary evidence-choice-cancel">Cancel</button></div>`;
 document.body.appendChild(overlay);
 const close=()=>overlay.remove();overlay.querySelector('.evidence-choice-close').onclick=close;overlay.querySelector('.evidence-choice-cancel').onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};
 overlay.querySelectorAll('[data-verified-section]').forEach(button=>button.onclick=()=>{if(button.dataset.verifiedSection==='witness'){showWitnessTestimonyWarning(close);return}state.section=button.dataset.verifiedSection;state.view='section';close();render()});
 overlay.querySelector('[data-verified-section]')?.focus();
}
function showWitnessTestimonyWarning(closeChooser){
 const existing=document.getElementById('witnessTestimonyWarning');if(existing)existing.remove();
 const overlay=document.createElement('div');overlay.id='witnessTestimonyWarning';overlay.className='evidence-choice-overlay';
 overlay.innerHTML=`<div class="evidence-choice-dialog" role="dialog" aria-modal="true" aria-labelledby="witnessWarningTitle"><div class="number">IMPORTANT</div><h2 id="witnessWarningTitle">Witness Testimony</h2><p>A Witness Testimony must be completed by an employer, supervisor or another suitable witness who has directly observed your work.</p><p><strong>It must not be completed by you.</strong></p><button type="button" class="btn" id="continueWitnessTestimony">Continue</button></div>`;
 document.body.appendChild(overlay);
 document.getElementById('continueWitnessTestimony').onclick=()=>{state.section='witness';state.view='section';overlay.remove();closeChooser();render()};
 document.getElementById('continueWitnessTestimony').focus();
}
function savedEvidenceTypeLabel(item,section){const saved=String(item?.evidenceSubtype||item?.subtype||'').trim();if(saved&&/^(RPL|WT|AO|PD|CS)(?:\b|\s*·)/i.test(saved))return saved;return ({witness:'WT · Witness Testimony',professionalDiscussion:'PD · Professional Discussion',rpl:'RPL · Recognition of Prior Learning'}[section]||friendlyEvidenceSection(section))}
function submittedEvidenceRows(a){
 const rows=[],sectionLabels={photos:'Take Photos',statement:'Write About It',discussion:'Record a Video',professionalDiscussion:'PD · Professional Discussion',witness:'WT · Witness Testimony',supporting:COURSE.nvqUnits?'Documents':'Upload Evidence'};
 for(const section of ['photos','statement','discussion','professionalDiscussion','witness','supporting']){
  const versions=sectionData(a.n,section).versions||[];
  versions.forEach((item,index)=>{const saved=String(item.evidenceSubtype||item.subtype||'').trim(),label=saved&&/^(RPL|WT|AO|PD|CS)(?:\b|\s*·)/i.test(saved)?saved:sectionLabels[section];rows.push({section,index,label,date:item.date||'',detail:`Submitted evidence · Attempt ${index+1}`})});
 }
 walkthroughAllSubmissions(a.n).forEach((item,index)=>rows.push({section:'walkthrough',index,evidenceId:item.id||'',label:'Record a Video',date:item.date||'',detail:`Submitted video · ${(item.confirmedCodes||[]).join(', ')||'KSB evidence'}`}));
 return rows.sort((x,y)=>String(y.date||'').localeCompare(String(x.date||''))||x.label.localeCompare(y.label));
}
function submittedEvidencePreviewHtml(a){
 const rows=submittedEvidenceRows(a);if(!rows.length)return '';
 return `<section class="submitted-evidence-panel"><div class="submitted-evidence-head"><div><div class="number">SUBMITTED EVIDENCE</div><h3>Evidence PDF previews</h3></div><span>${rows.length} item${rows.length===1?'':'s'}</span></div><div class="submitted-evidence-list">${rows.map(row=>`<div class="submitted-evidence-row" data-saved-evidence-row><span class="submitted-evidence-icon">${appIcon(row.section==='otj'?'academy':row.section==='statement'?'statement':row.section==='professionalDiscussion'?'microphone':row.section==='walkthrough'||row.section==='discussion'?'video':row.section==='photos'?'camera':'supporting')}</span><span class="submitted-evidence-copy"><strong>${esc(row.label)}</strong><small>${esc(row.detail)}${row.date?` · ${esc(formatShortDate(row.date))}`:''}</small></span><span class="submitted-evidence-actions"><button type="button" class="submitted-evidence-preview-btn" data-evidence-preview="${esc(row.section)}" data-evidence-index="${row.index}" ${row.otjId?`data-otj-id="${esc(row.otjId)}"`:''}>Preview PDF</button><button type="button" class="submitted-evidence-delete-btn" data-delete-evidence="${esc(row.section)}" data-delete-evidence-index="${row.index}" ${row.evidenceId?`data-delete-evidence-id="${esc(row.evidenceId)}"`:''} aria-label="Delete ${esc(row.label)}">Delete</button></span></div>`).join('')}</div></section>`;
}
function compiledEvidencePackTile(a){return `<section class="compiled-ep-tile" data-compiled-ep-tile><div><span>EP${a.n} · EVIDENCE PACK</span><strong>${esc(a.unit?`${a.unit} · ${a.title}`:a.title)}</strong></div><div class="compiled-ep-actions"><button type="button" id="previewUnitPack">Preview EP</button><button type="button" id="downloadUnitPack">Download EP</button></div></section>`}
async function deleteSavedEvidencePdf(a,section,index,evidenceId=''){
 const warning=`Delete this saved evidence?\n\nThis permanently removes the submitted evidence from this Evidence Pack and may reduce ${COURSE.nvqUnits?'Learning Outcome':'KSB'} progress.\n\nThis cannot be undone.`;
 if(!confirm(warning))return false;
 if(section==='walkthrough'){
   const id=String(evidenceId||walkthroughAllSubmissions(a.n)[Number(index)]?.id||'');
   if(!id)return false;
   const meta=walkthroughMeta(a.n);
   if(id.startsWith('legacy-')){
     const code=id.slice(7),item=meta[code];
     if(item?.blobKey){try{await deleteStore(item.blobKey)}catch(error){console.warn(error)}}
     delete meta[code];
   }else{
     const submissions=Array.isArray(meta._submissions)?meta._submissions:[],item=submissions.find(x=>x.id===id);
     if(item?.blobKey){try{await deleteStore(item.blobKey)}catch(error){console.warn(error)}}
     meta._submissions=submissions.filter(x=>x.id!==id);
   }
   meta._saved=false;
   state.data[walkthroughMetaKey(a.n)]=meta;
 }else{
   const sd=sectionData(a.n,section),versions=Array.isArray(sd.versions)?sd.versions:[];
   const target=versions[Number(index)];
   if(!target)return false;
   const blobKeys=new Set();
   const collect=value=>{
     if(!value||typeof value!=='object')return;
     if(typeof value.blobKey==='string'&&value.blobKey)blobKeys.add(value.blobKey);
     if(Array.isArray(value))value.forEach(collect);else Object.values(value).forEach(collect);
   };
   collect(target);
   for(const blobKey of blobKeys){try{await deleteStore(blobKey)}catch(error){console.warn(error)}}
   versions.splice(Number(index),1);
   sd.versions=versions;
   state.data[key(a.n,section)]=sd;
 }
 invalidatePackStatus(a.n);
 await saveData();
 try{await refreshLatestEvidencePackPdf(a.n)}catch(error){console.warn('Unable to refresh Evidence Pack PDF after evidence deletion',error)}
 toast('Saved evidence deleted');
 return true;
}

function closeEvidencePdfPreview(){const modal=document.getElementById('evidencePdfPreviewModal');if(!modal)return;const url=modal.dataset.objectUrl;if(url)URL.revokeObjectURL(url);modal.remove()}
function createLearningHoursEntryPreview(entry){
 const W=1240,H=1754,M=86,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),short=learningHoursShortLabel(),mate=learningHoursMateName(),isNvq=!!COURSE.nvqUnits;
 x.fillStyle='#fff';x.fillRect(0,0,W,H);x.fillStyle='#79d22f';x.fillRect(M,42,8,52);x.fillStyle='#657273';x.font='700 12px Arial';x.fillText(`APPRENTICE+ · ${isNvq?'NVQ':'APPRENTICESHIP'} EVIDENCE PACK`,M+24,60);x.fillStyle='#172426';x.font='700 30px Arial';x.fillText(`${short} Evidence`,M+24,91);x.fillStyle='#657273';x.font='500 14px Arial';x.fillText(mate,M+24,120);x.strokeStyle='#d9dedc';x.beginPath();x.moveTo(M,142);x.lineTo(W-M,142);x.stroke();
 const assignmentNo=Number(entry.assignment||0),a=assignmentNo?assignment(assignmentNo):null,codes=isNvq?(entry.loCodes||[]):[];
 const meta=[['Learner',state.profile?.fullName||'Learner'],['Date',formatShortDate(entry.date)],['Hours',`${Number(entry.hours||0).toFixed(1)} hrs`],['Evidence',short],['Assignment',a?`${assignmentCardCode(a)} · ${a.title}`:'Course learning'],[isNvq?'Unit':'Location',isNvq?(a?.unit||entry.unit||'—'):(String(entry.place||'Learning').replace(/^./,c=>c.toUpperCase()))]];
 let y=170;x.fillStyle='#f7f9f8';x.fillRect(M,y,W-2*M,126);const colW=(W-2*M)/3;meta.forEach(([k,v],i)=>{const col=i%3,row=Math.floor(i/3),px=M+18+col*colW,py=y+25+row*55;x.fillStyle='#657273';x.font='700 11px Arial';x.fillText(k.toUpperCase(),px,py);x.fillStyle='#172426';x.font='700 16px Arial';const text=String(v||'—');x.fillText(text.length>36?text.slice(0,33)+'…':text,px,py+22)});y+=158;
 const wrap=(text,maxW,font='16px Arial')=>{x.font=font;const out=[];for(const para of String(text||'—').split(/\n/)){const words=para.split(/\s+/);let line='';for(const word of words){const test=line?`${line} ${word}`:word;if(x.measureText(test).width>maxW&&line){out.push(line);line=word}else line=test}if(line)out.push(line)}return out.length?out:['—']};
 const block=(heading,value)=>{const lines=wrap(value,W-2*M,'16px Arial');x.fillStyle='#52605f';x.font='700 13px Arial';x.fillText(heading.toUpperCase(),M,y);y+=24;x.fillStyle='#172426';x.font='16px Arial';for(const line of lines){x.fillText(line,M,y);y+=22}y+=16};
 if(isNvq)block('Activity',entry.did||entry.activityType||'—');block(isNvq?'What did you learn?':'What did you do and learn?',entry.learned||'—');if(isNvq&&codes.length)block('Learning Outcomes',codes.join(', '));if(entry.activityType)block('Activity type',entry.activityType);
 x.strokeStyle='#d9dedc';x.beginPath();x.moveTo(M,H-72);x.lineTo(W-M,H-72);x.stroke();x.fillStyle='#657273';x.font='13px Arial';x.fillText(`Apprentice+ · ${short} evidence`,M,H-36);x.textAlign='right';x.fillText('Individual evidence record',W-M,H-36);x.textAlign='left';return c.toDataURL('image/jpeg',0.9)
}
function selectedCodesForEvidence(a,item,section=''){
 const valid=new Set((a?.ksbs||[]).map(([code])=>String(code)));
 const found=[];
 const add=code=>{code=String(code||'').trim();if(code&&(!valid.size||valid.has(code))&&!found.includes(code))found.push(code)};
 (Array.isArray(item?.ksbEvidence)?item.ksbEvidence:[]).forEach(add);
 (Array.isArray(item?.selectedCodes)?item.selectedCodes:[]).forEach(add);
 (Array.isArray(item?.confirmedCodes)?item.confirmedCodes:[]).forEach(add);
 if(item?.code)add(item.code);
 Object.keys(item?.outcomePhotos||{}).forEach(code=>{if(item.outcomePhotos?.[code]?.data)add(code)});
 Object.keys(item?.skillPhotos||{}).forEach(code=>{if((item.skillPhotos?.[code]||[]).some(photo=>photo?.data))add(code)});
 Object.keys(item?.scores||{}).forEach(key=>{const code=String(key).split('::')[0],raw=item.scores?.[key];if(Number(raw)>0)add(code)});
 Object.keys(item?.recordings||{}).forEach(code=>{const recording=item.recordings?.[code];if(recording?.data||recording?.blobKey)add(code)});
 if(section==='photos'&&!found.length){Object.keys(item?.outcomePhotos||{}).forEach(add);Object.keys(item?.skillPhotos||{}).forEach(add)}
 return found;
}
async function buildDirectEvidencePreviewPages(a,section,item,index=0){
 const W=1240,H=1754,M=72,FOOTER_Y=H-70,SIG_H=item?.signature?122:0,SIG_TOP=item?.signature?FOOTER_Y-SIG_H-20:FOOTER_Y-12;
 const clean=value=>String(value??'').replace(/\s+/g,' ').trim(),pages=[];
 const load=src=>new Promise(resolve=>{if(!src)return resolve(null);const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=src});
 const wrap=(x,text,maxW,font)=>{x.font=font;const out=[];for(const para of String(text||'—').split(/\n+/)){const words=para.trim().split(/\s+/).filter(Boolean);let line='';for(const word of words){const test=line?`${line} ${word}`:word;if(x.measureText(test).width>maxW&&line){out.push(line);line=word}else line=test}if(line)out.push(line)}return out.length?out:['—']};
 const title=savedEvidenceTypeLabel(item,section),codes=selectedCodesForEvidence(a,item,section),date=item?.date||'',accent=window.evidenceTypeStyle?.(title)?.colour||'#58B51F';
 const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');paintPdfPageBackground(x,W,H);x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(M-18,28,W-2*M+36,126,26);x.fill();x.fillStyle=accent;x.fillRect(M,48,7,44);x.fillStyle='#68756D';x.font='700 12px Arial';x.fillText(`APPRENTICE+ · ${COURSE.nvqUnits?'NVQ':'APPRENTICESHIP'} EVIDENCE`,M+22,62);x.fillStyle='#18231E';x.font='700 30px Arial';x.fillText(title,M+22,96);x.fillStyle='#68756D';x.font='500 14px Arial';x.fillText(`${state.profile?.fullName||'Learner'} · ${assignmentCardCode(a)} · ${a.title}`,M+22,126);
 let y=178;
 const meta=[['Learner',state.profile?.fullName||'Learner'],['Date',date?formatShortDate(date):'—'],['Evidence',title],['Attempt',String(index+1)],[COURSE.nvqUnits?'Learning Outcomes':'KSBs',codes.join(', ')||'—']];
 x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(M,y,W-2*M,100,20);x.fill();const col=(W-2*M)/3;meta.forEach(([k,v],i)=>{const px=M+16+(i%3)*col,py=y+22+Math.floor(i/3)*42;x.fillStyle='#657273';x.font='700 10px Arial';x.fillText(k.toUpperCase(),px,py);x.fillStyle='#172426';x.font='700 14px Arial';const value=clean(v||'—');x.fillText(value.length>42?value.slice(0,39)+'…':value,px,py+18)});y+=124;
 const scoreLines=Object.entries(item?.scores||{}).filter(([,v])=>Number(v)>0).map(([k,v])=>`${String(k).replace(/::/g,' · criterion ')}: ${v}`).join('\n');
 const recLines=Object.entries(item?.recordings||{}).filter(([,r])=>r?.data||r?.blobKey).map(([code,r])=>`${code}: ${r.name||r.evidenceName||'Recording'}${r.duration?` · ${r.duration}`:''}${r.type?` · ${r.type}`:''}${r.date?` · ${r.date}`:''}`).join('\n');
 const voiceLines=(item?.voiceSubmissions||[]).map((r,i)=>`${i+1}. ${r.name||'Voice recording'}${r.duration?` · ${r.duration}`:''}${r.date?` · ${r.date}`:''}`).join('\n');
 const fileLines=(item?.files||[]).map((f,i)=>`${i+1}. ${f.evidenceName||f.name||'Evidence file'}${f.type?` · ${f.type}`:''}${f.size?` · ${formatMediaSize(f.size)}`:''}`).join('\n');
 const blocks=[];const add=(h,v)=>{v=clean(v);if(v)blocks.push([h,v])};
 if(section==='statement'){add('Learner response',item?.text||item?.statement||item?.learnerStatement)}
 else if(section==='photos'){add(COURSE.nvqUnits?'Learning Outcomes evidenced':'Skills evidenced',codes.join(', '));add('Notes',item?.activity)}
 else if(section==='discussion'||section==='walkthrough'){add('Activity / context',item?.activity||item?.summary);add('Video evidence',recLines||`${item?.name||'Saved video'}${item?.duration?` · ${item.duration}`:''}${item?.type?` · ${item.type}`:''}`);if(item?.notes)add('Notes',typeof item.notes==='string'?item.notes:Object.entries(item.notes).map(([k,v])=>`${k}: ${v}`).join('\n'))}
 else if(section==='professionalDiscussion'){add('Discussion lead',item?.assessor);add('Activity discussed',item?.activity);add('Audio evidence',recLines||voiceLines);add('Comments',item?.feedback)}
 else if(section==='witness'){add('Witness',[item?.personName,item?.role,item?.organisation||item?.contactDetails].filter(Boolean).join(' · '));add('Activity witnessed',item?.activity);add('Witness statement / comments',item?.feedback||item?.additionalComments);add('Evidence ratings',scoreLines);add('Attached files',fileLines)}
 else if(section==='practical'){add('Assessor',item?.tutor||item?.assessor);add('Activity observed',item?.activity);add('Observation / comments',item?.feedback);add('Assessment summary',item?.feedbackSummary);add('Areas for improvement',item?.feedbackDevelopment);add('Assessment marks',scoreLines)}
 else if(section==='supporting'){add('Evidence type',item?.type||'Supporting evidence');add('Name / source',[item?.personName,item?.role,item?.organisation].filter(Boolean).join(' · '));add('Activity / description',item?.activity);add('Comments',item?.feedback);add('Attached files',fileLines);add('Assessment marks',scoreLines)}
 const photos=[];(item?.photos||[]).filter(Boolean).forEach((photo,i)=>{if(photo?.data)photos.push({label:`Photo ${i+1}`,src:photo.data})});Object.entries(item?.outcomePhotos||{}).forEach(([code,photo])=>{if(photo?.data)photos.push({label:`${code} evidence photograph`,src:photo.data})});Object.entries(item?.skillPhotos||{}).forEach(([code,list])=>(list||[]).forEach((photo,i)=>{if(photo?.data)photos.push({label:`${code} · Photo ${i+1}`,src:photo.data})}));(item?.files||[]).forEach((file,i)=>{if(String(file?.type||'').startsWith('image/')&&file?.data)photos.push({label:file.evidenceName||file.name||`Attached image ${i+1}`,src:file.data})});
 const imageObjs=[];for(const photo of photos){const img=await load(photo.src);if(img)imageObjs.push({...photo,img})}
 // Fit every evidence submission to one A4 page where physically possible. Text shrinks before anything is omitted.
 const contentBottom=SIG_TOP-18;let bodyFont=15,lineH=20,headingFont=11,headingGap=18;
 const estimateTextHeight=font=>{const lh=font+5;let total=0;for(const [heading,value] of blocks){total+=18;total+=wrap(x,value,W-2*M,`400 ${font}px Arial`).length*lh+7}return total};
 let photoArea=imageObjs.length?Math.min(640,Math.max(300,contentBottom-y-260)):0;
 for(let f=15;f>=10;f--){const txt=estimateTextHeight(f),remaining=contentBottom-y-txt;if(!imageObjs.length||remaining>=220){bodyFont=f;lineH=f+5;photoArea=imageObjs.length?Math.max(220,remaining-8):0;break}}
 const maxTextBottom=imageObjs.length?contentBottom-photoArea-10:contentBottom;
 for(const [heading,value] of blocks){if(y>maxTextBottom-34)break;x.fillStyle='#52605f';x.font=`700 ${headingFont}px Arial`;x.fillText(clean(heading).toUpperCase(),M,y);y+=headingGap;x.fillStyle='#172426';x.font=`400 ${bodyFont}px Arial`;const lines=wrap(x,value,W-2*M,`400 ${bodyFont}px Arial`);for(const line of lines){if(y+lineH>maxTextBottom)break;x.fillText(line,M,y);y+=lineH}y+=7}
 if(imageObjs.length){
  const drawCover=(img,px,py,bw,bh)=>{x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(px,py,bw,bh,18);x.fill();x.strokeStyle='#E1E9E0';x.lineWidth=1;x.stroke();if(!img)return;const scale=Math.min(bw/img.width,bh/img.height),iw=img.width*scale,ih=img.height*scale;x.drawImage(img,px+(bw-iw)/2,py+(bh-ih)/2,iw,ih)};
  if(section==='photos'){
   const top=Math.max(y+8,maxTextBottom+8),gap=12,layout=takePhotosGridLayout(imageObjs.length),cols=layout.cols,rows=layout.rows,available=Math.max(180,contentBottom-top),cellW=(W-2*M-gap*(cols-1))/cols,cellH=(available-gap*(rows-1))/rows,captionH=20,imgH=Math.min(cellW*9/16,cellH-captionH);
   for(let i=0;i<imageObjs.length&&i<9;i++){const item=imageObjs[i],colIdx=i%cols,rowIdx=Math.floor(i/cols),px=M+colIdx*(cellW+gap),py=top+rowIdx*(cellH+gap);drawCover(item.img,px,py,cellW,imgH);x.fillStyle='#52605f';x.font='600 10px Arial';x.fillText(`Photo ${i+1}`,px,py+imgH+15)}
  }else if(section==='practical'){
   const top=Math.max(y+8,maxTextBottom+8),gap=10,cols=3,cellW=(W-2*M-gap*2)/3,imgH=cellW*9/16,rowStep=imgH+28;
   for(let i=0;i<9;i++){const item=imageObjs[i],colIdx=i%3,rowIdx=Math.floor(i/3),px=M+colIdx*(cellW+gap),py=top+rowIdx*rowStep;drawCover(item?.img||null,px,py,cellW,imgH);x.fillStyle='#52605f';x.font='600 10px Arial';x.fillText(`Photo ${i+1}`,px,py+imgH+17)}
  }else{
   const top=Math.max(y+4,maxTextBottom+4),available=Math.max(180,contentBottom-top),count=imageObjs.length,cols=count<=3?count:count<=4?2:3,rows=Math.ceil(count/cols),gap=12,cellW=(W-2*M-gap*(cols-1))/cols,cellH=(available-gap*(rows-1))/rows;for(let i=0;i<count;i++){const {img,label}=imageObjs[i],colIdx=i%cols,rowIdx=Math.floor(i/cols),px=M+colIdx*(cellW+gap),py=top+rowIdx*(cellH+gap),captionH=24,imgH=Math.max(50,cellH-captionH);x.fillStyle='#f4f6f5';x.fillRect(px,py,cellW,imgH);const scale=Math.min(cellW/img.width,imgH/img.height),iw=img.width*scale,ih=img.height*scale;x.drawImage(img,px+(cellW-iw)/2,py+(imgH-ih)/2,iw,ih);x.fillStyle='#52605f';x.font='600 10px Arial';const cap=clean(label);x.fillText(cap.length>46?cap.slice(0,43)+'…':cap,px,py+imgH+16)}
  }
 }
 if(item?.signature){const sig=await load(item.signature);x.fillStyle='#52605f';x.font='700 11px Arial';x.fillText('SIGNATURE',M,SIG_TOP);x.strokeStyle='#cbd2cf';x.strokeRect(M,SIG_TOP+14,350,88);if(sig)try{x.drawImage(sig,M+8,SIG_TOP+22,334,72)}catch{}}
 x.strokeStyle='#DCE7DA';x.beginPath();x.moveTo(M,H-70);x.lineTo(W-M,H-70);x.stroke();x.fillStyle='#68756D';x.font='12px Arial';x.fillText(`Apprentice+ · ${title}`,M,H-36);x.textAlign='right';x.fillText('1 / 1',W-M,H-36);x.textAlign='left';pages.push(c);
 return pages.map(canvas=>canvas.toDataURL('image/jpeg',.9));
}
async function makeIndividualEvidencePdf(a,section,index,otjId=''){
 if(section==='otj'){
  const entry=otjEntries().find(item=>String(item.id)===String(otjId));if(!entry)throw new Error(`${learningHoursShortLabel()} entry not found`);
  const previewPages=[createLearningHoursEntryPreview(entry)],pdfBytes=makeImagePDF(previewPages.map(dataUrlBytes),1240,1754);
  return {bytes:pdfBytes,name:`${safeZipName(state.profile?.fullName||'Learner')}-${learningHoursShortLabel()}-${entry.date||isoToday()}-${Number(entry.hours||0).toFixed(1)}hrs.pdf`,previewPages};
 }
 let item;
 if(section==='walkthrough'){const all=await collectWalkthroughEvidence(a.n,a);item=all[index];if(!item)throw new Error('Video evidence not found')}
 else {item=sectionData(a.n,section).versions?.[index];if(!item)throw new Error('Evidence submission not found')}
 const previewPages=await buildDirectEvidencePreviewPages(a,section,structuredClone(item),index);if(!previewPages.length)throw new Error('No preview pages could be created');
 const pdfBytes=makeImagePDF(previewPages.map(dataUrlBytes),1240,1754),label=friendlyEvidenceSection(section).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'');
 return {bytes:pdfBytes,name:`${safeZipName(state.profile?.fullName||'Learner')}-${assignmentCardCode(a)}-${label}-Attempt-${index+1}.pdf`,previewPages};
}
async function openEvidencePdfPreview(a,section,index,otjId=''){
 closeEvidencePdfPreview();toast('Preparing PDF preview...');
 try{
  const {bytes,name,previewPages=[]}=await makeIndividualEvidencePdf(a,section,index,otjId),blob=new Blob([bytes],{type:'application/pdf'}),url=URL.createObjectURL(blob),modal=document.createElement('div');
  const pageHtml=previewPages.length?previewPages.map((src,i)=>`<figure class="evidence-pdf-page"><img src="${src}" alt="PDF preview page ${i+1}"><figcaption>Page ${i+1} of ${previewPages.length}</figcaption></figure>`).join(''):`<div class="evidence-pdf-preview-unavailable"><strong>Preview prepared</strong><p>The PDF is ready to download.</p></div>`;
  modal.className='modal evidence-pdf-preview-modal';modal.id='evidencePdfPreviewModal';modal.dataset.objectUrl=url;modal.innerHTML=`<section class="modal-card evidence-pdf-preview-card" role="dialog" aria-modal="true" aria-label="PDF preview"><div class="evidence-pdf-preview-head"><div><div class="number">PDF PREVIEW</div><h2>${esc(friendlyEvidenceSection(section==='otj'?'otj':section))}</h2></div><button type="button" class="icon-close-button" id="closeEvidencePdfPreview" aria-label="Close PDF preview">${appIcon('close')}</button></div><div class="evidence-pdf-pages" aria-label="PDF pages">${pageHtml}</div><div class="evidence-pdf-preview-actions"><a class="btn evidence-pdf-download" href="${url}" download="${esc(name)}">Download individual PDF</a><button type="button" class="btn secondary" id="closeEvidencePdfPreviewBottom">Close</button></div></section>`;
  document.body.appendChild(modal);modal.onclick=e=>{if(e.target===modal)closeEvidencePdfPreview()};document.getElementById('closeEvidencePdfPreview').onclick=closeEvidencePdfPreview;document.getElementById('closeEvidencePdfPreviewBottom').onclick=closeEvidencePdfPreview;
 }catch(error){console.error('Individual evidence PDF preview failed',error);toast(`Unable to create PDF preview${error?.message?`: ${error.message}`:''}`)}
}
function nvqSupportingPurposeStatus(n,purpose){
 const versions=sectionData(n,'supporting').versions.filter(v=>(v.nvqEvidenceMode||'practical')===purpose);
 return versions.length?'complete':'none';
}
function nvqEvidenceModeStats(a,mode){
 const practicalSections=['photos','walkthrough','supporting','witness'],theorySections=['statement','professionalDiscussion','supporting'];
 const sections=mode==='practical'?practicalSections:theorySections,required=mode==='practical'?2:1;
 const done=sections.filter(s=>s==='supporting'?nvqSupportingPurposeStatus(a.n,mode)==='complete':s==='walkthrough'?walkthroughStatus(a.n)==='complete':sectionStatus(a.n,s)==='complete').length;
 return {done,total:sections.length,required,complete:done>=required,pct:Math.min(100,Math.round(done/required*100))};
}
function openNvqEvidenceMode(mode){state.nvqEvidenceMode=mode;state.view='nvq-evidence-mode';render();window.scrollTo(0,0)}
function renderNvqEvidenceMode(){
 const a=assignment(state.assignment),mode=state.nvqEvidenceMode==='theory'?'theory':'practical',stats=nvqEvidenceModeStats(a,mode);
 const practical=[['photos','camera','Take Photos','Photograph naturally occurring workplace evidence.'],['walkthrough','video','Record a Video','Record actual workplace video evidence showing the practical work being carried out.'],['supporting','supporting','Upload Evidence','Add drawings, RAMS, job sheets and other workplace documents.'],['witness','witness','Employer Verification','Have workplace evidence verified by a suitable witness.']];
 const theory=[['statement','statement','Write About It','Answer the knowledge requirements in writing.'],['professionalDiscussion','microphone','Talk About It','Answer the knowledge requirements by recorded voice discussion.'],['supporting','supporting','Upload Evidence','Upload completed question packs, workbooks or other existing theory evidence.']];
 const methods=mode==='practical'?practical:theory;
 app.innerHTML=shell(`<button class="back no-print" id="nvqModeBack">← EP${a.n}</button><div class="assignment-title"><div class="number">EP${a.n} · UNIT ${esc(a.unit||'')}</div><h2>${mode==='practical'?'Practical':'Theory'}</h2><p class="muted">${esc(a.title)}</p></div><section class="nvq-mode-summary"><strong>${stats.done} / ${stats.required} required evidence form${stats.required===1?'':'s'} completed</strong><p>${mode==='practical'?'Practical requires 2 different forms of evidence. Collect these from normal workplace performance; additional evidence can still be added where useful.':'Theory requires 1 form of evidence. Use a written answer, recorded discussion or upload an existing completed question pack/workbook.'}</p></section><section class="nvq-mode-methods">${methods.map(([section,icon,title,desc])=>`<button type="button" class="nvq-mode-method" data-nvq-method="${section}"><span class="section-title-icon">${appIcon(icon)}</span><strong>${title}</strong><small>${desc}</small></button>`).join('')}</section><p class="nvq-hidden-map-note">Learner view is simplified to Practical and Theory. Unit, learning outcome and assessment-criterion references remain available for portfolio and quality-assurance mapping.</p>`);
 document.getElementById('nvqModeBack').onclick=()=>{state.view='assignment';render()};
 document.querySelectorAll('[data-nvq-method]').forEach(b=>b.onclick=()=>{const section=b.dataset.nvqMethod;if(section==='witness'){showVerifiedEvidenceChooser();return}if(section==='supporting')state.nvqSupportingPurpose=mode;if(section==='walkthrough'){state.walkthroughCode=null;state.view='walkthrough';render();window.scrollTo(0,0);return}state.section=section;state.view='section';render();window.scrollTo(0,0)});
}
function renderAssignment(){
 const a=assignment(state.assignment);if(a?.selectOptional){renderOptionalUnitSelection();return}
 if(COURSE.nvqUnits){const lh=assignmentLearningHoursStats(a.n),ps=nvqEvidenceModeStats(a,'practical'),ts=nvqEvidenceModeStats(a,'theory');app.innerHTML=shell(`<button class="back no-print" id="back">← Course</button><div class="assignment-title"><div class="number">EP${a.n} · UNIT ${esc(a.unit||'')}</div><h2>${esc(a.title)}</h2><p class="muted">Complete the practical evidence, theory knowledge and GLH for this unit. Detailed assessment criteria remain mapped behind the scenes.</p></div><section class="nvq-path-grid"><button class="nvq-path-card" id="nvqPractical"><span class="section-title-icon">${appIcon('observation')}</span><h3>Practical</h3><p>Workplace photos, video, documents and witness evidence.</p><div class="muted" style="margin-top:10px">${ps.done}/${ps.required} required evidence forms${ps.complete?' · Complete':''}</div></button><button class="nvq-path-card" id="nvqTheory"><span class="section-title-icon">${appIcon('statement')}</span><h3>Theory</h3><p>Written answers, recorded discussion or uploaded question packs covering knowledge and understanding.</p><div class="muted" style="margin-top:10px">${ts.done}/${ts.required} required evidence form${ts.required===1?'':'s'}${ts.complete?' · Complete':''}</div></button><button class="nvq-path-card glh-path" id="nvqGlh"><span class="section-title-icon">${appIcon('academy')}</span><div><h3>GLH · ${Number(lh.total||0).toFixed(1)} / ${Number(lh.target||0).toFixed(1)} hrs</h3><p>${Math.round(lh.percent||0)}% complete · official Unit ${esc(a.unit||'')} GLH target.</p></div></button></section>${compiledEvidencePackTile(a)}`);document.getElementById('back').onclick=()=>{state.view='course';render()};document.getElementById('nvqPractical').onclick=()=>openNvqEvidenceMode('practical');document.getElementById('nvqTheory').onclick=()=>openNvqEvidenceMode('theory');document.getElementById('nvqGlh').onclick=()=>{state.otjReturnAssignment=a.n;state.glhAssignment=a.n;state.editingOtjId=null;state.otjSelectedActivity=null;state.otjMateTab='entry';state.view='otjmate';render();window.scrollTo(0,0)};document.getElementById('previewUnitPack').onclick=()=>previewUnitPack(a.n);document.getElementById('downloadUnitPack').onclick=()=>downloadCompiledUnitPack(a.n);return;}
 const coverage=COURSE.nvqUnits?nvqCoverageSummary(a.n):ksbCoverageSummary(a.n);
 const videoSection='walkthrough';
 const tiles=[
  ['photos','camera','Take Photos',COURSE.nvqUnits?'Photograph the work and link it to the Learning Outcomes demonstrated':'Photograph the work and link it to the Skills demonstrated'],
  ['statement','statement','Write About It',COURSE.nvqUnits?'Explain the work and link it to the relevant Learning Outcomes':'Explain what you did, how you did it and what you learned'],
  [videoSection,'video','Record a Video',COURSE.nvqUnits?'Show or explain the work against the relevant Learning Outcomes':'Show or explain the work on video'],
  ['professionalDiscussion','microphone','Talk About It',COURSE.nvqUnits?'Record a voice reflection against the relevant Learning Outcomes':'Record a voice reflection against Knowledge and Behaviours'],
  ['otj','academy',COURSE.nvqUnits?'GLH':'OTJ',COURSE.nvqUnits?'Record guided learning related to this Evidence Pack':'Record new learning related to this Evidence Pack'],
  ['verified','witness','Witness and Uploads',COURSE.nvqUnits?'Witness testimony or uploaded evidence against the Learning Outcomes':'Witness testimony or uploaded evidence']
 ];
 const evidenceKsbPills={photos:COURSE.nvqUnits?['LO']:['S'],statement:COURSE.nvqUnits?['LO']:['K'],walkthrough:COURSE.nvqUnits?['LO']:['S','B'],professionalDiscussion:COURSE.nvqUnits?['LO']:['K','B'],otj:[],verified:COURSE.nvqUnits?['LO']:['K','S','B']};
 const evidenceKsbPillsHtml=section=>(evidenceKsbPills[section]||[]).map(type=>`<span class="evidence-ksb-pill">${type}</span>`).join('');
 const ready=assignmentComplete(a.n),status=state.data[packStatusKey(a.n)]||{},rpl=assignmentRPL(a.n);
 app.innerHTML=shell(`<button class="back no-print" id="back">← Course</button>
 <div class="assignment-title">${rpl?'<span class="submitted-ribbon rpl-ribbon page-ribbon">RPL</span>':status.uploaded?'<span class="submitted-ribbon page-ribbon">SUBMITTED</span>':''}
 <div class="number">${COURSE.nvqUnits?`EP${a.n} · Evidence Pack`:`EP${a.n} · Evidence Pack`}</div>
 <h2>${esc(a.title)}</h2>
 <div class="ksb-row">${a.ksbs.map(k=>{const count=coverage?.coverage?.[k[0]]?.count||0,rplCriterion=criterionRPL(a.n,k[0]),required=Number(COURSE.evidenceRequirement||2);return `<span class="ksb-mini ${rplCriterion?'coverage-rpl':count>=required?'coverage-complete':count>0?'coverage-partial':'coverage-none'}" title="${rplCriterion?'Recognition of Prior Learning':`${count}/${required} evidence requirements met`}">${esc(k[0])}${rplCriterion?' · RPL':''} · ${esc(learnerPromptTitle(a.n,k[0],k[1]))}</span>`}).join('')}</div></div>
 <div class="evidence-audience-label"><span>${COURSE.nvqUnits?'NVQ EVIDENCE':'APPRENTICE EVIDENCE'}</span><small>${COURSE.nvqUnits?'Choose how you want to prove the Learning Outcomes':'Choose how you want to prove the work'}</small></div>
 <section class="evidence-grid nvq-six-evidence learner-evidence-grid">${tiles.map(([section,icon,title,description])=>{
  if(section==='otj'){const lh=assignmentLearningHoursStats(a.n),targetText=lh.targetKnown?`${lh.total.toFixed(1)} / ${lh.target.toFixed(1)} hrs`:`${lh.total.toFixed(1)} hrs`;return `<button class="evidence-tile evidence-tile-otj ${lh.complete?'done':'learning-incomplete'}" data-section="otj"><div class="evidence-tile-heading"><div class="tile-icon evidence-icon-otj">${appIcon(icon)}</div><span class="evidence-hours-percent">${lh.targetKnown?`${lh.percent}%`:''}</span></div><h3>${title}</h3><div class="evidence-hours-progress"><span><i style="width:${lh.percent}%"></i></span></div><p>${lh.targetKnown?`${targetText} · ${lh.entries.length} entr${lh.entries.length===1?'y':'ies'}`:lh.entries.length?`${lh.entries.length} learning entr${lh.entries.length===1?'y':'ies'} · ${lh.total.toFixed(1)} hrs`:description}</p></button>`}
  if(section==='verified'){const v=verifiedEvidenceSummary(a.n),cls=v.status==='complete'?'done':v.status==='incomplete'?'warning':'';return `<button class="evidence-tile evidence-tile-verified ${cls}" data-section="verified"><div class="evidence-tile-heading"><div class="tile-icon evidence-icon-verified">${appIcon(icon)}</div><span class="evidence-ksb-pills">${evidenceKsbPillsHtml(section)}</span></div><h3>${title}</h3><p>${v.submitted?'✓ '+v.submitted+' submitted evidence item'+(v.submitted>1?'s':''):description}</p></button>`}
  const isWalkthrough=section==='walkthrough',sd=isWalkthrough?null:sectionData(a.n,section),walkProgress=isWalkthrough?walkthroughCount(a.n):null;
  let label=rpl?'Completed through RPL':isWalkthrough?`${walkProgress.done}/${walkProgress.total} ${COURSE.nvqUnits?'LO':'KSB'} criteria recorded`:sd.versions.length?`${sd.versions.length} submitted evidence item${sd.versions.length>1?'s':''}`:description;
  const stateName=rpl?'complete':isWalkthrough?walkthroughStatus(a.n):sectionStatus(a.n,section),cls=stateName==='complete'?'done':stateName==='incomplete'?'warning':'';
  return `<button class="evidence-tile ${cls}" data-section="${section}"><div class="evidence-tile-heading"><div class="tile-icon evidence-icon-${section}">${appIcon(icon)}</div><span class="evidence-ksb-pills">${evidenceKsbPillsHtml(section)}</span></div><h3>${title}</h3><p>${(!isWalkthrough&&sd.versions.length)||(isWalkthrough&&walkProgress.done)?'✓ ':''}${label}</p></button>`
 }).join('')}</section>
 ${compiledEvidencePackTile(a)}
 ${rpl?'<section class="card download-card complete rpl-monthly-note"><h3>Evidence Pack completed through RPL</h3><p class="muted" style="margin-top:5px">This Evidence Pack is recorded as an RPL unit and will be identified separately in the next Monthly Portfolio Upload summary.</p></section>':''}`);
 document.getElementById('back').onclick=()=>{state.view='course';state.section=null;render()};
 document.getElementById('previewUnitPack').onclick=()=>previewUnitPack(a.n);document.getElementById('downloadUnitPack').onclick=()=>downloadCompiledUnitPack(a.n);
 document.querySelectorAll('[data-evidence-preview]').forEach(button=>button.onclick=()=>openEvidencePdfPreview(a,button.dataset.evidencePreview,Number(button.dataset.evidenceIndex)||0,button.dataset.otjId||''));
 document.querySelectorAll('[data-delete-evidence]').forEach(button=>button.onclick=async event=>{event.preventDefault();event.stopPropagation();const deleted=await deleteSavedEvidencePdf(a,button.dataset.deleteEvidence,Number(button.dataset.deleteEvidenceIndex)||0,button.dataset.deleteEvidenceId||'');if(deleted)renderAssignment()});
 document.querySelectorAll('[data-section]').forEach(button=>button.onclick=()=>{
  const section=button.dataset.section;
  if(section==='verified'){showVerifiedEvidenceChooser();return}
  if(section==='otj'){state.otjReturnAssignment=a.n;state.glhAssignment=COURSE.nvqUnits?a.n:null;state.editingOtjId=null;state.otjSelectedActivity=null;state.otjMateTab='entry';state.view='otjmate';render();window.scrollTo(0,0);return}
  if(section==='walkthrough'){state.walkthroughCode=null;state.view='walkthrough';render();return}
  state.section=section;state.view='section';render()
 });
}
function outcomePhotoControl(a,code,d,readonly=false){const photo=d.outcomePhotos?.[code],filename=evidencePhotoFileName(a,code,0);return `<button type="button" class="lo-photo-control ${photo?'has-photo':''}" data-lo-photo="${code}" aria-label="${photo?'View or replace':'Add'} photo for ${code}" ${readonly?'data-readonly="true"':''}>${photo?`<img src="${photo.data}" alt="Evidence photograph for ${code}"><span class="linked-photo-filename">${esc(filename)}</span>`:`${appIcon('camera')}<span>Add photo</span>`}</button>`}
function outcomeCards(a,mode='prompt',d={outcomePhotos:{}},readonly=false){return `<div class="outcome-list">${a.ksbs.map(([code,text])=>`<article class="outcome-card with-photo"><div class="outcome-card-copy"><div class="outcome-code">Learning Outcome ${esc(code.replace('LO',''))}</div><strong>${esc(text)}</strong><div class="criteria-numbers">Criteria: ${esc(a.criteria?.[code]||'')}</div></div>${outcomePhotoControl(a,code,d,readonly)}</article>`).join('')}</div>`}
function statementSelectedKsbCodes(a,d){d.ksbEvidence=d.ksbEvidence||[];return a.ksbs.map(([code])=>code).filter(code=>d.ksbEvidence.includes(code))}
function statementWordRequirement(a,d){const selected=statementSelectedKsbCodes(a,d);return (COURSE.nvqUnits?selected:selected.filter(code=>/^K/i.test(code))).length*30}
function nvqStatementCards(a,d,readonly=false){d.ksbEvidence=d.ksbEvidence||[];return `<div class="outcome-list">${a.ksbs.map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<article class="outcome-card statement-ksb-card ${selected?'selected':''}"><button type="button" class="statement-ksb-toggle" data-statement-ksb-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="outcome-card-copy"><span class="outcome-code">Learning Outcome ${esc(code.replace('LO',''))} ${evidenceCoverageBadge(a.n,code)}</span><strong>${esc(text)}</strong><span class="criteria-numbers">Criteria: ${esc(a.criteria?.[code]||'')}</span><em>${selected?'Included · 30 words required':'Tap to include in this statement'}</em></span></button></article>`}).join('')}</div>`}
function ksbStatementCards(a,d,readonly=false){d.ksbEvidence=d.ksbEvidence||[];const knowledgeAndBehaviours=a.ksbs.filter(([code])=>/^K/i.test(code));return `<div class="outcome-list">${knowledgeAndBehaviours.map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<article class="outcome-card statement-ksb-card ${selected?'selected':''}"><button type="button" class="statement-ksb-toggle" data-statement-ksb-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="outcome-card-copy"><span class="outcome-code">${esc(code)} ${evidenceCoverageBadge(a.n,code)}</span><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><span class="criteria-numbers">${esc(text)}</span><em>${selected?'Included · 30 words required':'Tap to include in this statement'}</em></span></button></article>`}).join('')}</div>`}
function nvqTickRows(a,d,readonly=false){return a.ksbs.map(([code,text])=>`<div class="outcome-tick ${+d.scores?.[code]===5?'achieved':''}"><button type="button" class="outcome-select" data-nvq-toggle="${code}" ${readonly?'disabled':''}><span class="tick-box">${+d.scores?.[code]===5?'✓':''}</span><span><small>Learning Outcome ${esc(code.replace('LO',''))} ${evidenceCoverageBadge(a.n,code)}</small><strong>${esc(text)}</strong><em>Criteria: ${esc(a.criteria?.[code]||'')}</em></span></button>${outcomePhotoControl(a,code,d,readonly)}</div>`).join('')}
function ksbEvidenceTickRows(a,d,readonly=false){d.ksbEvidence=d.ksbEvidence||[];return a.ksbs.map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<div class="outcome-tick ${selected?'achieved':''}"><button type="button" class="outcome-select" data-ksb-evidence-toggle="${esc(code)}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span><small>${esc(code)} ${evidenceCoverageBadge(a.n,code)}</small><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><em>${esc(text)}</em></span></button></div>`}).join('')}
function selectedNvqOutcomes(a,d){return a.ksbs.filter(([code])=>+d.scores?.[code]===5)}
function shortOutcomeText(text,max=18){const words=String(text||'').replace(/\s+/g,' ').trim().split(' ');return words.length>max?words.slice(0,max).join(' ')+'…':words.join(' ')}
const NVQ_OBSERVATION_DETAILS={
 '102':{
  LO1:'The learner complied with site rules and the relevant health, safety and welfare requirements, using the required PPE and following the agreed safe system of work throughout the activity.',
  LO2:'The learner remained alert to changing conditions, identified hazards that were not adequately controlled and reported or acted on them in accordance with organisational procedures.',
  LO3:'The learner followed the risk assessment and method statement, maintained suitable access and housekeeping, used work equipment correctly and protected both themselves and others from foreseeable harm.',
  LO4:'The learner worked responsibly within the limits of their authority, coordinated safely with others and took appropriate action when circumstances affected the planned activity.',
  LO5:'The learner complied with site security arrangements, controlled access to the work area and followed the approved procedures for tools, materials, information and personal belongings.'
 },
 '234':{
  LO1:'The learner interpreted the drawings, specification and manufacturer information before confirming the cladding layout, support details, openings, movement provision and required finish.',
  LO2:'The learner applied the relevant legislation, site procedures and technical guidance, including requirements affecting access equipment, manual handling, cutting, dust control and structural restraint.',
  LO3:'The learner maintained a safe work area, used the appropriate PPE and RPE, controlled cutting operations and handled units and mortar without creating unnecessary risk to others.',
  LO4:'The learner selected cladding units, mortar, ties, fixings, insulation and ancillary components of the correct type, quantity and condition for the specified system.',
  LO5:'Materials and completed work were protected from contamination, impact and adverse weather, and the learner kept cavities, interfaces and surrounding finishes free from avoidable damage.',
  LO6:'The activity was organised in a logical sequence and progressed within the allocated time without compromising safety, accuracy or quality.',
  LO7:'The learner erected the cladding to the specified line, level, gauge, bond and tolerances, correctly positioning restraints, movement joints, openings and interfaces before carrying out regular quality checks.'
 },
 '235':{
  LO1:'The learner interpreted the drawings, specifications and setting-out information before confirming dimensions, bond, openings, levels, structural details and the required sequence of work.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for access, lifting, cutting, mortar use, dust control and the stability of the masonry during construction.',
  LO3:'The learner maintained safe access and good housekeeping, used suitable PPE and RPE and organised materials and equipment so the activity could be completed without exposing others to avoidable risk.',
  LO4:'The learner selected bricks or blocks, mortar and ancillary components of the specified type and quality, checking quantities and condition before and during the work.',
  LO5:'Materials, adjacent surfaces and completed masonry were protected from impact, contamination and weather, with waste and surplus mortar controlled as the work progressed.',
  LO6:'The learner planned the sequence effectively and completed the observed work within the allocated time while maintaining the required standard.',
  LO7:'The masonry was erected to the required bond, gauge, line, level and plumb, with openings and components correctly positioned. The learner checked dimensions and alignment regularly and corrected minor deviations promptly.'
 },
 '303':{
  LO1:'The learner reviewed the available drawings, specifications, programme information, site conditions and resource requirements to determine an appropriate occupational method of work.',
  LO2:'Where information was incomplete or unclear, the learner identified the gap and obtained suitable clarification from the relevant source before committing to the work method.',
  LO3:'The learner compared practical work methods and selected an approach that made effective use of labour, materials and equipment while meeting statutory, contractual, environmental and quality requirements.',
  LO4:'The selected method was explained clearly to the relevant people, including the sequence, controls, responsibilities and any points requiring coordination or further confirmation.'
 },
 '300':{
  LO1:'The learner identified the work activities, assessed the labour, materials, tools and access requirements and arranged the work in a practical sequence.',
  LO2:'The learner recognised where required resources or information were unavailable and sought appropriate clarification or advice rather than proceeding on an unsupported assumption.',
  LO3:'The learner evaluated site restrictions, interfaces, weather, programme demands and other external factors against the project requirements before confirming the plan.',
  LO4:'Activities that affected one another were coordinated so that resources were used efficiently and disruption, delay and unnecessary handling were reduced.',
  LO5:'The learner recognised changed circumstances, considered their effect on the programme and communicated a justified alteration to the appropriate decision maker.'
 },
 '313':{
  LO1:'The learner interpreted the drawings, details and specification to establish the required geometry, bond, profiles, dimensions, features and finish for the architectural or decorative masonry.',
  LO2:'The learner applied the relevant legislation, site procedures and technical guidance, including controls for cutting, handling, access, dust and the temporary stability of detailed work.',
  LO3:'The work area was kept safe and orderly, with suitable PPE and RPE used and materials, templates and cutting equipment positioned to avoid unnecessary risk.',
  LO4:'The learner selected matching masonry units, mortar, templates and ancillary materials of the correct quality and quantity, rejecting unsuitable items before use.',
  LO5:'Exposed arrises, finished faces, adjacent work and prepared units were protected from damage, staining and adverse weather throughout the activity.',
  LO6:'The learner sequenced the detailed work efficiently and achieved the planned output within the allocated time without lowering the standard of finish.',
  LO7:'The feature was constructed to the required profile, bond, gauge, line, level and tolerances. Cuts, angles, projections and joint finishes were checked frequently and adjusted to maintain a consistent appearance.'
 },
 '502':{
  LO1:'The learner communicated respectfully and reliably with colleagues and other trades, helping to maintain goodwill, trust and productive working relationships.',
  LO2:'Relevant people were given clear and timely information about the work, its progress, risks, dependencies and any matters requiring action.',
  LO3:'The learner offered appropriate help and technical advice, encouraged questions and checked that information had been understood rather than assumed.',
  LO4:'Proposals and alternative suggestions were discussed constructively, with the learner listening to other viewpoints and clarifying the practical implications.',
  LO5:'Any differences of opinion were handled calmly and professionally, focusing on the work requirement while preserving respect and cooperation.'
 },
 '701':{
  LO1:'The learner interpreted the drawings, dimensions, specification and site information before establishing the required wall positions, openings, datum levels and reference points.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for access, measuring equipment, manual handling and safe working around the setting-out area.',
  LO3:'The learner maintained a clear and controlled work area, used suitable PPE and handled profiles, lines, levels and measuring equipment safely throughout the activity.',
  LO4:'The learner selected appropriate profiles, pins, lines, tapes, levels and marking equipment, checking that each item was suitable, serviceable and sufficiently accurate for the task.',
  LO5:'Existing surfaces, setting-out marks, equipment and the surrounding area were protected from avoidable damage or disturbance while the work was completed.',
  LO6:'The setting-out sequence was planned effectively and completed within the allocated time, with checks built into the activity rather than left until the end.',
  LO7:'The learner established and transferred datum points, set profiles and lines and checked dimensions, offsets, levels, squareness and diagonals against the contract information. Minor discrepancies were identified and corrected before masonry work commenced.'
 },
 '238':{
  LO1:'The learner interpreted the drawings, specification and manufacturer guidance before confirming the thin-joint layout, unit sizes, openings, levels and sequence of construction.',
  LO2:'The learner followed the relevant legislation, site rules and system guidance for access, lifting, cutting, dust control, adhesive use and temporary stability.',
  LO3:'The work area was maintained safely, with suitable PPE and RPE used and cutting, mixing and handling operations controlled to protect the learner and others.',
  LO4:'The learner selected compatible blocks, thin-joint mortar or adhesive, applicators, reinforcement and ancillary components in the required quantity and condition.',
  LO5:'Units, prepared surfaces and completed work were protected from moisture, contamination, impact and weather, and adhesive was applied without excessive waste.',
  LO6:'The system was erected in an efficient sequence and the observed work was completed within the allocated time.',
  LO7:'The learner established a level base course and erected the thin-joint masonry to the required line, level, plumb, bond and joint thickness, checking dimensions and correcting deviations as work progressed.'
 },
 '690':{
  LO1:'The learner interpreted the repair information and inspected the existing masonry to identify the defect, likely cause, extent of work and required finish before starting.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for access, isolation, removal work, dust control, waste and the stability of retained masonry.',
  LO3:'The repair area was made safe and controlled, with appropriate PPE and RPE used and loose or unstable material dealt with without exposing others to avoidable risk.',
  LO4:'The learner selected replacement units, mortar and repair materials that were compatible in size, strength, colour and performance with the existing construction.',
  LO5:'Sound masonry and adjacent finishes were protected during removal and reinstatement, with dust, debris and staining controlled throughout the activity.',
  LO6:'The learner organised the repair efficiently and completed the observed work within the allocated time.',
  LO7:'Defective material was removed carefully and the masonry reinstated to match the required bond, alignment, profile and joint finish. The learner checked the repair for stability, appearance and compliance with the specification.'
 },
 '828':{
  LO1:'The learner interpreted the drawings, schedules and specialist details to confirm the element type, location, dimensions, support, interfaces and required finish.',
  LO2:'The learner applied the relevant legislation, site procedures and manufacturer guidance for lifting, access, fixing, cutting, temporary support and structural safety.',
  LO3:'The work area and lifting or installation operations were controlled safely, with suitable PPE used and clear communication maintained with everyone involved.',
  LO4:'The learner selected the specified specialist units, supports, fixings, reinforcement, mortar and ancillary components, checking compatibility and condition before installation.',
  LO5:'Specialist components, adjacent work and finished surfaces were protected from impact, distortion, contamination and weather during handling and installation.',
  LO6:'The installation was planned and coordinated effectively and the observed activity was completed within the allocated time.',
  LO7:'The specialist element was positioned, supported, fixed and finished in accordance with the contract information. The learner checked dimensions, line, level, bearing, alignment and interfaces before confirming completion.'
 },
 '837':{
  LO1:'The learner interpreted the drainage drawings and specification to confirm the route, pipe sizes, levels, gradients, access points, connections and sequence of work.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for excavation, underground services, manual handling, hygiene, bedding and testing.',
  LO3:'The work area was kept safe and controlled, with excavations, access and materials managed appropriately and suitable PPE used throughout the activity.',
  LO4:'The learner selected pipes, fittings, chambers, bedding and surround materials of the correct type, size, quantity and condition for the specified installation.',
  LO5:'Pipes, fittings, existing services and surrounding surfaces were protected from damage and contamination, and open ends were kept clean during the work.',
  LO6:'The installation was sequenced efficiently and the observed work was completed within the allocated time.',
  LO7:'The learner prepared the formation, installed bedding and laid the drainage to the specified line and fall, making sound connections and carrying out checks for alignment, gradient, cleanliness and effective flow.'
 }
};

function nvqTextHash(value){let h=2166136261;for(const ch of String(value||'')){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function nvqPick(options,seed,offset=0){return options[(nvqTextHash(seed)+offset)%options.length]}
function nvqEvidenceVariation(sentence,learner,seed,perspective,index){
 const core=String(sentence||'').trim().replace(/^The learner\s+/i,'');
 const lower=core.charAt(0).toLowerCase()+core.slice(1);
 const assessor=[
  `${learner} ${core}`,
  `During the activity, ${learner} ${lower}`,
  `I observed ${learner} ${lower}`,
  `As the work progressed, ${learner} ${lower}`
 ];
 const witness=[
  `${learner} ${core}`,
  `During the work, I saw ${learner} ${lower}`,
  `Throughout the activity, ${learner} ${lower}`,
  `From my direct observation, ${learner} ${lower}`
 ];
 return nvqPick(perspective==='witness'?witness:assessor,`${seed}|evidence|${index}`,index);
}
function nvqOutcomeReference(selected){
 const nums=selected.map(([code])=>code.replace('LO',''));
 if(nums.length===1)return `Learning Outcome ${nums[0]}`;
 if(nums.length===2)return `Learning Outcomes ${nums[0]} and ${nums[1]}`;
 return `Learning Outcomes ${nums.slice(0,-1).join(', ')} and ${nums.at(-1)}`;
}
function generateNvqNarrative(a,d,perspective='assessor'){
 const selected=selectedNvqOutcomes(a,d);if(!selected.length)return'';
 const learner=(state.profile?.fullName||'the learner').trim(),first=learner.split(/\s+/)[0]||'The learner';
 const activity=(d.activity||'the planned workplace activity').trim();
 const unit=`Unit ${a.unit} — ${a.title}`;
 const revision=Number(d.narrativeRevision||0);
 const seed=`${a.unit}|${selected.map(([c])=>c).join(',')}|${activity}|${learner}|${perspective}|${revision}`;
 const detailMap=NVQ_OBSERVATION_DETAILS[String(a.unit)]||{};
 const evidence=selected.map(([code])=>detailMap[code]).filter(Boolean);
 const evidenceText=(evidence.length?evidence:[`${first} followed the relevant workplace procedures, selected suitable resources, maintained safe working practices and checked the work as the activity progressed.`])
  .map((text,i)=>nvqEvidenceVariation(text,first,seed,perspective,i)).join(' ');
 const outcomes=nvqOutcomeReference(selected);
 const assessorOpenings=[
  `I observed ${learner} carrying out ${activity} during normal workplace operations. The observation related to ${unit} and covered ${outcomes}. Before work commenced, ${first} considered the available information, the condition of the work area and the controls needed to complete the activity safely and effectively.`,
  `During a planned workplace assessment, I observed ${learner} completing ${activity}. The assessment was undertaken against ${unit}, with evidence gathered for ${outcomes}. ${first} reviewed the task requirements before starting and organised the work area, resources and sequence to support safe and controlled progress.`,
  `I directly observed ${learner} undertaking ${activity} in the workplace. This provided evidence for ${unit} and ${outcomes}. At the outset, ${first} confirmed what was required, considered the relevant workplace information and prepared to complete the task in a logical and responsible manner.`
 ];
 const witnessOpenings=[
  `I witnessed ${learner} carrying out ${activity} as part of normal workplace operations. My testimony relates to ${unit} and the performance requirements within ${outcomes}. I personally saw ${first} prepare for the task, consider the available information and organise the work so it could proceed safely and efficiently.`,
  `During the normal course of work, I observed ${learner} completing ${activity}. The work provided direct evidence relevant to ${unit} and ${outcomes}. Before starting, ${first} checked the task requirements and made suitable arrangements for the work area, resources and sequence.`,
  `I personally observed ${learner} undertaking ${activity} in the workplace. This testimony covers ${unit} and ${outcomes}. ${first} established what was required before commencing and approached the work in an organised, responsible and safety-conscious manner.`
 ];
 const processParagraphs=[
  `${first} maintained a methodical approach throughout. Communication with colleagues and other people affected by the work was clear and appropriate, and clarification was sought where required. Safe access and suitable housekeeping were maintained as the activity progressed. Tools, equipment and materials were handled responsibly, and the work area was controlled to reduce foreseeable risk and avoid unnecessary disruption to others.`,
  `The activity was managed in a logical sequence, with ${first} maintaining awareness of other people, changing site conditions and the effect of the work on the surrounding area. Relevant information was communicated at appropriate stages, and any uncertainty was dealt with before it could affect safety or progress. Resources were used carefully and the work area remained orderly and accessible.`,
  `${first} worked steadily and with appropriate independence, while remaining within the limits of their responsibility. Coordination with others supported the safe completion of the task, and workplace procedures were followed consistently. Materials and equipment were positioned sensibly, access routes were kept clear and waste or surplus material was controlled throughout.`
 ];
 const qualityParagraphs=[
  `Checks were made at suitable stages rather than being left until completion. Where a minor discrepancy or changing condition was identified, ${first} responded promptly and made an appropriate adjustment before continuing. This demonstrated practical judgement, attention to detail and an understanding of how planning, sequence and ongoing control affect the final standard of work.`,
  `${first} monitored progress throughout the activity and checked compliance at appropriate points. Minor issues were addressed as they arose, preventing them from affecting later work. The approach demonstrated sound judgement and a clear understanding of the relationship between safe working, accuracy, efficiency and the required workplace standard.`,
  `The work was reviewed continuously as it progressed. ${first} did not rely solely on a final inspection, but used regular checks to confirm that the activity remained controlled and compliant. Necessary adjustments were made without delay, showing an appropriate level of care, decision-making and responsibility for the quality of the outcome.`
 ];
 const assessorClosings=[
  `The activity was completed to an appropriate workplace standard and within the expected timescale without reducing safety or quality. Based on my direct observation and professional judgement, I am satisfied that ${learner} demonstrated competence in the areas assessed. The evidence obtained is valid, authentic, current and sufficient to support this assessment decision.`,
  `${first} completed the observed activity in accordance with the relevant workplace requirements and maintained an acceptable standard of performance throughout. On the basis of the evidence personally observed, I am satisfied that competence was demonstrated against the assessed requirements. The evidence is valid, authentic, current and sufficient.`,
  `Overall, the performance observed was consistent with the requirements of the unit and showed that ${learner} could apply the necessary knowledge and skills in workplace conditions. I am satisfied that the evidence supports achievement of the areas assessed and is valid, authentic, current and sufficient for the assessment decision.`
 ];
 const witnessClosings=[
  `The activity was completed to an appropriate workplace standard, with suitable attention to safety, quality and the needs of others. This testimony is based entirely on what I personally observed. In my opinion, ${learner}'s performance was competent, current and representative of their normal workplace practice.`,
  `${first} completed the work responsibly and to the standard expected in the workplace. I personally witnessed the actions described above and confirm that they are an accurate and current account of ${learner}'s performance during the activity.`,
  `The work observed was carried out safely, efficiently and with appropriate consideration for quality and other people in the workplace. I confirm that this statement reflects my own direct observation and is a true representation of ${learner}'s workplace performance.`
 ];
 const opening=nvqPick(perspective==='witness'?witnessOpenings:assessorOpenings,seed,1);
 const process=nvqPick(processParagraphs,seed,3);
 const quality=nvqPick(qualityParagraphs,seed,5);
 const closing=nvqPick(perspective==='witness'?witnessClosings:assessorClosings,seed,7);
 return `${opening}\n\n${evidenceText}\n\n${process}\n\n${quality}\n\n${closing}`;
}

function scoreRows(a,d,readonly=false){d.ksbEvidence=d.ksbEvidence||[];d.scores=d.scores||{};const knowledge=a.ksbs.filter(([code])=>/^K/i.test(code)).map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<div class="skill-assessment ${selected?'skill-selected':''}"><button type="button" class="skill-heading skill-evidence-toggle" data-ksb-evidence-toggle="${esc(code)}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="skill-heading-copy"><small>${esc(code)} · Knowledge unit ${evidenceCoverageBadge(a.n,code)}</small><strong>${esc(text)}</strong></span></button><div class="score-card criterion-row"><div class="criterion-text"><small>Practical knowledge mark</small>Rate how clearly the learner demonstrated or explained this knowledge during the assessment.</div><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[code]===n?'active':''}" data-score-code="${esc(code)}" data-score="${n}" ${readonly||!selected?'disabled':''}>${n}</button>`).join('')}</div></div></div>`}).join('');const skills=skillCriteriaFor(a).map(skill=>{const selected=d.ksbEvidence.includes(skill.code);return `<div class="skill-assessment ${selected?'skill-selected':''}"><button type="button" class="skill-heading skill-evidence-toggle" data-ksb-evidence-toggle="${esc(skill.code)}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="skill-heading-copy"><small>${esc(skill.code)} · Skill unit ${evidenceCoverageBadge(a.n,skill.code)}</small><strong>${esc(skill.summary)}</strong></span></button>${skill.criteria.map((criterion,i)=>{const key=`${skill.code}::${i+1}`;return `<div class="score-card criterion-row"><div class="criterion-text"><small>Practical mark ${i+1}</small>${esc(criterion)}</div><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[key]===n?'active':''}" data-score-code="${key}" data-score="${n}" ${readonly||!selected?'disabled':''}>${n}</button>`).join('')}</div></div>`}).join('')}</div>`}).join('');const behaviours=a.ksbs.filter(([code])=>/^B/i.test(code)).map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<div class="skill-assessment ${selected?'skill-selected':''}"><button type="button" class="skill-heading skill-evidence-toggle" data-ksb-evidence-toggle="${esc(code)}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="skill-heading-copy"><small>${esc(code)} · Behaviour unit ${evidenceCoverageBadge(a.n,code)}</small><strong>${esc(text)}</strong></span></button><div class="score-card criterion-row"><div class="criterion-text"><small>Practical behaviour mark</small>Rate how consistently this behaviour was demonstrated during the practical activity.</div><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[code]===n?'active':''}" data-score-code="${esc(code)}" data-score="${n}" ${readonly||!selected?'disabled':''}>${n}</button>`).join('')}</div></div></div>`}).join('');return knowledge+skills+behaviours}
function ksbTypeLabel(code){const c=String(code||'').toUpperCase();return c.startsWith('K')?'Knowledge':c.startsWith('S')?'Skill':c.startsWith('B')?'Behaviour':'KSB'}
function evidencePhotoFileName(a,code,index=0){
 const item=(a?.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code)),summary=item?.[1]||'Evidence photograph',suffix=` - Photo ${Number(index)+1}.jpg`,base=`${code} - ${summary}`.replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim(),limit=Math.max(24,120-suffix.length);
 return `${base.slice(0,limit).replace(/[ .-]+$/,'')}${suffix}`;
}
function evidencePhotoFileNameForCodes(a,codes,index=0){
 const linked=[...new Set((codes||[]).map(String).filter(Boolean))];
 if(linked.length===1)return evidencePhotoFileName(a,linked[0],index);
 const details=linked.map(code=>{const item=(a?.ksbs||[]).find(([itemCode])=>String(itemCode)===code);return `${code} - ${item?.[1]||'Evidence'}`}),suffix=` - Photo ${Number(index)+1}.jpg`,base=(details.length?details.join(' + '):`Assignment ${a?.n||''} - ${a?.title||'Evidence'}`).replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim(),limit=Math.max(24,120-suffix.length);
 return `${base.slice(0,limit).replace(/[ .-]+$/,'')}${suffix}`;
}
function ksbsScoreRows(a,d,readonly=false){
 d.ksbEvidence=d.ksbEvidence||[];
 d.scores=d.scores||{};
 const ratingLabel=n=>n===1?'Training required':n===2?'Satisfactory':'Competent';
 return a.ksbs.map(([code,summary])=>{const selected=d.ksbEvidence.includes(code);return `<div class="skill-assessment ${selected?'skill-selected':''}"><button type="button" class="skill-heading skill-evidence-toggle" data-ksb-evidence-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${readonly?'disabled':''}><span class="tick-box" aria-hidden="true">${selected?'✓':''}</span><span class="skill-heading-copy"><small>${esc(code)} · ${ksbTypeLabel(code)} unit ${evidenceCoverageBadge(a.n,code)}</small><strong>${esc(summary)}</strong></span></button><div class="score-card criterion-row witness-rating-row"><div class="score-buttons witness-three-score">${[1,2,3].map(n=>`<button type="button" class="score-button ${+d.scores[code]===n?'active':''}" data-score-code="${esc(code)}" data-score="${n}" title="${n} - ${ratingLabel(n)}" aria-label="${n} - ${ratingLabel(n)}" ${readonly||!selected?'disabled':''}><span>${n}</span><small>${ratingLabel(n)}</small></button>`).join('')}</div></div></div>`}).join('')
}
function totalScore(a,d,practical=false){if(practical)return practicalResultText(a,d);const pct=percentageScore(a,d);return `${pct}% — ${gradeForPercentage(pct)}`}
function scoreBadge(a,d){const pct=percentageScore(a,d),grade=gradeForPercentage(pct);return `<span class="status-pill ${pct>=70?'done':''}">${pct}% — ${grade}</span>`}
function feedbackTitles(a,d,practical=false){
 const rows=practical
  ?skillCriteriaFor(a).flatMap(skill=>skill.criteria.map((_,i)=>({title:learnerPromptTitle(a.n,skill.code,skill.summary),score:+d.scores?.[`${skill.code}::${i+1}`]||0})))
  :a.ksbs.map(([code,summary])=>({title:learnerPromptTitle(a.n,code,summary),score:+d.scores?.[code]||0}));
 const unique=items=>[...new Set(items.map(x=>x.title).filter(Boolean))];
 return {strengths:unique(rows.filter(x=>x.score>=4)),development:unique(rows.filter(x=>x.score>=1&&x.score<=3))};
}
function joinFeedbackTitles(items){if(!items.length)return'';if(items.length===1)return items[0];if(items.length===2)return `${items[0]} and ${items[1]}`;return `${items.slice(0,-1).join(', ')} and ${items.at(-1)}`}
function assessmentTypeName(type,practical=false){if(practical)return'practical assessment';return String(type||'witness testimony').toLowerCase()}
function generateFeedbackSections(a,d,practical=false){
 const type=assessmentTypeName(d.type,practical),titles=feedbackTitles(a,d,practical),strengths=joinFeedbackTitles(titles.strengths),development=joinFeedbackTitles(titles.development);
 let summary='';
 if(strengths)summary=`The ${type} identified a good standard in ${strengths}. These areas were scored at four or five and demonstrated secure performance against the assessed requirements. The learner should continue applying the same level of care, consistency and professional judgement when completing similar workplace activities and future assessments.`;
 else summary=`No assessed criteria received a score of four or five in this ${type}. The assessment has nevertheless established a clear starting point for development. The learner should use the recorded scores, assessor guidance and further supervised practice to build confidence and demonstrate a stronger standard during the next assessment attempt.`;
 let areas='';
 if(development)areas=`Further development is required in ${development}. These areas received scores between one and three and should be addressed through the related Targeted Revision activities. The learner should then practise the relevant knowledge or skills in the workplace before completing another ${practical?'Practical Assessment':'assessment'} to demonstrate measurable improvement.`;
 else areas=`No assessed criteria received a score between one and three, so no specific development areas were identified from this ${type}. The learner should maintain the current standard, continue practising the assessed requirements and use Targeted Revision whenever a future assessment identifies a lower score or a new area requiring improvement.`;
 return {summary,areas};
}
function additionalCommentsHeading(d,practical=false){if(practical)return"Practical Assessor's Additional Comments";return d.type==='Employer statement'?"Employer's Additional Comments":"Witness's Additional Comments"}
function additionalCommentsPlaceholder(d,practical=false){if(practical)return'Record observations specific to this practical assessment, including good practice, progress since previous assessments or recommendations for future development.';if(d.type==='Employer statement')return"Record observations about the learner's workplace performance, including strengths, areas for development or recommendations for future progress.";return'Record workplace observations, examples of good performance or recommendations based on the work witnessed.'}
function generatedFeedbackHTML(d,practical=false){return `<div class="field"><label>Assessment Summary</label><textarea class="generated-feedback-text" readonly placeholder="Complete the assessment scores to prepare the summary...">${esc(d.feedbackSummary||'')}</textarea></div><div class="field"><label>Areas for Development</label><textarea class="generated-feedback-text" readonly placeholder="Complete the assessment scores to prepare the summary...">${esc(d.feedbackDevelopment||'')}</textarea></div><div class="field"><label>${esc(additionalCommentsHeading(d,practical))}</label><textarea class="autosave" data-field="feedback" placeholder="${esc(additionalCommentsPlaceholder(d,practical))}">${esc(d.feedback||'')}</textarea></div><button type="button" class="btn secondary" id="generateFeedback">Update assessment comments</button>`}
function signatureHTML(d,locked,requiredBy='Apprentice',allowSavedLearner=true){return `<div class="field"><label>${esc(requiredBy)} signature required</label>${d.signature?`<div class="saved-signature-wrap"><img class="sig-preview saved-signature-preview" src="${d.signature}" alt="Saved ${esc(requiredBy)} signature"><span class="saved-signature-label">Signature saved — hidden for privacy</span></div>`:locked?`<p class="muted">No ${esc(requiredBy.toLowerCase())} signature saved</p>`:`<div class="signature-entry locked" id="signatureEntry"><canvas class="signature-pad" id="signaturePad" aria-label="${esc(requiredBy)} signature box"></canvas><button type="button" class="signature-unlock" id="unlockSignature">Press here to add signature</button></div><div class="btn-row"><button type="button" class="btn secondary" id="clearSignature">Clear signature</button>${allowSavedLearner?'<button type="button" class="btn secondary" id="useProfileSignature">Use saved apprentice signature</button>':''}</div>`}<div class="date-line">Date: ${d.date||today()}</div></div>`}
function lockedTop(version,section){const label=section==='witness'?'Create new testimony':section==='discussion'?'Create new walkthrough':section==='photos'?'Add another photo submission':section==='professionalDiscussion'?'Add another recording':'Create new version';return `<div class="locked-banner"><span>🔒 Submitted version ${version}</span><button class="btn secondary retake" id="retake">${label}</button></div>`}

function renderSection(){const a=assignment(state.assignment),s=state.section;if(s==='practical'){state.section=null;state.view='assignment';render();return}if(s==='rpl')return renderRplSection(a);const sd=sectionData(a.n,s),d=sd.draft;const locked=d.submitted;let body='';
 if(s==='practical')body=practicalPage(a,d,locked,sd);
 if(s==='photos')body=photosPage(a,d,locked,sd);
 if(s==='statement')body=statementPage(a,d,locked,sd);
 if(s==='witness')body=witnessPage(a,d,locked,sd);
 if(s==='discussion')body=professionalDiscussionPage(a,d,locked,sd);
 if(s==='professionalDiscussion')body=professionalDiscussionPage(a,d,locked,sd);
 if(s==='supporting'){if(COURSE.nvqUnits&&!locked)d.nvqEvidenceMode=state.nvqSupportingPurpose||d.nvqEvidenceMode||'practical';body=supportingPage(a,d,locked,sd)}
 app.innerHTML=shell(`<button class="back no-print" id="back">← EP${a.n}</button><div class="assignment-title"><div class="number">EP${a.n}</div><h2>${sectionTitle(s)}</h2><p class="muted">${esc(a.title)}</p></div>${body}`);
 document.getElementById('back').onclick=()=>{state.view='assignment';render()};bindSection(a,s,sd,d,locked);
}
function sectionTitle(s){const supportingLabel=COURSE.nvqUnits&&state.nvqSupportingPurpose==='theory'?'Upload Theory Evidence':'Upload Evidence';const titles={practical:['observation','Assessor Observation'],photos:['camera','Take Photos'],statement:['statement','Write About It'],discussion:['video','Record a Video'],professionalDiscussion:['microphone','Talk About It'],witness:['witness','Employer Verification'],supporting:['supporting',supportingLabel]};const [icon,label]=titles[s],cap=evidenceCapability(s);return `<span class="section-title-icon">${appIcon(icon)}</span>${cap?`<span class="section-title-capability">${cap}</span>`:''}<span class="section-title-label">${label}</span>`}
function versionHistory(sd,s){if(!sd.versions.length)return'';const a=assignment(state.assignment);return `<section class="card panel versions"><h3>Saved attempts</h3>${sd.versions.slice().reverse().map((v,i)=>{const result=(!COURSE.nvqUnits&&(s==='supporting'&&v.tab!=='files'))?(()=>{const pct=percentageScore(a,v);return `<div class="muted">${pct}% — ${gradeForPercentage(pct)}</div>`})():'';return `<div class="version-item"><div><strong>Attempt ${sd.versions.length-i}</strong><div class="muted">Submitted ${esc(v.date||'')}</div>${result}</div><button class="btn secondary" data-view-version="${sd.versions.length-1-i}">Open</button></div>`}).join('')}</section>`}
function createPracticalSpecificationId(assignmentNumber,difficulty){const courseCode=String(COURSE.standard||COURSE.id||'COURSE').replace(/[^a-z0-9]/gi,'').toUpperCase().slice(0,10),date=new Date(),stamp=`${date.getFullYear()}${String(date.getMonth()+1).padStart(2,'0')}${String(date.getDate()).padStart(2,'0')}`,rand=Math.random().toString(36).slice(2,6).toUpperCase();return `${courseCode}-PA${assignmentNumber}-${String(difficulty||'custom').slice(0,1).toUpperCase()}-${stamp}-${rand}`}
function practicalSpecificationSections(activity){const text=String(activity||'').trim(),heads=['Task description','Required dimensions','Suggested materials','Completion requirements'];const title=(text.split(/\n/)[0]||'Practical task').trim();const meta={title,difficulty:'Custom task',duration:'Set by assessor',description:'',dimensions:'Refer to task description',materials:'Select suitable materials for the task',requirements:''};const diff=text.match(/Difficulty:\s*([^\n]+)/i),duration=text.match(/Estimated duration:\s*([^\n]+)/i);if(diff)meta.difficulty=diff[1].trim();if(duration)meta.duration=duration[1].trim();for(let i=0;i<heads.length;i++){const h=heads[i],start=text.indexOf(h);if(start<0)continue;const contentStart=start+h.length;let end=text.length;for(let j=i+1;j<heads.length;j++){const pos=text.indexOf(heads[j],contentStart);if(pos>=0){end=pos;break}}const value=text.slice(contentStart,end).trim();if(i===0)meta.description=value;if(i===1)meta.dimensions=value;if(i===2)meta.materials=value;if(i===3)meta.requirements=value}if(!meta.description)meta.description=text;return meta}
function showPracticalSpecificationSheet(a,d){const spec=practicalSpecificationSections(d.activity),issued=d.activityGeneratedAt?new Date(d.activityGeneratedAt).toLocaleDateString('en-GB'):new Date().toLocaleDateString('en-GB'),id=d.activitySpecId||createPracticalSpecificationId(a.n,d.activityTaskType||'custom');const bullet=v=>esc(v).replace(/\n/g,'<br>');const wrap=document.createElement('div');wrap.className='modal practical-spec-modal';wrap.id='practicalSpecificationModal';wrap.innerHTML=`<section class="practical-spec-sheet" role="dialog" aria-modal="true" aria-labelledby="practicalSpecTitle"><div class="practical-spec-toolbar no-print"><button class="btn secondary" id="closePracticalSpec">Close</button><button class="btn" id="downloadPracticalSpec">${appIcon('download','button-icon')} Download PDF</button></div><article class="practical-spec-document" id="practicalSpecDocument"><header><div><div class="practical-spec-brand">APPRENTICE+</div><div class="practical-spec-kicker">PRACTICAL TASK SPECIFICATION</div></div><div class="practical-spec-id"><span>Specification ID</span><strong>${esc(id)}</strong></div></header><div class="practical-spec-title"><span>Practical Assessment ${a.n}</span><h1 id="practicalSpecTitle">${esc(spec.title)}</h1><p>${esc(COURSE.name)} · ${esc(COURSE.standard||'')}</p></div><div class="practical-spec-meta"><div><span>Difficulty</span><strong>${esc(spec.difficulty)}</strong></div><div><span>Estimated duration</span><strong>${esc(spec.duration)}</strong></div><div><span>Date issued</span><strong>${esc(issued)}</strong></div><div><span>Learner</span><strong>${esc(state.profile?.fullName||'')}</strong></div></div><section><h2>Job brief</h2><p>${bullet(spec.description)}</p></section>${technicalDrawingInfo(a.n)?`<section class="practical-drawing-section"><h2>Technical drawing</h2><p class="drawing-warning">Use the issued written dimensions. Do not scale from the image.</p>${technicalDrawingCard(a.n)}</section>`:''}<section><h2>Dimensions and specification</h2><p>${bullet(spec.dimensions)}</p></section><section><h2>Suggested materials</h2><p>${bullet(spec.materials)}</p></section><section><h2>Completion requirements</h2><p>${bullet(spec.requirements||'Complete the task safely, accurately and to the issued specification. Check the finished work and correct defects before presenting it for assessment.')}</p></section><div class="practical-spec-grid"><section><h2>Health and safety</h2><ul><li>Use the required PPE and task controls.</li><li>Inspect tools and equipment before use.</li><li>Maintain safe access and good housekeeping.</li><li>Follow the relevant risk assessment and method.</li></ul></section><section><h2>Quality checks</h2><ul><li>Check dimensions and setting out.</li><li>Maintain alignment, level, plumb and tolerances as relevant.</li><li>Check materials, joints, fixings and finish.</li><li>Correct defects before completion.</li></ul></section></div><footer><span>Complete the issued practical task while the assessor observes the existing official KSB criteria.</span><strong>${esc(id)}</strong></footer></article></section>`;document.body.appendChild(wrap);bindTechnicalDrawingButtons(wrap);const close=()=>wrap.remove();wrap.querySelector('#closePracticalSpec').onclick=close;wrap.onclick=e=>{if(e.target===wrap)close()};wrap.querySelector('#downloadPracticalSpec').onclick=async()=>{try{toast('Creating specification PDF...');await generatePracticalSpecificationPDF({course:COURSE,assignment:a,profile:state.profile,data:d,specificationId:id});toast('Specification PDF downloaded')}catch(error){console.error(error);toast('Unable to create specification PDF')}}}
function nvqObservationPage(a,d,locked,sd){
 d.scores=d.scores||{};
 d.outcomePhotos=d.outcomePhotos||{};
 const selected=selectedNvqOutcomes(a,d);
 const selectedCount=selected.length;
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'practical'):''}<section class="card panel assessor-only-panel"><span class="submitted-ribbon assessor-ribbon page-ribbon">ASSESSOR ONLY</span><div class="panel-body"><div class="field"><label>Assessor name</label><input class="input autosave" data-field="tutor" value="${esc(d.tutor||'')}"></div><div class="field"><label>Activity observed</label><textarea class="autosave" data-field="activity" placeholder="Describe the workplace activity directly observed.">${esc(d.activity||'')}</textarea></div><div class="field"><label>Learning outcomes observed</label><p class="help">Select each learning outcome demonstrated during this observation and add a clear supporting photograph for every selected outcome.</p><div class="outcome-list">${nvqTickRows(a,d,locked)}</div></div><div class="field"><label>Assessor observation</label><textarea class="autosave generated-feedback-text" data-field="feedback" placeholder="Select at least one learning outcome, then generate or edit the assessor observation.">${esc(d.feedback||'')}</textarea></div>${locked?'':`<button type="button" class="btn secondary" id="generateNvqNarrative">${d.feedback?'Regenerate':'Generate'} assessor observation</button>`}<p class="help">${selectedCount} learning outcome${selectedCount===1?'':'s'} selected. Every selected outcome requires a photograph before submission.</p>${signatureHTML(d,locked,'Assessor',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!observationReady(a,d)?'disabled':''}>Submit and lock assessor observation</button></div>`}</section></div>${versionHistory(sd,'practical')}`;
}

function observationMediaFor(d,code){d.observationRecordings=d.observationRecordings||{};return d.observationRecordings[code]||{}}
function observationMediaBadges(d,code){const media=observationMediaFor(d,code),bits=[];if(media.video?.data)bits.push(`<span class="observation-media-badge">${appIcon('video')} Video</span>`);if(media.audio?.data)bits.push(`<span class="observation-media-badge">${appIcon('microphone')} Discussion</span>`);return bits.join('')}
function ksbObservationRows(a,d,readonly=false){
 d.ksbEvidence=d.ksbEvidence||[];d.observationRecordings=d.observationRecordings||{};
 return a.ksbs.map(([code,summary])=>{const selected=d.ksbEvidence.includes(code),media=observationMediaFor(d,code),hasMedia=!!(media.video?.data||media.audio?.data);return `<article class="outcome-card statement-ksb-card observation-ksb-row ${selected?'selected':''}"><button type="button" class="statement-ksb-toggle observation-ksb-toggle" data-ksb-evidence-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="outcome-card-copy"><span class="outcome-code">${esc(code)}${COURSE.nvqUnits?' · Learning Outcome':` · ${ksbTypeLabel(code)}`} ${evidenceCoverageBadge(a.n,code)}</span><strong>${esc(learnerPromptTitle(a.n,code,summary))}</strong><span class="criteria-numbers">${esc(summary)}</span><span class="observation-media-badges">${observationMediaBadges(d,code)}</span><em>${selected?'Observed':'Tap if directly observed'}</em></span></button>${readonly?'':`<button type="button" class="observation-record-button ${hasMedia?'has-media':''}" data-observation-record="${esc(code)}" aria-label="Add recording for ${esc(code)}"><span class="observation-record-dot"></span><small>Record</small></button>`}</article>`}).join('')
}
async function saveObservationMedia(n,s,sd,d,code,kind,blob,{duration='',name=''}={}){if(!blob?.size)return;const fallback=kind==='video'?'video/webm':'audio/webm';blob=await normaliseRecordedBlob(blob,blob.type||fallback);const data=await blobToDataUrl(blob);d.observationRecordings=d.observationRecordings||{};const entry=d.observationRecordings[code]||{};entry[kind]={data,type:blob.type||fallback,size:blob.size,duration,date:today(),name:name||`${code}-${kind}-${Date.now()}.${mediaExtensionForMime(blob.type,kind)}`};d.observationRecordings[code]=entry;await commit(n,s,sd);renderSection();toast(`${code} ${kind==='video'?'video':'discussion'} saved`)}
function observationAssessorDiscussionPrompt(a,code){
 const row=(a?.ksbs||[]).find(([c])=>String(c)===String(code)),summary=String(row?.[1]||'').trim(),learnerTitle=learnerPromptTitle(a?.n,code,summary);
 if(COURSE.nvqUnits)return `Ask the learner to explain how they met ${code}: ${learnerTitle}. Follow up with: “What did you do, why did you do it that way, and how did you check the work met the required standard?”`;
 const type=/^K/i.test(code)?'knowledge':/^S/i.test(code)?'skill':'behaviour';
 return `Ask the learner to explain the ${type} behind ${code}: ${learnerTitle}. Follow up with: “What did you do, why did you do it that way, what checks did you make, and what would you do differently if needed?”`;
}
async function recordObservationDictaphone(n,s,sd,d,code){
 const prompt=observationAssessorDiscussionPrompt(assignment(n),code);app.insertAdjacentHTML('beforeend',`<div class="modal" id="observationAudioModal"><div class="modal-card recording-modal observation-discussion-recording"><div class="number">${esc(code)}</div><h2>Professional discussion</h2><p class="muted">Record an optional voice discussion for this ${COURSE.nvqUnits?'Learning Outcome':'KSB'}.</p><div class="observation-assessor-prompt"><small>ASSESSOR PROMPT</small><strong>${esc(prompt)}</strong></div><div class="recording-status-row"><div class="recording-pulse ready" id="obsAudioPulse"></div><div><strong id="obsAudioState">Ready to record</strong><div class="pd-recording-timer" id="obsAudioTimer">00:00</div></div></div><div class="btn-row"><button class="btn" id="obsAudioStart">Start recording</button><button class="btn danger hide" id="obsAudioStop">Stop recording</button><button class="btn secondary" id="obsAudioCancel">Cancel</button></div></div></div>`);
 const modal=document.getElementById('observationAudioModal'),start=document.getElementById('obsAudioStart'),stop=document.getElementById('obsAudioStop'),cancel=document.getElementById('obsAudioCancel'),timerEl=document.getElementById('obsAudioTimer'),stateEl=document.getElementById('obsAudioState');let stream=null,recorder=null,chunks=[],began=0,timer=null,cancelled=false;
 const cleanup=()=>{if(timer)clearInterval(timer);stream?.getTracks?.().forEach(t=>t.stop());stream=null};const close=()=>{cancelled=true;if(recorder?.state==='recording')recorder.stop();else{cleanup();modal.remove()}};cancel.onclick=close;
 start.onclick=async()=>{if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined')return toast('Audio recording is not supported on this device');try{stream=await navigator.mediaDevices.getUserMedia({audio:optimisedAudioConstraints()});const opts=preferredAudioMime();recorder=createOptimisedMediaRecorder(stream,'audio',opts);chunks=[];began=Date.now();start.classList.add('hide');stop.classList.remove('hide');cancel.disabled=true;stateEl.textContent='Recording';timer=setInterval(()=>{const sec=Math.floor((Date.now()-began)/1000);timerEl.textContent=`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`},250);recorder.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data)};recorder.onstop=async()=>{cleanup();if(cancelled){modal.remove();return}const type=String(recorder.mimeType||opts||'audio/webm').split(';')[0],blob=new Blob(chunks,{type});const seconds=Math.max(1,Math.round((Date.now()-began)/1000));modal.remove();await saveObservationMedia(n,s,sd,d,code,'audio',blob,{duration:formatDuration(seconds)})};recorder.start(1000)}catch(e){cleanup();start.classList.remove('hide');stop.classList.add('hide');cancel.disabled=false;stateEl.textContent='Ready to record';toast('Microphone permission is required')}};
 stop.onclick=()=>{if(recorder?.state==='recording'){stop.disabled=true;stateEl.textContent='Saving…';recorder.stop()}};
}
async function openObservationRecordMenu(a,sd,d,code){const existing=observationMediaFor(d,code);const overlay=document.createElement('div');overlay.className='modal';overlay.id='observationRecordMenu';overlay.innerHTML=`<div class="modal-card observation-record-menu"><div class="number">${esc(code)}</div><h2>Add recording</h2><p class="muted">Choose an optional evidence recording for this ${COURSE.nvqUnits?'Learning Outcome':'KSB'}.</p><div class="observation-record-options"><button type="button" class="observation-record-option" id="obsRecordVideo">${appIcon('video')}<span><strong>Video</strong><small>${existing.video?.data?'Replace saved video':'Record a short video'}</small></span></button><button type="button" class="observation-record-option" id="obsRecordAudio">${appIcon('microphone')}<span><strong>Dictaphone</strong><small>${existing.audio?.data?'Replace saved discussion':'Record professional discussion'}</small></span></button></div>${existing.video?.data||existing.audio?.data?`<div class="observation-existing-actions">${existing.video?.data?`<button class="btn secondary" id="obsViewVideo">View video</button><button class="link-button" id="obsRemoveVideo">Remove video</button>`:''}${existing.audio?.data?`<audio controls preload="metadata" src="${esc(existing.audio.data)}"></audio><button class="link-button" id="obsRemoveAudio">Remove discussion</button>`:''}</div>`:''}<button class="btn secondary" id="obsRecordClose">Close</button></div>`;document.body.appendChild(overlay);const close=()=>overlay.remove();document.getElementById('obsRecordClose').onclick=close;overlay.onclick=e=>{if(e.target===overlay)close()};document.getElementById('obsRecordVideo').onclick=async()=>{close();const result=await recordOptimisedVideo({title:'Assessor Observation',instruction:`Record optional video evidence for ${code}.`,detail:(a.ksbs||[]).find(([c])=>c===code)?.[1]||'',criterionCode:code,saveLabel:'Save video'});if(result)await saveObservationMedia(a.n,'practical',sd,d,code,'video',result.blob,{duration:result.duration})};document.getElementById('obsRecordAudio').onclick=()=>{close();recordObservationDictaphone(a.n,'practical',sd,d,code)};const view=document.getElementById('obsViewVideo');if(view)view.onclick=()=>showNvqWalkthroughVideo(code,existing.video);const rv=document.getElementById('obsRemoveVideo');if(rv)rv.onclick=async()=>{delete d.observationRecordings[code].video;await commit(a.n,'practical',sd);close();renderSection()};const ra=document.getElementById('obsRemoveAudio');if(ra)ra.onclick=async()=>{delete d.observationRecordings[code].audio;await commit(a.n,'practical',sd);close();renderSection()}}
function ksbObservationReady(a,d){const selected=selectedKsbCodes(a,d);return !!((d.observerRole==='Tutor'||d.observerRole==='Assessor')&&(d.tutor||'').trim()&&(d.activity||'').trim()&&selected.length&&(d.feedback||'').trim()&&d.signature)}
function ksbObservationPage(a,d,locked,sd){
 d.ksbEvidence=(d.ksbEvidence||[]).filter(code=>(a.ksbs||[]).some(([valid])=>valid===code));d.photos=d.photos||[];d.observerRole=d.observerRole||'';
 const slots=Array.from({length:9},(_,i)=>{const p=d.photos[i],filename=evidencePhotoFileNameForCodes(a,d.ksbEvidence,i);return `<button type="button" class="practical-photo-slot ${p?'filled':''}" data-practical-slot="${i}" aria-label="${p?'Open observation photo '+(i+1):'Add optional observation photo '+(i+1)}">${p?`<img src="${p.data}" alt="Observation evidence photo ${i+1}"><span class="linked-photo-filename">${esc(filename)}</span>`:`<span class="camera-mark">${appIcon('camera')}</span><span>Optional</span>`}</button>`}).join('');
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'practical'):''}<section class="card panel assessor-only-panel"><div class="panel-body"><div class="field"><label>Observer role</label><select class="input autosave" data-field="observerRole"><option value="">Select role</option><option value="Tutor" ${d.observerRole==='Tutor'?'selected':''}>Tutor</option><option value="Assessor" ${d.observerRole==='Assessor'?'selected':''}>Assessor</option></select></div><div class="field"><label>Observer name</label><input class="input autosave" data-field="tutor" value="${esc(d.tutor||'')}" placeholder="Full name"></div><div class="field"><label>Activity observed</label><input class="input autosave" data-field="activity" value="${esc(d.activity||'')}" placeholder="What did you directly observe?"></div><div class="field"><label>${COURSE.nvqUnits?'Learning Outcomes observed':'Knowledge, Skills and Behaviours observed'}</label><p class="help">Select any ${COURSE.nvqUnits?'Learning Outcome':'Knowledge, Skill or Behaviour'} evidenced during this observation.</p><div class="outcome-list">${ksbObservationRows(a,d,locked)}</div></div><div class="field"><label>Observation record</label><textarea class="autosave" data-field="feedback" placeholder="Record what you saw the learner do, the standard of the work, how independently they worked and any relevant checks or safe working behaviours.">${esc(d.feedback||'')}</textarea></div><div class="field"><label>Supporting photographs <span class="muted">(optional · up to 9)</span></label><p class="help">Add only the photographs that help support this observation.</p><div class="practical-photo-row observation-photo-grid">${slots}</div></div>${signatureHTML(d,locked,'Tutor / assessor',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!ksbObservationReady(a,d)?'disabled':''}>Save observation</button></div>`}</section></div>${versionHistory(sd,'practical')}`
}
function practicalPage(a,d,locked,sd){return ksbObservationPage(a,d,locked,sd)}
function statementPage(a,d,locked,sd){
 d.ksbEvidence=d.ksbEvidence||[];
 if(!COURSE.nvqUnits)d.ksbEvidence=d.ksbEvidence.filter(code=>/^K/i.test(code));
 const required=statementWordRequirement(a,d),selectedCount=statementSelectedKsbCodes(a,d).length;
 const eligible=COURSE.nvqUnits?(a.ksbs||[]):a.ksbs.filter(([code])=>/^K/i.test(code));
 const cards=`<div class="outcome-list">${eligible.map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<article class="outcome-card statement-ksb-card ${selected?'selected':''}"><button type="button" class="statement-ksb-toggle" data-statement-ksb-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${locked?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="outcome-card-copy"><span class="outcome-code">${esc(code)} ${evidenceCoverageBadge(a.n,code)}</span><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><span class="criteria-numbers">${esc(text)}</span><em>${selected?'Included · 30 words required':`Tap to include this ${COURSE.nvqUnits?'Learning Outcome':'Knowledge criterion'}`}</em></span></button></article>`}).join('')}</div>`;
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'statement'):''}<section class="card panel"><div class="panel-body"><h3>${COURSE.nvqUnits?'Learning Outcomes attached to this Evidence Pack':'Knowledge attached to this Evidence Pack'}</h3><p class="help">${COURSE.nvqUnits?'Select every Learning Outcome genuinely covered by the statement.':'Write About It can evidence Knowledge KSBs only. Select every relevant Knowledge criterion.'} The minimum increases by 30 words for each selected criterion. Photographs are not required.</p>${cards}<div class="field"><label>Your statement — minimum <span id="statementRequiredLabel">${required||30}</span> words</label><textarea class="autosave" id="statementText" data-field="text" placeholder="Explain what you did, how you did it, the checks you completed and what you learned...">${esc(d.text)}</textarea><div class="help"><span id="wordCount">${wordCount(d.text)}</span> / <span id="statementRequiredCount">${required||30}</span> words minimum. ${selectedCount} ${COURSE.nvqUnits?'Learning Outcome':'Knowledge criterion'}${selectedCount===1?'':'s'} selected.</div></div>${signatureHTML(d,locked,'Apprentice',true)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!statementReady(a,d)?'disabled':''}>Submit and lock statement</button></div>`}</section></div>${versionHistory(sd,'statement')}`;
}
function photosPage(a,d,locked,sd){
 d.skillPhotos=d.skillPhotos||{};d.ksbEvidence=d.ksbEvidence||[];d.photos=d.photos||[];
 if(!d.photos.length){const seen=new Set();Object.values(d.skillPhotos||{}).flat().filter(Boolean).forEach(photo=>{const id=photo.mediaHash||photo.data;if(id&&!seen.has(id)){seen.add(id);d.photos.push(photo)}})}
 while(d.photos.length<9)d.photos.push(null);
 const skills=COURSE.nvqUnits?(a.ksbs||[]):a.ksbs.filter(([code])=>String(code).toUpperCase().startsWith('S'));
 const selected=COURSE.nvqUnits?selectedKsbCodes(a,d):selectedKsbCodes(a,d).filter(code=>String(code).toUpperCase().startsWith('S'));
 const photoCount=d.photos.slice(0,9).filter(ph=>!!ph?.data).length;
 const slots=Array.from({length:9},(_,i)=>{const ph=d.photos[i],filename=evidencePhotoFileNameForCodes(a,selected,i);return `<button type="button" class="practical-photo-slot ${ph?'filled':''}" data-shared-photo-index="${i}" aria-label="${ph?'Open':'Add'} photographic evidence photo ${i+1}">${ph?`<img src="${ph.data}" alt="Photographic evidence ${i+1}"><span class="linked-photo-filename">${esc(filename)}</span>`:`<span class="camera-mark">${appIcon('camera')}</span><span>Photo ${i+1}</span>`}</button>`}).join('');
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'photos'):''}<section class="card panel"><div class="panel-body"><div class="field"><label>${COURSE.nvqUnits?'Learning Outcomes evidenced':'Skills evidenced'}</label><p class="help">${COURSE.nvqUnits?'Select every Learning Outcome demonstrated by these photographs.':'Photographic Evidence is linked to Skill units only. Select every Skill demonstrated by these photographs.'}</p><div class="outcome-list">${skills.map(([code,text])=>{const chosen=d.ksbEvidence.includes(code);return `<article class="outcome-card statement-ksb-card skill-photo-card ${chosen?'selected':''}"><button type="button" class="statement-ksb-toggle" data-ksb-evidence-toggle="${esc(code)}" ${locked?'disabled':''}><span class="tick-box">${chosen?'✓':''}</span><span class="outcome-card-copy"><span class="outcome-code">${esc(code)} ${evidenceCoverageBadge(a.n,code)}</span><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><span class="criteria-numbers">${esc(text)}</span><em>${chosen?'Included in this photo submission':COURSE.nvqUnits?'Tap to include this Learning Outcome':'Tap to include this Skill'}</em></span></button></article>`}).join('')}</div></div><div class="field photo-requirement-panel"><label>Photographs</label><p class="help">Add at least 3 clear landscape photographs. You can add up to 9 photographs to this evidence submission.</p><div class="photo-requirement-summary"><strong>${photoCount} / 9 photographs</strong><span>${photoCount<3?`${3-photoCount} more required`:selected.length?`${selected.length} ${COURSE.nvqUnits?'Learning Outcome':'Skill'}${selected.length===1?'':'s'} selected`:`Select at least one ${COURSE.nvqUnits?'Learning Outcome':'Skill'} above.`}</span></div><div class="practical-photo-grid skill-photo-grid shared-photo-grid">${slots}</div>${selected.length&&photoCount>=3?`<p class="help evidence-photo-ready">✓ Minimum photographic evidence added. Add more photographs if they strengthen the evidence, then sign and submit.</p>`:''}</div>${signatureHTML(d,locked,'Apprentice',true)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!canSubmit(a,'photos',d)?'disabled':''}>Submit and lock photographic evidence</button></div>`}</section></div>${versionHistory(sd,'photos')}`
}
function nvqVideoWalkthroughPage(a,d,locked,sd){
 d.recordings=d.recordings||{};
 const items=a.ksbs||[],completed=items.filter(([code])=>isVideoEvidenceRecording(d.recordings[code])).length;
 const rows=items.map(([code,summary])=>{
  const rec=isVideoEvidenceRecording(d.recordings[code])?d.recordings[code]:null,title=learnerPromptTitle(a.n,code,summary);
  return `<article class="walkthrough-mini-tile ${rec?'complete':''}"><div class="walkthrough-mini-copy"><strong class="walkthrough-mini-code">${esc(code)} ${evidenceCoverageBadge(a.n,code)}</strong><h3>${esc(title)}</h3><p>${esc(summary)}</p>${rec?`<div class="walkthrough-mini-saved">✓ Video saved${rec.date?` · ${esc(rec.date)}`:''}${rec.duration?` · ${esc(rec.duration)}`:''}${rec.type?` · ${esc(mediaExtensionForMime(rec.type,'video').toUpperCase())}`:''}${rec.size?` · ${formatMediaSize(rec.size)}`:''}</div><div class="walkthrough-mini-actions"><button type="button" class="link-button" data-view-lo-walk="${esc(code)}">View</button>${locked?'':`<button type="button" class="link-button" data-delete-recording="${esc(code)}">Remove</button>`}</div>`:''}</div>${locked?'':`<input class="sr-only" id="loWalkVideoInput-${esc(code)}" data-lo-walk-input="${esc(code)}" type="file" accept="video/*"><button type="button" class="walkthrough-video-button ${rec?'has-thumbnail':''}" data-record-code="${esc(code)}" aria-label="${rec?'Replace':'Record'} ${esc(code)} video">${rec?`<video class="walkthrough-video-thumbnail" src="${esc(rec.data)}" muted playsinline webkit-playsinline preload="metadata"></video><span class="walkthrough-thumbnail-label">REPLACE</span>`:`${walkthroughRecorderIcon()}<span>ADD VIDEO</span>`}</button>`}</article>`;
 }).join('');
 return `${locked?lockedTop(sd.versions.length,'discussion'):''}<section class="walkthrough-head"><div><div class="number">Video Walkthrough</div><h2>${esc(a.title)}</h2><p>${completed} of ${items.length} Learning Outcomes recorded · app recordings use optimised 720p</p></div><span class="status-pill ${locked?'done':''}">${completed}/${items.length}</span></section><div class="walkthrough-progress"><span style="width:${items.length?(completed/items.length)*100:0}%"></span></div><section class="walkthrough-tile-list">${rows}</section><section class="card panel walkthrough-save-panel ${locked?'complete':''}"><div><h3>${locked?'Walkthrough submitted':'Submit walkthrough'}</h3><p class="muted">${locked?`${completed} of ${items.length} Learning Outcomes are included. Further evidence can be added in a new attempt.`:'Record only the relevant Learning Outcomes, then submit the walkthrough. Every outcome does not need a video.'}</p></div>${locked?'':`<button class="btn" id="submitSection" ${completed?'':'disabled'}>Submit and lock walkthrough</button>`}</section>${versionHistory(sd,'discussion')}`;
}
function professionalDiscussionAudioPage(a,d,locked,sd){
 d.recordings=d.recordings||{};d.notes=d.notes||{};
 if(!COURSE.nvqUnits)return sharedProfessionalDiscussionPage(a,d,locked,sd);
 const items=a.ksbs,completed=items.filter(([code])=>!!d.recordings[code]?.data).length,showAssessorRibbon=false;
 const rows=items.map(([code,summary])=>{const rec=d.recordings[code],title=learnerPromptTitle(a.n,code,summary);return `<article class="walkthrough-mini-tile professional-discussion-mini ${rec?'complete':''}"><div class="walkthrough-mini-copy"><strong class="walkthrough-mini-code">${esc(code)} ${evidenceCoverageBadge(a.n,code)}</strong><h3>${esc(title)}</h3><p>${esc(summary)}</p>${rec?`<div class="walkthrough-mini-saved">✓ Audio saved${rec.date?` · ${esc(rec.date)}`:''}${rec.duration?` · ${esc(rec.duration)}`:''}</div><audio class="professional-discussion-audio" controls preload="metadata" src="${rec.data}"></audio>`:''}${!locked&&rec?`<button type="button" class="link-button professional-discussion-remove" data-delete-recording="${esc(code)}">Remove recording</button>`:''}</div>${locked?'':`<button type="button" class="walkthrough-video-button professional-discussion-record-button ${rec?'has-thumbnail':''}" data-record-pd-code="${esc(code)}"><span class="voice-recorder-icon">${appIcon('microphone')}</span><span>${rec?'REPLACE':'RECORD AUDIO'}</span></button>`}</article>`}).join('');
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'professionalDiscussion'):''}<section class="walkthrough-head professional-discussion-head"><div><div class="number">Talk About It</div><h2>${esc(a.title)}</h2><p>${completed} of ${items.length} learning outcomes recorded</p></div><span class="status-pill ${completed?'done':''}">${completed}/${items.length}</span></section><div class="walkthrough-progress"><span style="width:${items.length?(completed/items.length)*100:0}%"></span></div><section class="card panel professional-discussion-details"><div class="panel-body"><div class="field"><label>Apprentice name</label><input class="input" value="${esc(state.profile.fullName||'Apprentice')}" readonly></div><div class="field"><label>Activity or topic explained</label><textarea class="autosave" data-field="activity">${esc(d.activity||'')}</textarea></div></div></section><section class="walkthrough-tile-list professional-discussion-list">${rows}</section><section class="card panel walkthrough-save-panel ${locked?'complete':''}"><div><h3>${locked?'Voice reflection submitted':'Submit voice reflection'}</h3><p class="muted">Record only the relevant learning outcomes, then submit.</p></div>${locked?'':`<button class="btn" id="submitSection" ${!canSubmit(a,'professionalDiscussion',d)?'disabled':''}>Submit and lock voice reflection</button>`}</section>${signatureHTML(d,locked,'Apprentice',true)}</div>${versionHistory(sd,'professionalDiscussion')}`;
}
function sharedVoiceEligibleItems(a){return COURSE.nvqUnits?(a.ksbs||[]):(a.ksbs||[]).filter(([code])=>/^[KB]/i.test(code))}
function sharedVoiceConfirmedCodes(d){return [...new Set((d.voiceSubmissions||[]).flatMap(item=>item.confirmedCodes||[]))]}
function sharedProfessionalDiscussionPage(a,d,locked,sd){
 d.voiceSubmissions=Array.isArray(d.voiceSubmissions)?d.voiceSubmissions:[];d.recordings=d.recordings||{};
 const items=sharedVoiceEligibleItems(a),confirmed=new Set(sharedVoiceConfirmedCodes(d));Object.keys(d.recordings).filter(code=>(COURSE.nvqUnits||/^[KB]/i.test(code))&&d.recordings[code]?.data).forEach(code=>confirmed.add(code));
 const selector=items.map(([code,text])=>`<label class="walkthrough-review-row"><input type="checkbox" data-voice-plan-code="${esc(code)}" ${locked?'disabled':''}><span><strong>${esc(code)} · ${esc(learnerPromptTitle(a.n,code,text))}</strong><small>${esc(text)}</small></span></label>`).join('');
 const saved=d.voiceSubmissions.map((item,index)=>`<article class="walkthrough-mini-tile professional-discussion-mini complete"><div class="walkthrough-mini-copy"><strong class="walkthrough-mini-code">Recording ${index+1}</strong><h3>${esc((item.confirmedCodes||[]).join(', ')||'Saved discussion')}</h3><p>${(item.confirmedCodes||[]).length} topic${(item.confirmedCodes||[]).length===1?'':'s'} confirmed${item.duration?` · ${esc(item.duration)}`:''}${item.size?` · ${formatMediaSize(item.size)}`:''}</p><audio class="professional-discussion-audio" controls preload="metadata" src="${esc(item.data||'')}"></audio>${locked?'':`<button type="button" class="link-button professional-discussion-remove" data-remove-voice-submission="${esc(item.id)}">Remove recording</button>`}</div></article>`).join('');
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'professionalDiscussion'):''}<section class="walkthrough-head professional-discussion-head"><div><div class="number">Talk About It</div><h2>${esc(a.title)}</h2><p>Select the ${COURSE.nvqUnits?'Learning Outcomes':'Knowledge and Behaviours'} you plan to cover, then make one recording.</p></div><span class="status-pill ${confirmed.size?'done':''}">${confirmed.size}/${items.length}</span></section><div class="walkthrough-progress"><span style="width:${items.length?(confirmed.size/items.length)*100:0}%"></span></div><section class="card panel professional-discussion-details"><div class="panel-body"><div class="field"><label>Apprentice name</label><input class="input" value="${esc(state.profile.fullName||'Apprentice')}" readonly></div>${locked?'':`<div class="field"><label>${COURSE.nvqUnits?'Learning Outcomes':'Knowledge and Behaviours'} you plan to cover</label><p class="help">Choose the topics you intend to discuss. After recording, listen back and untick anything you did not actually cover.</p><div class="walkthrough-review-list">${selector}</div></div><div class="btn-row"><button class="btn" id="recordSharedVoice" disabled>${appIcon('microphone','button-icon')} Record discussion</button></div>`}</div></section>${saved?`<section class="walkthrough-head professional-discussion-head"><div><div class="number">Saved evidence</div><h2>${d.voiceSubmissions.length} recording${d.voiceSubmissions.length===1?'':'s'}</h2><p>You can create another recording afterwards to cover other ${COURSE.nvqUnits?'Learning Outcomes':'Knowledge or Behaviours'}.</p></div></section><section class="walkthrough-tile-list professional-discussion-list">${saved}</section>`:''}<section class="card panel walkthrough-save-panel ${locked?'complete':''}"><div><h3>${locked?'Voice evidence submitted':'Submit voice evidence'}</h3><p class="muted">${d.voiceSubmissions.length?`${confirmed.size} of ${items.length} eligible ${COURSE.nvqUnits?'Learning Outcomes':'K/B criteria'} currently have Talk About It evidence.`:'Record at least one discussion first.'}</p></div>${locked?'':`<button class="btn" id="submitSection" ${!canSubmit(a,'professionalDiscussion',d)?'disabled':''}>Submit and lock voice evidence</button>`}</section>${signatureHTML(d,locked,'Apprentice',true)}</div>${versionHistory(sd,'professionalDiscussion')}`;
}
function nvqProfessionalDiscussionPage(a,d,locked,sd){return sharedProfessionalDiscussionPage(a,d,locked,sd)}
function professionalDiscussionPage(a,d,locked,sd){return sharedProfessionalDiscussionPage(a,d,locked,sd)}

async function recordSharedProfessionalDiscussion(n,s,sd,d,intendedCodes){
 const a=assignment(n),valid=new Set(sharedVoiceEligibleItems(a).map(([code])=>code)),intended=[...new Set((intendedCodes||[]).filter(code=>valid.has(code)))];if(!intended.length)return toast(`Select at least one ${COURSE.nvqUnits?'Learning Outcome':'Knowledge or Behaviour topic'} first`);
 if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined')return toast('Audio recording is not supported on this device');
 let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:optimisedAudioConstraints()})}catch{return toast('Microphone permission is required')}
 const topicLookup=new Map(sharedVoiceEligibleItems(a));
 const promptCards=intended.map(code=>{const description=String(topicLookup.get(code)||'').trim(),title=learnerPromptTitle(a.n,code,description),type=COURSE.nvqUnits?'Learning Outcome':(/^K/i.test(code)?'Knowledge':'Behaviour'),clean=description.replace(/[.]+$/,'').replace(/^[A-Z]/,c=>c.toLowerCase()),cue=/^K/i.test(code)?`Explain ${clean}. Include how or why it is used in your own work.`:`Give a real example of how you ${clean}. Say what you did and why.`;return `<article class="pd-recording-criterion"><strong>${esc(code)} · ${esc(title)}</strong><p class="pd-topic-prompt">${esc(cue)}</p></article>`}).join('');
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="sharedVoiceModal"><div class="modal-card recording-modal professional-discussion-recording-modal"><div class="pd-recording-heading"><span>Talk About It</span><h2>Record your discussion</h2></div><p class="muted">There is no time limit. Use the prompts below to cover each topic you selected. You can keep looking at them while you record.</p><section class="pd-assessor-prompts shared-voice-prompts"><strong>Your selected topics</strong><div style="display:grid;gap:10px;margin-top:10px">${promptCards}</div></section><div class="recording-status-row"><div class="recording-pulse ready" id="sharedVoicePulse"></div><div><strong id="sharedVoiceState">Ready to record</strong><div class="pd-recording-timer" id="sharedVoiceTimer">00:00</div></div></div><div class="btn-row"><button class="btn" id="sharedVoiceStart">Start recording</button><button class="btn danger hide" id="sharedVoiceStop">Stop recording</button><button class="btn secondary" id="sharedVoiceCancel">Cancel</button></div></div></div>`);
 const modal=document.getElementById('sharedVoiceModal'),start=document.getElementById('sharedVoiceStart'),stop=document.getElementById('sharedVoiceStop'),cancel=document.getElementById('sharedVoiceCancel'),timerEl=document.getElementById('sharedVoiceTimer'),stateEl=document.getElementById('sharedVoiceState'),pulse=document.getElementById('sharedVoicePulse');let recorder=null,chunks=[],started=0,timer=null,cancelled=false;
 const stopTracks=()=>stream?.getTracks?.().forEach(track=>track.stop()),clearTimer=()=>{if(timer){clearInterval(timer);timer=null}},close=()=>{clearTimer();stopTracks();modal.remove()};
 cancel.onclick=()=>{cancelled=true;if(recorder?.state==='recording'){try{recorder.stop()}catch{close()}}else close()};
 start.onclick=()=>{const options=preferredAudioMime();try{recorder=createOptimisedMediaRecorder(stream,'audio',options)}catch{return toast('Unable to start audio recording')}chunks=[];started=Date.now();recorder.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data)};recorder.onstop=async()=>{clearTimer();stopTracks();if(cancelled){modal.remove();return}try{const type=String(recorder.mimeType||options||'audio/webm').split(';')[0],blob=await normaliseRecordedBlob(new Blob(chunks,{type}),'audio/webm'),seconds=Math.max(1,Math.round((Date.now()-started)/1000));if(blob.size<256)throw new Error('empty');modal.remove();await reviewSharedProfessionalDiscussion(n,s,sd,d,blob,{duration:formatDuration(seconds),size:blob.size,type:blob.type,intendedCodes:intended})}catch(error){console.error(error);modal.remove();toast('The audio recording was empty or invalid')}};recorder.start(1000);start.classList.add('hide');stop.classList.remove('hide');cancel.disabled=true;pulse.classList.remove('ready');stateEl.textContent='Recording';timer=setInterval(()=>{const sec=Math.max(0,Math.floor((Date.now()-started)/1000));timerEl.textContent=`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`},250)};
 stop.onclick=()=>{if(recorder?.state==='recording'){stop.disabled=true;stateEl.textContent='Stopping…';recorder.stop()}};
}
async function reviewSharedProfessionalDiscussion(n,s,sd,d,blob,{duration='',size=0,type='',intendedCodes=[]}={}){
 const a=assignment(n),lookup=new Map(sharedVoiceEligibleItems(a)),url=URL.createObjectURL(blob);app.insertAdjacentHTML('beforeend',`<div class="modal" id="sharedVoiceReview"><div class="modal-card video-modal"><div class="number">Review your discussion</div><h2>Did you actually cover these topics?</h2><p class="muted">Listen back, then untick anything you planned to cover but did not actually discuss.</p><audio id="sharedVoicePlayback" controls preload="metadata" style="width:100%"></audio><div class="walkthrough-review-list">${intendedCodes.map(code=>`<label class="walkthrough-review-row"><input type="checkbox" data-review-voice-code="${esc(code)}" checked><span><strong>${esc(code)} · ${esc(learnerPromptTitle(a.n,code,lookup.get(code)||''))}</strong><small>${esc(lookup.get(code)||'')}</small></span></label>`).join('')}</div><div class="btn-row"><button class="btn secondary" id="cancelSharedVoiceReview">Discard</button><button class="btn" id="confirmSharedVoiceReview">Save recording</button></div></div></div>`);const modal=document.getElementById('sharedVoiceReview'),player=document.getElementById('sharedVoicePlayback');player.src=url;player.load();const cleanup=()=>{player.pause();player.removeAttribute('src');player.load();URL.revokeObjectURL(url);modal.remove()};document.getElementById('cancelSharedVoiceReview').onclick=cleanup;document.getElementById('confirmSharedVoiceReview').onclick=async()=>{const confirmed=[...modal.querySelectorAll('[data-review-voice-code]:checked')].map(x=>x.dataset.reviewVoiceCode);if(!confirmed.length)return toast('Keep at least one topic that the recording actually covers');const data=await blobToDataUrl(blob);d.voiceSubmissions=Array.isArray(d.voiceSubmissions)?d.voiceSubmissions:[];const id=uid(),ext=mediaExtensionForMime(type||blob.type||'audio/webm','audio'),name=`Talk About It - ${confirmed.join('-')||'Discussion'} - ${id}.${ext}`;d.voiceSubmissions.push({id,name,data,type,size,date:today(),duration,intendedCodes:[...intendedCodes],confirmedCodes:confirmed});await commit(n,s,sd);cleanup();renderSection();toast(`${confirmed.length} topic${confirmed.length===1?'':'s'} linked to this recording`)};
}

function witnessPage(a,d,locked,sd){return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'witness'):''}<section class="card panel"><div class="panel-body">${supportStatement(a,d,locked)}${signatureHTML(d,locked,'Witness / employer',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!supportReady(a,d)?'disabled':''}>Submit and lock witness testimony</button></div>`}</section></div>${versionHistory(sd,'witness')}`}
function supportingPage(a,d,locked,sd){const statementTab=d.tab!=='files';const ribbon=statementTab?(d.type==='Employer statement'?'EMPLOYER ONLY':'WITNESS ONLY'):'OPTIONAL EVIDENCE';const ribbonClass=statementTab?(d.type==='Employer statement'?'employer-ribbon':'witness-ribbon'):'optional-evidence-ribbon';return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'supporting'):''}<section class="card panel assessor-only-panel"><span class="submitted-ribbon ${ribbonClass} page-ribbon">${ribbon}</span><div class="panel-body"><div class="tabs"><button class="tab ${statementTab?'active':''}" data-tab="statement">Witness / employer</button><button class="tab ${!statementTab?'active':''}" data-tab="files">Certificates / RAMS / other</button></div>${statementTab?supportStatement(a,d,locked):supportFiles(a,d,locked)}${statementTab?signatureHTML(d,locked,d.type==='Employer statement'?'Employer':'Witness',false):''}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!supportReady(a,d)?'disabled':''}>Submit this evidence</button></div>`}</section></div>${versionHistory(sd,'supporting')}` }
function supportStatement(a,d,locked){d.ksbEvidence=d.ksbEvidence||[];const contact=d.contactDetails||d.organisation||'';return `<div class="field"><label>Statement type</label><select class="autosave" data-field="type"><option ${d.type==='Witness testimony'?'selected':''}>Witness testimony</option><option value="Employer statement" ${d.type==='Employer statement'?'selected':''}>Employer review</option></select></div><div class="field"><label>${d.type==='Employer statement'?'Employer':'Witness'} name</label><input class="input autosave" data-field="personName" value="${esc(d.personName)}"></div><div class="field"><label>Job role</label><input class="input autosave" data-field="role" value="${esc(d.role)}"></div><div class="field"><label>Preferred contact details</label><input class="input autosave" data-field="contactDetails" value="${esc(contact)}" placeholder="Phone number or email address"></div><div class="field"><label>Activity observed</label><input class="input autosave" data-field="activity" value="${esc(d.activity)}" placeholder="Briefly describe the activity observed"></div><div class="field witness-rating-field"><label>Rate what you saw</label><p class="help witness-rating-guide">${COURSE.nvqUnits?'Select each Learning Outcome observed, then give it a required rating.':'Select each Skill or Behaviour observed, then give it a required rating.'}</p><div class="score-list">${ksbsScoreRows(a,d,locked)}</div></div><div class="field"><label>${esc(additionalCommentsHeading(d,false))}</label><textarea class="autosave" data-field="feedback" placeholder="${esc(additionalCommentsPlaceholder(d,false))}">${esc(d.feedback||'')}</textarea></div>`}

function ksbUploadCards(a,d,locked=false){return `<div class="outcome-list">${(a.ksbs||[]).map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<article class="outcome-card statement-ksb-card ${selected?'selected':''}"><button type="button" class="statement-ksb-toggle" data-statement-ksb-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${locked?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="outcome-card-copy"><span class="outcome-code">${esc(code)} ${evidenceCoverageBadge(a.n,code)}</span><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><span class="criteria-numbers">${esc(text)}</span><em>${selected?'Included in uploaded evidence':'Tap to include'}</em></span></button></article>`}).join('')}</div>`}
function supportFiles(a,d,locked){d.ksbEvidence=d.ksbEvidence||[];const nvq=COURSE.nvqUnits;return `<div class="field"><label>${nvq?'Learning outcomes supported':'KSBs evidenced'}</label><p class="help">${nvq?'Select only the Learning Outcomes genuinely supported by these documents.':'Select only the Knowledge, Skills or Behaviours genuinely supported by the uploaded files.'}</p>${ksbUploadCards(a,d,locked)}</div><div class="upload-box"><h3>${nvq?'Documents':'Additional evidence'}</h3><p class="muted">${nvq?'Add photos, videos or files such as PDF, Word, Excel, PowerPoint, completed question packs, RAMS, drawings and other supporting documents.':'<strong>Photos:</strong> Certificates, RAMS, drawings, delivery notes and other documents.<br><strong>Videos:</strong> App recordings are optimised to 720p at about '+formatMediaSize(APP_VIDEO_MINUTE_ESTIMATE_BYTES)+' per minute. Gallery videos keep their original size.'}</p>${locked?'':`<div class="btn-row" style="justify-content:center"><label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="supportCameraInput" type="file" accept="image/*" capture="environment"></label><button type="button" class="btn secondary icon-btn" id="supportVideoRecord">${appIcon('video','button-icon')}Camcorder</button><input class="hide" id="supportVideoInput" type="file" accept="video/*" capture="environment"><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="supportGalleryInput" type="file" accept="image/*,video/*" multiple></label><label class="btn secondary icon-btn">${appIcon('file','button-icon')}Files<input class="hide" id="supportFileInput" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.rtf,.csv,.odt,.ods,.odp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain,text/csv" multiple></label></div>`}</div><div class="file-list">${d.files.map((f,i)=>supportFileCard(f,i,locked)).join('')}</div>`}
function supportFileCard(f,i,locked){const isImage=(f.type||'').startsWith('image/'),isVideo=(f.type||'').startsWith('video/'),displayName=(f.evidenceName||'').trim(),fileSize=Number(f.size)||dataUrlStoredBytes(f.data);let preview='';if(isImage&&f.data)preview=`<img src="${f.data}" alt="${esc(displayName||f.name)}" style="width:100%;max-height:220px;object-fit:contain;border-radius:12px;margin-bottom:10px">`;if(isVideo&&f.data)preview=`<video controls playsinline webkit-playsinline preload="metadata" poster="${f.thumbnail||''}" style="width:100%;max-height:240px;border-radius:12px;margin-bottom:10px"><source src="${f.data}" type="${esc(f.type)}"></video>`;const sourceLabel=f.optimised?(isVideo?'Optimised app recording':'Optimised image'):'Original file',details=[sourceLabel,f.duration||'',fileSize?formatMediaSize(fileSize):''].filter(Boolean).join(' · ');return `<div class="file-card" style="display:block">${preview}${locked?`<div><strong>${esc(displayName||f.name)}</strong><div class="muted">${esc(details)} · ${esc(f.name)}</div></div>`:`<div class="field" style="margin-bottom:10px"><label>Evidence name (required)</label><input class="input support-file-name" data-file-index="${i}" value="${esc(f.evidenceName||'')}" placeholder="For example: Site induction certificate"></div><div class="muted" style="margin-bottom:10px">${esc(details)} · ${esc(f.name)}</div>`}<div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><span class="file-type-label">${appIcon(isImage?'gallery':isVideo?'video':'file','button-icon')}${isImage?'Image':isVideo?'Video':'File'}</span>${locked&&(isVideo||(!isImage&&f.data))?`<button class="btn secondary" data-download-file="${i}">Open / save ${isVideo?'video':'file'}</button>`:''}${locked?'':`<button class="btn danger" data-remove-file="${i}">Remove</button>`}</div></div>`}

function bindSection(a,s,sd,d,locked){
 bindTechnicalDrawingButtons(document);
 document.querySelectorAll('.autosave').forEach(el=>el.oninput=async()=>{d[el.dataset.field]=el.value;await commit(a.n,s,sd);if(s==='statement')updateStatement(a,d);if(s==='supporting'&&el.dataset.field==='type')return renderSection();updateSectionSubmit(a,s,d)});
 document.querySelectorAll('[data-score-code]').forEach(b=>b.onclick=async()=>{
  const code=b.dataset.scoreCode,score=+b.dataset.score,row=b.closest('.score-buttons');
  d.scores=d.scores||{};d.scores[code]=score;
  row?.querySelectorAll('[data-score-code]').forEach(button=>{
   const active=button===b;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
  b.blur();
  updateSectionSubmit(a,s,d);
  await commit(a.n,s,sd);
 });
 document.querySelectorAll('[data-nvq-toggle]').forEach(b=>b.onclick=async()=>{const code=b.dataset.nvqToggle;d.scores=d.scores||{};d.scores[code]=+d.scores[code]===5?0:5;d.feedback=generateNvqNarrative(a,d,s==='practical'?'assessor':'witness');await commit(a.n,s,sd);renderSection()});
 document.querySelectorAll('[data-ksb-evidence-toggle]').forEach(b=>b.onclick=async()=>{
  const code=b.dataset.ksbEvidenceToggle,card=b.closest('.skill-assessment')||b.closest('.outcome-card');
  d.ksbEvidence=d.ksbEvidence||[];const selected=!d.ksbEvidence.includes(code);
  d.ksbEvidence=selected?[...d.ksbEvidence,code]:d.ksbEvidence.filter(x=>x!==code);
  if(!selected&&d.scores){Object.keys(d.scores).filter(key=>String(key).split('::')[0]===code).forEach(key=>delete d.scores[key])}
  card?.classList.toggle('skill-selected',selected);card?.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));
  const tick=b.querySelector('.tick-box');if(tick)tick.textContent=selected?'✓':'';
  card?.querySelectorAll('[data-score-code]').forEach(button=>button.disabled=!selected);
  b.blur();updateSectionSubmit(a,s,d);await commit(a.n,s,sd);
  if(s==='photos'||s==='witness'||s==='practical')renderSection();
 });
 document.querySelectorAll('[data-statement-ksb-toggle]').forEach(b=>b.onclick=async()=>{const code=b.dataset.statementKsbToggle;d.ksbEvidence=d.ksbEvidence||[];d.ksbEvidence=d.ksbEvidence.includes(code)?d.ksbEvidence.filter(x=>x!==code):[...d.ksbEvidence,code];await commit(a.n,s,sd);renderSection()});
 document.querySelectorAll('[data-lo-photo]').forEach(b=>b.onclick=()=>showOutcomePhotoModal(a.n,s,sd,d,b.dataset.loPhoto,locked));
 document.querySelectorAll('[data-record-code]').forEach(b=>b.onclick=()=>recordDiscussionOutcome(a.n,s,sd,d,b.dataset.recordCode,document.getElementById(`loWalkVideoInput-${b.dataset.recordCode}`)));
 document.querySelectorAll('[data-lo-walk-input]').forEach(input=>input.onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{await saveNvqWalkthroughVideo(a.n,s,sd,d,input.dataset.loWalkInput,file,{name:file.name,type:file.type})}catch(error){console.error('LO walkthrough gallery video save failed',error);toast('The selected video could not be saved')}});
 document.querySelectorAll('[data-view-lo-walk]').forEach(b=>b.onclick=()=>showNvqWalkthroughVideo(b.dataset.viewLoWalk,d.recordings?.[b.dataset.viewLoWalk]));
 document.querySelectorAll('[data-record-pd-code]').forEach(b=>b.onclick=()=>recordProfessionalDiscussionOutcome(a.n,s,sd,d,b.dataset.recordPdCode));
 const sharedVoiceRecord=document.getElementById('recordSharedVoice');if(sharedVoiceRecord){const selectedVoiceCodes=()=>[...document.querySelectorAll('[data-voice-plan-code]:checked')].map(x=>x.dataset.voicePlanCode),syncVoice=()=>{sharedVoiceRecord.disabled=!selectedVoiceCodes().length};document.querySelectorAll('[data-voice-plan-code]').forEach(x=>x.onchange=syncVoice);syncVoice();sharedVoiceRecord.onclick=()=>recordSharedProfessionalDiscussion(a.n,s,sd,d,selectedVoiceCodes())}
 document.querySelectorAll('[data-remove-voice-submission]').forEach(b=>b.onclick=async()=>{d.voiceSubmissions=(d.voiceSubmissions||[]).filter(item=>item.id!==b.dataset.removeVoiceSubmission);await commit(a.n,s,sd);renderSection();toast('Recording removed')});
 document.querySelectorAll('[data-delete-recording]').forEach(b=>b.onclick=async()=>{delete d.recordings[b.dataset.deleteRecording];await commit(a.n,s,sd);renderSection();toast('Recording deleted')});
 const ng=document.getElementById('generateNvqNarrative');if(ng)ng.onclick=async()=>{d.narrativeRevision=Number(d.narrativeRevision||0)+1;d.feedback=generateNvqNarrative(a,d,s==='practical'?'assessor':'witness');if(!d.feedback)return toast('Select at least one learning outcome');await commit(a.n,s,sd);renderSection()};
 const gf=document.getElementById('generateFeedback');if(gf)gf.onclick=async()=>{
  const generated=generateFeedbackSections(a,d,s==='practical');d.feedbackSummary=generated.summary;d.feedbackDevelopment=generated.areas;
  const fields=document.querySelectorAll('.generated-feedback-text');if(fields[0])fields[0].value=d.feedbackSummary||'';if(fields[1])fields[1].value=d.feedbackDevelopment||'';
  gf.blur();await commit(a.n,s,sd);toast('Assessment comments updated');
 };
 document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=async()=>{d.tab=b.dataset.tab;await commit(a.n,s,sd);renderSection()});
 if(!locked)setupSignature(a.n,s,sd,d);
 const cam=document.getElementById('cameraInput'),gal=document.getElementById('galleryInput');if(cam)cam.onchange=e=>addPhotos(e.target.files,a.n,s,sd,d);if(gal)gal.onchange=e=>addPhotos(e.target.files,a.n,s,sd,d);
 document.querySelectorAll('[data-practical-slot]').forEach(b=>b.onclick=()=>showPracticalPhotoModal(a.n,s,sd,d,+b.dataset.practicalSlot,locked));
 document.querySelectorAll('[data-observation-record]').forEach(b=>b.onclick=()=>openObservationRecordMenu(a,sd,d,b.dataset.observationRecord));
 document.querySelectorAll('[data-shared-photo-index]').forEach(b=>b.onclick=()=>showSharedPhotoModal(a.n,s,sd,d,+b.dataset.sharedPhotoIndex,locked));
 document.querySelectorAll('[data-skill-photo-code]').forEach(b=>b.onclick=()=>showSkillPhotoModal(a.n,s,sd,d,b.dataset.skillPhotoCode,+b.dataset.skillPhotoIndex,locked));
 document.querySelectorAll('[data-remove-photo]').forEach(b=>b.onclick=async()=>{d.photos.splice(+b.dataset.removePhoto,1);await commit(a.n,s,sd);renderSection()});
 const supportCam=document.getElementById('supportCameraInput'),supportVid=document.getElementById('supportVideoInput'),supportVideoRecord=document.getElementById('supportVideoRecord'),supportGal=document.getElementById('supportGalleryInput'),supportFile=document.getElementById('supportFileInput');
 if(supportCam)supportCam.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'image');
 if(supportVid)supportVid.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'video');
 if(supportVideoRecord)supportVideoRecord.onclick=()=>recordSupportingVideo(a.n,s,sd,d,supportVid);
 if(supportGal)supportGal.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'media');
 if(supportFile)supportFile.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'file');
 document.querySelectorAll('.support-file-name').forEach(el=>el.oninput=async()=>{const f=d.files[+el.dataset.fileIndex];if(!f)return;f.evidenceName=el.value;await commit(a.n,s,sd);updateSectionSubmit(a,s,d)});
 document.querySelectorAll('[data-download-file]').forEach(b=>b.onclick=()=>downloadStoredFile(d.files[+b.dataset.downloadFile]));
 document.querySelectorAll('[data-remove-file]').forEach(b=>b.onclick=async()=>{d.files.splice(+b.dataset.removeFile,1);await commit(a.n,s,sd);renderSection()});
 const sub=document.getElementById('submitSection');if(sub)sub.onclick=()=>submitSection(a,s,sd,d);
 const retake=document.getElementById('retake');if(retake)retake.onclick=async()=>{sd.draft=blankSection(s);await commit(a.n,s,sd);renderSection();toast(s==='witness'?'New blank witness testimony created':s==='discussion'?'New blank video walkthrough created':s==='professionalDiscussion'?'New blank voice reflection created':'New blank version created')};
 document.querySelectorAll('[data-view-version]').forEach(b=>b.onclick=async()=>{sd.draft=structuredClone(sd.versions[+b.dataset.viewVersion]);await commit(a.n,s,sd);renderSection()});
}
async function commit(n,s,sd){state.data[key(n,s)]=sd;await saveData()}
function setupSignature(n,s,sd,d){const c=document.getElementById('signaturePad');if(!c)return;const ctx=c.getContext('2d'),entry=document.getElementById('signatureEntry'),unlock=document.getElementById('unlockSignature');let draw=false,enabled=false;function resize(){const ratio=devicePixelRatio||1,cw=c.clientWidth,ch=c.clientHeight;c.width=cw*ratio;c.height=ch*ratio;ctx.scale(ratio,ratio);ctx.lineWidth=2.3;ctx.lineCap='round';ctx.strokeStyle='#0b2b23'}resize();
 const enable=()=>{enabled=true;entry?.classList.remove('locked');unlock?.remove();c.focus();toast('Signature box unlocked')};if(unlock)unlock.onclick=enable;
 const pos=e=>{const r=c.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:p.clientX-r.left,y:p.clientY-r.top}};const start=e=>{if(!enabled)return;draw=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);e.preventDefault()};const move=e=>{if(!enabled||!draw)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke();e.preventDefault()};const end=async()=>{if(!draw)return;draw=false;d.signature=c.toDataURL('image/png');d.signatureName=String(state.profile?.name||d.tutor||d.assessor||d.personName||'').trim();d.signatureDate=new Date().toISOString();await commit(n,s,sd);const a=assignment(n);updateSectionSubmit(a,s,d)};c.addEventListener('pointerdown',start);c.addEventListener('pointermove',move);window.addEventListener('pointerup',end);
 const clr=document.getElementById('clearSignature');if(clr)clr.onclick=async()=>{enable();ctx.clearRect(0,0,c.width,c.height);d.signature='';d.signatureName='';d.signatureDate='';await commit(n,s,sd);const a=assignment(n);updateSectionSubmit(a,s,d)};const use=document.getElementById('useProfileSignature');if(use)use.onclick=async()=>{if(!state.profile.signature)return toast('No saved learner signature');d.signature=state.profile.signature;d.signatureName=String(state.profile?.name||'').trim();d.signatureDate=new Date().toISOString();await commit(n,s,sd);renderSection()};}
function professionalDiscussionPrompts(code,description){
 const type=String(code||'').trim().toUpperCase().charAt(0);
 if(type==='K')return [
  'Ask the learner to explain this knowledge in their own words.',
  'Ask for a real workplace example where this knowledge was applied.',
  'Ask what regulations, guidance, checks or risks must be considered.',
  'Ask what could happen if this knowledge is not followed correctly.'
 ];
 if(type==='B')return [
  'Ask the learner to describe how they demonstrate this behaviour at work.',
  'Ask for a specific example involving colleagues, customers or site conditions.',
  'Ask how this behaviour affected safety, quality, teamwork or productivity.',
  'Ask what they learned and how they would improve next time.'
 ];
 return [
  'Ask the learner to explain what they did and why.',
  'Ask for a specific example from the activity.',
  'Ask what checks, decisions and standards were involved.',
  'Ask what they learned and what they would do differently next time.'
 ];
}
async function recordProfessionalDiscussionOutcome(n,s,sd,d,code){
 const a=assignment(n),criterion=(a?.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code)),description=criterion?.[1]||'No criterion description is available.',prompts=professionalDiscussionPrompts(code,description),criterionType=/^K/i.test(code)?'Knowledge':/^B/i.test(code)?'Behaviour':'Learning outcome';
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="recordingModal"><div class="modal-card recording-modal professional-discussion-recording-modal"><div class="pd-recording-heading"><span>${esc(criterionType)} · ${esc(code)}</span><h2>Professional Discussion</h2></div><section class="pd-recording-criterion"><strong>${esc(code)} description</strong><p>${esc(description)}</p></section><section class="pd-assessor-prompts"><strong>Assessor prompts</strong><ul>${prompts.map(prompt=>`<li>${esc(prompt)}</li>`).join('')}</ul></section><div class="recording-status-row" id="pdRecordingStatus"><div class="recording-pulse ready" id="pdRecordingPulse"></div><div><strong id="pdRecordingState">Ready to record</strong><div class="pd-recording-timer" id="pdRecordingTimer">00:00</div></div></div><p class="muted" id="pdRecordingHelp">Optimised for clear speech at about ${formatMediaSize(APP_VOICE_MINUTE_ESTIMATE_BYTES)} per minute. Recording continues until Stop recording is pressed.</p><div class="btn-row"><button class="btn" id="startRecording">Start recording</button><button class="btn danger hide" id="stopRecording">Stop recording</button><button class="btn secondary" id="cancelRecording">Cancel</button></div></div></div>`);
 const modal=document.getElementById('recordingModal'),startButton=document.getElementById('startRecording'),stopButton=document.getElementById('stopRecording'),cancelButton=document.getElementById('cancelRecording'),timerEl=document.getElementById('pdRecordingTimer'),stateEl=document.getElementById('pdRecordingState'),pulse=document.getElementById('pdRecordingPulse');
 let stream=null,recorder=null,chunks=[],started=0,timer=null,cancelled=false,closing=false;
 const stopTracks=()=>{stream?.getTracks?.().forEach(track=>track.stop());stream=null};
 const clearTimer=()=>{if(timer){clearInterval(timer);timer=null}};
 const updateTimer=()=>{const seconds=Math.max(0,Math.floor((Date.now()-started)/1000));timerEl.textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`};
 const closeWithoutSaving=()=>{if(closing)return;cancelled=true;closing=true;clearTimer();if(recorder?.state==='recording'){try{recorder.stop()}catch{stopTracks();modal.remove()}}else{stopTracks();modal.remove()}};
 cancelButton.onclick=closeWithoutSaving;
 modal.onclick=e=>{if(e.target===modal&&recorder?.state!=='recording')closeWithoutSaving()};
 startButton.onclick=async()=>{
  if(recorder?.state==='recording')return;
  if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined')return toast('Audio recording is not supported on this device');
  startButton.disabled=true;stateEl.textContent='Requesting microphone access…';
  try{stream=await navigator.mediaDevices.getUserMedia({audio:optimisedAudioConstraints()})}catch{startButton.disabled=false;stateEl.textContent='Ready to record';return toast('Microphone permission is required')}
  const options=preferredAudioMime();
  try{recorder=createOptimisedMediaRecorder(stream,'audio',options)}catch{stopTracks();startButton.disabled=false;stateEl.textContent='Ready to record';return toast('Unable to start audio recording')}
  chunks=[];cancelled=false;started=Date.now();timerEl.textContent='00:00';stateEl.textContent='Recording';pulse.classList.remove('ready');startButton.classList.add('hide');stopButton.classList.remove('hide');cancelButton.disabled=true;
  recorder.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data)};
  recorder.onerror=error=>{console.error('Professional discussion recorder error',error);toast('The recording could not be completed on this device')};
  recorder.onstop=async()=>{clearTimer();stopTracks();if(closing||cancelled){modal.remove();return}stopButton.disabled=true;stateEl.textContent='Checking recording…';try{const stated=String(recorder.mimeType||options||'audio/webm').split(';')[0],blob=await normaliseRecordedBlob(new Blob(chunks,{type:stated}),'audio/webm'),seconds=Math.max(1,Math.round((Date.now()-started)/1000));if(blob.size<256||seconds<1)throw new Error('Recording is empty');const data=await blobToDataUrl(blob);d.recordings=d.recordings||{};d.recordings[code]={data,type:blob.type,format:mediaExtensionForMime(blob.type,'audio'),size:blob.size,date:today(),duration:formatDuration(seconds),optimised:true};await commit(n,s,sd);modal.remove();renderSection();toast(`${code} discussion saved · ${formatMediaSize(blob.size)}`)}catch(error){console.error('Audio recording validation failed',error);stateEl.textContent='Recording failed';stopButton.classList.add('hide');startButton.classList.remove('hide');startButton.disabled=false;toast('The audio recording was empty or invalid. Please record it again.')}};
  recorder.start(1000);timer=setInterval(updateTimer,250);
 };
 stopButton.onclick=()=>{if(recorder?.state!=='recording')return;stopButton.disabled=true;stateEl.textContent='Stopping…';recorder.stop()};
}

async function saveNvqWalkthroughVideo(n,s,sd,d,code,source,{name='',type='',duration='',optimised=false}={}){
 if(!source||!String(type||source.type||'').startsWith('video/'))throw new Error('A valid video recording is required');
 let blob=source instanceof Blob?source:new Blob([source],{type:type||'video/webm'});if(!blob.size)throw new Error('The recording is empty');
 blob=await normaliseRecordedBlob(blob,type||blob.type||'video/webm');
 const media=await uniqueEvidenceMedia(blob,{kind:'video',excludeToken:`${key(n,s)}:draft:recording:${code}`});if(!media)return false;
 const mime=String(blob.type||type||'video/webm').split(';')[0].trim()||'video/webm',ext=mediaExtensionForMime(mime,'video'),data=await blobToDataUrl(blob);
 d.recordings=d.recordings||{};d.recordings[code]={data,type:mime,format:ext,name:name||`${code}-walkthrough-${Date.now()}.${ext}`,size:blob.size,mediaHash:media.hash,date:today(),duration,optimised};
 await commit(n,s,sd);renderSection();toast(`${code} video autosaved · ${formatMediaSize(blob.size)}`);return true;
}
function showNvqWalkthroughVideo(code,recording){
 if(!isVideoEvidenceRecording(recording))return toast('Video file could not be opened');
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="loWalkVideoModal"><div class="modal-card video-modal"><video id="loWalkSavedPlayback" controls playsinline webkit-playsinline preload="metadata"><source src="${esc(recording.data)}" type="${esc(recording.type||'video/webm')}"></video><p class="muted hide" id="loWalkPlaybackError">This device cannot play the saved format in the browser. Use the button below to open or save the original video.</p><div class="btn-row"><button class="btn secondary" id="openLoWalkVideoFile">Open / save video</button><button class="btn secondary" id="closeLoWalkVideo">Close</button></div></div></div>`);
 const modal=document.getElementById('loWalkVideoModal'),player=document.getElementById('loWalkSavedPlayback');player.onerror=()=>document.getElementById('loWalkPlaybackError')?.classList.remove('hide');
 document.getElementById('openLoWalkVideoFile').onclick=()=>{const link=document.createElement('a');link.href=recording.data;link.download=recording.name||`${code}-walkthrough.${mediaExtensionForMime(recording.type,'video')}`;document.body.appendChild(link);link.click();link.remove()};
 document.getElementById('closeLoWalkVideo').onclick=()=>{player.pause();player.removeAttribute('src');player.load();modal.remove()};
}
async function recordDiscussionOutcome(n,s,sd,d,code,fallbackInput=null){
 const a=assignment(n),criterion=(a?.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code)),description=criterion?.[1]||'Explain or demonstrate how this learning outcome was completed.',prompt=walkthroughPrompt(code,description,a);
 const result=await recordOptimisedVideo({title:'Video Walkthrough',instruction:prompt,detail:description,criterionCode:code,fallbackInput,saveLabel:'Save video'});if(!result)return;
 try{await saveNvqWalkthroughVideo(n,s,sd,d,code,result.blob,{type:result.type,duration:result.duration,optimised:true})}catch(error){console.error('LO walkthrough video save failed',error);toast('The video could not be saved')}
}
function blobToDataUrl(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob)})}
function formatDuration(seconds){const m=Math.floor(seconds/60),s=seconds%60;return `${m}:${String(s).padStart(2,'0')}`}
async function compressLandscapeImage(file){
 const original=await fileToData(file);
 try{
  const img=await new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=original});
  const maxWidth=1600,maxHeight=1200,scale=Math.min(1,maxWidth/(img.naturalWidth||img.width||maxWidth),maxHeight/(img.naturalHeight||img.height||maxHeight));
  const width=Math.max(1,Math.round((img.naturalWidth||img.width)*scale)),height=Math.max(1,Math.round((img.naturalHeight||img.height)*scale));
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)return original;
  ctx.drawImage(img,0,0,width,height);
  return canvas.toDataURL('image/jpeg',0.82);
 }catch(error){console.warn('Photo optimisation unavailable; saving original image',error);return original}
}
function showOutcomePhotoModal(n,s,sd,d,code,locked){d.outcomePhotos=d.outcomePhotos||{};const a=assignment(n),existing=d.outcomePhotos[code],filename=evidencePhotoFileName(a,code,0);app.insertAdjacentHTML('beforeend',`<div class="modal" id="outcomePhotoModal"><div class="modal-card"><h2>${existing?`${code} evidence photograph`:`Add photograph for ${code}`}</h2>${existing?`<img class="photo-preview" src="${existing.data}" alt="Evidence photograph for ${code}"><p class="linked-photo-modal-name">${esc(filename)}</p>`:'<p class="muted">Take a clear photograph that directly supports this learning outcome.</p>'}<div class="btn-row">${locked?'<button class="btn" id="closeOutcomePhoto">Close</button>':`<label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="outcomeCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="outcomeGalleryInput" type="file" accept="image/*"></label>${existing?'<button class="btn danger" id="removeOutcomePhoto">Delete</button>':''}<button class="btn secondary" id="closeOutcomePhoto">Cancel</button>`}</div></div></div>`);const modal=document.getElementById('outcomePhotoModal');document.getElementById('closeOutcomePhoto').onclick=()=>modal.remove();if(locked)return;const add=async files=>{const f=[...files][0];if(!f||!f.type.startsWith('image/'))return;const data=await compressLandscapeImage(f),media=await uniqueEvidenceMedia(data,{kind:'image',excludeToken:`${key(n,s)}:draft:outcome:${code}`});if(!media)return;d.outcomePhotos[code]={name:filename,originalName:f.name,data,mediaHash:media.hash};await commit(n,s,sd);modal.remove();setTimeout(()=>{if(state.view==='section'&&state.assignment===n&&state.section===s)renderSection()},60);toast(`${code} photograph autosaved as ${filename}`)};document.getElementById('outcomeCameraInput').onchange=e=>add(e.target.files);document.getElementById('outcomeGalleryInput').onchange=e=>add(e.target.files);const remove=document.getElementById('removeOutcomePhoto');if(remove)remove.onclick=async()=>{delete d.outcomePhotos[code];await commit(n,s,sd);modal.remove();setTimeout(()=>{if(state.view==='section'&&state.assignment===n&&state.section===s)renderSection()},60);toast(`${code} photograph removed`)}}
async function addPhotos(files,n,s,sd,d){d.photos=d.photos||[];const a=assignment(n),staged=[];let added=0,duplicates=0;duplicateEvidenceMediaNotice=null;for(const f of [...files]){if(!f.type.startsWith('image/'))continue;const data=await compressLandscapeImage(f),media=await uniqueEvidenceMedia(data,{kind:'image',location:evidenceMediaLocation(COURSE.id,n,s,f.name||`Photo ${added+1}`)},staged);if(!media){duplicates++;continue}staged.push(media);const index=d.photos.length,name=evidencePhotoFileNameForCodes(a,d.ksbEvidence||[],index);d.photos.push({name,originalName:f.name,data,mediaHash:media.hash});added++}if(added)await commit(n,s,sd);const notice=duplicateEvidenceMediaNotice;if(added){renderSection();if(notice)showDuplicateEvidenceMedia(notice.kind,notice.duplicate)}if(added)toast(`${added} landscape photo${added===1?'':'s'} autosaved with linked Skill filenames${duplicates?` · ${duplicates} duplicate${duplicates===1?'s':''} blocked`:''}`);else if(!duplicates)toast('No supported photographs selected')}
function showPracticalPhotoModal(n,s,sd,d,index,locked){const a=assignment(n),existing=d.photos?.[index],filename=evidencePhotoFileNameForCodes(a,d.ksbEvidence||[],index);app.insertAdjacentHTML('beforeend',`<div class="modal" id="practicalPhotoModal"><div class="modal-card"><h2>${existing?'Practical Evidence Photo':'Add Practical Evidence'}</h2>${existing?`<img class="photo-preview" src="${existing.data}" alt="Practical evidence photo ${index+1}"><p class="linked-photo-modal-name">${esc(filename)}</p>`:'<p class="muted">Add a clear landscape photograph that supports the assessor observation.</p>'}<div class="btn-row">${locked?'<button class="btn" id="closePracticalPhoto">Close</button>':`<label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="practicalCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="practicalGalleryInput" type="file" accept="image/*"></label>${existing?'<button class="btn danger" id="removePracticalPhoto">Remove</button>':''}<button class="btn secondary" id="closePracticalPhoto">Cancel</button>`}</div></div></div>`);const modal=document.getElementById('practicalPhotoModal');document.getElementById('closePracticalPhoto').onclick=()=>modal.remove();if(locked)return;const add=async files=>{const f=[...files][0];if(!f||!f.type.startsWith('image/'))return;const data=await compressLandscapeImage(f),media=await uniqueEvidenceMedia(data,{kind:'image',excludeToken:`${key(n,s)}:draft:photo:${index}`});if(!media)return;d.photos=d.photos||[];d.photos[index]={name:filename,originalName:f.name,data,mediaHash:media.hash};await commit(n,s,sd);modal.remove();setTimeout(()=>{if(state.view==='section'&&state.assignment===n&&state.section===s)renderSection()},60);toast(`Practical photo autosaved as ${filename}`)};document.getElementById('practicalCameraInput').onchange=e=>add(e.target.files);document.getElementById('practicalGalleryInput').onchange=e=>add(e.target.files);const remove=document.getElementById('removePracticalPhoto');if(remove)remove.onclick=async()=>{d.photos.splice(index,1);await commit(n,s,sd);modal.remove();setTimeout(()=>{if(state.view==='section'&&state.assignment===n&&state.section===s)renderSection()},60);toast('Practical photo removed')}}
async function recordSupportingVideo(n,s,sd,d,fallbackInput){
 const result=await recordOptimisedVideo({title:'Supporting evidence video',instruction:'Record in landscape, keep the evidence in view and explain what the clip demonstrates.',fallbackInput});if(!result)return;
 try{const media=await uniqueEvidenceMedia(result.blob,{kind:'video'});if(!media)return;const data=await blobToDataUrl(result.blob),thumbnail=await createVideoThumbnail(data),ext=mediaExtensionForMime(result.type,'video');d.files=d.files||[];d.files.push({name:`Supporting-video-${Date.now()}.${ext}`,evidenceName:'',type:result.type,size:result.size,mediaHash:media.hash,duration:result.duration,optimised:true,data,thumbnail});await commit(n,s,sd);renderSection();toast(`Optimised video autosaved · ${formatMediaSize(result.size)}`)}catch(error){console.error('Supporting video could not be saved',error);toast('The video could not be saved')}
}

function showSharedPhotoModal(n,s,sd,d,index,locked){const a=assignment(n),existing=d.photos?.[index],filename=evidencePhotoFileNameForCodes(a,selectedKsbCodes(a,d).filter(code=>/^S/i.test(code)),index);app.insertAdjacentHTML('beforeend',`<div class="modal" id="sharedPhotoModal"><div class="modal-card"><h2>${existing?'Photographic Evidence':'Add Photograph '+(index+1)}</h2>${existing?`<img class="photo-preview" src="${existing.data}" alt="Photographic evidence ${index+1}"><p class="linked-photo-modal-name">${esc(filename)}</p>`:'<p class="muted">Add a clear landscape photograph that helps demonstrate the Skill or Skills selected for this submission.</p>'}<div class="btn-row">${locked?'<button class="btn" id="closeSharedPhoto">Close</button>':`<label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="sharedCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="sharedGalleryInput" type="file" accept="image/*"></label>${existing?'<button class="btn danger" id="removeSharedPhoto">Remove</button>':''}<button class="btn secondary" id="closeSharedPhoto">Cancel</button>`}</div></div></div>`);const modal=document.getElementById('sharedPhotoModal');document.getElementById('closeSharedPhoto').onclick=()=>modal.remove();if(locked)return;const add=async files=>{const f=[...files][0];if(!f)return;try{const data=await compressLandscapeImage(f);let mediaHash='';try{const media=await uniqueEvidenceMedia(data,{kind:'image',excludeToken:`${key(n,s)}:draft:photo:${index}`});if(!media)return;mediaHash=media.hash||''}catch(hashError){console.warn('Photo duplicate check skipped so the evidence can still be saved',hashError)}d.photos=d.photos||[];while(d.photos.length<9)d.photos.push(null);d.photos[index]={name:filename,originalName:f.name||`photo-${index+1}.jpg`,type:f.type||'image/jpeg',data,mediaHash};await commit(n,s,sd);modal.remove();setTimeout(()=>{if(state.view==='section'&&state.assignment===n&&state.section===s)renderSection()},60);toast(`Photo ${index+1} saved`)}catch(error){console.error('Photographic evidence save failed',error);toast('The photo could not be saved. Please try again.')}};document.getElementById('sharedCameraInput').onchange=e=>add(e.target.files);document.getElementById('sharedGalleryInput').onchange=e=>add(e.target.files);const remove=document.getElementById('removeSharedPhoto');if(remove)remove.onclick=async()=>{d.photos[index]=null;await commit(n,s,sd);modal.remove();setTimeout(()=>{if(state.view==='section'&&state.assignment===n&&state.section===s)renderSection()},60);toast('Photo removed')}}
async function addSupportingFiles(files,n,s,sd,d,mode='media'){let added=0,addedBytes=0,originalVideos=0,duplicates=0;const staged=[];duplicateEvidenceMediaNotice=null;for(const f of [...files]){const isImage=f.type.startsWith('image/'),isVideo=f.type.startsWith('video/'),isGeneric=!isImage&&!isVideo;if(mode==='image'&&!isImage)continue;if(mode==='video'&&!isVideo)continue;if(mode==='file'&&isVideo)continue;if(mode!=='file'&&isGeneric)continue;try{if(isGeneric){const data=await fileToData(f),size=f.size||dataUrlStoredBytes(data);d.files.push({name:f.name||`document-${Date.now()}`,evidenceName:'',type:f.type||'application/octet-stream',size,data,thumbnail:'',optimised:false});added++;addedBytes+=size;continue}const data=isImage?await compressLandscapeImage(f):await fileToData(f),size=isImage?dataUrlStoredBytes(data):f.size,media=await uniqueEvidenceMedia(isImage?data:f,{kind:isImage?'image':'video',location:evidenceMediaLocation(COURSE.id,n,s,f.name||`${isVideo?'Video':'Photo'} ${added+1}`)},staged);if(!media){duplicates++;continue}staged.push(media);const thumbnail=isVideo?await createVideoThumbnail(data):'';d.files.push({name:f.name||`${isVideo?'video':'image'}-${Date.now()}`,evidenceName:'',type:f.type||`${isVideo?'video':'image'}/*`,size,mediaHash:media.hash,data,thumbnail,optimised:isImage});added++;addedBytes+=size;if(isVideo)originalVideos++}catch(e){console.error('Supporting file could not be added',e)}}if(added)await commit(n,s,sd);const notice=duplicateEvidenceMediaNotice;if(added){renderSection();if(notice)showDuplicateEvidenceMedia(notice.kind,notice.duplicate)}if(added)toast(`${added} file${added===1?'':'s'} autosaved · ${formatMediaSize(addedBytes)}${originalVideos?' · gallery video kept at original size':''}${duplicates?` · ${duplicates} duplicate${duplicates===1?'s':''} blocked`:''}`);else if(!duplicates)toast('No supported files selected')}
function fileToData(f){return new Promise((res,rej)=>{const r=new FileReader;r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(f)})}
function createVideoThumbnail(src){return new Promise(resolve=>{const v=document.createElement('video');v.muted=true;v.playsInline=true;v.preload='metadata';const done=()=>{try{const c=document.createElement('canvas'),max=720,scale=Math.min(1,max/Math.max(v.videoWidth||1,v.videoHeight||1));c.width=Math.max(1,Math.round((v.videoWidth||640)*scale));c.height=Math.max(1,Math.round((v.videoHeight||360)*scale));c.getContext('2d').drawImage(v,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.72))}catch{resolve('')}finally{v.removeAttribute('src');v.load()}};v.onloadeddata=()=>{try{v.currentTime=Math.min(.25,Math.max(0,(v.duration||1)/10))}catch{done()}};v.onseeked=done;v.onerror=()=>resolve('');v.src=src})}
function downloadStoredFile(f){if(!f?.data)return toast('Video file unavailable');const a=document.createElement('a');a.href=f.data;a.download=evidenceDownloadName(f);document.body.appendChild(a);a.click();a.remove()}
function evidenceDownloadName(f){const original=String(f?.name||''),dot=original.lastIndexOf('.'),ext=dot>0?original.slice(dot):'',title=String(f?.evidenceName||'Supporting evidence').trim().replace(/[\\/:*?"<>|]/g,'-').replace(/^\.+/,'').replace(/\s+/g,' ').slice(0,120)||'Supporting evidence';return title+ext}
function wordCount(t){return t.trim()?t.trim().split(/\s+/).length:0}
function coverage(a,text){const words=text.toLowerCase();const common=new Set(['and','the','using','use','work','working','to','of','a','an','in','with','from']);const out={};a.ksbs.forEach(([c,s])=>{const keys=s.toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>3&&!common.has(w));out[c]=keys.some(w=>words.includes(w))});return out}
function hasOutcomePhotos(codes,d){return codes.every(([code])=>!!d.outcomePhotos?.[code]?.data)}
function statementReady(a,d){const selected=statementSelectedKsbCodes(a,d).filter(code=>COURSE.nvqUnits||/^K/i.test(code));return selected.length>0&&wordCount(d.text)>=selected.length*30&&!!d.signature}
function updateStatement(a,d){const wc=document.getElementById('wordCount');if(wc)wc.textContent=wordCount(d.text);const required=statementWordRequirement(a,d)||30;const rc=document.getElementById('statementRequiredCount');if(rc)rc.textContent=required;const rl=document.getElementById('statementRequiredLabel');if(rl)rl.textContent=required;const b=document.getElementById('submitSection');if(b)b.disabled=!statementReady(a,d)}
function supportReady(a,d){if(d.tab==='files'||d.type==='Supporting evidence')return d.files.length>0&&d.files.every(f=>(f.evidenceName||'').trim())&&(COURSE.nvqUnits||selectedKsbCodes(a,d).length>0);if(COURSE.nvqUnits){const selected=selectedNvqOutcomes(a,d);return !!(d.personName&&d.activity&&d.feedback?.trim()&&d.signature&&selected.length)}const selected=selectedKsbCodes(a,d).filter(code=>/^[SB]/i.test(String(code))),allRated=selected.length>0&&selected.every(code=>[1,2,3].includes(Number(d.scores?.[code])));return !!(d.personName&&d.role&&(d.contactDetails||d.organisation)&&d.activity&&d.signature&&allRated)}
function updateSubmit(a,d){const b=document.getElementById('submitSection');if(b)b.disabled=!supportReady(a,d)}
function updateSectionSubmit(a,s,d){const b=document.getElementById('submitSection');if(b)b.disabled=!canSubmit(a,s,d)}
function observationReady(a,d){const selected=selectedNvqOutcomes(a,d);return !!(d.tutor&&d.activity&&d.feedback?.trim()&&d.signature&&selected.length>=1&&hasOutcomePhotos(selected,d))}
function canSubmit(a,s,d){if(s==='practical')return ksbObservationReady(a,d);if(s==='photos'){const selected=COURSE.nvqUnits?selectedKsbCodes(a,d):selectedKsbCodes(a,d).filter(code=>String(code).toUpperCase().startsWith('S')),photoCount=(d.photos||[]).slice(0,9).filter(ph=>!!ph?.data).length;return selected.length>0&&photoCount>=3&&!!d.signature;}if(s==='statement')return statementReady(a,d);if(COURSE.nvqUnits&&s==='discussion')return Object.values(d.recordings||{}).some(isVideoEvidenceRecording);if(s==='discussion')return !!(d.assessor&&d.activity&&d.signature&&Object.keys(d.recordings||{}).length);if(s==='professionalDiscussion')return !!(d.signature&&((d.voiceSubmissions||[]).length||Object.keys(d.recordings||{}).length));return supportReady(a,d)}
async function submitSection(a,s,sd,d){if(!canSubmit(a,s,d))return toast('Complete all required fields first');d.submitted=true;d.date=today();const frozen=structuredClone(d);sd.versions.push(frozen);sd.draft=blankSection(s);await commit(a.n,s,sd);const pack=state.data[packStatusKey(a.n)];if(pack?.uploaded){state.data[packStatusKey(a.n)]={...pack,downloaded:false,uploaded:false,changedAt:new Date().toISOString()};await saveData()}state.assignment=a.n;state.section=null;state.view='assignment';render();window.scrollTo(0,0);showEvidenceSavedConfirmation()}

function appIsInstalled(){return window.matchMedia?.('(display-mode: standalone)').matches||window.navigator.standalone===true}
function installDeviceType(){const ua=navigator.userAgent||'';if(/iphone|ipad|ipod/i.test(ua))return 'ios';if(/android/i.test(ua))return 'android';return 'other'}
async function showInstallAppScreen(){
 if(appIsInstalled())return;
 const previous=await getStore('installPromptShown');
 if(previous)return;
 await putStore('installPromptShown',{shownAt:new Date().toISOString(),version:APP_VERSION});
 const device=installDeviceType();
 const iosSteps=`<div class="install-steps"><div><strong>1</strong><span>Tap the <b>Share</b> button in Safari.</span></div><div><strong>2</strong><span>Scroll down and choose <b>Add to Home Screen</b>.</span></div><div><strong>3</strong><span>Tap <b>Add</b> to install Apprentice+.</span></div></div>`;
 const androidSteps=`<div class="install-steps"><div><strong>1</strong><span>Tap <b>Install Apprentice+</b> below.</span></div><div><strong>2</strong><span>Confirm <b>Install</b> when your browser asks.</span></div><div><strong>3</strong><span>Open Apprentice+ from your home screen.</span></div></div>`;
 const fallbackSteps=`<div class="install-steps"><div><strong>1</strong><span>Open your browser menu.</span></div><div><strong>2</strong><span>Choose <b>Install app</b> or <b>Add to Home Screen</b>.</span></div><div><strong>3</strong><span>Confirm the installation.</span></div></div>`;
 app.insertAdjacentHTML('beforeend',`<div class="modal install-app-modal" id="installAppModal"><div class="modal-card install-app-card"><div class="install-app-logo"><img src="icon-192.png" alt="Apprentice+ app icon"></div><div class="number">SETUP COMPLETE</div><h2>Install Apprentice+</h2><p class="muted">Add the app to this phone for quicker access, full-screen use and a more reliable evidence workflow.</p>${device==='ios'?iosSteps:device==='android'?androidSteps:fallbackSteps}<div class="install-benefits"><span>✓ Opens like an app</span><span>✓ Easy home-screen access</span><span>✓ Evidence remains on this device</span></div><div class="btn-row">${device==='ios'?'<button class="btn" id="installDone">I have installed it</button>':`<button class="btn" id="installNow">Install Apprentice+</button>`}<button class="btn secondary" id="installLater">Not now</button></div>${device==='ios'?'<p class="help install-ios-note">On iPhone or iPad, installation must be completed through Safari’s Share menu.</p>':''}</div></div>`);
 const modal=document.getElementById('installAppModal');
 document.getElementById('installLater').onclick=()=>modal.remove();
 const done=document.getElementById('installDone');if(done)done.onclick=()=>modal.remove();
 const install=document.getElementById('installNow');if(install)install.onclick=async()=>{
  if(deferredInstallPrompt){deferredInstallPrompt.prompt();const choice=await deferredInstallPrompt.userChoice.catch(()=>null);if(choice?.outcome==='accepted')modal.remove();deferredInstallPrompt=null;return;}
  toast(device==='android'?'Open your browser menu and choose Install app or Add to Home screen':'Use your browser menu to install Apprentice+');
 };
}

function showOnboarding(editMode=false){
 const selectedCourse=COURSES[ACTIVE_COURSE_ID]||COURSES['site-carpentry-v1-4'];
 const title=editMode?'Learner details':'Welcome to Apprentice+';
 const courseOptions=`${editMode?'':'<option value="" selected disabled>Select your course</option>'}${Object.values(COURSES).map(c=>`<option value="${c.id}" ${editMode&&c.id===selectedCourse.id?'selected':''}>${c.name} ${c.version} (${c.standard})</option>`).join('')}`;
 const profileFields=`<div class="field"><label>Contracted weekly work hours</label><input class="input" id="obWeeklyWorkHours" type="number" min="1" max="80" step="0.5" inputmode="decimal" placeholder="e.g. 35" value="${esc(state.profile?.contractedWeeklyWorkHours||'')}"><p class="help">OTJ target is 20% of these hours each week. For example, 35 hours = 7 OTJ hours per week.</p></div><div class="field"><label>Portfolio website address <span class="optional-label">Optional</span></label><input class="input" id="obPortfolioUrl" type="url" inputmode="url" placeholder="https://..." value="${esc(state.profile?.portfolioUrl||'')}"><p class="help">Used by the Open Portfolio button. Nothing is uploaded automatically.</p></div><div class="date-grid"><div class="field"><label>Course start date <span class="optional-label">Optional</span></label><input class="input" id="obStartDate" type="date" value="${esc(state.profile?.courseStartDate||'')}"></div><div class="field"><label>Planned end date <span class="optional-label">Optional</span></label><input class="input" id="obEndDate" type="date" value="${esc(state.profile?.plannedEndDate||'')}"></div></div><div class="field"><label>Functional Skills attendance</label><div class="profile-study-checks"><label class="checkbox"><input type="checkbox" id="obMathsCollege" ${state.profile?.attendsMathsCollege?'checked':''}> <span>Attending college for Maths</span></label><label class="checkbox"><input type="checkbox" id="obEnglishCollege" ${state.profile?.attendsEnglishCollege?'checked':''}> <span>Attending college for English</span></label></div><p class="help">Reviews only sets Maths or English Academy test targets when the matching option is ticked.</p></div>`;
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="onboard"><div class="modal-card"><h2>${title}</h2><p class="muted">${editMode?'Update the learner, course, employer and portfolio details used across the app.':'Complete the learner profile before using the app. A course must be selected; the fields marked Optional can be added now or later.'}</p><div class="field"><label>Course <span class="required-label">Required</span></label><select class="input" id="obCourse" required aria-required="true">${courseOptions}</select><label class="btn secondary course-import-file" for="obImportCourseFile">${appIcon('download','button-icon')} Import Course<input id="obImportCourseFile" type="file" accept=".apcourse,application/json" hidden></label><p class="help">Choose an installed course or import an <strong>.apcourse</strong> file supplied by your college.</p></div><div class="field"><label>Full name</label><input class="input" id="obName" value="${esc(state.profile?.fullName||'')}"></div>${profileFields}<div class="field"><label>Learner signature</label><div class="signature-entry locked" id="obSignatureEntry"><canvas class="signature-pad" id="obSig" aria-label="Learner signature box"></canvas><button type="button" class="signature-unlock" id="obUnlockSignature">Press here to add signature</button></div><button class="btn secondary" id="obClear" type="button">Clear</button></div><div class="disclaimer"><strong>Local storage notice</strong><br>All evidence is saved locally on this device and browser. Nothing is saved online or uploaded automatically. Clearing browser data or changing devices may remove evidence. Download completed packs and upload them to your official portfolio.</div><label class="checkbox"><input type="checkbox" id="obAccept" ${editMode?'checked':''}> <span>I understand and accept the local storage notice.</span></label><div class="btn-row"><button class="btn" id="obSave">${editMode?'Save changes':'Save and continue'}</button>${editMode?'<button class="btn secondary" id="obCancel">Cancel</button>':''}</div></div></div>`);
 setupOnboardSig(editMode);
 if(editMode)document.getElementById('obCancel').onclick=()=>document.getElementById('onboard').remove();
}
function setupOnboardSig(editMode=false){
 const c=document.getElementById('obSig'),ctx=c.getContext('2d'),entry=document.getElementById('obSignatureEntry'),unlock=document.getElementById('obUnlockSignature');let drawing=false,enabled=false,sig=state.profile?.signature||'';const ratio=devicePixelRatio||1;c.width=c.clientWidth*ratio;c.height=c.clientHeight*ratio;ctx.scale(ratio,ratio);ctx.lineWidth=2.3;ctx.lineCap='round';
 if(sig){const img=new Image();img.onload=()=>ctx.drawImage(img,0,0,c.clientWidth,c.clientHeight);img.src=sig}
 const enable=()=>{enabled=true;entry?.classList.remove('locked');unlock?.remove();c.focus()};if(unlock)unlock.onclick=enable; const importCourse=document.getElementById('obImportCourseFile');if(importCourse)importCourse.onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{await importCourseFile(file,document.getElementById('obCourse'))}catch(error){toast(error?.message||'Unable to import that course file')}finally{e.target.value=''}};
 const p=e=>{const r=c.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};c.onpointerdown=e=>{if(!enabled)return;drawing=true;const q=p(e);ctx.beginPath();ctx.moveTo(q.x,q.y);e.preventDefault()};c.onpointermove=e=>{if(!enabled||!drawing)return;const q=p(e);ctx.lineTo(q.x,q.y);ctx.stroke();e.preventDefault()};window.addEventListener('pointerup',()=>{if(drawing){drawing=false;sig=c.toDataURL()}});document.getElementById('obClear').onclick=()=>{enable();ctx.clearRect(0,0,c.width,c.height);sig=''};document.getElementById('obSave').onclick=async()=>{
  const courseId=document.getElementById('obCourse').value;if(!COURSES[courseId])return toast('Select your course before continuing');
  const fullName=document.getElementById('obName').value.trim(),ok=document.getElementById('obAccept').checked;
  if(!fullName||!sig||!ok)return toast('Add the learner name, signature and accept the agreement');
  const contractedWeeklyWorkHours=Number(document.getElementById('obWeeklyWorkHours').value||0),portfolioUrl=document.getElementById('obPortfolioUrl').value.trim(),courseStartDate=document.getElementById('obStartDate').value,plannedEndDate=document.getElementById('obEndDate').value,attendsMathsCollege=!!document.getElementById('obMathsCollege')?.checked,attendsEnglishCollege=!!document.getElementById('obEnglishCollege')?.checked;
  if(!Number.isFinite(contractedWeeklyWorkHours)||contractedWeeklyWorkHours<=0)return toast('Add the learner’s contracted weekly work hours');if(portfolioUrl&&!/^https?:\/\//i.test(portfolioUrl))return toast('Enter a valid portfolio website address beginning with http:// or https://');
  if(courseStartDate&&plannedEndDate&&new Date(`${plannedEndDate}T00:00:00`)<=new Date(`${courseStartDate}T00:00:00`))return toast('Planned end date must be after the start date');
  ACTIVE_COURSE_ID=courseId;COURSE=COURSES[courseId];state.assignment=null;state.section=null;state.view='home';state.profile={...state.profile,fullName,contractedWeeklyWorkHours,portfolioUrl,courseStartDate,plannedEndDate,attendsMathsCollege,attendsEnglishCollege,signature:sig};await putStore('activeCourse',courseId);await saveProfile();document.getElementById('onboard').remove();render();toast(editMode?'Learner details updated':'Profile saved locally');if(!editMode)setTimeout(()=>showInstallAppScreen(),250)
 };
}

const BRANDING_KEY='collegeBranding:v1';
function brandingPayload(b){return {v:1,name:b.name||'',campus:b.campus||'',address:b.address||'',telephone:b.telephone||'',email:b.email||'',website:b.website||'',logo:b.logo||''}}
function encodeBrandingPayload(b){return btoa(unescape(encodeURIComponent(JSON.stringify(brandingPayload(b)))))}
function decodeBrandingPayload(s){return JSON.parse(decodeURIComponent(escape(atob(s))))}
async function prepareBrandLogo(file){const src=await fileToData(file);const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src});const c=document.createElement('canvas');const max=96,scale=Math.min(1,max/Math.max(img.width,img.height));c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));const x=c.getContext('2d');x.clearRect(0,0,c.width,c.height);x.drawImage(img,0,0,c.width,c.height);let q=.72,data=c.toDataURL('image/webp',q);while(data.length>1850&&q>.25){q-=.1;data=c.toDataURL('image/webp',q)}return data}
function currentBrandingFromForm(){return {name:document.getElementById('brandName')?.value.trim()||'',campus:document.getElementById('brandCampus')?.value.trim()||'',address:document.getElementById('brandAddress')?.value.trim()||'',telephone:document.getElementById('brandTelephone')?.value.trim()||'',email:document.getElementById('brandEmail')?.value.trim()||'',website:document.getElementById('brandWebsite')?.value.trim()||'',logo:state.branding?.logo||''}}
function brandingAdminPanel(){const b=state.branding||{};return `<section class="admin-section"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('college')}</div><div><h3>College branding</h3><p>Used throughout the app, learner QR setup and portfolio PDFs.</p></div></div><div class="admin-section-body"><div class="admin-form-grid"><div class="field"><label>College name</label><input class="input" id="brandName" value="${esc(b.name||'')}"></div><div class="field"><label>Campus <span class="optional-label">Optional</span></label><input class="input" id="brandCampus" value="${esc(b.campus||'')}"></div><div class="field admin-grid-full"><label>Training centre address</label><textarea class="input" id="brandAddress" rows="3">${esc(b.address||'')}</textarea></div><div class="field"><label>Telephone</label><input class="input" id="brandTelephone" value="${esc(b.telephone||'')}"></div><div class="field"><label>Email</label><input class="input" id="brandEmail" type="email" value="${esc(b.email||'')}"></div><div class="field admin-grid-full"><label>Website</label><input class="input" id="brandWebsite" type="url" value="${esc(b.website||'')}"></div></div><label class="file-drop college-logo-upload admin-logo-upload"><input id="brandLogoInput" type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml"><span>${b.logo?`<img src="${b.logo}" alt="College logo preview">`:appIcon('camera')}</span><div><strong>${b.logo?'Replace college logo':'Upload college logo'}</strong><small>PNG, JPG, WebP or SVG · automatically resized</small></div></label><div class="admin-action-grid"><button class="btn admin-primary" id="saveBranding">Save branding</button><button class="btn admin-soft" id="generateBrandQR" ${b.name&&b.logo?'':'disabled'}>${appIcon('qr','button-icon')} Generate learner QR</button>${b.name&&b.logo?'<button class="btn admin-soft" id="downloadBrandSheet">'+appIcon('download','button-icon')+' Download setup sheet</button>':''}<button class="btn admin-danger" id="removeBranding" ${b.name||b.logo?'':'disabled'}>Remove branding</button></div><div id="brandQrArea" class="brand-qr-area"></div></div></section>`}
function showBrandQR(downloadSheet=false){const b=currentBrandingFromForm();if(!b.name||!b.logo)return toast('Add the college name and logo first');const payload=encodeBrandingPayload(b),base=(location.href.split('#')[0].split('?')[0]),url=`${base}#college=${encodeURIComponent(payload)}`;if(url.length>2900)return toast('The logo is too detailed for the QR code. Upload a simpler or smaller logo.');const area=document.getElementById('brandQrArea');if(area){const qr=ApprenticeQR.toCanvas(url,320);area.innerHTML=`<div class="brand-qr-card"><img src="${b.logo}" alt="${esc(b.name)} logo"><h3>${esc(b.name)}</h3><div class="qr-holder"></div><p>Scan once to install this college branding in Apprentice+.</p></div>`;area.querySelector('.qr-holder').appendChild(qr)}if(downloadSheet){const qr=ApprenticeQR.toDataURL(url,640),w=window.open('','_blank');w.document.write(`<title>${esc(b.name)} Apprentice+ Setup</title><style>body{font-family:Arial;text-align:center;padding:48px;color:#082f25}img.logo{max-width:260px;max-height:120px}.qr{width:420px;max-width:80vw}h1{font-size:34px}p{font-size:20px;line-height:1.5}@media print{button{display:none}}</style><img class="logo" src="${b.logo}"><h1>${esc(b.name)}</h1><h2>Apprentice+ College Setup</h2><img class="qr" src="${qr}"><p>1. Open this QR code with your phone camera.<br>2. Open Apprentice+ when prompted.<br>3. Confirm the college branding installation.</p><p>${esc(b.website||b.email||'')}</p><button onclick="print()">Print or save as PDF</button>`);w.document.close()}}
async function importBrandingFromHash(){const m=location.hash.match(/^#college=(.+)$/);if(!m)return;try{const b=decodeBrandingPayload(decodeURIComponent(m[1]));if(!b.name||!b.logo)throw new Error('Invalid branding');if(confirm(`Install ${b.name} branding on this device?`)){state.branding=b;await putStore(BRANDING_KEY,b);history.replaceState(null,'',location.pathname+location.search);toast(`${b.name} branding installed`);render()}}catch(e){console.error(e);toast('Unable to install college branding')}}

let developerVersionTapCount=0,developerVersionTapTimer=null;document.addEventListener('click',event=>{if(!event.target?.closest?.('#developerVersionTrigger'))return;developerVersionTapCount++;clearTimeout(developerVersionTapTimer);developerVersionTapTimer=setTimeout(()=>developerVersionTapCount=0,2200);if(developerVersionTapCount>=7){developerVersionTapCount=0;clearTimeout(developerVersionTapTimer);showHiddenDeveloperTools();toast('Developer Mode unlocked')}});

let adminModalOpen=false;
function showDeveloper(){
 adminModalOpen=true;
 document.getElementById('devModal')?.remove();
 const unlocked=!!state.dev;
 app.insertAdjacentHTML('beforeend',`<div class="modal admin-modal" id="devModal"><div class="modal-card admin-modal-card"><div class="admin-modal-head"><div><span class="admin-kicker">Apprentice+ controls</span><h2>Admin Mode</h2></div><button class="admin-close" id="closeDev" aria-label="Close Admin Mode">×</button></div>${unlocked?developerPanel():`<div class="admin-unlock"><div class="admin-lock-icon">${appIcon('lock')}</div><p class="muted">Enter the four-digit admin code to manage course settings, branding and evidence controls.</p><div class="field"><label>Admin code</label><input class="input" id="devCode" inputmode="numeric" type="password" maxlength="4" autocomplete="one-time-code"></div><button class="btn admin-primary" id="unlockDev">Unlock Admin Mode</button></div>`}</div></div>`);
 const modal=document.getElementById('devModal');
 const closeOnly=()=>{adminModalOpen=false;modal?.remove()};
 document.getElementById('closeDev').onclick=closeOnly;
 modal.onclick=e=>{if(e.target===modal)closeOnly()};
 document.addEventListener('keydown',function adminEscape(e){if(e.key!=='Escape'||!document.getElementById('devModal'))return;document.removeEventListener('keydown',adminEscape);closeOnly()});
 if(unlocked){bindDeveloper();return}
 const code=document.getElementById('devCode'),unlock=document.getElementById('unlockDev');
 const attemptUnlock=async()=>{if(code.value!=='1984')return toast('Incorrect code');state.dev=true;await putStore('dev',true);modal.querySelector('.admin-modal-card').innerHTML=`<div class="admin-modal-head"><div><span class="admin-kicker">Apprentice+ controls</span><h2>Admin Mode</h2></div><button class="admin-close" id="closeDev" aria-label="Close Admin Mode">×</button></div>${developerPanel()}`;document.getElementById('closeDev').onclick=closeOnly;bindDeveloper()};
 unlock.onclick=attemptUnlock;
 code.onkeydown=e=>{if(e.key==='Enter')attemptUnlock()};
 code.focus();
}

const DRAWING_PROMPT_DRAFT_KEY='apprenticeWorkshopSheetDraftV1';
const WORKSHOP_BRICK_LENGTHS=Array.from({length:20},(_,i)=>{const n=i+1,mm=n*215+Math.max(0,n-1)*10;return `${n} brick${n===1?'':'s'} (${mm} mm)`});
const WORKSHOP_COURSES=Array.from({length:20},(_,i)=>{const n=i+1;return `${n} course${n===1?'':'s'} (${n*75} mm)`});
const WORKSHOP_RETURNS=['None',...Array.from({length:10},(_,i)=>{const n=i+1,mm=n*215+Math.max(0,n-1)*10;return `${n} brick${n===1?'':'s'} (${mm} mm)`})];
function workshopOptionList(items,value=''){return items.map(x=>`<option value="${esc(x)}" ${x===value?'selected':''}>${esc(x)}</option>`).join('')}
function drawingDataList(id,items=[]){return `<datalist id="${esc(id)}">${items.map(item=>`<option value="${esc(item)}"></option>`).join('')}</datalist>`}
function workshopAssignmentOptions(selected=1){const c=COURSES['bricklayer-st0095-v1-2'];return (c?.assignments||[]).map(a=>`<option value="${a.n}" ${a.n===Number(selected)?'selected':''}>Assignment ${a.n} — ${esc(a.title)}</option>`).join('')}
function workshopEstimate(d){const num=v=>Number(String(v||'').match(/\d+/)?.[0]||0),len=num(d.length),courses=num(d.height),ret=d.return==='None'?0:num(d.return);const main=Math.max(0,len*courses),returnQty=Math.max(0,ret*courses);const shared=ret?courses:0;const quantity=Math.max(0,Math.round(main+returnQty-shared));const hours=quantity/25;const allowance=(ret?0.25:0)+(String(d.features||'').trim()?0.25:0)+(String(d.fixings||'').trim()?0.15:0);const recommended=Math.ceil((hours+allowance)*2)/2;return {quantity,hours,recommended}}
function formatWorkshopHours(v){if(!v)return '—';return Number.isInteger(v)?`${v} hour${v===1?'':'s'}`:`${v.toFixed(1)} hours`}
function workshopSheetFormHTML(draft={}){const course=COURSES['bricklayer-st0095-v1-2'],a=(course?.assignments||[]).find(x=>x.n===Number(draft.assignmentNumber))||course?.assignments?.[0],estimate=workshopEstimate(draft);return `<div class="drawing-builder-page workshop-builder-page"><div class="drawing-builder-intro"><span class="admin-kicker">Developer workshop sheet tool</span><h2>Create college task sheet</h2><p>Build one clear Bricklaying workshop-sheet prompt based on the simple college format: views first, then specification, task details and instructions.</p></div><div class="drawing-builder-form"><div class="drawing-field-grid"><div class="field"><label>Course</label><input class="input" value="Bricklayer" readonly></div><div class="field"><label>Assignment</label><select class="input" id="drawingAssignment">${workshopAssignmentOptions(a?.n||1)}</select></div><div class="field field-span"><label>Task title</label><input class="input drawing-input" id="drawingTask" data-field="task" value="${esc(draft.task||a?.title||'')}" placeholder="Editable task title"></div></div><div class="drawing-field-grid"><div class="field"><label>Wall type</label><input class="input drawing-input" data-field="wallType" list="workshop-wall-types" value="${esc(draft.wallType||'Panel wall')}" placeholder="Select or type">${drawingDataList('workshop-wall-types',['Panel wall','Straight wall','Wall with right-hand return','Wall with left-hand return','Cavity wall','Solid wall','Pier','Wall with opening','Decorative wall','Custom'])}</div><div class="field"><label>Bond</label><input class="input drawing-input" data-field="bond" list="workshop-bonds" value="${esc(draft.bond||'Stretcher bond')}" placeholder="Select or type">${drawingDataList('workshop-bonds',['Stretcher bond','English bond','Flemish bond','English garden wall bond','Flemish garden wall bond','Stack bond','Custom'])}</div><div class="field"><label>Brick / block type</label><input class="input drawing-input" data-field="material" list="workshop-materials" value="${esc(draft.material||'Metric facing brick 215 × 102.5 × 65 mm')}" placeholder="Select or type">${drawingDataList('workshop-materials',['Metric facing brick 215 × 102.5 × 65 mm','Engineering brick 215 × 102.5 × 65 mm','100 mm concrete block','140 mm concrete block','Aircrete block','Custom'])}</div><div class="field"><label>Wall thickness</label><input class="input drawing-input" data-field="thickness" list="workshop-thicknesses" value="${esc(draft.thickness||'102.5 mm (half-brick)')}" placeholder="Select or type">${drawingDataList('workshop-thicknesses',['102.5 mm (half-brick)','215 mm (one-brick)','100 mm blockwork','140 mm blockwork','Cavity wall — custom overall thickness','Custom'])}</div><div class="field"><label>Length</label><select class="input drawing-input" data-field="length">${workshopOptionList(WORKSHOP_BRICK_LENGTHS,draft.length||WORKSHOP_BRICK_LENGTHS[7])}</select></div><div class="field"><label>Height</label><select class="input drawing-input" data-field="height">${workshopOptionList(WORKSHOP_COURSES,draft.height||WORKSHOP_COURSES[8])}</select></div><div class="field"><label>Return / depth</label><select class="input drawing-input" data-field="return">${workshopOptionList(WORKSHOP_RETURNS,draft.return||'None')}</select></div><div class="field"><label>Joint finish</label><input class="input drawing-input" data-field="finish" list="workshop-finishes" value="${esc(draft.finish||'Bucket handle')}" placeholder="Select or type">${drawingDataList('workshop-finishes',['Bucket handle','Flush','Weather struck','Recessed','Struck','Custom'])}</div><div class="field field-span"><label>Features</label><input class="input drawing-input" data-field="features" value="${esc(draft.features||'')}" placeholder="Opening, pier, DPC, lintel, corbel, radius, etc."></div><div class="field field-span"><label>Fixings and components</label><input class="input drawing-input" data-field="fixings" value="${esc(draft.fixings||'')}" placeholder="Wall ties, frame ties, insulation, cavity tray, straps, etc."></div></div><div class="drawing-field-grid"><div class="field"><label>Views required</label><select class="input drawing-input" data-field="views"><option ${draft.views==='Front elevation, side elevation and plan view'?'selected':''}>Front elevation, side elevation and plan view</option><option ${draft.views==='Front elevation and plan view'?'selected':''}>Front elevation and plan view</option><option ${draft.views==='Front elevation only'?'selected':''}>Front elevation only</option><option ${draft.views==='Front elevation, plan view and section'?'selected':''}>Front elevation, plan view and section</option></select></div><div class="field"><label>Recommended time</label><input class="input drawing-input" id="drawingTime" data-field="time" value="${esc(draft.time||formatWorkshopHours(estimate.recommended))}" placeholder="Editable"></div><div class="field field-span"><label>Specification</label><textarea class="input drawing-input" data-field="specification" rows="4" placeholder="Materials, wall ties, DPC, insulation, joint finish and any exact requirements">${esc(draft.specification||'')}</textarea></div><div class="field field-span"><label>Task details</label><textarea class="input drawing-input" data-field="details" rows="4" placeholder="Explain the purpose of the task and any unusual setting-out requirement">${esc(draft.details||'')}</textarea></div><div class="field field-span"><label>Task instructions</label><textarea class="input drawing-input" data-field="instructions" rows="5" placeholder="One instruction per line">${esc(draft.instructions||'1) Set out the work to the dimensions shown.\n2) Build plumb, level and to gauge.\n3) Complete the selected joint finish.\n4) Clean down and present for assessment.')}</textarea></div><div class="field field-span"><label>Additional notes</label><textarea class="input drawing-input" data-field="notes" rows="3">${esc(draft.notes||'')}</textarea></div></div><div class="brick-time-calculation"><div><span>Estimated brick quantity</span><strong id="drawingBrickQuantity">${estimate.quantity}</strong></div><div><span>Build rate</span><strong>25 bricks per hour</strong></div><div><span>Recommended time</span><strong id="drawingRecommendedTime">${formatWorkshopHours(estimate.recommended)}</strong></div></div><div class="drawing-builder-summary"><div><span>Suggested filename</span><strong id="drawingFilename">BWKAS${a?.n||1}.png</strong></div><div><span>Criteria loaded</span><strong id="drawingCriteriaCount">${a?.ksbs?.length||0}</strong></div></div><details class="drawing-prompt-preview"><summary>Preview full prompt</summary><textarea class="input" id="drawingPromptText" rows="20" readonly></textarea></details><div class="drawing-builder-actions"><button class="btn admin-primary" id="copyDrawingPrompt">Copy prompt</button><button class="btn admin-soft" id="saveDrawingDraft">Save draft</button><button class="btn admin-soft" id="clearDrawingForm">Clear form</button><button class="btn admin-soft" id="closeDrawingBuilder">Close</button></div></div></div>`}
function collectDrawingDraft(){const draft={courseId:'bricklayer-st0095-v1-2',assignmentNumber:Number(document.getElementById('drawingAssignment')?.value||1)};document.querySelectorAll('#drawingBuilderModal [data-field]').forEach(el=>draft[el.dataset.field]=el.value);return draft}
function workshopPromptText(draft=collectDrawingDraft()){const course=COURSES['bricklayer-st0095-v1-2'],a=course?.assignments?.find(x=>x.n===draft.assignmentNumber),criteria=(a?.ksbs||[]).map(([code,text])=>`${code} — ${text}`).join('\n'),estimate=workshopEstimate(draft),file=`BWKAS${draft.assignmentNumber}.png`;return `I would like you to build an image of a clear UK college bricklaying workshop task sheet for an apprenticeship practical assessment.

Use the same simple educational layout as a college workshop handout, not a complex architect's drawing and not a 3D render.

Create one portrait A4 page with:
• white background and black technical linework
• a simple border and clear boxed headings
• only the requested orthographic views
• accurate UK dimension lines and labels
• simple, verified brick/block outlines or UK material hatching
• no perspective, no shadows and no decorative effects
• a top assignment information strip
• Specification, Task Details and Task Instructions boxes beneath the drawings
• a small Apprentice+ title block and filename

Accuracy rules:
• Reproduce every supplied module and millimetre dimension exactly.
• Never invent a foundation, opening, return, layer, fixing, material, bond or quantity.
• Keep front elevations flat and orthographic.
• Show returns only in plan or side elevation unless specifically requested elsewhere.
• If a bond cannot be shown accurately, use UK brickwork hatching and label the bond instead.
• Use only the views needed to communicate the task clearly.
• Relevant knowledge criteria are answered separately; listed skills and behaviours are demonstrated during the practical build.

Trade:
Bricklayer

Assignment:
Assignment ${draft.assignmentNumber} — ${a?.title||''}

Filename:
${file}

Task:
${draft.task||a?.title||''}

Wall type:
${draft.wallType||''}

Bond:
${draft.bond||''}

Material:
${draft.material||''}

Wall thickness:
${draft.thickness||''}

Brickwork modules:
Length: ${draft.length||''}
Height: ${draft.height||''}
Return / depth: ${draft.return||'None'}

Joint finish:
${draft.finish||''}

Features:
${draft.features||'None'}

Fixings and components:
${draft.fixings||'None'}

Views required:
${draft.views||'Front elevation and plan view'}

Estimated brick quantity:
${estimate.quantity} brick equivalents

Time allowed:
${draft.time||formatWorkshopHours(estimate.recommended)}

Specification:
${draft.specification||'Construct the task using the materials and dimensions shown. Keep all work plumb, level, square and to gauge.'}

Task details:
${draft.details||'Complete the practical task shown on the workshop sheet and present the finished work for assessment.'}

Task instructions:
${draft.instructions||''}

KSBs / LOs covered:
${criteria}

Additional notes:
${draft.notes||'None'}

Final instruction:
Create one clean portrait A4 college workshop task sheet. Keep the drawings large and easy to read. Do not add unrelated schedules, legends, symbols or architectural information.`}
function updateDrawingPromptPreview(){const d=collectDrawingDraft(),e=workshopEstimate(d),a=COURSES['bricklayer-st0095-v1-2']?.assignments?.find(x=>x.n===d.assignmentNumber);const q=document.getElementById('drawingBrickQuantity'),r=document.getElementById('drawingRecommendedTime'),time=document.getElementById('drawingTime');if(q)q.textContent=String(e.quantity);if(r)r.textContent=formatWorkshopHours(e.recommended);if(time&&!time.dataset.manual)time.value=formatWorkshopHours(e.recommended);const t=document.getElementById('drawingPromptText');if(t)t.value=workshopPromptText(d);const f=document.getElementById('drawingFilename'),c=document.getElementById('drawingCriteriaCount');if(f)f.textContent=`BWKAS${d.assignmentNumber}.png`;if(c)c.textContent=String(a?.ksbs?.length||0)}
function showDrawingPromptBuilder(){document.getElementById('drawingBuilderModal')?.remove();let draft={};try{draft=JSON.parse(localStorage.getItem(DRAWING_PROMPT_DRAFT_KEY)||'{}')}catch{};app.insertAdjacentHTML('beforeend',`<div class="modal drawing-builder-modal" id="drawingBuilderModal"><div class="modal-card drawing-builder-card">${workshopSheetFormHTML(draft)}</div></div>`);const modal=document.getElementById('drawingBuilderModal'),assignment=document.getElementById('drawingAssignment');const bind=()=>document.querySelectorAll('#drawingBuilderModal input,#drawingBuilderModal textarea,#drawingBuilderModal select').forEach(el=>{if(el.dataset.bound)return;el.dataset.bound='1';const changed=()=>{if(el.id==='drawingTime')el.dataset.manual='1';updateDrawingPromptPreview()};el.addEventListener('input',changed);el.addEventListener('change',changed)});assignment.addEventListener('change',()=>{const d=collectDrawingDraft(),a=COURSES['bricklayer-st0095-v1-2']?.assignments?.find(x=>x.n===d.assignmentNumber);document.getElementById('drawingTask').value=a?.title||'';updateDrawingPromptPreview()});bind();updateDrawingPromptPreview();document.getElementById('copyDrawingPrompt').onclick=async()=>{const text=workshopPromptText();try{await navigator.clipboard.writeText(text)}catch{const ta=document.getElementById('drawingPromptText');ta.value=text;ta.select();document.execCommand('copy')}toast('Workshop-sheet prompt copied')};document.getElementById('saveDrawingDraft').onclick=()=>{localStorage.setItem(DRAWING_PROMPT_DRAFT_KEY,JSON.stringify(collectDrawingDraft()));toast('Workshop-sheet draft saved')};document.getElementById('clearDrawingForm').onclick=()=>{if(!confirm('Clear the current workshop-sheet form and saved draft?'))return;localStorage.removeItem(DRAWING_PROMPT_DRAFT_KEY);modal.remove();showDrawingPromptBuilder()};document.getElementById('closeDrawingBuilder').onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()}}


const CUSTOM_COURSES_KEY='developerCustomCourses';
let customCourseDraft=null;
function customCourseId(name){return `custom-${String(name||'course').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,42)}-${Date.now().toString(36)}`}
function parseCustomCriteria(text){
 return String(text||'').split(/\n+/).map(line=>line.trim()).filter(Boolean).map((line,index)=>{
   const match=line.match(/^([A-Za-z]+\s*\d+(?:\.\d+)*)\s*[-:–—]?\s*(.*)$/);
   return [match?match[1].replace(/\s+/g,''): `LO${index+1}`,match&&match[2]?match[2].trim():line];
 });
}
function customCourseUsage(draft){
 const use={};(draft?.criteria||[]).forEach(([code])=>use[code]=null);
 (draft?.assignments||[]).forEach(a=>(a.ksbs||[]).forEach(([code])=>use[code]=a.n));
 return use;
}
function generateRandomCustomAssignments(criteria,count){
 const safeCount=Math.max(1,Math.min(Number(count)||1,criteria.length||1));
 const packs=Array.from({length:safeCount},(_,i)=>({n:i+1,title:`Evidence Pack ${i+1}`,ksbs:[]}));
 criteria.forEach((row,i)=>packs[i%safeCount].ksbs.push([...row]));
 return packs;
}
async function saveCustomCourse(course){
 const saved=await getStore(CUSTOM_COURSES_KEY)||{};saved[course.id]=course;COURSES[course.id]=course;await putStore(CUSTOM_COURSES_KEY,saved);
}
async function deleteCustomCourse(courseId){
 const course=COURSES[courseId];
 if(!course?.custom)return false;
 const saved=await getStore(CUSTOM_COURSES_KEY)||{};
 delete saved[courseId];
 delete COURSES[courseId];
 await putStore(CUSTOM_COURSES_KEY,saved);
 if(ACTIVE_COURSE_ID===courseId){
  const fallback=Object.keys(COURSES).find(id=>!COURSES[id]?.custom)||Object.keys(COURSES)[0]||'';
  if(fallback){ACTIVE_COURSE_ID=fallback;COURSE=COURSES[fallback];await putStore('activeCourse',fallback)}
 }
 return true;
}
function customCourseCompact(course){
 return {i:course.id,n:course.name,q:Number(course.evidenceRequirement||2),v:course.nvqUnits?1:0,a:(course.assignments||[]).map(a=>[a.title,(a.ksbs||[]).map(([code,text])=>[code,text])])};
}
function bytesToBase64Url(bytes){let binary='';for(let i=0;i<bytes.length;i+=0x8000)binary+=String.fromCharCode(...bytes.subarray(i,i+0x8000));return btoa(binary).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function base64UrlToBytes(value){let s=String(value||'').replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}
async function gzipText(text){
 if(!window.CompressionStream)return new TextEncoder().encode(text);
 const stream=new Blob([text]).stream().pipeThrough(new CompressionStream('gzip'));return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function gunzipText(bytes){
 if(!window.DecompressionStream)return new TextDecoder().decode(bytes);
 const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));return await new Response(stream).text();
}
function customCourseQrKey(course){return String(course.id||'course').replace(/[^a-z0-9]/gi,'').slice(-12)||Math.random().toString(36).slice(2,10)}
async function customCourseQrPayloads(course){
 const bytes=await gzipText(JSON.stringify(customCourseCompact(course))),encoded=bytesToBase64Url(bytes),key=customCourseQrKey(course);
 // QR8bitByte has a hard physical payload limit. Keep well below the maximum
 // so every generated symbol remains readable on real phone cameras.
 const chunkSize=2200,total=Math.max(1,Math.ceil(encoded.length/chunkSize)),payloads=[];
 for(let i=0;i<total;i++)payloads.push(`APC2|${key}|${i+1}/${total}|${encoded.slice(i*chunkSize,(i+1)*chunkSize)}`);
 return payloads;
}
async function decodeCustomCourseEncoded(encoded){
 const json=await gunzipText(base64UrlToBytes(encoded)),c=JSON.parse(json);
 if(!c?.n||!Array.isArray(c.a))throw new Error('Course data is incomplete');
 return {id:c.i||customCourseId(c.n),name:c.n,standard:'Custom',version:'1.0',level:'',nvqUnits:!!c.v,evidenceRequirement:Math.max(1,Number(c.q)||2),assignments:c.a.map((row,i)=>({n:i+1,title:String(row?.[0]||`Evidence Pack ${i+1}`),ksbs:Array.isArray(row?.[1])?row[1]:[]})),custom:true};
}
async function decodeCustomCoursePayload(raw){
 let value=String(raw||'').trim(),encoded='';
 // Backward compatibility with V2.38 single-QR links.
 try{const url=new URL(value,location.href);encoded=url.hash.startsWith('#apcourse=')?url.hash.slice(10):''}catch{}
 if(!encoded&&value.startsWith('APCOURSE1:'))encoded=value.slice(10);
 if(encoded)return decodeCustomCourseEncoded(encoded);
 if(value.startsWith('APC2|'))throw new Error('This is one part of a multi-part Apprentice+ course QR. Scan it from the Apprentice+ course scanner.');
 throw new Error('This is not an Apprentice+ course QR code');
}
function drawCourseQrSheet(canvases,course){
 const cols=canvases.length===1?1:Math.min(2,canvases.length),cell=460,labelH=64,pad=28,rows=Math.ceil(canvases.length/cols),sheet=document.createElement('canvas');
 sheet.width=cols*cell+pad*2;sheet.height=rows*(cell+labelH)+pad*2;
 const x=sheet.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,sheet.width,sheet.height);x.fillStyle='#18231e';x.font='700 24px Arial';x.textAlign='center';
 canvases.forEach((canvas,i)=>{const col=i%cols,row=Math.floor(i/cols),left=pad+col*cell,top=pad+row*(cell+labelH);x.drawImage(canvas,left+(cell-canvas.width)/2,top,canvas.width,canvas.height);x.fillText(canvases.length===1?'Course QR':`Course QR ${i+1} of ${canvases.length}`,left+cell/2,top+canvas.height+38)});
 return sheet;
}
async function showCustomCourseQr(course){
 document.getElementById('customCourseQrModal')?.remove();
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="customCourseQrModal"><div class="modal-card custom-course-qr-card"><h2>${esc(course.name)}</h2><div id="customCourseQrCanvas"><div class="muted">Creating course QR…</div></div><p class="muted" id="customCourseQrHelp">Learners scan this from <strong>Course → Scan QR Code</strong>. The same QR can be used by the whole class.</p><div class="btn-row"><button class="btn" id="downloadCustomCourseQr" disabled>Save QR image</button><button class="btn secondary" id="closeCustomCourseQr">Close</button></div></div></div>`);
 document.getElementById('closeCustomCourseQr').onclick=()=>document.getElementById('customCourseQrModal')?.remove();
 const host=document.getElementById('customCourseQrCanvas'),help=document.getElementById('customCourseQrHelp');
 try{
  const payloads=await customCourseQrPayloads(course);
  if(!window.ApprenticeQR)throw new Error('QR generator unavailable');
  const canvases=payloads.map(payload=>window.ApprenticeQR.toCanvas(payload,420)),sheet=drawCourseQrSheet(canvases,course);
  host.innerHTML='';host.appendChild(sheet);
  if(payloads.length>1)help.innerHTML=`This course contains too much information for one physical QR symbol, so Apprentice+ created a <strong>${payloads.length}-part course QR</strong>. Learners scan each numbered code once; Apprentice+ combines them automatically. The same saved QR sheet can be shared with the whole class.`;
  const save=document.getElementById('downloadCustomCourseQr');save.disabled=false;save.onclick=()=>{const a=document.createElement('a');a.href=sheet.toDataURL('image/png');a.download=`${course.name.replace(/[^a-z0-9]+/gi,'-')}-Course-QR.png`;a.click()};
 }catch(error){console.error('Course QR generation failed',error);host.innerHTML=`<div class="admin-note">Unable to create the course QR. ${esc(error?.message||'')}</div>`}
}
async function importCustomCourseFromQr(raw,selectElement=null){
 const course=await decodeCustomCoursePayload(raw);await saveCustomCourse(course);
 if(selectElement){let option=[...selectElement.options].find(o=>o.value===course.id);if(!option){option=document.createElement('option');option.value=course.id;option.textContent=`${course.name} 1.0 (Custom)`;selectElement.appendChild(option)}selectElement.value=course.id}
 toast(`${course.name} installed`);
 return course;
}
let courseQrScannerStream=null,courseQrScannerTimer=null,courseQrParts={};
function closeCourseQrScanner(){clearTimeout(courseQrScannerTimer);courseQrScannerTimer=null;if(courseQrScannerStream){courseQrScannerStream.getTracks().forEach(t=>t.stop());courseQrScannerStream=null}courseQrParts={};document.getElementById('courseQrScanner')?.remove()}
async function acceptCourseQrPart(raw,selectElement,status){
 const value=String(raw||'').trim();
 if(!value.startsWith('APC2|')){const course=await importCustomCourseFromQr(value,selectElement);return {done:true,course}}
 const match=value.match(/^APC2\|([^|]+)\|(\d+)\/(\d+)\|(.+)$/);if(!match)throw new Error('This course QR part is invalid');
 const [,key,partRaw,totalRaw,chunk]=match,part=Number(partRaw),total=Number(totalRaw);if(!part||!total||part>total)throw new Error('This course QR part is invalid');
 if(!courseQrParts[key]||courseQrParts[key].total!==total)courseQrParts[key]={total,chunks:{}};
 courseQrParts[key].chunks[part]=chunk;const have=Object.keys(courseQrParts[key].chunks).length;
 if(have<total){if(status)status.textContent=`Course QR ${have} of ${total} scanned. Scan the remaining numbered code${total-have===1?'':'s'}.`;return {done:false,have,total}}
 const encoded=Array.from({length:total},(_,i)=>courseQrParts[key].chunks[i+1]||'').join('');if(!encoded)throw new Error('Course QR data is incomplete');
 const course=await decodeCustomCourseEncoded(encoded);await saveCustomCourse(course);
 if(selectElement){let option=[...selectElement.options].find(o=>o.value===course.id);if(!option){option=document.createElement('option');option.value=course.id;option.textContent=`${course.name} 1.0 (Custom)`;selectElement.appendChild(option)}selectElement.value=course.id}
 delete courseQrParts[key];toast(`${course.name} installed`);return {done:true,course};
}
async function showCourseQrScanner(selectElement){
 closeCourseQrScanner();
 const modal=document.createElement('div');modal.className='modal';modal.id='courseQrScanner';modal.innerHTML=`<div class="modal-card course-qr-scanner-card"><h2>Scan course QR code</h2><div class="course-qr-video-wrap"><video id="courseQrVideo" playsinline muted></video><div class="course-qr-frame"></div></div><p class="muted" id="courseQrStatus">Point the camera at the Apprentice+ course QR code.</p><div class="btn-row"><label class="btn secondary course-qr-image-button">Scan saved QR image<input id="courseQrImage" type="file" accept="image/*" hidden></label><button class="btn secondary" id="closeCourseQrScanner">Cancel</button></div></div>`;document.body.appendChild(modal);
 document.getElementById('closeCourseQrScanner').onclick=closeCourseQrScanner;
 const status=document.getElementById('courseQrStatus'),video=document.getElementById('courseQrVideo');
 if(!('BarcodeDetector' in window)){status.textContent='QR scanning is not supported by this browser. Use a supported Chrome/Android device or select a saved QR image.';return}
 const detector=new BarcodeDetector({formats:['qr_code']});
 const accept=async raw=>{try{const result=await acceptCourseQrPart(raw,selectElement,status);if(result?.done)closeCourseQrScanner();return result}catch(error){status.textContent=error?.message||'That QR code is not a valid Apprentice+ course.'}};
 document.getElementById('courseQrImage').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{const image=await createImageBitmap(file),codes=await detector.detect(image);if(!codes.length){status.textContent='No QR code was found in that image.';return}for(const code of codes){const result=await accept(code.rawValue);if(result?.done)return}if(codes.length>1&&!document.getElementById('courseQrScanner'))return}catch(error){status.textContent='Unable to read that QR image.'}};
 try{
  courseQrScannerStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}}});video.srcObject=courseQrScannerStream;await video.play();
  let lastRaw='',lastAt=0;
  const scan=async()=>{if(!document.getElementById('courseQrScanner'))return;try{const codes=await detector.detect(video),raw=codes[0]?.rawValue||'';if(raw&&(raw!==lastRaw||Date.now()-lastAt>1800)){lastRaw=raw;lastAt=Date.now();const result=await accept(raw);if(result?.done)return}}catch{}courseQrScannerTimer=setTimeout(scan,220)};scan();
 }catch(error){status.textContent='Camera access was not available. You can scan a saved QR image instead.'}
}
async function importCourseFromLocationHash(){
 if(!location.hash.startsWith('#apcourse='))return false;
 try{const course=await importCustomCourseFromQr(location.href);history.replaceState(null,'',location.pathname+location.search);return course}catch(error){console.warn('Course QR import failed',error);return false}
}
function showCustomCourseBuilder(step='setup'){
 document.getElementById('customCourseBuilder')?.remove();
 const modal=document.createElement('div');modal.className='modal admin-modal';modal.id='customCourseBuilder';
 if(step==='setup'){
  modal.innerHTML=`<div class="modal-card admin-modal-card custom-course-builder"><div class="admin-modal-head"><div><span class="admin-kicker">Developer Mode</span><h2>Create course</h2></div><button class="admin-close" id="closeCustomBuilder">×</button></div><div class="custom-course-form">
   <div class="field"><label>Full course name</label><input class="input" id="customCourseName" placeholder="e.g. Level 2 Bricklaying"></div>
   <div class="field"><label>KSBs / Learning Outcomes</label><textarea class="input" id="customCriteria" rows="10" placeholder="K1 - Description&#10;S1 - Description&#10;B1 - Description"></textarea><small>Enter one criterion per line.</small></div>
   <div class="field"><label>How many times must each KSB / LO be met?</label><input class="input" id="customRequired" type="number" min="1" max="10" value="2"></div>
   <div class="field"><label>Course type</label><select class="input" id="customCriterionType"><option value="ksb">KSB apprenticeship course</option><option value="lo">NVQ / Learning Outcomes</option></select></div>
   <div class="field"><label>Build Evidence Packs</label><div class="segmented"><button type="button" class="active" data-custom-mode="random">Generate automatically</button><button type="button" data-custom-mode="manual">Create my own</button></div></div>
   <div class="field" id="customPackCountField"><label>Number of Evidence Packs</label><input class="input" id="customPackCount" type="number" min="1" max="50" value="10"></div>
   <button class="btn admin-primary" id="startCustomCourse">Continue</button></div></div>`;
 }else{
  const d=customCourseDraft,usage=customCourseUsage(d),n=d.assignments.length+1;
  modal.innerHTML=`<div class="modal-card admin-modal-card custom-course-builder"><div class="admin-modal-head"><div><span class="admin-kicker">${esc(d.name)}</span><h2>EP${n}</h2></div><button class="admin-close" id="closeCustomBuilder">×</button></div>
   <div class="field"><label>EP${n} title</label><input class="input" id="customEpTitle" placeholder="Evidence Pack title"></div>
   <div class="field"><label>${d.nvqUnits?'Learning Outcomes':'KSBs'}</label><div class="custom-criteria-list">${d.criteria.map(([code,text])=>{const used=usage[code];return `<label class="custom-criterion-choice ${used?'used':''}"><input type="checkbox" value="${esc(code)}" ${used?'disabled':''}><span><strong>${esc(code)}</strong><small>${esc(text)}</small></span><b>${used?`EP${used}`:'Available'}</b></label>`}).join('')}</div></div>
   ${d.assignments.length?`<div class="custom-built-packs">${d.assignments.map(a=>`<div><strong>EP${a.n} · ${esc(a.title)}</strong><span>${a.ksbs.map(x=>x[0]).join(', ')}</span></div>`).join('')}</div>`:''}
   <div class="custom-course-progress">${Object.values(usage).filter(Boolean).length} / ${d.criteria.length} ${d.nvqUnits?'LOs':'KSBs'} assigned · each must be evidenced ${d.evidenceRequirement} time${d.evidenceRequirement===1?'':'s'}</div><div class="btn-row"><button class="btn" id="saveCustomEp">Save EP${n}</button><button class="btn secondary" id="completeCustomCourse" ${d.assignments.length&&Object.values(usage).every(Boolean)?'':'disabled'}>Complete course</button></div></div>`;
 }
 document.body.appendChild(modal);document.getElementById('closeCustomBuilder').onclick=()=>modal.remove();
 if(step==='setup'){
  let mode='random';document.querySelectorAll('[data-custom-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.customMode;document.querySelectorAll('[data-custom-mode]').forEach(x=>x.classList.toggle('active',x===b));document.getElementById('customPackCountField').hidden=mode!=='random'});
  document.getElementById('startCustomCourse').onclick=async()=>{
   const name=document.getElementById('customCourseName').value.trim(),criteria=parseCustomCriteria(document.getElementById('customCriteria').value),required=Math.max(1,Number(document.getElementById('customRequired').value)||2),nvq=document.getElementById('customCriterionType').value==='lo';
   if(!name||!criteria.length)return toast('Add the course name and KSBs / Learning Outcomes');
   customCourseDraft={id:customCourseId(name),name,standard:'Custom',version:'1.0',level:'',nvqUnits:nvq,evidenceRequirement:required,criteria,assignments:[],custom:true};
   if(mode==='random'){
    const count=Math.max(1,Number(document.getElementById('customPackCount').value)||1);customCourseDraft.assignments=generateRandomCustomAssignments(criteria,count);
    await finishCustomCourse();
   }else showCustomCourseBuilder('manual');
  };
 }else{
  document.getElementById('saveCustomEp').onclick=()=>{const title=document.getElementById('customEpTitle').value.trim(),usage=customCourseUsage(customCourseDraft),codes=[...document.querySelectorAll('.custom-criteria-list input:checked')].map(x=>x.value).filter(code=>!usage[code]);if(!title||!codes.length)return toast('Add an EP title and select at least one unused criterion');customCourseDraft.assignments.push({n:customCourseDraft.assignments.length+1,title,ksbs:codes.map(code=>customCourseDraft.criteria.find(x=>x[0]===code))});showCustomCourseBuilder('manual')};
  document.getElementById('completeCustomCourse').onclick=finishCustomCourse;
 }
}
const COURSE_FILE_VERSION=1;
function portableCourseDefinition(course){
 return {format:'ApprenticePlusCourse',fileVersion:COURSE_FILE_VERSION,course:{id:course.id,name:course.name,standard:course.standard||'Custom',version:course.version||'1.0',level:course.level||'',nvqUnits:!!course.nvqUnits,evidenceRequirement:Math.max(1,Number(course.evidenceRequirement)||2),assignments:(course.assignments||[]).map(a=>({n:Number(a.n)||1,title:String(a.title||''),ksbs:(a.ksbs||[]).map(([code,text])=>[String(code||''),String(text||'')])})),custom:true}};
}
function courseFileName(course){return `${String(course.name||'ApprenticePlus-Course').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'')||'ApprenticePlus-Course'}.apcourse`}
function downloadCourseFile(course){
 const payload=JSON.stringify(portableCourseDefinition(course),null,2),blob=new Blob([payload],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=courseFileName(course);document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
}
function validatePortableCourseFile(parsed){
 if(!parsed||parsed.format!=='ApprenticePlusCourse'||Number(parsed.fileVersion)!==COURSE_FILE_VERSION||!parsed.course)throw new Error('This is not a valid Apprentice+ course file');
 const c=parsed.course;
 if(!c.name||!Array.isArray(c.assignments)||!c.assignments.length)throw new Error('The course file is incomplete');
 const assignments=c.assignments.map((a,i)=>({n:i+1,title:String(a?.title||`Evidence Pack ${i+1}`),ksbs:Array.isArray(a?.ksbs)?a.ksbs.filter(row=>Array.isArray(row)&&row[0]).map(row=>[String(row[0]),String(row[1]||'')]):[]}));
 if(assignments.some(a=>!a.ksbs.length))throw new Error('One or more Evidence Packs have no KSBs/LOs');
 return {id:String(c.id||customCourseId(c.name)),name:String(c.name),standard:String(c.standard||'Custom'),version:String(c.version||'1.0'),level:String(c.level||''),nvqUnits:!!c.nvqUnits,evidenceRequirement:Math.max(1,Number(c.evidenceRequirement)||2),assignments,custom:true};
}
async function importCourseFile(file,selectElement=null){
 if(!file)return null;
 if(!/\.apcourse$/i.test(file.name||''))throw new Error('Choose an Apprentice+ .apcourse file');
 if(file.size>5*1024*1024)throw new Error('That course file is too large');
 let parsed;try{parsed=JSON.parse(await file.text())}catch{throw new Error('The course file could not be read')}
 const course=validatePortableCourseFile(parsed);await saveCustomCourse(course);
 if(selectElement){let option=[...selectElement.options].find(o=>o.value===course.id);if(!option){option=document.createElement('option');option.value=course.id;selectElement.appendChild(option)}option.textContent=`${course.name} ${course.version||'1.0'} (Imported)`;selectElement.value=course.id}
 toast(`${course.name} installed`);
 return course;
}
function showCustomCourseShare(course){
 document.getElementById('customCourseShareModal')?.remove();
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="customCourseShareModal"><div class="modal-card custom-course-share-card"><div class="course-share-icon">${appIcon('course')}</div><h2>Share course</h2><p class="course-share-name">${esc(course.name)}</p><p class="muted">Download one Apprentice+ course file and send the same file to every learner. It contains the course structure only — no learner evidence or personal details.</p><button class="btn course-file-download" id="downloadCourseFile">${appIcon('download','button-icon')} Download Course File</button><p class="course-file-hint">Learners import the <strong>.apcourse</strong> file from their Course selector.</p><button class="btn secondary" id="closeCustomCourseShare">Close</button></div></div>`);
 document.getElementById('closeCustomCourseShare').onclick=()=>document.getElementById('customCourseShareModal')?.remove();
 document.getElementById('downloadCourseFile').onclick=()=>downloadCourseFile(course);
}
async function finishCustomCourse(){
 const d=customCourseDraft;if(!d||!d.assignments.length)return toast('Add at least one Evidence Pack');
 const usage=customCourseUsage(d),unassigned=d.criteria.filter(([code])=>!usage[code]);
 if(unassigned.length)return toast(`Assign every ${d.nvqUnits?'Learning Outcome':'KSB'} to one Evidence Pack before completing the course`);
 const course={id:d.id,name:d.name,standard:d.standard,version:d.version,level:d.level,nvqUnits:d.nvqUnits,evidenceRequirement:d.evidenceRequirement,assignments:d.assignments,custom:true};
 await saveCustomCourse(course);customCourseDraft=null;document.getElementById('customCourseBuilder')?.remove();toast(`${course.name} saved permanently in Developer Mode`);showCustomCourseShare(course);
}
function customCourseDeveloperList(){
 const rows=Object.values(COURSES).filter(c=>c.custom);return rows.length?`<div class="custom-course-library">${rows.map(c=>`<div class="custom-course-row"><span><strong>${esc(c.name)}</strong><small>${c.assignments.length} Evidence Packs</small></span><div class="custom-course-actions"><button class="btn admin-soft" data-custom-course-file="${esc(c.id)}">Share course</button><button class="btn danger custom-course-delete" data-custom-course-delete="${esc(c.id)}">Delete</button></div></div>`).join('')}</div>`:'<p class="muted">No developer-created courses yet.</p>';
}
function hiddenDeveloperPanel(){
 return `<div class="admin-dashboard developer-tools-dashboard"><div class="admin-course-summary developer-summary"><div><span>Secret developer area</span><strong>Apprentice+ Developer Mode</strong><small>Build technical-drawing prompts for college workshop task sheets.</small></div><span class="admin-status">${APP_VERSION}</span></div><section class="admin-section custom-course-launch"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('course')}</div><div><h3>Create Apprentice+ course</h3><p>Build a reusable course, Evidence Packs and KSB/LO mapping, then download one course file to share with learners.</p></div></div><div class="admin-section-body"><button class="btn admin-primary" id="openCustomCourseBuilder">Create course</button>${customCourseDeveloperList()}</div></section><section class="admin-section cadmate-developer-launch"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('drawing')}</div><div><h3>CADMate <span class="status-pill">Beta</span></h3><p>Trade drawing and design workspace. Retained in Developer Mode while it is rebuilt for wider trade use.</p></div></div><div class="admin-section-body"><button class="btn admin-primary" id="openDeveloperCADMate">Open CADMate Beta</button></div></section><section class="admin-section studymate-builder-launch"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('revision')}</div><div><h3>Homework Builder</h3><p>Create tutor-set homework using written/media tasks, existing MCQs and EPA mocks.</p></div></div><div class="admin-section-body"><button class="btn admin-primary" id="openHomeworkBuilder">Create homework</button></div></section><section class="admin-section drawing-builder-launch"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('course')}</div><div><h3>Create college task sheet</h3><p>Build one clear Bricklaying workshop-sheet prompt using the simple college layout.</p></div></div><div class="admin-section-body"><button class="btn admin-primary" id="openDrawingBuilder">Create college task sheet</button></div></section><section class="admin-section"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('settings')}</div><div><h3>Developer access</h3><p>This hidden screen closes when you leave it and remains separate from Admin Mode.</p></div></div><div class="admin-section-body"><button class="btn admin-primary" id="closeDeveloperToolsBottom">Close Developer Mode</button></div></section></div>`;
}
function showHiddenDeveloperTools(){
 document.getElementById('developerToolsModal')?.remove();
 app.insertAdjacentHTML('beforeend',`<div class="modal admin-modal developer-tools-modal" id="developerToolsModal"><div class="modal-card admin-modal-card"><div class="admin-modal-head"><div><span class="admin-kicker">Hidden diagnostics</span><h2>Developer Mode</h2></div><button class="admin-close" id="closeDeveloperTools" aria-label="Close Developer Mode">×</button></div>${hiddenDeveloperPanel()}</div></div>`);
 const modal=document.getElementById('developerToolsModal');
 const close=()=>modal?.remove();
 document.getElementById('closeDeveloperTools').onclick=close;
 document.getElementById('closeDeveloperToolsBottom').onclick=close;
 modal.onclick=e=>{if(e.target===modal)close()};
 document.addEventListener('keydown',function developerEscape(e){if(e.key!=='Escape'||!document.getElementById('developerToolsModal'))return;document.removeEventListener('keydown',developerEscape);close()});
 bindHiddenDeveloperTools();
}
function bindHiddenDeveloperTools(){ const cadBetaButton=document.getElementById('openDeveloperCADMate');if(cadBetaButton)cadBetaButton.onclick=()=>{document.getElementById('developerToolsModal')?.remove();state.view='cadmate';render();window.scrollTo(0,0)}; const studyBuilderButton=document.getElementById('openHomeworkBuilder');if(studyBuilderButton)studyBuilderButton.onclick=()=>{document.getElementById('developerToolsModal')?.remove();studyMateDraft=null;showHomeworkBuilder()}; const customBuilderButton=document.getElementById('openCustomCourseBuilder');if(customBuilderButton)customBuilderButton.onclick=()=>{document.getElementById('developerToolsModal')?.remove();showCustomCourseBuilder('setup')};document.querySelectorAll('[data-custom-course-file]').forEach(btn=>btn.onclick=()=>showCustomCourseShare(COURSES[btn.dataset.customCourseFile]));document.querySelectorAll('[data-custom-course-delete]').forEach(btn=>btn.onclick=async()=>{const id=btn.dataset.customCourseDelete,course=COURSES[id];if(!course)return;if(!confirm(`Delete "${course.name}" from Developer Mode?\n\nThis removes the saved course definition from this device. It does not affect course files already shared with learners.`))return;await deleteCustomCourse(id);toast(`${course.name} deleted`);const modal=document.getElementById('developerToolsModal');if(modal){modal.querySelector('.admin-modal-card').innerHTML=`<div class="admin-modal-head"><div><span class="admin-kicker">Hidden diagnostics</span><h2>Developer Mode</h2></div><button class="admin-close" id="closeDeveloperTools" aria-label="Close Developer Mode">×</button></div>${hiddenDeveloperPanel()}`;document.getElementById('closeDeveloperTools').onclick=()=>modal.remove();document.getElementById('closeDeveloperToolsBottom').onclick=()=>modal.remove();bindHiddenDeveloperTools()}});
 const drawingButton=document.getElementById('openDrawingBuilder');
 if(drawingButton){
  drawingButton.onclick=event=>{
   event.preventDefault();
   event.stopPropagation();
   const developerModal=document.getElementById('developerToolsModal');
   try{
    showDrawingPromptBuilder();
    developerModal?.remove();
   }catch(error){
    console.error('Unable to open workshop sheet builder',error);
    toast('Unable to open the drawing builder');
   }
  };
 }
 const refresh=()=>{const modal=document.getElementById('developerToolsModal');if(!modal)return;modal.querySelector('.admin-modal-card').innerHTML=`<div class="admin-modal-head"><div><span class="admin-kicker">Hidden diagnostics</span><h2>Developer Mode</h2></div><button class="admin-close" id="closeDeveloperTools" aria-label="Close Developer Mode">×</button></div>${hiddenDeveloperPanel()}`;document.getElementById('closeDeveloperTools').onclick=()=>modal.remove();document.getElementById('closeDeveloperToolsBottom').onclick=()=>modal.remove();bindHiddenDeveloperTools()};
}
function individualRplAdminChoices(){const seen=new Set(),rows=[];courseAssignments().filter(a=>!a.selectOptional).forEach(a=>(a.ksbs||[]).forEach(([code,summary])=>{const criterionKey=individualRplCriterionKey(a.n,code);if(seen.has(criterionKey))return;seen.add(criterionKey);rows.push({criterionKey,n:a.n,unit:a.unit||'',code,summary})}));return rows.sort(compareIndividualRplItems)}
function individualRplChoiceGroups(items){
 const groups=new Map();
 items.forEach(item=>{const prefix=String(item.code||'').trim().charAt(0).toUpperCase(),label=COURSE.nvqUnits?`Unit ${item.unit||item.n}`:prefix==='K'?'Knowledge':prefix==='S'?'Skills':prefix==='B'?'Behaviours':'Other criteria';if(!groups.has(label))groups.set(label,[]);groups.get(label).push(item)});
 return [...groups.entries()];
}
function individualRplAdminSection(){
 const saved=individualRplMap(),choices=individualRplAdminChoices(),available=choices.filter(item=>!saved[item.criterionKey]),records=individualRplRecords(),criterionLabel=COURSE.nvqUnits?'Learning Outcome':'KSB';
 const choicesMarkup=individualRplChoiceGroups(available).map(([label,items])=>`<section class="rpl-criterion-group"><h4>${esc(label)}</h4><div class="rpl-criterion-options">${items.map(item=>`<label class="rpl-criterion-choice"><input type="checkbox" data-rpl-criterion value="${esc(item.criterionKey)}"><span><strong>${esc(item.code)}</strong><small>${esc(item.summary)}</small></span></label>`).join('')}</div></section>`).join('');
 return `<section class="admin-section individual-rpl-admin"><div class="admin-section-head"><div class="admin-section-icon individual-rpl-icon">${appIcon('award')}</div><div><h3>Individual ${criterionLabel} RPL</h3><p>Select one or more criteria and mark them together without completing the whole assignment through RPL.</p></div></div><div class="admin-section-body"><div class="admin-note individual-rpl-note">Individually recognised criteria appear purple in Assignments and count as fully completed. KSBs are ordered Knowledge, Skills, then Behaviours.</div><div class="field"><label>${criterionLabel}s available for RPL</label>${available.length?`<div class="rpl-criterion-groups" id="rplCriterionList">${choicesMarkup}</div><p class="rpl-selection-summary" id="rplSelectionSummary" aria-live="polite">Select one or more ${criterionLabel}s.</p>`:`<div class="rpl-empty-selection">All ${criterionLabel}s are already recorded as RPL.</div>`}</div><button class="btn individual-rpl-button" id="markCriterionRpl" disabled>Mark selected ${criterionLabel}s as RPL</button>${records.length?`<div class="rpl-list individual-rpl-list"><h4>Recorded individual RPL</h4>${records.map(item=>`<div class="rpl-item individual-rpl-item"><span><strong>${COURSE.nvqUnits?`Unit ${esc(item.unit)} · `:''}${esc(item.code)}</strong><br>${esc(item.summary)}</span><button class="btn admin-soft" data-criterion-rpl-remove="${esc(item.criterionKey)}">Remove RPL</button></div>`).join('')}</div>`:''}</div></section>`;
}
function developerPanel(){const rplItems=courseAssignments().filter(a=>assignmentRPL(a.n));return `<div class="admin-dashboard"><div class="admin-course-summary"><div><span>Active course</span><strong>${COURSE.name}</strong><small>${COURSE.standard} · Version ${COURSE.version} · Level ${COURSE.level}</small></div><span class="admin-status">Active</span></div><section class="admin-section"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('course')}</div><div><h3>Course management</h3><p>Switch courses or update the learner profile.</p></div></div><div class="admin-section-body"><div class="field"><label>Selected course</label><select class="input" id="courseSelect">${Object.values(COURSES).map(c=>`<option value="${c.id}" ${c.id===COURSE.id?'selected':''}>${c.name} ${c.version} (${c.standard})</option>`).join('')}</select></div><div class="admin-action-grid two"><button class="btn admin-primary" id="applyCourse">Open selected course</button><button class="btn admin-soft" id="editProfile">Edit learner details</button></div></div></section>${brandingAdminPanel()}<section class="admin-section"><div class="admin-section-head"><div class="admin-section-icon warning">${appIcon('award')}</div><div><h3>Recognition of Prior Learning</h3><p>Mark an assignment as completed through verified prior learning.</p></div></div><div class="admin-section-body"><div class="admin-note">RPL assignments receive a red ribbon and count as a full completion in both progress rings.</div><div class="field"><label>Assignment</label><select class="input" id="rplAssignment">${courseAssignments().map(a=>`<option value="${a.n}" ${assignmentRPL(a.n)?'disabled':''}>Assignment ${a.n} — ${esc(a.title)}${assignmentRPL(a.n)?' (RPL)':''}</option>`).join('')}</select></div><button class="btn admin-danger" id="markRpl">Mark assignment as RPL</button>${rplItems.length?`<div class="rpl-list admin-rpl-list">${rplItems.map(a=>`<div class="rpl-item"><span><strong>Assignment ${a.n}</strong><br>${esc(a.title)}</span><button class="btn admin-soft remove-rpl" data-rpl-remove="${a.n}">Remove RPL</button></div>`).join('')}</div>`:''}</div></section>${individualRplAdminSection()}${selectedOptionalUnit()?`<section class="admin-section"><div class="admin-section-head"><div class="admin-section-icon">${appIcon('settings')}</div><div><h3>Optional unit</h3><p>Evidence Pack 9 is Unit ${esc(selectedOptionalUnit().unit)} — ${esc(selectedOptionalUnit().title)}.</p></div></div><div class="admin-section-body"><button class="btn admin-soft" id="resetOptionalUnit">Reset optional unit selection</button></div></section>`:''}<section class="admin-section admin-danger-zone"><div class="admin-section-head"><div class="admin-section-icon danger">${appIcon('warning')}</div><div><h3>Data and security</h3><p>Lock Admin Mode or reset the current course evidence.</p></div></div><div class="admin-section-body"><div class="admin-action-grid two"><button class="btn admin-soft" id="lockDev">Lock Admin Mode</button><button class="btn admin-danger" id="resetEvidence">Reset course evidence</button></div></div></section></div>`}

function bindDeveloper(){
const logoInput=document.getElementById('brandLogoInput');if(logoInput)logoInput.onchange=async()=>{const f=logoInput.files?.[0];if(!f)return;try{const logo=await prepareBrandLogo(f);state.branding={...(state.branding||{}),logo};await putStore(BRANDING_KEY,state.branding);document.getElementById('devModal').remove();showDeveloper();toast('College logo added')}catch(e){console.error(e);toast('Unable to prepare that logo')}};const saveBrand=document.getElementById('saveBranding');if(saveBrand)saveBrand.onclick=async()=>{const b=currentBrandingFromForm();if(!b.name||!b.logo)return toast('Add the college name and logo');state.branding=b;await putStore(BRANDING_KEY,b);render();document.getElementById('devModal')?.remove();showDeveloper();toast('College branding saved')};document.getElementById('generateBrandQR')?.addEventListener('click',()=>showBrandQR(false));document.getElementById('downloadBrandSheet')?.addEventListener('click',()=>showBrandQR(true));document.getElementById('removeBranding')?.addEventListener('click',async()=>{if(!confirm('Remove the college branding from this device?'))return;state.branding=null;await putStore(BRANDING_KEY,null);document.getElementById('devModal').remove();render();toast('College branding removed')});

 document.getElementById('markRpl').onclick=async()=>{const n=Number(document.getElementById('rplAssignment').value);const a=assignment(n);if(!a)return;if(!confirm(`Mark EP${n} — ${a.title} as completed through RPL?`))return;state.data[packStatusKey(n)]={...(state.data[packStatusKey(n)]||{}),rpl:true,rplAt:new Date().toISOString(),uploaded:false,downloaded:false};await saveData();document.getElementById('devModal').remove();render();toast(`EP${n} completed through RPL`)};
 document.querySelectorAll('[data-rpl-remove]').forEach(btn=>btn.onclick=async()=>{const n=Number(btn.dataset.rplRemove),a=assignment(n);if(!confirm(`Remove RPL completion from EP${n} — ${a?.title||''}?`))return;const status={...(state.data[packStatusKey(n)]||{})};delete status.rpl;delete status.rplAt;state.data[packStatusKey(n)]=status;await saveData();document.getElementById('devModal').remove();render();toast(`RPL removed from EP${n}`)});
 const markCriterionRpl=document.getElementById('markCriterionRpl'),criterionRplInputs=[...document.querySelectorAll('[data-rpl-criterion]')],rplSelectionSummary=document.getElementById('rplSelectionSummary'),criterionLabel=COURSE.nvqUnits?'LO':'KSB';
 const updateCriterionRplSelection=()=>{if(!markCriterionRpl)return;const count=criterionRplInputs.filter(input=>input.checked).length;markCriterionRpl.disabled=!count;markCriterionRpl.textContent=count?`Mark ${count} selected ${criterionLabel}${count===1?'':'s'} as RPL`:`Mark selected ${criterionLabel}s as RPL`;if(rplSelectionSummary)rplSelectionSummary.textContent=count?`${count} ${criterionLabel}${count===1?'':'s'} selected.`:`Select one or more ${criterionLabel}s.`};
 criterionRplInputs.forEach(input=>input.addEventListener('change',updateCriterionRplSelection));updateCriterionRplSelection();
 if(markCriterionRpl)markCriterionRpl.onclick=async()=>{const selectedKeys=criterionRplInputs.filter(input=>input.checked).map(input=>input.value),choiceMap=new Map(individualRplAdminChoices().map(item=>[item.criterionKey,item])),items=selectedKeys.map(key=>choiceMap.get(key)).filter(Boolean);if(!items.length)return;const selectedNames=items.map(item=>COURSE.nvqUnits?`Unit ${item.unit} · ${item.code}`:item.code).join(', ');if(!confirm(`Mark ${items.length} selected ${criterionLabel}${items.length===1?'':'s'} as completed through RPL?\n\n${selectedNames}`))return;const map=individualRplMap(),changedAt=new Date().toISOString(),affectedAssignments=new Set();items.forEach(item=>{map[item.criterionKey]={code:item.code,summary:item.summary,unit:item.unit||null,assignment:item.n,rplAt:changedAt};courseAssignments().filter(a=>!a.selectOptional&&(COURSE.nvqUnits?individualRplCriterionKey(a.n,item.code)===item.criterionKey:(a.ksbs||[]).some(([code])=>code===item.code))).forEach(a=>affectedAssignments.add(a.n))});state.data[INDIVIDUAL_RPL_KEY()]=map;affectedAssignments.forEach(n=>{const status=state.data[packStatusKey(n)]||{};state.data[packStatusKey(n)]={...status,downloaded:false,uploaded:false,changedAt}});await saveData();document.getElementById('devModal').remove();render();toast(`${items.length} ${criterionLabel}${items.length===1?'':'s'} completed through RPL`)};
 document.querySelectorAll('[data-criterion-rpl-remove]').forEach(btn=>btn.onclick=async()=>{const criterionKey=btn.dataset.criterionRplRemove,map=individualRplMap(),item=map[criterionKey];if(!item||!confirm(`Remove individual RPL from ${item.code} — ${item.summary}?`))return;delete map[criterionKey];state.data[INDIVIDUAL_RPL_KEY()]=map;courseAssignments().filter(a=>!a.selectOptional&&(COURSE.nvqUnits?individualRplCriterionKey(a.n,item.code)===criterionKey:(a.ksbs||[]).some(([code])=>code===item.code))).forEach(a=>{const status=state.data[packStatusKey(a.n)]||{};state.data[packStatusKey(a.n)]={...status,downloaded:false,uploaded:false,changedAt:new Date().toISOString()}});await saveData();document.getElementById('devModal').remove();render();toast(`Individual RPL removed from ${item.code}`)});
 const resetOptional=document.getElementById('resetOptionalUnit');if(resetOptional)resetOptional.onclick=async()=>{const hasEvidence=evidenceSections().some(section=>sectionHasEvidence(9,section));if(hasEvidence)return toast('Remove Evidence Pack 9 evidence before changing the optional unit');if(!window.confirm('Reset the optional unit selection?'))return;delete state.data[optionalSelectionKey()];await saveData();document.getElementById('devModal').remove();state.view='home';render();toast('Optional unit selection reset')};
 document.getElementById('applyCourse').onclick=async()=>{const id=document.getElementById('courseSelect').value;if(!COURSES[id])return;ACTIVE_COURSE_ID=id;COURSE=COURSES[id];state.assignment=null;state.section=null;state.view='home';await putStore('activeCourse',id);document.getElementById('devModal').remove();render();toast(`${COURSE.name} opened`)};
 document.getElementById('editProfile').onclick=()=>{document.getElementById('devModal').remove();showOnboarding(true)};
 document.getElementById('resetEvidence').onclick=async()=>{if(!confirm(`Delete locally saved evidence for ${COURSE.name} only? Other courses will be preserved. This cannot be undone.`))return;const prefix=`${COURSE.id}:`;Object.keys(state.data).filter(k=>k.startsWith(prefix)).forEach(k=>delete state.data[k]);await saveData();document.getElementById('devModal').remove();render();toast(`${COURSE.name} evidence reset`)};
 document.getElementById('lockDev').onclick=async()=>{state.dev=false;adminModalOpen=false;await putStore('dev',false);document.getElementById('devModal')?.remove();toast('Admin Mode locked')}
}
function downloadJSON(obj,name){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}));a.download=name;a.click();URL.revokeObjectURL(a.href)}

async function collectWalkthroughEvidence(n,a){
 const items=[];for(const submission of walkthroughAllSubmissions(n)){try{const stored=await getStore(submission.blobKey),blob=storedWalkthroughBlob(stored,submission);if(!blob)continue;const data=await blobToDataUrl(blob),thumbnail=await createVideoThumbnail(data),codes=submission.confirmedCodes||[];items.push({code:codes.join(', '),codes,summary:codes.map(code=>{const row=walkthroughKnowledge(a).find(([c])=>c===code);return row?`${code} · ${row[1]}`:code}).join(' | '),name:submission.name||`assignment-${n}-video.webm`,type:submission.type||blob.type||'video/webm',size:submission.size||blob.size,duration:submission.duration||'',optimised:!!submission.optimised,date:submission.date||'',data,thumbnail})}catch(error){console.warn('Unable to add walkthrough video to evidence package',error)}}return items;
}
const MONTHLY_PORTFOLIO_KEY=()=>`${COURSE.id}:monthlyPortfolioUpload`;
const PORTFOLIO_SECTIONS=['photos','statement','discussion','professionalDiscussion','witness','supporting'];
function monthlyPortfolioState(){return state.data[MONTHLY_PORTFOLIO_KEY()]||{}}
function monthlyAcademyRecordKey(type,subject,result,index){const identity=result?.id||result?.date||result?.completedAt||result?.assessor?.submittedAt||result?.finishedAt||`legacy-${index}`;return [type,subject,identity,result?.score??result?.coverage??result?.assessor?.percentage??'',result?.total??''].join('|')}
function monthlyAcademySnapshot(){
 const tests=[];
 const add=(type,subject,title,rows,scoreOf)=>{(Array.isArray(rows)?rows:[]).forEach((result,index)=>{const score=scoreOf(result),key=monthlyAcademyRecordKey(type,subject,result,index);tests.push({key,type,subject,title,date:result?.date||result?.completedAt||result?.assessor?.submittedAt||result?.finishedAt||'',score:score.score,grade:score.grade||result?.grade||'',detail:score.detail||''})})};
 academyKnowledgeSubjects('trade').forEach(subject=>{const cfg=tradeCourseConfig(subject);add('Trade Course',subject,cfg.title,tradeCourseHistory(subject),r=>({score:`${Number(r.score)||0}/${Number(r.total)||15} (${Number(r.percentage)||0}%)`,grade:r.grade}))});
 academyKnowledgeSubjects('functional').forEach(subject=>{const cfg=functionalSkillsConfig(subject);add('Functional Skills',subject,cfg.title,functionalSkillsHistory(subject),r=>({score:`${Number(r.score)||0}/${Number(r.total)||15} (${Number(r.percentage)||0}%)`,grade:r.grade}))});
 courseAssignments().filter(a=>!a.selectOptional).forEach(a=>add('EP Knowledge',String(a.n),`EP${a.n}: ${a.title}`,knowledgeAttempts(a.n),r=>({score:`${Number(r.score)||0}/${Number(r.total)||0} (${Number(r.percentage)||0}%)`,grade:r.grade})));
 add('EPA Knowledge','epa-knowledge','EPA Knowledge Practice',state.data[epaResultKey()]||[],r=>({score:`${Number(r.score)||0}%`,grade:r.grade,detail:`${Number(r.correct)||0}/${Number(r.total)||0} correct`}));
 add('Professional Discussion','epa-discussion','EPA Professional Discussion',state.data[epaDiscussionResultKey()]||[],r=>({score:`${Number(r.coverage)||0}%`,grade:Number(r.coverage)>=70?'Pass':'Needs More Practice',detail:`${Number(r.met)||0}/${Number(r.totalPrompts)||0} prompts met`}));
 add('EPA Practical','epa-practical','EPA Practical',epaPracticalHistory(),r=>({score:r.assessor?`${Number(r.assessor.percentage)||0}%`:'Unmarked',grade:r.assessor?.grade||'Unmarked',detail:r.task?.title||r.title||''}));
 const slides=[];const progress=academyKnowledgeProgress();for(const [progressId,saved] of Object.entries(progress)){if(!saved?.complete)continue;const [section,subject]=progressId.split(':');const cfg=academyKnowledgeSubjectConfig(section,subject);slides.push({key:progressId,title:`${cfg.title} Knowledge`,section:section==='functional'?'Functional Skills':'Trade Knowledge',completedAt:saved.updatedAt||''})}
 return {tests,slides};
}
function currentMetKsbCodes(){
 const met=[];
 courseAssignments().filter(a=>!a.selectOptional).forEach(a=>(a.ksbs||[]).forEach(([code,summary])=>{
  const key=COURSE.nvqUnits?`${a.unit||a.n}:${code}`:code,required=COURSE.nvqUnits?3:2;
  if((assignmentRPL(a.n)||criterionRPL(a.n,code)||evidenceCoverageCount(a.n,code)>=required)&&!met.some(x=>x.key===key))met.push({key,code,summary,assignment:a.n,title:a.title,rpl:assignmentRPL(a.n)||criterionRPL(a.n,code)});
 }));
 return met;
}
function portfolioEvidenceSnapshot(){
 const assignments={};
 courseAssignments().filter(a=>!a.selectOptional).forEach(a=>{
  const sections={};PORTFOLIO_SECTIONS.forEach(section=>sections[section]=sectionData(a.n,section).versions.length);
  sections.walkthrough=walkthroughAllSubmissions(a.n).length;
  assignments[a.n]={title:a.title,sections};
 });
 const stats=completedKsbStats();
 const rplUnits=courseAssignments().filter(a=>!a.selectOptional&&assignmentRPL(a.n)).map(a=>({assignment:a.n,unit:a.unit||null,title:a.title,rplAt:state.data[packStatusKey(a.n)]?.rplAt||null}));
 return {capturedAt:new Date().toISOString(),assignments,metKsbs:currentMetKsbCodes(),rplUnits,rplCriteria:individualRplRecords(),otjEntries:allOtjEntries().map(e=>({id:e.id,date:e.date,hours:Number(e.hours||0),updated:e.updated||e.created||'',portfolioBuilding:!!e.portfolioBuilding})),academy:monthlyAcademySnapshot(),progress:stats.percentage,completedKsbs:stats.completed,totalKsbs:stats.total};
}
function portfolioDelta(){
 const status=monthlyPortfolioState(),before=status.snapshot||{assignments:{},metKsbs:[],rplUnits:[],rplCriteria:[],otjEntries:[],academy:{tests:[],slides:[]},progress:0,completedKsbs:0};
 const current=portfolioEvidenceSnapshot(),oldMet=new Set((before.metKsbs||[]).map(x=>x.key)),newKsbs=current.metKsbs.filter(x=>!oldMet.has(x.key)),oldRpl=new Set((before.rplUnits||[]).map(x=>String(x.assignment))),newRplUnits=(current.rplUnits||[]).filter(x=>!oldRpl.has(String(x.assignment))),oldRplCriteria=new Set((before.rplCriteria||[]).map(x=>x.criterionKey)),newRplCriteria=(current.rplCriteria||[]).filter(x=>!oldRplCriteria.has(x.criterionKey));
 const oldOtj=new Map((before.otjEntries||[]).map(entry=>[String(entry.id),entry]));
 const newOtjEntries=allOtjEntries().filter(entry=>{const previous=oldOtj.get(String(entry.id));return !previous||String(previous.updated||'')!==String(entry.updated||entry.created||'')||String(previous.date||'')!==String(entry.date||'')||Number(previous.hours||0)!==Number(entry.hours||0)});
 const oldTests=new Set((before.academy?.tests||[]).map(x=>x.key)),oldSlides=new Set((before.academy?.slides||[]).map(x=>x.key)),newAcademyTests=(current.academy?.tests||[]).filter(x=>!oldTests.has(x.key)),newKnowledgeSlides=(current.academy?.slides||[]).filter(x=>!oldSlides.has(x.key));
 const newEvidence=[];
 for(const [n,a] of Object.entries(current.assignments))for(const [section,count] of Object.entries(a.sections||{})){
  const previous=Number(before.assignments?.[n]?.sections?.[section]||0),added=Math.max(0,Number(count)-previous);
  if(added)newEvidence.push({assignment:Number(n),title:a.title,section,previous,count,added,newAttempts:Array.from({length:added},(_,i)=>previous+i+1)});
 }
 return {status,before,current,newKsbs,newRplUnits,newRplCriteria,newEvidence,newOtjEntries,newAcademyTests,newKnowledgeSlides,otjHours:newOtjEntries.reduce((n,e)=>n+Number(e.hours||0),0),progressGain:Math.max(0,current.progress-Number(before.progress||0)),ksbGain:Math.max(0,current.completedKsbs-Number(before.completedKsbs||0))};
}
function friendlyEvidenceSection(section){return ({practical:'Assessor observation',photos:'Take Photos',statement:'Write About It',discussion:'Record a Video',walkthrough:'Record a Video',professionalDiscussion:'Talk About It',witness:'Employer verification',supporting:COURSE.nvqUnits?'Documents':'Upload Evidence',otj:learningHoursEntryLabel()})[section]||section}
function storedDataUrlBytes(value,seen=new WeakSet()){
 if(typeof value==='string')return dataUrlStoredBytes(value);
 if(!value||typeof value!=='object'||seen.has(value))return 0;
 seen.add(value);if(Array.isArray(value))return value.reduce((total,item)=>total+storedDataUrlBytes(item,seen),0);
 return Object.values(value).reduce((total,item)=>total+storedDataUrlBytes(item,seen),0);
}
function portfolioSizeEstimate(){
 let mediaBytes=0,evidenceItems=0,assignmentsWithEvidence=0;
 for(const a of courseAssignments().filter(item=>item&&!item.selectOptional)){
  let assignmentItems=0;
  for(const section of PORTFOLIO_SECTIONS){const versions=sectionData(a.n,section).versions||[];assignmentItems+=versions.length;evidenceItems+=versions.length;for(const version of versions)mediaBytes+=storedDataUrlBytes(version)}
  const walkthrough=walkthroughAllSubmissions(a.n);assignmentItems+=walkthrough.length;evidenceItems+=walkthrough.length;mediaBytes+=walkthrough.reduce((total,record)=>total+(Number(record.size)||0),0);
  if(assignmentRPL(a.n)&&!assignmentItems){assignmentItems++;evidenceItems++}
  if(assignmentItems)assignmentsWithEvidence++;
 }
 const academy=monthlyAcademySnapshot(),academyItems=(academy.tests?.length||0)+(academy.slides?.length||0),otjItems=allOtjEntries().length;
 const pdfBytes=Math.round((4+assignmentsWithEvidence*2.5+evidenceItems*.8+academyItems*.12+otjItems*.12)*1_000_000),totalBytes=mediaBytes+pdfBytes,percent=Math.round(totalBytes/PORTFOLIO_SAFE_TARGET_BYTES*100),remaining=Math.max(0,PORTFOLIO_SAFE_TARGET_BYTES-totalBytes),tone=totalBytes>PORTFOLIO_UPLOAD_LIMIT_BYTES?'over':totalBytes>PORTFOLIO_SAFE_TARGET_BYTES?'warning':percent>=75?'watch':'safe';
 return {mediaBytes,pdfBytes,totalBytes,percent,remaining,tone,evidenceItems,assignmentsWithEvidence};
}
const MONTHLY_REMINDER_MINUTE=60*1000,MONTHLY_REMINDER_SNOOZE=60*60*1000;
function monthlyReminderPending(){const s=monthlyPortfolioState();return !!s.downloadedAt&&!!s.pendingSnapshot&&!s.uploadedAt}
function monthlyReminderStage(){const s=monthlyPortfolioState();return s.reminderStage==='upload'?'upload':'open'}
function monthlyReminderBanner(){if(!monthlyReminderPending())return '';const s=monthlyPortfolioState(),stage=monthlyReminderStage(),snoozed=Number(s.reminderSnoozedUntil||0)>Date.now(),title=stage==='open'?'Open your online portfolio':'Uploaded online?',body=stage==='open'?'Your monthly portfolio is ready to upload.':'Confirm once your latest portfolio is online.',status=snoozed?`Paused until ${new Date(Number(s.reminderSnoozedUntil)).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}`:'';return `<section class="monthly-upload-warning ${stage}"><div class="monthly-warning-copy"><strong>${title}</strong><span>${body}</span>${status?`<small>${status}</small>`:''}</div><div class="monthly-upload-warning-actions">${stage==='open'?'<button class="btn" data-monthly-reminder-open>Open Portfolio</button>':'<button class="btn" data-monthly-reminder-done>Done</button>'}<button class="btn secondary" data-monthly-reminder-snooze>Later</button></div></section>`}
async function updateMonthlyReminder(patch){const current=monthlyPortfolioState();state.data[MONTHLY_PORTFOLIO_KEY()]={...current,...patch};await saveData()}
async function openMonthlyPortfolioReminder(){if(!monthlyReminderPending())return;openPortfolioSite();await updateMonthlyReminder({reminderStage:'upload',reminderSnoozedUntil:0,reminderNextAt:Date.now()+MONTHLY_REMINDER_MINUTE,portfolioOpenedAt:new Date().toISOString()});render();}
async function snoozeMonthlyPortfolioReminder(){if(!monthlyReminderPending())return;await updateMonthlyReminder({reminderSnoozedUntil:Date.now()+MONTHLY_REMINDER_SNOOZE,reminderNextAt:Date.now()+MONTHLY_REMINDER_SNOOZE});document.getElementById('monthlyUploadReminderModal')?.remove();render();toast('Portfolio reminder paused for one hour')}
function bindMonthlyReminderActions(root=document){root.querySelectorAll('[data-monthly-reminder-open]').forEach(b=>b.onclick=openMonthlyPortfolioReminder);root.querySelectorAll('[data-monthly-reminder-done]').forEach(b=>b.onclick=confirmMonthlyPortfolioUpload);root.querySelectorAll('[data-monthly-reminder-snooze]').forEach(b=>b.onclick=snoozeMonthlyPortfolioReminder)}
function showMonthlyPortfolioReminder(force=false){if(!monthlyReminderPending()||document.getElementById('monthlyUploadReminderModal'))return;const s=monthlyPortfolioState(),now=Date.now();if(!force&&(Number(s.reminderSnoozedUntil||0)>now||Number(s.reminderNextAt||0)>now))return;const stage=monthlyReminderStage(),title=stage==='open'?'Open Portfolio':'Uploaded online?',body=stage==='open'?'Your complete monthly portfolio has downloaded. Open your linked portfolio now and upload the ZIP.':'Has the latest complete monthly portfolio been uploaded to the linked online portfolio?',primary=stage==='open'?'<button class="btn" data-monthly-reminder-open>Open Portfolio</button>':'<button class="btn" data-monthly-reminder-done>Yes, all done</button>';app.insertAdjacentHTML('beforeend',`<div class="modal monthly-upload-reminder-modal" id="monthlyUploadReminderModal"><div class="modal-card"><h2>${title}</h2><p>${body}</p><div class="btn-row">${primary}<button class="btn secondary" data-monthly-reminder-snooze>Give me an hour</button></div></div></div>`);bindMonthlyReminderActions(document.getElementById('monthlyUploadReminderModal'));updateMonthlyReminder({reminderNextAt:now+MONTHLY_REMINDER_MINUTE})}
function checkMonthlyPortfolioReminder(){if(monthlyReminderPending())showMonthlyPortfolioReminder(false)}
function monthlyPortfolioCard(){
 const d=portfolioDelta(),size=portfolioSizeEstimate(),last=d.status.uploadedAt?new Date(d.status.uploadedAt).toLocaleDateString('en-GB'):'Not yet',downloaded=!!d.status.downloadedAt&&!!d.status.pendingSnapshot,newItems=d.newEvidence.reduce((n,x)=>n+x.added,0),meter=Math.min(100,Math.max(0,size.totalBytes/PORTFOLIO_SAFE_TARGET_BYTES*100)),short=learningHoursShortLabel(),criterion=COURSE.nvqUnits?'LOs':'KSBs';
 const statusLabel=downloaded?'Ready to upload':(d.status.uploadedAt?'Updated':'Ready');
 return `<div class="home-progress-monthly monthly-portfolio-card monthly-portfolio-v240">
   <div class="monthly-v240-top">
     <div class="monthly-v240-heading"><span>Monthly upload</span><strong>Course portfolio</strong></div>
     <div class="monthly-v240-right"><small>Last upload · ${esc(last)}</small><span>${esc(statusLabel)}</span></div>
   </div>
   <div class="monthly-v240-main">
     <div class="monthly-v240-metrics" aria-label="Changes since last upload">
       <div><b>+${newItems}</b><span>Evidence</span></div>
       <div><b>+${d.ksbGain}</b><span>${criterion}</span></div>
       <div><b>${d.otjHours.toFixed(1)}</b><span>${short} hrs</span></div>
     </div>
     <div class="monthly-v240-storage ${size.tone}">
       <div><span>Portfolio size</span><b>${formatMediaSize(size.totalBytes)}</b></div>
       <div class="portfolio-size-meter monthly-v240-meter" role="progressbar" aria-label="Estimated complete portfolio size" aria-valuemin="0" aria-valuemax="900" aria-valuenow="${Math.min(900,Math.round(size.totalBytes/1_000_000))}"><span style="width:${meter}%"></span></div>
     </div>
     <button class="btn monthly-v240-download" id="downloadEntirePortfolio">Download portfolio</button>
   </div>
   ${downloaded?`<div class="monthly-v240-followup"><button class="btn secondary" id="openMonthlyPortfolio">Open portfolio</button><button class="btn" id="confirmMonthlyUpload">Uploaded</button></div>`:''}
 </div>`;
}
function wrapPdfText(ctx,text,maxWidth,font){ctx.font=font;const words=String(text||'').split(/\s+/),lines=[];let line='';for(const word of words){const test=line?`${line} ${word}`:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);return lines}
function monthlyEvidenceCode(name){const m=String(name||'').match(/(?:^|[^A-Z0-9])((?:K|S|B|LO)\s*\d+(?:\.\d+)?)(?:[^A-Z0-9]|$)/i);return m?m[1].replace(/\s+/g,'').toUpperCase():''}
function monthlyFileExtension(name,fallback='.bin'){const m=String(name||'').match(/(\.[a-z0-9]{2,5})$/i);return m?m[1].toLowerCase():fallback}
function monthlyAssignmentFolder(n){
 const a=assignment(Number(n)),title=safeZipName(a?.title||`Evidence Pack ${n}`).replace(/^[- .]+|[- .]+$/g,'');
 return `EP${Number(n)}-${title||String(n)}`;
}
function monthlyEvidenceFile(entry,assignmentNumber,counters){
 const original=String(entry.name||''),lower=original.toLowerCase(),code=monthlyEvidenceCode(original),codePart=code?` - ${code}`:'';
 let base='Evidence',label='Evidence file',fallback='.bin';
 if(lower.endsWith('.pdf')){base='Evidence Pack';label='Evidence Pack PDF';fallback='.pdf'}
 else if(lower.includes('walkthrough')||lower.includes('ksb video')||/\.(mp4|mov|mkv)$/i.test(lower)){base='Video Walkthrough';label='Video walkthrough';fallback='.mp4'}
 else if(lower.includes('voice')||lower.includes('professional discussion')||lower.includes('audio')||/\.(m4a|mp3|wav|ogg)$/i.test(lower)){base='Professional Discussion';label='Professional discussion audio';fallback='.webm'}
 else if(/\.webm$/i.test(lower)){base='Video Walkthrough';label='Video walkthrough';fallback='.webm'}
 else if(/\.(mp4|webm|mov|mkv)$/i.test(lower)){base='Video';label='Supporting video';fallback='.mp4'}
 else if(/\.(png|jpe?g|webp)$/i.test(lower)){base='Photo';label='Photographic evidence';fallback='.jpg'}
 const key=`${assignmentNumber}:${base}${codePart}`,number=(counters[key]=(counters[key]||0)+1),needsNumber=base!=='Evidence Pack'||number>1;
 const filename=`${base}${codePart}${needsNumber?` ${String(number).padStart(2,'0')}`:''}${monthlyFileExtension(original,fallback)}`;
 return {folder:monthlyAssignmentFolder(assignmentNumber),filename,path:`${monthlyAssignmentFolder(assignmentNumber)}/${filename}`,label,code,assignment:assignmentNumber,data:entry.data};
}
function createPortfolioEvidenceMatrixPages(matrixRecords=[]){
 const W=1240,H=1754,M=72,pages=[];let c,x,y;
 const required=Math.max(1,Number(COURSE.evidenceRequirement||2)),criterionLabel=COURSE.nvqUnits?'LO':'KSB';
 const newPage=()=>{c=document.createElement('canvas');c.width=W;c.height=H;x=c.getContext('2d');if(!x)throw new Error('Portfolio matrix canvas unavailable');paintPdfPageBackground(x,W,H);x.fillStyle='#58B51F';x.fillRect(0,0,W,20);x.fillStyle='#18231E';x.font='800 38px Arial';x.fillText('Overall Evidence Matrix',M,82);x.fillStyle='#68756D';x.font='17px Arial';x.fillText(`${state.profile?.fullName||'Learner'} · ${COURSE.name}`,M,118);x.fillText(`${criterionLabel} evidence requirement: ${required} form${required===1?'':'s'} of evidence`,M,146);y=194;pages.push(c)};
 const header=()=>{x.fillStyle='#EAF4E7';x.fillRect(M,y,W-2*M,42);x.fillStyle='#294236';x.font='800 14px Arial';x.fillText(criterionLabel,M+12,y+27);x.fillText('MET',M+128,y+27);x.fillText('WHERE IT IS EVIDENCED',M+220,y+27);y+=48};
 const ensure=h=>{if(y+h>H-95){newPage();header()}};
 newPage();header();
 for(const row of matrixRecords){
  const refs=(row.refs||[]).length?row.refs:['No submitted evidence PDF'];
  x.font='700 13px Arial';const refLines=[];refs.forEach(ref=>refLines.push(...wrapPdfText(x,ref,W-470,'13px Arial')));
  x.font='13px Arial';const summaryLines=wrapPdfText(x,row.summary||'',W-520,'13px Arial');
  const h=Math.max(62,32+Math.max(refLines.length,summaryLines.length+1)*18);ensure(h);
  x.fillStyle=row.count>=required?'#F0F8EC':row.count>0?'#FFF9E7':'#FFFFFF';x.fillRect(M,y,W-2*M,h-4);x.strokeStyle='#DDE7DD';x.lineWidth=1;x.strokeRect(M,y,W-2*M,h-4);const marker=refs.find(ref=>ref!=='No submitted evidence PDF');if(marker){x.fillStyle=window.evidenceTypeStyle?.(marker)?.colour||'#58B51F';x.fillRect(M,y,5,h-5)}
  x.fillStyle='#1F3228';x.font='800 16px Arial';x.fillText(row.code,M+12,y+24);
  x.fillStyle=row.count>=required?'#287A2D':row.count>0?'#8A6500':'#7C8780';x.font='800 16px Arial';x.fillText(`${Math.min(required,row.count)}/${required}`,M+128,y+24);
  x.fillStyle='#617068';x.font='12px Arial';summaryLines.slice(0,3).forEach((line,i)=>x.fillText(line,M+12,y+45+i*16));
  x.fillStyle='#30473A';x.font='700 13px Arial';refLines.forEach((line,i)=>x.fillText(line,M+220,y+24+i*18));
  y+=h;
 }
 pages.forEach((canvas,i)=>{const cx=canvas.getContext('2d');if(!cx)return;cx.fillStyle='#58B51F';cx.fillRect(0,H-58,W,58);cx.fillStyle='#F3F8F2';cx.font='600 14px Arial';cx.fillText(`Overall Evidence Matrix · Page ${i+1} of ${pages.length}`,M,H-23)});
 return pages;
}
function createPortfolioEvidenceMatrixPdf(matrixRecords=[]){
 const pages=createPortfolioEvidenceMatrixPages(matrixRecords);return makeImagePDF(pages.map(c=>dataUrlBytes(c.toDataURL('image/jpeg',.92))),1240,1754);
}

function createMonthlySummaryPdf(delta,assignmentGroups=[]){
 const W=1240,H=1754,M=72,pages=[],portfolioSize=portfolioSizeEstimate();let c,x,y;
 const page=()=>{c=document.createElement('canvas');c.width=W;c.height=H;x=c.getContext('2d');paintPdfPageBackground(x,W,H);x.fillStyle='#58B51F';x.fillRect(0,0,W,20);x.fillStyle='#18231E';x.font='800 42px Arial';x.fillText('01 - New Evidence Since Last Upload',M,84);x.fillStyle='#68756D';x.font='18px Arial';x.fillText(`${state.profile?.fullName||'Learner'} · ${COURSE.name}`,M,122);x.fillText(`${new Date().toLocaleDateString('en-GB')} · Apprentice+ ${APP_VERSION}`,M,150);x.fillStyle='#EAF7E4';x.fillRect(M,176,W-2*M,4);y=218;pages.push(c)};page();
 const ensure=h=>{if(y+h>H-90)page()};
 const heading=t=>{ensure(70);x.fillStyle='#18231E';x.font='800 25px Arial';x.fillText(t,M,y);y+=40};
 const line=(t,bold=false)=>{const rows=wrapPdfText(x,t,W-2*M,bold?'700 18px Arial':'18px Arial');for(const row of rows){ensure(32);x.fillStyle=bold?'#18231E':'#405047';x.font=bold?'700 18px Arial':'18px Arial';x.fillText(row,M,y);y+=27}y+=5};
 const portfolioBuildingEntries=delta.newOtjEntries.filter(e=>e.portfolioBuilding);
 heading('Upload comparison');line(`Previous confirmed upload: ${delta.status.uploadedAt?new Date(delta.status.uploadedAt).toLocaleString('en-GB'):'First portfolio upload'}`);line(`New evidence items: ${delta.newEvidence.reduce((n,e)=>n+e.added,0)} · New KSBs/LOs met: ${delta.newKsbs.length} · Progress gained: ${delta.progressGain}%`);line(`Estimated complete portfolio: ${formatMediaSize(portfolioSize.totalBytes)} of the 900 MB safety target · ${formatMediaSize(portfolioSize.remaining)} safety allowance remaining`);line(`New RPL: ${delta.newRplUnits.length} full assignment${delta.newRplUnits.length===1?'':'s'} · ${delta.newRplCriteria.length} individual ${COURSE.nvqUnits?'LO':'KSB'}${delta.newRplCriteria.length===1?'':'s'}`);line(`New ${learningHoursMateName()} entries: ${delta.newOtjEntries.length} (${delta.otjHours.toFixed(1)} hours) · Portfolio building: ${portfolioBuildingEntries.length} × 0.2 hrs · Academy tests: ${delta.newAcademyTests.length} · Knowledge Slide packs: ${delta.newKnowledgeSlides.length}`);
 heading('New KSBs and learning outcomes');if(delta.newKsbs.length)delta.newKsbs.forEach(k=>line(`${k.code} — ${k.summary} · EP${k.assignment}: ${k.title}`));else line('No additional criteria became fully met during this upload period.');
 heading(`New ${learningHoursMateName()} evidence`);if(delta.newOtjEntries.length){line(`${learningHoursShortLabel()}/${learningHoursMateName()} Monthly Evidence.pdf`,true);delta.newOtjEntries.forEach(e=>line(`${formatShortDate(e.date)} · ${e.portfolioBuilding?'Portfolio building':String(e.place||learningHoursShortLabel()).replace(/^./,c=>c.toUpperCase())} · ${Number(e.hours||0).toFixed(1)} hours · ${e.did||`${learningHoursShortLabel()} activity`}`))}else line(`No new ${learningHoursMateName()} entries were added during this upload period.`);
 heading('Recognition of Prior Learning');if(delta.newRplUnits.length)delta.newRplUnits.forEach(r=>line(`Full assignment RPL · ${r.unit?`Unit ${r.unit} · `:''}EP${r.assignment}: ${r.title}`));if(delta.newRplCriteria.length)delta.newRplCriteria.forEach(r=>line(`Individual ${COURSE.nvqUnits?'LO':'KSB'} RPL · ${r.unit?`Unit ${r.unit} · `:''}${r.code} — ${r.summary}`));if(!delta.newRplUnits.length&&!delta.newRplCriteria.length)line('No new RPL units or individual criteria were awarded during this upload period.');
 heading('Evidence Pack contents');if(!assignmentGroups.length)line('No course assignments are available.');assignmentGroups.forEach(g=>{line(`${g.folder} — ${g.title}`,true);line(g.items.length?g.items.map(i=>i.filename).join(' · '):'No submitted evidence PDFs')});
 heading('Folder structure');line('00 - Overall Evidence Matrix.pdf — KSB/LO coverage, evidence count and exact PDF/media location');line('01 - New Evidence Since Last Upload.pdf — comparison with the previous confirmed upload');line('02 - Academy Activity.pdf — tests taken, scores and completed Knowledge Slides');line(`${learningHoursShortLabel()}/${learningHoursMateName()} Complete Evidence.pdf — the complete manual and Portfolio building ${learningHoursShortLabel()} history; the summary identifies entries added since the previous upload`);line('EP folders — every course Evidence Pack is included on every upload, with all saved evidence and media currently held on the device.');line('Each EP folder contains its own Evidence Matrix and one Complete Evidence Pack PDF containing all printable evidence and the complete OTJ/GLH history for that EP. Playable videos/discussions and original source attachments sit alongside it where required.');
 pages.splice(1,0,createMonthlyProgressPage());
 pages.forEach((canvas,i)=>{const cx=canvas.getContext('2d');cx.fillStyle='#58B51F';cx.fillRect(0,H-58,W,58);cx.fillStyle='#F3F8F2';cx.font='600 15px Arial';cx.fillText(`Apprentice+ ${APP_VERSION}`,M,H-23);cx.textAlign='right';cx.fillText(`Page ${i+1} of ${pages.length}`,W-M,H-23);cx.textAlign='left'});
 return makeImagePDF(pages.map(canvas=>dataUrlBytes(canvas.toDataURL('image/jpeg',.92))),W,H);
}
function createMonthlyProgressPage(){
 const W=1240,H=1754,M=72,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),p=courseProgressStats(),elapsed=p.red,ksbLabel=COURSE.nvqUnits?'Learning outcomes':'KSBs',otj=otjProgressStats(),epa=COURSE.nvqUnits?null:epaReadinessStats(),timeRatio=elapsed===null?0:elapsed/100;
 const expectedAssignments=elapsed===null?null:Math.min(p.total,Math.max(0,Math.round(p.total*timeRatio))),expectedKsbs=elapsed===null?null:Math.min(p.ksbTotal,Math.max(0,Math.round(p.ksbTotal*timeRatio))),otjDifference=otj.total-otj.expected;
 const startDate=new Date(state.profile?.courseStartDate||''),endDate=new Date(state.profile?.plannedEndDate||''),now=new Date(),weeksLeft=Number.isFinite(endDate.getTime())?Math.max(0,Math.ceil((endDate-now)/(7*24*60*60*1000))):null;
 const assignmentDetail=expectedAssignments===null?'Add course dates to calculate today’s target':`${expectedAssignments} expected by today · ${p.total} total`,ksbDetail=expectedKsbs===null?'Add course dates to calculate today’s target':`${expectedKsbs} expected by today · ${p.ksbTotal} total`,otjDetail=otj.timeFraction===null?`Full-course requirement · ${otj.fullExpected.toFixed(1)} hrs`:`${Math.round(otj.timeFraction*100)}% through course · ${otj.expected.toFixed(1)} of ${otj.fullExpected.toFixed(1)} hrs required by now · ${Math.abs(otjDifference).toFixed(1)} hrs ${otjDifference>=0?'ahead':'behind'}`,timeDetail=elapsed===null?'Course dates not added':`${formatDateInput(state.profile?.courseStartDate)} to ${formatDateInput(state.profile?.plannedEndDate)}${weeksLeft===null?'':` · ${weeksLeft} weeks left`}`;
 const scores=[expectedAssignments===null?null:(expectedAssignments?p.submitted/expectedAssignments:1),expectedKsbs===null?null:(expectedKsbs?p.ksbCompleted/expectedKsbs:1),otj.expected?otj.total/otj.expected:1].filter(v=>v!==null),average=scores.length?scores.reduce((a,b)=>a+Math.min(1.2,b),0)/scores.length:0,reviewLabel=elapsed===null?'Course dates needed':average>=1?'On or ahead of target':average>=.8?'Close to target':'Behind target',reviewTone=elapsed===null?'neutral':average>=1?'green':average>=.8?'amber':'red';
 x.fillStyle='#f3f7f4';x.fillRect(0,0,W,H);x.fillStyle='#0f766e';x.fillRect(0,0,W,20);
 const cardX=M,cardY=65,cardW=W-2*M,cardH=H-150;x.fillStyle='#fff';x.beginPath();x.roundRect(cardX,cardY,cardW,cardH,30);x.fill();x.strokeStyle='#dce6df';x.lineWidth=2;x.stroke();
 x.fillStyle='#657273';x.font='900 17px Arial';x.fillText('LEARNER PROGRESS',M+42,124);x.fillStyle='#0f2328';x.font='800 38px Arial';x.fillText(state.profile?.fullName||'Learner',M+42,171);x.fillStyle='#52655f';x.font='18px Arial';x.fillText(`${COURSE.name} · ${COURSE.standard}`,M+42,204);
 const drawRing=(cx,cy,r,width,value,color)=>{x.strokeStyle='#e6ece7';x.lineWidth=width;x.beginPath();x.arc(cx,cy,r,-Math.PI/2,Math.PI*1.5);x.stroke();if(value>0){x.strokeStyle=color;x.lineCap='butt';x.beginPath();x.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(100,value)/100);x.stroke()}};
 const ringX=W-M-105,ringY=151;drawRing(ringX,ringY,67,12,p.green,'#58b51f');drawRing(ringX,ringY,49,10,p.yellow,'#eab308');drawRing(ringX,ringY,33,8,elapsed??0,'#dc2626');x.fillStyle='#0f2328';x.font='800 22px Arial';x.textAlign='center';x.fillText(`${p.green}%`,ringX,ringY+8);x.textAlign='left';
 const gradientTrack=(left,top,width,height,timeline=false)=>{const g=x.createLinearGradient(left,0,left+width,0);if(timeline){g.addColorStop(0,'#35a936');g.addColorStop(.875,'#35a936');g.addColorStop(.876,'#dc2626');g.addColorStop(1,'#dc2626')}else{g.addColorStop(0,'#dc2626');g.addColorStop(.34,'#dc2626');g.addColorStop(.341,'#f5b800');g.addColorStop(.67,'#f5b800');g.addColorStop(.671,'#40ad28');g.addColorStop(1,'#40ad28')}x.fillStyle=g;x.beginPath();x.roundRect(left,top,width,height,height/2);x.fill();x.fillStyle='rgba(255,255,255,.34)';x.beginPath();x.roundRect(left+3,top+3,width-6,height-6,(height-6)/2);x.fill()};
 let y=255;const tracker=(label,value,target,display,detail,timeline=false)=>{const ratio=target>0?value/target:(value>0?1:0),position=Math.max(0,Math.min(100,ratio*100)),tone=target===null?'#657273':ratio>=1?'#218a2e':ratio>=.8?'#b77900':'#dc2626',bx=M+42,bw=cardW-84,bh=174;x.fillStyle='#fff';x.beginPath();x.roundRect(bx,y,bw,bh,18);x.fill();x.strokeStyle='#dce6df';x.lineWidth=2;x.stroke();x.fillStyle='#0f2328';x.font='800 22px Arial';x.fillText(label,bx+24,y+39);x.textAlign='right';x.fillText(display,bx+bw-24,y+39);x.textAlign='left';const tx=bx+24,tw=bw-48,ty=y+66;gradientTrack(tx,ty,tw,18,timeline);x.strokeStyle='#102d29';x.lineWidth=3;x.beginPath();x.moveTo(tx+tw,ty-5);x.lineTo(tx+tw,ty+23);x.stroke();const dotX=tx+tw*position/100;x.fillStyle=tone;x.beginPath();x.arc(dotX,ty+9,12,0,Math.PI*2);x.fill();x.strokeStyle='#fff';x.lineWidth=4;x.stroke();x.fillStyle='#52655f';x.font='18px Arial';x.fillText(detail,bx+24,y+127);y+=bh+18};
 tracker('Evidence Packs',p.submitted,expectedAssignments,`${p.submitted} / ${expectedAssignments===null?'—':expectedAssignments}`,assignmentDetail);tracker(ksbLabel,p.ksbCompleted,expectedKsbs,`${p.ksbCompleted} / ${expectedKsbs===null?'—':expectedKsbs}`,ksbDetail);tracker(learningHoursLongLabel(),otj.total,otj.expected,`${otj.total.toFixed(1)} / ${otj.expected.toFixed(1)} hrs`,otjDetail);tracker('Time elapsed',elapsed??0,100,elapsed===null?'—':`${elapsed}%`,timeDetail,true);if(epa)tracker('EPA readiness',epa.overall,100,`${epa.overall}%`,`Collective best scores · MCQ ${epa.knowledge??0}% · Discussion ${epa.discussion??0}% · Practical ${epa.practical??0}%`);
 const statusY=y+2,statusH=112,statusBg=reviewTone==='green'?'#e9f8df':reviewTone==='amber'?'#fff4ce':reviewTone==='red'?'#fee8e8':'#eef2ee',statusColour=reviewTone==='green'?'#187432':reviewTone==='amber'?'#8a6000':reviewTone==='red'?'#a51d1d':'#657273';x.fillStyle=statusBg;x.beginPath();x.roundRect(M+42,statusY,cardW-84,statusH,18);x.fill();x.fillStyle='#657273';x.font='800 18px Arial';x.fillText('Review status',M+66,statusY+34);x.fillStyle=statusColour;x.font='800 24px Arial';x.textAlign='right';x.fillText(reviewLabel,W-M-66,statusY+36);x.textAlign='left';x.fillStyle='#52655f';x.font='16px Arial';const note=elapsed===null?'Set the learner’s course dates in Settings to activate time-based targets.':`Evidence Packs, ${COURSE.nvqUnits?'learning outcomes':'KSBs'} and ${learningHoursShortLabel()} are compared only with where the learner should be today.`;wrapPdfText(x,note,cardW-140,'16px Arial').forEach((line,i)=>x.fillText(line,M+66,statusY+69+i*22));
 return c;
}
function createMonthlyAcademyPdf(delta){
 const W=1240,H=1754,M=72,pages=[];let c,x,y;
 const page=()=>{c=document.createElement('canvas');c.width=W;c.height=H;x=c.getContext('2d');paintPdfPageBackground(x,W,H);x.fillStyle='#58B51F';x.fillRect(0,0,W,20);x.fillStyle='#18231E';x.font='800 42px Arial';x.fillText('02 - Academy Activity',M,84);x.fillStyle='#68756D';x.font='18px Arial';x.fillText(`${state.profile?.fullName||'Learner'} · ${COURSE.name}`,M,122);x.fillText(`Complete Academy history · NEW labels show activity since ${delta.status.uploadedAt?new Date(delta.status.uploadedAt).toLocaleDateString('en-GB'):'the first monthly upload'} · Generated ${new Date().toLocaleDateString('en-GB')}`,M,150);x.fillStyle='#EAF7E4';x.fillRect(M,176,W-2*M,4);y=224;pages.push(c)};page();
 const ensure=h=>{if(y+h>H-92)page()};
 const heading=t=>{ensure(65);x.fillStyle='#18231E';x.font='800 25px Arial';x.fillText(t,M,y);y+=39};
 const row=(left,right,sub='')=>{const subLines=wrapPdfText(x,sub,W-2*M-30,'16px Arial'),height=Math.max(62,50+subLines.length*22);ensure(height+10);x.fillStyle='#FFFFFF';x.fillRect(M,y-25,W-2*M,height);x.fillStyle='#18231E';x.font='700 18px Arial';x.fillText(left,M+16,y);x.textAlign='right';x.fillStyle='#58B51F';x.fillText(right,W-M-16,y);x.textAlign='left';let sy=y+27;x.fillStyle='#5C6D63';x.font='16px Arial';subLines.forEach(line=>{x.fillText(line,M+16,sy);sy+=22});y+=height+10};
 const allTests=delta.current?.academy?.tests||[],allSlides=delta.current?.academy?.slides||[],newTestKeys=new Set(delta.newAcademyTests.map(item=>item.key)),newSlideKeys=new Set(delta.newKnowledgeSlides.map(item=>item.key));
 heading(`Complete test history (${allTests.length})`);
 if(!allTests.length){row('No Academy tests taken','—','No test attempts are currently saved.')}else allTests.forEach(test=>{const date=test.date?(/^[0-9]+$/.test(String(test.date))?new Date(Number(test.date)).toLocaleDateString('en-GB'):String(test.date)):'Date not recorded';row(`${newTestKeys.has(test.key)?'NEW · ':''}${test.title}`,test.score,[test.type,date,test.grade,test.detail].filter(Boolean).join(' · '))});
 heading(`All completed Knowledge Slides (${allSlides.length})`);
 if(!allSlides.length){row('No Knowledge Slide packs completed','—','No completed slide packs are currently saved.')}else allSlides.forEach(slide=>row(`${newSlideKeys.has(slide.key)?'NEW · ':''}${slide.title}`,'Completed',[slide.section,slide.completedAt?new Date(slide.completedAt).toLocaleDateString('en-GB'):'Date not recorded'].join(' · ')));
 pages.forEach((canvas,i)=>{const cx=canvas.getContext('2d');cx.fillStyle='#58B51F';cx.fillRect(0,H-58,W,58);cx.fillStyle='#F3F8F2';cx.font='600 15px Arial';cx.fillText(`Apprentice+ ${APP_VERSION}`,M,H-23);cx.textAlign='right';cx.fillText(`Page ${i+1} of ${pages.length}`,W-M,H-23);cx.textAlign='left'});
 return makeImagePDF(pages.map(canvas=>dataUrlBytes(canvas.toDataURL('image/jpeg',.92))),W,H);
}
function createMonthlyOtjPdf(entries,delta){
 const W=1240,H=1754,M=72,TOP=178,BOTTOM=82,pages=[],progress=otjProgressStats(),short=learningHoursShortLabel(),isNvq=!!COURSE.nvqUnits;
 const wrap=(x,text,maxW,font='15px Arial')=>{x.font=font;const out=[];for(const para of String(text||'—').split(/\n/)){const words=para.split(/\s+/);let line='';for(const word of words){const test=line?`${line} ${word}`:word;if(x.measureText(test).width>maxW&&line){out.push(line);line=word}else line=test}if(line)out.push(line)}return out.length?out:['—']};
 const makePage=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');paintPdfPageBackground(x,W,H);x.fillStyle='#58B51F';x.fillRect(M,42,8,52);x.fillStyle='#68756D';x.font='700 12px Arial';x.fillText(`APPRENTICE+ · ${isNvq?'NVQ':'APPRENTICESHIP'} EVIDENCE PACK`,M+24,60);x.fillStyle='#18231E';x.font='700 30px Arial';x.fillText(`${short} Evidence`,M+24,91);x.fillStyle='#68756D';x.font='500 14px Arial';x.fillText(`${state.profile?.fullName||'Learner'} · ${COURSE.name}`,M+24,120);x.strokeStyle='#DCE7DA';x.beginPath();x.moveTo(M,142);x.lineTo(W-M,142);x.stroke();pages.push(c);return {c,x,y:TOP}};
 const drawSummary=page=>{const x=page.x,y=page.y;x.fillStyle='#FFFFFF';x.fillRect(M,y,W-2*M,70);const items=[['Recorded',`${progress.total.toFixed(1)} hrs`],['Required by now',`${progress.expected.toFixed(1)} hrs`],['Entries',String(entries.length)]];items.forEach(([k,v],i)=>{const px=M+18+i*(W-2*M)/3;x.fillStyle='#68756D';x.font='700 11px Arial';x.fillText(k.toUpperCase(),px,y+23);x.fillStyle='#18231E';x.font='700 18px Arial';x.fillText(v,px,y+48)});page.y=y+92};
 const footer=()=>pages.forEach((c,i)=>{const x=c.getContext('2d');x.strokeStyle='#DCE7DA';x.beginPath();x.moveTo(M,H-66);x.lineTo(W-M,H-66);x.stroke();x.fillStyle='#68756D';x.font='13px Arial';x.fillText(`Apprentice+ · ${short} evidence`,M,H-34);x.textAlign='right';x.fillText(`${i+1} / ${pages.length}`,W-M,H-34);x.textAlign='left'});
 let page=makePage();drawSummary(page);
 const sorted=[...entries].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')));
 for(const e of sorted){
   const assignmentNo=Number(e.assignment||0),a=assignmentNo?assignment(assignmentNo):null,assignmentText=a?`${assignmentCardCode(a)} · ${a.title}`:'Course learning',codes=isNvq?(e.loCodes||[]):[],did=isNvq?(e.did||e.activityType||'—'):'',learned=e.learned||'—';
   const didLines=isNvq?wrap(page.x,did,W-2*M-36,'15px Arial'):[],learnLines=wrap(page.x,learned,W-2*M-36,'15px Arial'),loLines=codes.length?wrap(page.x,codes.join(', '),W-2*M-36,'14px Arial'):[],height=72+(didLines.length?28+didLines.length*20:0)+28+learnLines.length*20+(loLines.length?28+loLines.length*19:0)+18;
   if(page.y+height>H-BOTTOM){page=makePage()}
   const x=page.x;let y=page.y;x.fillStyle='#FFFFFF';x.fillRect(M,y,W-2*M,height-8);x.fillStyle='#58B51F';x.fillRect(M,y,5,height-8);x.fillStyle='#18231E';x.font='700 17px Arial';x.fillText(`${formatShortDate(e.date)} · ${Number(e.hours||0).toFixed(1)} hrs`,M+18,y+25);x.fillStyle='#68756D';x.font='600 13px Arial';const secondary=isNvq?`${assignmentText}${a?.unit?` · Unit ${a.unit}`:''}`:`${assignmentText} · ${String(e.place||'Learning').replace(/^./,c=>c.toUpperCase())}`;x.fillText(secondary.length>105?secondary.slice(0,102)+'…':secondary,M+18,y+48);y+=72;
   const block=(label,lines,lh=20)=>{if(!lines.length)return;x.fillStyle='#52605f';x.font='700 11px Arial';x.fillText(label.toUpperCase(),M+18,y);y+=20;x.fillStyle='#18231E';x.font=`${lh===19?14:15}px Arial`;for(const line of lines){x.fillText(line,M+18,y);y+=lh}y+=8};
   if(isNvq)block('Activity',didLines);block(isNvq?'What did you learn?':'What did you do and learn?',learnLines);if(loLines.length)block('Learning Outcomes',loLines,19);page.y=page.y+height+10;
 }
 footer();return makeImagePDF(pages.map(c=>dataUrlBytes(c.toDataURL('image/jpeg',.9))),W,H);
}
function newEvidenceMapForAssignment(delta,n){const map={};delta.newEvidence.filter(e=>e.assignment===n).forEach(e=>map[e.section]=e.newAttempts);return map}
function portfolioRawEvidenceEntries(a,sections){
 const out=[],seen=new Set(),folder=monthlyAssignmentFolder(a.n);
 const add=(name,data,label='Evidence')=>{
  if(!data)return;
  const key=`${name}|${typeof data==='string'?data.slice(0,80):''}`;if(seen.has(key))return;seen.add(key);
  let bytes;try{bytes=data instanceof Uint8Array?data:dataUrlBytes(data)}catch{return}
  out.push({name:`${folder}/${name}`,data:bytes,label});
 };
 const cleanName=(value,fallback)=>safeZipName(String(value||fallback||'Evidence')).replace(/[. ]+$/,'');
 const photoName=(section,attempt,code,index)=>`${section} - Attempt ${attempt}${code?` - ${cleanName(code)}`:''} - Photo ${index+1}.jpg`;
 const mediaExt=(rec,fallback)=>monthlyFileExtension(rec?.name||'',fallback);
 for(const [section,versions] of Object.entries(sections||{})){
  if(section==='walkthrough')continue;
  (Array.isArray(versions)?versions:[]).forEach((v,vi)=>{
   const attempt=vi+1;
   (v.photos||[]).forEach((photo,i)=>{if(photo?.data)add(photoName(section,attempt,'',i),photo.data,'Photographic evidence')});
   for(const [code,photo] of Object.entries(v.outcomePhotos||{})){if(photo?.data)add(photoName(section,attempt,code,0),photo.data,'Photographic evidence')}
   for(const [code,photos] of Object.entries(v.skillPhotos||{}))(photos||[]).forEach((photo,i)=>{if(photo?.data)add(photoName(section,attempt,code,i),photo.data,'Photographic evidence')});
   (v.files||[]).forEach((file,i)=>{if(file?.data){const ext=monthlyFileExtension(file.name,'.bin'),base=cleanName(file.evidenceName||file.name||`File ${i+1}`);add(`${section} - Attempt ${attempt} - ${base}${base.toLowerCase().endsWith(ext.toLowerCase())?'':ext}`,file.data,'Uploaded evidence')}});
   for(const [code,rec] of Object.entries(v.recordings||{})){if(rec?.data){const ext=mediaExt(rec,'.webm'),kind=String(rec.type||'').startsWith('video/')?'Video':'Voice';add(`${section} - Attempt ${attempt} - ${cleanName(code)} - ${kind}${ext}`,rec.data,kind==='Video'?'Video evidence':'Voice evidence')}}
   for(const [code,media] of Object.entries(v.observationRecordings||{})){
    if(media?.video?.data)add(`Assessor Observation - Attempt ${attempt} - ${cleanName(code)} - Video${mediaExt(media.video,'.webm')}`,media.video.data,'Assessor observation video');
    if(media?.audio?.data)add(`Assessor Observation - Attempt ${attempt} - ${cleanName(code)} - Discussion${mediaExt(media.audio,'.webm')}`,media.audio.data,'Assessor discussion');
   }
  });
 }
 (sections.walkthrough||[]).forEach((item,i)=>{if(item?.data)add(`Record a Video - ${cleanName(item.code||item.codes?.join('-')||`Video ${i+1}`)}${monthlyFileExtension(item.name,'.webm')}`,item.data,'Video walkthrough')});
 // RPL source evidence is stored separately from normal evidence sections, so gather it explicitly.
 const rpl=rplDraft(a.n),rplFiles=[];
 (rpl.entries||[]).forEach((entry,entryIndex)=>(entry.files||[]).forEach((file,fileIndex)=>rplFiles.push({file,entryIndex,fileIndex,codes:entry.codes||[]})));
 (rpl.files||[]).forEach((file,fileIndex)=>rplFiles.push({file,entryIndex:'draft',fileIndex,codes:rpl.selected||[]}));
 rplFiles.forEach(({file,entryIndex,fileIndex,codes})=>{
  if(!file?.data)return;
  const ext=monthlyFileExtension(file.name,'.bin'),rawBase=cleanName(file.name||`RPL Evidence ${fileIndex+1}`),base=rawBase.toLowerCase().endsWith(ext.toLowerCase())?rawBase:rawBase+ext,codePart=codes.length?` - ${cleanName(codes.join('-'))}`:'';
  add(`RPL/${entryIndex==='draft'?'Current':`Record ${Number(entryIndex)+1}`}${codePart} - ${base}`,file.data,'RPL source evidence');
 });
 return out;
}
function createPortfolioFallbackPdf(title,lines=[]){
 const W=1240,H=1754,M=72,c=document.createElement('canvas');c.width=W;c.height=H;
 const x=c.getContext('2d');
 if(!x)throw new Error('Canvas rendering is unavailable on this device');
 x.fillStyle='#ffffff';x.fillRect(0,0,W,H);
 const g=x.createRadialGradient(0,0,0,0,0,760);g.addColorStop(0,'#DDF3D6');g.addColorStop(.42,'#EFF8EC');g.addColorStop(1,'#FFFFFF');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.fillStyle='#58B51F';x.fillRect(0,0,W,20);
 x.fillStyle='#18231E';x.font='800 38px Arial';x.fillText(String(title||'Apprentice+ Portfolio'),M,88);
 x.fillStyle='#68756D';x.font='17px Arial';x.fillText(`${state.profile?.fullName||'Learner'} · ${COURSE.name}`,M,126);
 x.fillStyle='#DCE7DA';x.fillRect(M,154,W-2*M,2);
 let y=205;
 const wrap=(text,maxWidth)=>{const words=String(text||'').split(/\s+/),out=[];let line='';x.font='17px Arial';for(const word of words){const test=line?`${line} ${word}`:word;if(x.measureText(test).width>maxWidth&&line){out.push(line);line=word}else line=test}if(line)out.push(line);return out};
 for(const value of lines){for(const line of wrap(value,W-2*M)){if(y>H-120)break;x.fillStyle='#33463D';x.font='17px Arial';x.fillText(line,M,y);y+=27}y+=8;if(y>H-120)break}
 x.fillStyle='#58B51F';x.fillRect(0,H-58,W,58);x.fillStyle='#F3F8F2';x.font='600 14px Arial';x.fillText(`Apprentice+ ${APP_VERSION}`,M,H-23);
 return makeImagePDF([dataUrlBytes(c.toDataURL('image/jpeg',.92))],W,H);
}
function createCompletePortfolioFrontPage(){
 const W=1240,H=1754,M=88,c=document.createElement('canvas'),x=c.getContext('2d');c.width=W;c.height=H;paintPdfPageBackground(x,W,H);x.fillStyle='#58B51F';x.fillRect(0,0,W,22);x.fillStyle='#18231E';x.font='800 52px Arial';x.fillText('Complete Evidence Portfolio',M,170);x.fillStyle='#68756D';x.font='600 19px Arial';x.fillText('APPRENTICE+ · PROFESSIONAL EVIDENCE RECORD',M,105);x.fillStyle='#58B51F';x.fillRect(M,205,54,4);let y=290;const rows=[['Learner',state.profile?.fullName],['Course / qualification',COURSE.name],['Qualification / standard code',COURSE.standard],['Level',COURSE.level],['Start date',state.profile?.startDate],['Expected end date',state.profile?.endDate||state.profile?.expectedEndDate],['Generated',new Date().toLocaleDateString('en-GB')],['Application version',APP_VERSION]];for(const [label,value] of rows){if(!String(value||'').trim())continue;x.fillStyle='#68756D';x.font='700 13px Arial';x.fillText(label.toUpperCase(),M,y);x.fillStyle='#18231E';x.font='600 22px Arial';x.fillText(String(value),M,y+34);x.fillStyle='#DCE7DA';x.fillRect(M,y+54,W-2*M,1);y+=86}x.fillStyle='#18231E';x.font='700 21px Arial';x.fillText('PERSONS INVOLVED / SIGNATORIES',M,y+28);y+=72;const people=[['Learner',state.profile?.fullName],['Assessor / tutor',state.profile?.mentor],['Employer',state.profile?.employer]].filter(([,name])=>String(name||'').trim());for(const [role,name] of people){x.fillStyle='#F3F8F2';x.fillRect(M,y,W-2*M,54);x.fillStyle='#18231E';x.font='700 16px Arial';x.fillText(String(name),M+16,y+33);x.fillStyle='#68756D';x.textAlign='right';x.fillText(role,W-M-16,y+33);x.textAlign='left';y+=62}x.fillStyle='#58B51F';x.fillRect(0,H-58,W,58);x.fillStyle='#fff';x.font='600 14px Arial';x.fillText('Apprentice+ · Complete Portfolio',M,H-23);return c.toDataURL('image/jpeg',.92)
}
function createEpEvidenceMatrixPdf(a,sections,completePdfName){
 const W=1240,H=1754,M=72,pages=[];let c,x,y;
 const required=Math.max(1,Number(COURSE.evidenceRequirement||2)),label=COURSE.nvqUnits?'LO':'KSB',coverage=COURSE.nvqUnits?nvqOutcomeCoverage(a.n):ksbEvidenceCoverage(a.n);
 const page=()=>{c=document.createElement('canvas');c.width=W;c.height=H;x=c.getContext('2d');if(!x)throw new Error('EP matrix canvas unavailable');paintPdfPageBackground(x,W,H);x.fillStyle='#58B51F';x.fillRect(0,0,W,20);x.fillStyle='#18231E';x.font='800 38px Arial';x.fillText(`${assignmentCardCode(a)} · Evidence Matrix`,M,82);x.fillStyle='#68756D';x.font='17px Arial';x.fillText(a.title,M,118);x.fillText(`Requirement: ${required} distinct evidence form${required===1?'':'s'} per ${label}`,M,146);y=194;pages.push(c)};
 const header=()=>{x.fillStyle='#EAF4E7';x.fillRect(M,y,W-2*M,42);x.fillStyle='#294236';x.font='800 14px Arial';x.fillText(label,M+12,y+27);x.fillText('MET',M+125,y+27);x.fillText('WHERE IN THIS EVIDENCE PACK',M+210,y+27);y+=50};
 const ensure=h=>{if(y+h>H-92){page();header()}};
 const sourceLabel=s=>{const t=String(s||'').toLowerCase();if(t.includes('photo'))return 'Take Photos';if(t.includes('statement'))return 'Write About It';if(t.includes('professional')||t.includes('discussion')||t.includes('voice'))return 'Talk About It';if(t.includes('video')||t.includes('walkthrough'))return 'Record a Video';if(t.includes('witness'))return 'Witness Testimony';if(t.includes('practical')||t.includes('observation'))return 'Assessor Observation';if(t.includes('support'))return 'Uploaded Evidence';if(t.includes('rpl'))return 'RPL';return String(s||'Evidence')};
 page();header();
 for(const [code,summary] of a.ksbs||[]){
   const item=coverage?.[code]||{count:0,sources:[]},rpl=criterionRPL(a.n,code)||assignmentRPL(a.n),count=rpl?required:Math.min(required,Number(item.count||0)),sources=[...new Set((item.sources||[]).map(sourceLabel))];if(rpl&&!sources.includes('RPL'))sources.unshift('RPL');
   const refs=sources.length?sources.map(s=>`${completePdfName} · ${s}`):['No evidence recorded'];
   x.font='14px Arial';const refLines=refs.flatMap(ref=>wrapPdfText(x,ref,W-520,'14px Arial')),descLines=wrapPdfText(x,summary||'',W-620,'13px Arial'),h=Math.max(66,28+Math.max(refLines.length,descLines.length+1)*19);ensure(h);
   x.fillStyle=count>=required?'#F0F8EC':'#FFFFFF';x.fillRect(M,y,W-2*M,h-5);x.strokeStyle='#DDE7DD';x.strokeRect(M+.5,y+.5,W-2*M-1,h-6);const marker=sources[0];if(marker){x.fillStyle=window.evidenceTypeStyle?.(marker)?.colour||'#58B51F';x.fillRect(M,y,5,h-6)}
   x.fillStyle='#1F3228';x.font='800 16px Arial';x.fillText(code,M+12,y+24);x.fillStyle=count>=required?'#287A2D':'#9A6B00';x.fillText(`${count}/${required}`,M+125,y+24);
   x.fillStyle='#53635A';x.font='13px Arial';descLines.slice(0,3).forEach((line,i)=>x.fillText(line,M+12,y+45+i*17));x.fillStyle='#30473A';x.font='14px Arial';refLines.forEach((line,i)=>x.fillText(line,M+210,y+24+i*19));y+=h;
 }
 pages.forEach((canvas,i)=>{const cx=canvas.getContext('2d');cx.fillStyle='#58B51F';cx.fillRect(0,H-58,W,58);cx.fillStyle='#F3F8F2';cx.font='600 14px Arial';cx.fillText(`${assignmentCardCode(a)} Evidence Matrix · ${i+1}/${pages.length}`,M,H-23)});
 return makeImagePDF(pages.map(canvas=>dataUrlBytes(canvas.toDataURL('image/jpeg',.92))),W,H);
}
async function buildCompleteEpPortfolio(a,sections){
 const generated=await generateEvidencePackPDF({course:COURSE,assignment:evidencePackAssignmentDefinition(a),profile:state.profile,sections,branding:state.branding,returnPackage:true,newEvidence:{},assignmentRpl:assignmentRPL(a.n),rplKsbCodes:assignmentIndividualRplCodes(a.n),rplEvidence:rplDraft(a.n),learningHours:assignmentLearningHoursPdfPayload(a.n),completionStatus:assignmentComplete(a.n),completionDate:assignmentComplete(a.n)?(state.data[packStatusKey(a.n)]?.completedAt||state.data[packStatusKey(a.n)]?.uploadedAt||''):''});
 const pdfEntry=(generated?.entries||[]).find(entry=>String(entry.name||'').toLowerCase().endsWith('.pdf'));
 if(!pdfEntry?.data)throw new Error(`${assignmentCardCode(a)} complete Evidence Pack PDF was not generated`);
 const completeName=`${assignmentCardCode(a)} - ${safeZipName(a.title)} - Complete Evidence Pack.pdf`;
 const matrixName=`${assignmentCardCode(a)} - Evidence Matrix.pdf`;
 return {
   pdf:{filename:completeName,bytes:pdfEntry.data,label:'Complete Evidence Pack',codes:(a.ksbs||[]).map(([code])=>code),section:'complete'},
   matrix:{filename:matrixName,bytes:createEpEvidenceMatrixPdf(a,sections,completeName),label:'Evidence Matrix',codes:(a.ksbs||[]).map(([code])=>code),section:'matrix'},
   generated
 };
}
async function portfolioIndividualEvidencePdfs(a){
 const rows=submittedEvidenceRows(a),out=[];
 for(const row of rows){
  try{
   const made=await makeIndividualEvidencePdf(a,row.section,row.index,row.otjId||'');
   let item=null;if(row.section==='walkthrough'){const all=await collectWalkthroughEvidence(a.n,a);item=all[row.index]||null}else item=sectionData(a.n,row.section).versions?.[row.index]||null;
   const codes=selectedCodesForEvidence(a,item||{},row.section);
   const label=friendlyEvidenceSection(row.section).replace(/\s+/g,' ').trim(),filename=`${String(out.length+1).padStart(2,'0')} - ${safeZipName(label)} - Attempt ${Number(row.index)+1}.pdf`;
   out.push({section:row.section,index:row.index,label,codes,filename,bytes:made.bytes,item});
  }catch(error){console.error(`Unable to create individual evidence PDF for ${assignmentCardCode(a)} ${row.section} ${row.index+1}`,error)}
 }
 const learning=otjEntries().filter(e=>Number(e.assignment)===Number(a.n));
 if(learning.length){const pages=learning.slice().sort((l,r)=>String(l.date||'').localeCompare(String(r.date||''))).map(createLearningHoursEntryPreview);out.push({section:'otj',index:0,label:learningHoursShortLabel(),codes:COURSE.nvqUnits?[...new Set(learning.flatMap(e=>e.loCodes||[]))]:[],filename:`${learningHoursShortLabel()} - Complete Evidence.pdf`,bytes:makeImagePDF(pages.map(dataUrlBytes),1240,1754),item:{entries:learning}})}
 const rpl=rplDraft(a.n),rplCodes=assignmentRPL(a.n)?(a.ksbs||[]).map(([code])=>code):assignmentIndividualRplCodes(a.n),rplEntries=rpl.entries||[];
 if(rplCodes.length||rplEntries.length){const lines=[`Evidence Pack: ${assignmentCardCode(a)} · ${a.title}`,`${COURSE.nvqUnits?'Learning Outcomes':'KSBs'} completed through RPL: ${rplCodes.join(', ')||'See saved RPL records'}`];rplEntries.forEach((entry,i)=>lines.push(`RPL record ${i+1}: ${(entry.codes||[]).join(', ')||'Evidence'} · ${(entry.files||[]).map(f=>f.name).join(', ')||'No source filename'}`));out.push({section:'rpl',index:0,label:'Recognition of Prior Learning',codes:rplCodes,filename:'RPL Evidence.pdf',bytes:createPortfolioFallbackPdf('Recognition of Prior Learning',lines),item:{entries:rplEntries}})}
 return out;
}
function portfolioMatrixRecordsFromExports(exported=[]){
 const required=Math.max(1,Number(COURSE.evidenceRequirement||2)),rows=[];
 for(const a of courseAssignments().filter(a=>a&&!a.selectOptional)){
  const coverage=COURSE.nvqUnits?nvqOutcomeCoverage(a.n):ksbEvidenceCoverage(a.n),epExports=exported.filter(e=>Number(e.assignment)===Number(a.n));
  for(const [code,summary] of a.ksbs||[]){
   const item=coverage?.[code]||{count:0,sources:[]},refs=[];
   epExports.filter(e=>(e.codes||[]).includes(code)&&e.section!=='matrix').forEach(e=>{if(!refs.includes(e.path))refs.push(e.path)});
   if(!refs.length&&criterionRPL(a.n,code)){const rpl=epExports.find(e=>e.section==='rpl');if(rpl)refs.push(rpl.path)}
   rows.push({assignment:a.n,code,summary,count:Math.min(required,Number(item.count||0)),required,refs});
  }
 }
 return rows;
}
function portfolioAddSourceFiles(a,sections,packageEntries,items,existingPaths,exports){
 const folder=monthlyAssignmentFolder(a.n),subCounters={};
 const numbered=(sub,name)=>{subCounters[sub]=(subCounters[sub]||0)+1;return `${String(subCounters[sub]).padStart(2,'0')} - ${name}`};
 const add=(sub,name,data,label,codes=[])=>{
   if(!data)return;
   const numberedName=numbered(sub,name),path=`${folder}/${sub}/${numberedName}`;
   if(existingPaths.has(path.toLowerCase()))return;
   let bytes;try{bytes=data instanceof Uint8Array?data:dataUrlBytes(data)}catch{return}
   packageEntries.push({name:path,data:bytes});
   items.push({folder,filename:numberedName,path,label,assignment:a.n,data:bytes});
   existingPaths.add(path.toLowerCase());
   exports.push({assignment:a.n,section:sub,codes:[...new Set(codes||[])],path,label});
 };
 (sections.walkthrough||[]).forEach((rec,i)=>{
   if(rec?.data){
     const codes=rec.codes||rec.confirmedCodes||(rec.code?[rec.code]:[]),
     name=`${safeZipName(codes.join('-')||`Video ${i+1}`)} - Video${monthlyFileExtension(rec.name,'.webm')}`;
     add('04 - Video Evidence',name,rec.data,'Video evidence',codes);
   }
 });
 for(const section of ['discussion','professionalDiscussion']){
   for(let vi=0;vi<(sections[section]||[]).length;vi++){
     const v=sections[section][vi],baseCodes=selectedCodesForEvidence(a,v,section);
     for(const [code,rec] of Object.entries(v.recordings||{})){
       if(rec?.data){
         const kind=String(rec.type||'').startsWith('video/')?'Video':'Discussion',
         sub=kind==='Video'?'04 - Video Evidence':'05 - Discussions';
         add(sub,`${safeZipName(code)} - ${kind} ${vi+1}${monthlyFileExtension(rec.name,'.webm')}`,rec.data,kind,[code]);
       }
     }
     if(section==='professionalDiscussion'){
       (v.voiceSubmissions||[]).forEach((rec,ri)=>{
         if(!rec?.data)return;
         const codes=rec.confirmedCodes||rec.intendedCodes||[],
         ext=monthlyFileExtension(rec.name,'.webm'),
         base=rec.name?safeZipName(rec.name.replace(/\.[^.]+$/,'')):`Talk About It - ${safeZipName(codes.join('-')||`Discussion ${ri+1}`)} - ${safeZipName(rec.id||String(ri+1))}`;
         add('05 - Discussions',`${base}${ext}`,rec.data,'Talk About It recording',codes);
       });
     }
     for(const [code,media] of Object.entries(v.observationRecordings||{})){
       if(media?.video?.data)add('06 - Observation Media',`${safeZipName(code)} - Observation Video ${vi+1}${monthlyFileExtension(media.video.name,'.webm')}`,media.video.data,'Observation video',[code]);
       if(media?.audio?.data)add('06 - Observation Media',`${safeZipName(code)} - Assessor Discussion ${vi+1}${monthlyFileExtension(media.audio.name,'.webm')}`,media.audio.data,'Assessor discussion',[code]);
     }
     (v.files||[]).forEach((file,fi)=>{
       if(file?.data){
         const ext=monthlyFileExtension(file.name,'.bin'),
         base=safeZipName(file.name||`Source File ${fi+1}`),
         name=base.toLowerCase().endsWith(ext.toLowerCase())?base:base+ext;
         add('07 - Source Files',name,file.data,'Source attachment',baseCodes);
       }
     });
   }
 }

 // Every file submitted through Upload Evidence is copied into the complete portfolio.
 // Theory uploads retain their theory mapping; practical uploads retain their practical mapping.
 for(let vi=0;vi<(sections.supporting||[]).length;vi++){
   const v=sections.supporting[vi],
   codes=selectedCodesForEvidence(a,v,'supporting'),
   purpose=v.nvqEvidenceMode==='theory'?'Theory':'Practical';
   (v.files||[]).forEach((file,fi)=>{
     if(!file?.data)return;
     const ext=monthlyFileExtension(file.name,'.bin'),
     base=safeZipName(file.name||`Uploaded Evidence ${vi+1}-${fi+1}`),
     name=base.toLowerCase().endsWith(ext.toLowerCase())?base:base+ext;
     add('03 - Uploaded Evidence',`${purpose} - ${name}`,file.data,`${purpose} uploaded evidence`,codes);
   });
 }

 const rpl=rplDraft(a.n);
 (rpl.entries||[]).forEach((entry,ri)=>(entry.files||[]).forEach((file,fi)=>{
   if(file?.data){
     const ext=monthlyFileExtension(file.name,'.bin'),
     base=safeZipName(file.name||`RPL Evidence ${fi+1}`),
     name=base.toLowerCase().endsWith(ext.toLowerCase())?base:base+ext;
     add('08 - RPL Source Files',`${String(ri+1).padStart(2,'0')} - ${name}`,file.data,'RPL source evidence',entry.codes||[]);
   }
 }));
}
async function storedEvidencePackPdfBytes(n){
 try{
  const stored=await getStore(`latestEvidencePackPdf:${COURSE.id}:${n}`);
  if(Array.isArray(stored?.bytes)&&stored.bytes.length)return {name:stored.name||`Evidence-Pack-${n}.pdf`,data:new Uint8Array(stored.bytes)};
  if(stored?.bytes instanceof Uint8Array&&stored.bytes.length)return {name:stored.name||`Evidence-Pack-${n}.pdf`,data:stored.bytes};
 }catch(error){console.warn('Stored Evidence Pack PDF unavailable',error)}
 return null;
}
async function downloadEntirePortfolio(){
 const delta=portfolioDelta(),assignments=courseAssignments().filter(a=>a&&!a.selectOptional);
 if(!assignments.length)return toast('No Evidence Packs are available to export');
 if(!window.makeZipBlob)return toast('Portfolio generator unavailable');
 const button=document.getElementById('downloadEntirePortfolio');if(button){button.disabled=true;button.textContent='Preparing portfolio...'}
 try{
  const packageEntries=[],assignmentGroups=[],exportedRefs=[],completePortfolioPages=[createCompletePortfolioFrontPage()];toast(`Preparing ${assignments.length} Evidence Pack${assignments.length===1?'':'s'}...`);
  for(let index=0;index<assignments.length;index++){
   const a=assignments[index],folder=monthlyAssignmentFolder(a.n),sections={};PORTFOLIO_SECTIONS.forEach(section=>sections[section]=sectionData(a.n,section).versions.map(version=>structuredClone(version)));sections.walkthrough=await collectWalkthroughEvidence(a.n,a);
   const complete=await buildCompleteEpPortfolio(a,sections),compiled=compileUnitPack({assignmentNumber:a.n,previewPages:complete.generated.previewPages,entries:complete.generated.entries,pdfName:complete.generated.pdfName}),items=[],existingPaths=new Set();completePortfolioPages.push(...compiled.previewPages);
   for(const [pdfIndex,pdf] of [complete.matrix,complete.pdf].entries()){const numberedName=`${String(pdfIndex+1).padStart(2,'0')} - ${pdf.filename}`,path=`${folder}/${numberedName}`;packageEntries.push({name:path,data:pdf.bytes});items.push({folder,filename:numberedName,path,label:pdf.label,assignment:a.n,data:pdf.bytes});existingPaths.add(path.toLowerCase());exportedRefs.push({assignment:a.n,section:pdf.section,codes:pdf.codes||[],path,label:pdf.label})}
   // Only files that must remain playable/original sit beside the complete EP PDF.
   portfolioAddSourceFiles(a,sections,packageEntries,items,existingPaths,exportedRefs);
   assignmentGroups.push({folder,title:a.title,items});toast(`Prepared ${assignmentCardCode(a)} · ${index+1}/${assignments.length}`);
  }
  const matrixRecords=portfolioMatrixRecordsFromExports(exportedRefs);packageEntries.unshift({name:'Portfolio/Complete-Portfolio.pdf',data:makeImagePDF(completePortfolioPages.map(dataUrlBytes),1240,1754)});
  packageEntries.unshift({name:'02 - Academy Activity.pdf',data:createMonthlyAcademyPdf(delta)});
  packageEntries.unshift({name:'01 - New Evidence Since Last Upload.pdf',data:createMonthlySummaryPdf(delta,assignmentGroups)});
  packageEntries.unshift({name:'00 - Overall Evidence Matrix.pdf',data:createPortfolioEvidenceMatrixPdf(matrixRecords)});
  const packageBlob=makeZipBlob(packageEntries);if(packageBlob.size>PORTFOLIO_UPLOAD_LIMIT_BYTES)throw new Error(`The ZIP is ${formatMediaSize(packageBlob.size)} and exceeds Aptem’s 1 GB limit. Remove or replace the largest original video files, then export again.`);if(packageBlob.size>PORTFOLIO_SAFE_TARGET_BYTES&&!confirm(`This ZIP is ${formatMediaSize(packageBlob.size)}, above the 900 MB safety target. It is still below 1 GB, but leaves very little upload headroom. Download it anyway?`))return;
  const learner=safeZipName(state.profile?.fullName||'Learner').slice(0,24),date=new Date().toISOString().slice(0,10),download=await downloadBlob(packageBlob,'application/zip',`${learner}-Portfolio-${date}.zip`);
  state.data[MONTHLY_PORTFOLIO_KEY()]={...delta.status,downloadedAt:new Date().toISOString(),downloadedSize:download.size,pendingSnapshot:delta.current,pendingNewKsbs:delta.newKsbs.map(x=>x.key),pendingNewRplUnits:delta.newRplUnits.map(x=>x.assignment),pendingNewRplCriteria:delta.newRplCriteria.map(x=>x.criterionKey),pendingProgressGain:delta.progressGain,pendingOtjEntryIds:delta.newOtjEntries.map(e=>e.id),pendingAcademyTestKeys:delta.newAcademyTests.map(e=>e.key),pendingKnowledgeSlideKeys:delta.newKnowledgeSlides.map(e=>e.key),reminderStage:'open',reminderSnoozedUntil:0,reminderNextAt:Date.now(),portfolioOpenedAt:null};
  await saveData();render();setTimeout(()=>showMonthlyPortfolioReminder(true),250);toast(`Portfolio downloaded · ${formatMediaSize(download.size)}`);
 }catch(error){console.error('Portfolio download failed',error);toast(`Unable to download portfolio${error?.message?`: ${error.message}`:''}`)}finally{if(button){button.disabled=false;button.textContent='Download portfolio'}}
}

async function confirmMonthlyPortfolioUpload(){
 const status=monthlyPortfolioState();if(!status.downloadedAt||!status.pendingSnapshot)return toast('Download the latest monthly portfolio first');
 if(!confirm('Confirm that the downloaded monthly portfolio ZIP has been uploaded to the learner’s online portfolio.'))return;
 const uploadedAt=new Date().toISOString();
 state.data[MONTHLY_PORTFOLIO_KEY()]={snapshot:status.pendingSnapshot,downloadedAt:status.downloadedAt,downloadedSize:status.downloadedSize||0,uploadedAt,portfolioOpenedAt:status.portfolioOpenedAt||null,reminderStage:'complete',reminderSnoozedUntil:0,reminderNextAt:0};document.getElementById('monthlyUploadReminderModal')?.remove();
 Object.keys(status.pendingSnapshot.assignments||{}).forEach(n=>{const key=packStatusKey(Number(n)),current=state.data[key]||{};state.data[key]={...current,uploaded:true,downloaded:true,uploadedAt,monthlyUpload:true}});
 await saveData();render();toast('Monthly evidence upload confirmed');
}

function assignmentLearningHoursPdfPayload(n){
 const stats=assignmentLearningHoursStats(n);
 return {
  label:COURSE.nvqUnits?'GLH':'OTJ',
  longLabel:COURSE.nvqUnits?'Guided Learning Hours':'Off-the-Job Learning',
  target:stats.target,
  total:stats.total,
  complete:stats.complete,
  entries:stats.entries.map(e=>({date:e.date,hours:Number(e.hours||0),place:e.place||'',activity:e.activityType||e.subjectTitle||'',did:e.did||'',learned:e.learned||''}))
 };
}
async function refreshLatestEvidencePackPdf(n){
 const a=assignment(n);if(!a||!window.generateEvidencePackPDF)return null;
 const sections={};
 ['photos','statement','discussion','professionalDiscussion','witness','supporting'].forEach(s=>sections[s]=sectionData(n,s).versions.map(v=>structuredClone(v)));
 sections.walkthrough=await collectWalkthroughEvidence(n,a);
 const result=await generateEvidencePackPDF({course:COURSE,assignment:evidencePackAssignmentDefinition(a),profile:state.profile,sections,branding:state.branding,assignmentRpl:assignmentRPL(n),rplKsbCodes:assignmentIndividualRplCodes(n),rplEvidence:rplDraft(n),learningHours:assignmentLearningHoursPdfPayload(n),completionStatus:assignmentComplete(n),completionDate:assignmentComplete(n)?(state.data[packStatusKey(n)]?.completedAt||state.data[packStatusKey(n)]?.uploadedAt||''):'',returnPackage:true});
 const pdfEntry=(result?.entries||[]).find(entry=>String(entry.name||'').toLowerCase().endsWith('.pdf'));
 if(pdfEntry?.data)await putStore(`latestEvidencePackPdf:${COURSE.id}:${n}`,{name:result.pdfName||pdfEntry.name,bytes:Array.from(pdfEntry.data),updatedAt:new Date().toISOString(),learningHours:assignmentLearningHoursPdfPayload(n),completionStatus:assignmentComplete(n),completionDate:assignmentComplete(n)?(state.data[packStatusKey(n)]?.completedAt||state.data[packStatusKey(n)]?.uploadedAt||''):''});
 return result;
}
async function compileCurrentUnitPack(n){
 const a=assignment(n),sections={};['photos','statement','discussion','professionalDiscussion','witness','supporting'].forEach(section=>sections[section]=sectionData(n,section).versions.map(item=>structuredClone(item)));sections.walkthrough=await collectWalkthroughEvidence(n,a);
 const generated=await generateEvidencePackPDF({course:COURSE,assignment:evidencePackAssignmentDefinition(a),profile:state.profile,sections,branding:state.branding,assignmentRpl:assignmentRPL(n),rplKsbCodes:assignmentIndividualRplCodes(n),rplEvidence:rplDraft(n),learningHours:assignmentLearningHoursPdfPayload(n),completionStatus:assignmentComplete(n),completionDate:assignmentComplete(n)?(state.data[packStatusKey(n)]?.completedAt||state.data[packStatusKey(n)]?.uploadedAt||''):'',returnPackage:true});
 const compiled=compileUnitPack({assignmentNumber:n,previewPages:generated.previewPages,entries:generated.entries,pdfName:generated.pdfName,evidenceReferences:submittedEvidenceRows(a).map((_,index)=>`EP${n}-${String(index+1).padStart(2,'0')}`)});state.compiledUnitPack=compiled;return compiled;
}
async function previewUnitPack(n){
 try{toast('Compiling Evidence Pack preview...');const pack=await compileCurrentUnitPack(n),modal=document.createElement('div');modal.className='modal';modal.innerHTML=`<section class="modal-card unit-pack-preview" role="dialog" aria-modal="true"><button class="back" data-close-unit-preview>← Assignment</button><div class="number">COMPILED EVIDENCE PACK</div><h2>${esc(assignment(n).title)}</h2><p>${pack.previewPages.length} pages · this exact compiled document will download.</p><div class="unit-pack-preview-pages">${pack.previewPages.map((page,index)=>`<img src="${page}" alt="Evidence Pack page ${index+1}">`).join('')}</div><div class="btn-row"><button class="btn" data-download-preview-pack>Download This Evidence Pack</button></div></section>`;document.body.appendChild(modal);modal.querySelector('[data-close-unit-preview]').onclick=()=>modal.remove();modal.querySelector('[data-download-preview-pack]').onclick=()=>downloadCompiledUnitPack(n,pack);modal.onclick=event=>{if(event.target===modal)modal.remove()}}
 catch(error){console.error(error);toast(`Unable to preview Evidence Pack: ${error.message}`)}
}
async function downloadCompiledUnitPack(n,existing=null){
 try{const pack=existing&&Number(existing.assignmentNumber)===Number(n)?existing:await compileCurrentUnitPack(n);if(pack.entries.length>1)await downloadBlob(makeZipBlob(pack.entries),'application/zip',`${safeZipName(state.profile?.fullName||'Learner')}-EP-${n}-Evidence-Package.zip`);else await downloadBlob(pack.pdfBytes,'application/pdf',pack.pdfName);state.data[packStatusKey(n)]={downloaded:true,uploaded:false,downloadedAt:new Date().toISOString()};await saveData();toast('Compiled Evidence Pack download started')}
 catch(error){console.error(error);toast(`Unable to download Evidence Pack: ${error.message}`)}
}
async function downloadPack(n){
 const a=assignment(n);if(!window.generateEvidencePackPDF)return toast('PDF generator unavailable');
 const sections={};
 // Include every saved evidence section, including older/optional sections that may still contain learner evidence.
 ['photos','statement','discussion','professionalDiscussion','witness','supporting'].forEach(s=>sections[s]=sectionData(n,s).versions.map(v=>structuredClone(v)));
 sections.walkthrough=await collectWalkthroughEvidence(n,a);
 try{
  toast('Creating complete evidence package...');
  const result=await generateEvidencePackPDF({course:COURSE,assignment:evidencePackAssignmentDefinition(a),profile:state.profile,sections,branding:state.branding,assignmentRpl:assignmentRPL(n),rplKsbCodes:assignmentIndividualRplCodes(n),rplEvidence:rplDraft(n),learningHours:assignmentLearningHoursPdfPayload(n),completionStatus:assignmentComplete(n),completionDate:assignmentComplete(n)?(state.data[packStatusKey(n)]?.completedAt||state.data[packStatusKey(n)]?.uploadedAt||''):''});
  state.data[packStatusKey(n)]={downloaded:true,uploaded:false,downloadedAt:new Date().toISOString()};
  
  await saveData();render();toast('Evidence package download started — check your Downloads folder');
 }catch(e){console.error('Evidence package download failed',e);toast(`Unable to download evidence package${e?.message?`: ${e.message}`:''}`)}
}

function normalisePortfolioUrl(url){const value=String(url||'').trim();return /^https?:\/\//i.test(value)?value:''}
function openPortfolioSite(){const url=normalisePortfolioUrl(state.profile?.portfolioUrl);if(!url)return toast('Add a valid portfolio website address in Learner Details');window.open(url,'_blank','noopener,noreferrer')}
async function confirmPackUpload(n){const status=state.data[packStatusKey(n)]||{};if(!status.downloaded)return toast('Download the latest evidence package first');if(!confirm('Confirm that you uploaded the latest evidence PDF and any required media files to your portfolio.'))return;state.data[packStatusKey(n)]={...status,uploaded:true,uploadedAt:new Date().toISOString()};await saveData();render();toast('Assignment marked as submitted')}


const LANDSCAPE_CAMERA_REMINDER_KEY='apprenticePlusLandscapeCameraReminderHidden';
let landscapeCameraBypass=null;
function isCameraImageInput(input){
 return input instanceof HTMLInputElement&&input.type==='file'&&input.hasAttribute('capture')&&String(input.accept||'').toLowerCase().includes('image');
}
function closeLandscapeCameraDialog(){document.getElementById('landscapeCameraDialog')?.remove()}
function showLandscapeCameraReminder(input){
 closeLandscapeCameraDialog();
 app.insertAdjacentHTML('beforeend',`<div class="camera-orientation-screen" id="landscapeCameraDialog" role="dialog" aria-modal="true" aria-labelledby="landscapeCameraTitle"><div class="camera-orientation-card"><div class="camera-phone-guide" aria-hidden="true"><span class="phone-upright">▯</span><span class="camera-guide-cross">×</span><span class="phone-sideways">▭</span><span class="camera-guide-tick">✓</span></div><h2 id="landscapeCameraTitle">Landscape Photo Reminder</h2><p>Turn your phone sideways before opening the camera.</p><p class="camera-orientation-help">Landscape photographs provide larger evidence images, clearer assessor visibility and better PDF portfolio pages.</p><label class="camera-reminder-choice"><input type="checkbox" id="hideLandscapeReminder"> <span>Don't show this message again</span></label><div class="camera-orientation-actions"><button class="btn secondary" id="cancelLandscapeCamera">Cancel</button><button class="btn" id="openLandscapeCamera">I'm Ready – Open Camera</button></div></div></div>`);
 const dialog=document.getElementById('landscapeCameraDialog');
 document.getElementById('cancelLandscapeCamera').onclick=()=>dialog.remove();
 document.getElementById('openLandscapeCamera').onclick=()=>{
  if(document.getElementById('hideLandscapeReminder')?.checked)localStorage.setItem(LANDSCAPE_CAMERA_REMINDER_KEY,'1');
  dialog.remove();landscapeCameraBypass=input;input.click();
 };
}
function imageFileDimensions(file){return new Promise((resolve,reject)=>{const url=URL.createObjectURL(file),img=new Image();img.onload=()=>{const result={width:img.naturalWidth||img.width,height:img.naturalHeight||img.height};URL.revokeObjectURL(url);resolve(result)};img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('Unable to read image dimensions'))};img.src=url})}
async function filesAreLandscape(files){for(const file of [...files]){if(!file.type.startsWith('image/'))continue;const size=await imageFileDimensions(file);if(size.width<=size.height)return false}return true}
function deliverFilesToCameraInput(input,files){
 try{const transfer=new DataTransfer();[...files].forEach(file=>transfer.items.add(file));input.files=transfer.files}catch(error){console.warn('Unable to transfer selected gallery files',error)}
 input._landscapeValidated=true;input.dispatchEvent(new Event('change',{bubbles:true}));
}
function showPortraitPhotoRejected(input){
 closeLandscapeCameraDialog();
 app.insertAdjacentHTML('beforeend',`<div class="camera-orientation-screen" id="landscapeCameraDialog" role="dialog" aria-modal="true" aria-labelledby="portraitRejectedTitle"><div class="camera-orientation-card"><div class="portrait-rejected-icon" aria-hidden="true">↻</div><h2 id="portraitRejectedTitle">Portrait Photo Detected</h2><p>This photo was taken in portrait and has not been saved.</p><p class="camera-orientation-help">Retake it with your phone turned sideways, or choose an existing photograph from your gallery.</p><div class="camera-orientation-actions stacked"><button class="btn" id="retakeLandscapePhoto">Retake Photo</button><button class="btn secondary" id="chooseLandscapeGallery">Choose From Gallery</button><button class="link-button" id="cancelRejectedPhoto">Cancel</button></div></div></div>`);
 const dialog=document.getElementById('landscapeCameraDialog');
 document.getElementById('cancelRejectedPhoto').onclick=()=>dialog.remove();
 document.getElementById('retakeLandscapePhoto').onclick=()=>{dialog.remove();landscapeCameraBypass=input;input.value='';input.click()};
 document.getElementById('chooseLandscapeGallery').onclick=()=>{
  const gallery=document.createElement('input');gallery.type='file';gallery.accept=input.accept||'image/*';gallery.multiple=input.multiple;gallery.className='hide';document.body.appendChild(gallery);
  gallery.onchange=()=>{const files=gallery.files;if(files?.length){dialog.remove();deliverFilesToCameraInput(input,files)}gallery.remove()};gallery.click();
 };
}
document.addEventListener('click',event=>{
 const input=event.target;
 if(!isCameraImageInput(input))return;
 if(landscapeCameraBypass===input){landscapeCameraBypass=null;return}
 if(localStorage.getItem(LANDSCAPE_CAMERA_REMINDER_KEY)==='1')return;
 event.preventDefault();event.stopImmediatePropagation();showLandscapeCameraReminder(input);
},true);
document.addEventListener('change',async event=>{
 const input=event.target;if(!isCameraImageInput(input)||input._landscapeValidated){if(input?._landscapeValidated)delete input._landscapeValidated;return}
 const files=input.files;if(!files?.length)return;
 event.stopImmediatePropagation();
 try{
  if(await filesAreLandscape(files)){input._landscapeValidated=true;input.dispatchEvent(new Event('change',{bubbles:true}))}
  else{input.value='';showPortraitPhotoRejected(input)}
 }catch(error){console.error('Photo orientation check failed',error);input.value='';toast('Unable to check that photo. Please try again.')}
},true);



/* V1.9 concise page guidance and first-run tour */
const HELP_TOUR_KEY='apprenticeplus.helpTour.v1.5.36.complete';
function helpCourseRule(){return COURSE.nvqUnits?'Each Learning Outcome needs three different forms of evidence. Any available evidence types can be combined.':'Each Knowledge, Skill and Behaviour needs one accepted evidence submission. One submission can be linked to multiple relevant KSBs.'}
function currentHelp(){
 const v=state.view,s=state.section;
 const common={
  home:{title:'Home progress',html:'',steps:[
   {selector:'.combined-progress-ring',title:'Overall progress',html:`<p>The large ring combines ${COURSE.nvqUnits?'Learning Outcome':'KSB'}, ${learningHoursShortLabel()} and time-on-course progress in one place.</p>`},
   {selector:'.combined-progress-key',title:'Progress breakdown',html:`<p>Green shows ${COURSE.nvqUnits?'Learning Outcomes':'KSBs'}, blue shows ${learningHoursShortLabel()} and orange shows time on course.</p>`},
   {selector:'.learner-help-wrap',title:'Learner name and page help',html:'<p>Your learner name is displayed here for reference. Edit profile details in Settings and tap the information button for help with the current page.</p>'}
  ]},
  course:{title:'Course',html:'',steps:[
   {selector:'.main-logo-title-tile',title:'Course',html:`<p>This is the main course area. Open an ${COURSE.nvqUnits?'Evidence Pack':'assignment'} below to collect and review evidence.</p>`},
   {selector:'.assignment-card',title:COURSE.nvqUnits?'Evidence Packs':'Assignments',html:`<p>Each tile shows its evidence routes and ${COURSE.nvqUnits?'Learning Outcome':'KSB'} coverage. Open a tile to see exactly what is still required.</p>`},
   {selector:'.monthly-portfolio-card',title:'Portfolio download',html:'<p>Use the portfolio controls to create the organised evidence file for uploading to the learner portfolio system.</p>'}
  ]},
  toolkit:{title:'Toolkit',html:'',steps:[
   {selector:'.academy-grid',title:'Academy',html:'<p>Use Knowledge Slides, Trade Courses, Functional Skills and Certificates for learning and practice away from the main course evidence.</p>'},
   {selector:'.phone-app-grid',title:'Miniapps',html:'<p>Use the miniapps for calculations, drawings, notes, projects, reviews, reminders and app settings.</p>'}
  ]},
  assignment:{title:COURSE.nvqUnits?'Complete this Evidence Pack':'Complete this Assignment',html:'',steps:[
   {selector:'.assignment-title',title:COURSE.nvqUnits?'Evidence pack details':'Assignment details',html:`<p>This area shows the assignment title and every ${COURSE.nvqUnits?'Learning Outcome':'Knowledge, Skill and Behaviour'} included in it.</p>`},
   {selector:'.assignment-title .ksb-row',title:COURSE.nvqUnits?'Learning Outcome progress':'KSB progress',html:`<p>Each criterion changes from grey to amber and then green as different evidence types are saved.</p><p><strong>${helpCourseRule()}</strong></p>`},
   {selector:'[data-section="photos"]',title:'Photographic Evidence',html:'<p>Add clear landscape photographs and link each one to the criteria it proves.</p>'},
   {selector:'[data-section="statement"]',title:'Learner Statement',html:'<p>Select the relevant Knowledge criteria and write the statement. Photographs are not required for learner statements.</p>'},
   {selector:'[data-section="walkthrough"], [data-section="discussion"]',title:'Video Walkthrough',html:'<p>Record a separate explanation for the relevant criteria. Turn the phone to landscape for the widest camera view and open the compact prompt drawer only when it is needed.</p>'},
   {selector:'[data-section="witness"]',title:'Witness Testimony',html:'<p>A workplace supervisor or experienced colleague selects the criteria and records what they personally observed.</p>'},
   {selector:'[data-section="practical"]',title:'Assessor Observation',html:'<p>A tutor or assessor records a direct observation of the learner, selects the Skills and Behaviours actually observed, adds notes and signs the evidence.</p>'},
   {selector:'[data-section="professionalDiscussion"]',title:'Professional Discussion',html:'<p>The assessor records discussion evidence against the selected criteria and submits it as a separate evidence type.</p>'},
   {selector:'.monthly-portfolio-card',title:'Monthly portfolio upload',html:'<p>Download one organised monthly portfolio ZIP from the Course screen. Upload it to the learner’s online portfolio, then confirm <strong>Evidence Uploaded Online</strong>.</p>'}
  ]},
  academy:{title:'Academy',html:`<p>The Academy contains five learning areas. Use the Back and Next buttons below to see each tile highlighted and learn exactly what it does.</p>`,steps:[
   {selector:'#openKnowledgeSlides',title:'Knowledge Slides',html:'<p>Tap <strong>Knowledge Slides</strong> to study short teaching packs before attempting tests.</p><ol><li>Choose a trade, English or maths subject.</li><li>Read all 15 slides in order.</li><li>Your position is saved automatically.</li><li>Complete the final slide to record the pack as finished.</li></ol>'},
   {selector:'#openLibrary',title:'Trade Courses',html:'<p>Tap <strong>Trade Courses</strong> for course-specific learning and assessment practice.</p><ol><li>Select a course or topic.</li><li>Read the learning content.</li><li>Complete every question in the test.</li><li>Submit to save the score and feedback.</li></ol>'},
   {selector:'#openEpaMock',title:'EPA Academy',html:'<p>Tap <strong>EPA Academy</strong> to prepare for End-Point Assessment.</p><ol><li>Use Knowledge Practice for mock questions.</li><li>Use Professional Discussion to practise structured recorded answers.</li><li>Use EPA Practical to plan tools, materials and PPE and complete a timed activity.</li><li>Open Scores &amp; Results to review every saved attempt and report.</li></ol>'},
   {selector:'#openFunctionalSkills',title:'Functional Skills',html:'<p>Tap <strong>Functional Skills</strong> for English and maths revision and tests.</p><ol><li>Choose English or maths.</li><li>Select Level 1 or Level 2.</li><li>Answer every question and submit the test.</li><li>Review incorrect answers and repeat where needed.</li></ol>'},
   {selector:'#openCertificates',title:'Certificates',html:'<p>Tap <strong>Certificates</strong> to view achievements earned in the Academy.</p><ol><li>Open a saved certificate to check its details.</li><li>Download or print it where those controls are shown.</li><li>Certificates appear after the required course or assessment result has been achieved.</li></ol>'}
  ]},
  resources:{title:'Toolbox',html:'',steps:[
   {selector:'#openMeasurements',title:'1. Measurements',html:'<p>Use construction calculators for conversions, area, volume, Pythagoras, stairs, roof pitch and falls. Enter measurements using consistent units and check the result before using it on a job.</p>'},
   {selector:'#openMaterialMate',title:'2. MaterialMate',html:'<p>Estimate bricks, blocks, mortar, timber, paint, plaster and tiles. Enter the job dimensions, set wastage and check the estimate before ordering.</p>'},
   {selector:'#openDrawingMate',title:'3. DrawingMate',html:'<p>Use drawing symbols, material hatching, scale rulers and setting-out tools. Select the correct tool and confirm dimensions against the drawing or specification.</p>'},
   {selector:'#openCADMate',title:'4. CADMate',html:'<p>Create metric construction drawings for brickwork and blockwork, including bonds, dimensions, returns and drawing information. Other trade drawing workspaces are shown as they become available.</p>'},
   {selector:'#openSkillsCard',title:'5. Skills Card',html:'<p>See practical skills demonstrated across Practical Assessments and ProjectMate. Each skill shows how often it has been completed and the learner’s highest saved grade.</p>'},
   {selector:'#openNotepad',title:'6. Notes',html:'<p>Create searchable workplace or college notes. Add writing, photographs, videos, voice recordings or gallery files and save them for later use.</p>'},
   {selector:'#openProjectMate',title:'8. ProjectMate',html:'<p>Generate, create and complete customer-style projects. Follow the brief, plan materials and labour, check wastage, add project evidence and save the completed work.</p>'},
   {selector:'#openReviews',title:'9. Reviews',html:'<p>Use Live Targets for linked actions and reminders, or use Reviews+ to conduct a complete progress review, collect signatures and create the signed A4 review PDF.</p>'},
   {selector:'#openRemindMate',title:'10. RemindMate',html:'<p>Save targets and deadlines, see what is overdue or due today and mark actions complete. Repeating reminders can automatically create their next due date.</p>'},
   {selector:'#openFeedbackMate',title:'11. FeedbackMate',html:'<p>Send an idea, improvement suggestion or issue report about Apprentice+. Complete the form and use the online submission link when internet access is available.</p>'},
   {selector:'#openSettings',title:'12. Settings',html:'<p>Manage General, Notifications, Learning Support and Admin settings. Edit the learner profile, portfolio link and app preferences here.</p>'}
  ]},
  notepad:{title:'Notes',html:'',steps:[
   {selector:'#addNote,.notepad-add',title:'Create a note',html:'<p>Tap the add control to start a new workplace or college note.</p>'},
   {selector:'.note-editor,.notepad-form',title:'Add the note details',html:'<p>Enter a clear title and the written information you want to keep.</p>'},
   {selector:'.note-media-actions,.media-buttons',title:'Attach evidence and media',html:'<p>Add photographs, video, a voice recording or gallery files. The icons shown on the saved note identify which media it contains.</p>'},
   {selector:'#saveNote,.save-note',title:'Save the note',html:'<p>Save the note so it remains available on this device.</p>'},
   {selector:'.note-search,.search-button',title:'Find saved notes',html:'<p>Use search to find a note by its title or content. Open a saved note to review, edit or delete it.</p>'}
  ]},
  measuremate:{title:'Measurements',html:'',steps:[
   {selector:'.tool-tabs',title:'Choose a calculator',html:'<p>Select Convert, Area &amp; volume, Pythagoras, Stairs or Roof &amp; falls.</p>'},
   {selector:'.calc-panel',focusIndex:0,title:'Enter the measurements',html:'<p>Enter the requested values and make sure the units match the job information.</p>'},
   {selector:'.calc-action',focusIndex:0,title:'Calculate',html:'<p>Tap the calculation button after entering the required values.</p>'},
   {selector:'.calc-result,#calcOut',title:'Check the result',html:'<p>Review the result and the supporting calculation. Treat it as a setting-out aid and confirm it against drawings or specifications.</p>'}
  ]},
  materialmate:{title:'MaterialMate',html:'',steps:[
   {selector:'.tool-tabs,.material-tabs',title:'Choose the material',html:'<p>Select the material calculator that matches the work being planned.</p>'},
   {selector:'.calc-panel,.material-card',focusIndex:0,title:'Enter job dimensions',html:'<p>Enter the measured length, width, height, area or other values requested by the calculator.</p>'},
   {selector:'.wastage-control,.wastage,input[type="range"]',title:'Set wastage',html:'<p>Choose a suitable wastage allowance for cuts, damage and site conditions.</p>'},
   {selector:'.calc-result,#calcOut',title:'Review the estimate',html:'<p>Check the estimated quantity before using it for ordering. Actual requirements can vary with product size, bond, coverage and site conditions.</p>'}
  ]},
  projectmate:{title:'ProjectMate',html:'',steps:[
   {selector:'.project-card,.project-list,#newProject',title:'Open or create a project',html:'<p>Select a saved project or create a new customer-style job.</p>'},
   {selector:'.project-brief,.customer-brief',title:'Read the customer brief',html:'<p>Review the task, dimensions, finish, acceptance requirements and any restrictions before planning the work.</p>'},
   {selector:'.materials-section,.labour-section',title:'Plan materials and labour',html:'<p>Enter the materials, quantities, rates and labour needed to complete the project.</p>'},
   {selector:'.wastage-check',title:'Check wastage',html:'<p>Use the arrows and check indicator to confirm that the required wastage allowance has been included.</p>'},
   {selector:'.project-photo,.camera-button',title:'Add the project photograph',html:'<p>Add a clear project photograph where requested.</p>'},
   {selector:'.save-project,.btn',title:'Save the project',html:'<p>Save the plan. Completed projects turn green and remain available in the project list.</p>'}
  ]},
  walkthrough:{title:'Video Walkthrough',html:`<p>Record video evidence against the relevant KSB criteria.</p><ol><li>Tap <strong>Add Video</strong> beside a criterion.</li><li>Turn the phone to landscape for a full-width camera view.</li><li>Tap the small prompt drawer at the top to expand or collapse the question.</li><li>Use the central camera-style button to start and stop recording.</li><li>Review and save the video, then press <strong>Save Walkthrough</strong> when the relevant clips are complete.</li></ol>`},
  section:{title:'Evidence',html:`<p>Complete the fields and evidence shown on this page, select the criteria covered and add any required photographs or recording.</p><ol><li>Work through every visible field.</li><li>Save or submit using the button at the bottom.</li><li><strong>Submit and lock</strong> freezes that attempt as evidence.</li><li>After submission, use <strong>Start new attempt</strong> where available to create another separate piece of evidence.</li><li>Return to the assignment to check criterion coverage.</li></ol><p><strong>${helpCourseRule()}</strong></p>`}
 };
 if(v==='settings'){
  const active=state.settingsTab||'general';
  const settingsHelp={
   general:{title:'Settings · General',html:'',steps:[
    {selector:'.settings-tabs',title:'Settings sections',html:'<p>Use these tabs to move between General, Notifications, Learning Support and the password-protected Admin Mode.</p>'},
    {selector:'.settings-card',focusIndex:0,title:'App appearance',html:'<p>Choose the appearance used by Apprentice+. The change applies immediately and is saved on this device.</p>'},
    {selector:'.settings-card',focusIndex:1,title:'App colour',html:'<p>Select the accent colour used for buttons, highlights and progress indicators throughout the app.</p>'},
    {selector:'#backResources',title:'Return to Toolbox',html:'<p>Use the back button to return to the Toolbox. Your settings remain saved.</p>'}
   ]},
   notifications:{title:'Settings · Notifications',html:'',steps:[
    {selector:'.settings-tabs',title:'Settings sections',html:'<p>Use the tabs to change another group of app settings, including Admin Mode.</p>'},
    {selector:'[data-help-setting="settingNotificationsEnabled"]',title:'Allow notifications',html:'<p>This is the main notification switch. Turning it off disables all Apprentice+ notification categories on this device.</p>'},
    {selector:'[data-help-setting="settingUpdates"]',title:'App updates',html:'<p>Choose whether the Notification Centre shows new Apprentice+ version and update information.</p>'},
    {selector:'[data-help-setting="settingEpa"]',title:'EPA reminders',html:'<p>Choose whether EPA preparation and readiness reminders are shown.</p>'},
    {selector:'[data-help-setting="settingAssignments"]',title:'Evidence Pack reminders',html:'<p>Choose whether reminders about incomplete Evidence Packs and evidence are shown.</p>'},
    {selector:'[data-help-setting="settingOtj"]',title:`${learningHoursMateName()} notifications`,html:`<p>Control reminders about ${learningHoursShortLabel()} targets, saved entries and PDF exports.</p>`},{selector:'[data-help-setting="settingReminders"]',title:'RemindMate notifications',html:'<p>Control due and overdue reminders created in RemindMate.</p>'},{selector:'[data-help-setting="settingProjects"]',title:'ProjectMate notifications',html:'<p>Control reminders for saved project dates and deadlines.</p>'},{selector:'[data-help-setting="settingCertificates"]',title:'Certificate reminders',html:'<p>Choose whether notifications are shown when a certificate or achievement is available.</p>'}
   ]},
   'learning-support':{title:'Settings · Learning Support',html:'',steps:[
    {selector:'.settings-tabs',title:'Learning Support settings',html:'<p>These options change how Apprentice+ looks or behaves. Every choice is saved on this device and can be switched off again at any time.</p>'},
    {selector:'[data-help-setting="supportDyslexicFont"]',title:'Dyslexia-friendly text',html:'<p>Uses a clearer typeface and more distinct letter shapes throughout the app.</p>'},
    {selector:'[data-help-setting="supportLargeText"]',title:'Larger text',html:'<p>Increases text size across Apprentice+ to make content easier to read.</p>'},
    {selector:'[data-help-setting="supportHighContrast"]',title:'High contrast',html:'<p>Strengthens the difference between text, backgrounds and controls.</p>'},
    {selector:'[data-help-setting="supportReduceMotion"]',title:'Reduce motion',html:'<p>Removes most animations and moving transitions.</p>'},
    {selector:'[data-help-setting="supportReadingGuide"]',title:'Reading guide',html:'<p>Adds a movable horizontal reading window. Use the eye control for background blur and the move handle to position the guide.</p>'},
    {selector:'[data-help-setting="supportTintOverlay"]',title:'Dyslexia tint overlay',html:'<p>Places a glass-like colour tint over every page of Apprentice+. Turn it on, choose a colour and adjust the tint strength below.</p>'},
    {selector:'#tintOverlayOptions',title:'Overlay colour',html:'<p>Open the colour choices and select Yellow, Blue, Mint, Peach, Rose or Grey. The selected tint applies immediately.</p>'},
    {selector:'#tintOverlayOptions',title:'Tint strength',html:'<p>Move the slider to make the full-app glass tint lighter or stronger.</p>'},
    {selector:'[data-help-setting="supportReadAloud"]',title:'Text-to-speech',html:'<p>Shows a speaker button on built-in information tiles. Tap a speaker to read only that tile aloud.</p>'},
    {selector:'[data-help-setting="supportVoiceInput"]',title:'Voice-to-text',html:'<p>Shows microphone controls beside supported text fields so speech can be converted into writing.</p>'},
    {selector:'[data-help-setting="supportSimplifiedLayout"]',title:'Simplified layout',html:'<p>Reduces visual clutter and gives more emphasis to the main task and controls.</p>'},
    {selector:'#resetLearningSupport',title:'Reset Learning Support',html:'<p>Use this button to return all Learning Support options to their default settings.</p>'}
   ]}
  };
  return settingsHelp[active]||settingsHelp.general;
 }
 if(v==='section'&&s){
  const names={photos:'Photographic Evidence',statement:'Learner Statement',discussion:'Video Walkthrough',witness:'Witness Testimony',practical:'Assessor Observation',professionalDiscussion:'Professional Discussion',supporting:'Supporting Evidence'};
  const sectionSteps={
   photos:COURSE.nvqUnits?[
    {selector:'.outcome-list',title:'Select the outcomes evidenced',html:'<p>Select only the Learning Outcomes that the photographs genuinely demonstrate.</p>'},
    {selector:'.outcome-photo-control,.practical-photo-slot',title:'Add the photographs',html:'<p>Add one clear landscape photograph for every selected Learning Outcome. An outcome only counts when its photograph has been added.</p>'},
    {selector:'.signature-pad,.signature',title:'Learner signature',html:'<p>The learner signs the completed evidence before it can be submitted.</p>'},
    {selector:'#submitSection',title:'Submit and lock',html:'<p>Submit the completed photographic evidence. The saved attempt is locked and counts as one evidence type against each evidenced Learning Outcome.</p>'}
   ]:[
    {selector:'.outcome-list',title:'Select the Skill evidenced',html:'<p>Photographic Evidence can be linked to Skill KSBs only. Select only a Skill that the photographs genuinely demonstrate.</p>'},
    {selector:'.photo-requirement-panel',title:'Add photographs',html:'<p>Add three clear landscape photographs. The same three photographs can support every Skill selected above.</p>'},
    {selector:'.signature-pad,.signature',title:'Learner signature',html:'<p>The learner signs the completed photographic evidence.</p>'},
    {selector:'#submitSection',title:'Submit and lock',html:'<p>Submit when all three photograph boxes are complete, at least one Skill is selected and the learner signature is complete.</p>'}
   ],
   statement:COURSE.nvqUnits?[
    {selector:'.outcome-list,.statement-ksb-card',title:'Choose the outcomes covered',html:'<p>Select every Learning Outcome genuinely covered by the learner statement. Each selected outcome adds 30 words to the minimum.</p>'},
        {selector:'#statementText',title:'Write the learner statement',html:'<p>Explain what was done, how it was completed, the checks made and what was learned. Meet the word requirement shown on the page.</p>'},
    {selector:'.signature-pad,.signature',title:'Learner signature',html:'<p>The learner signs the statement before submission.</p>'},
    {selector:'#submitSection',title:'Submit and lock',html:'<p>Submit the completed written statement. It counts as one evidence type against each selected Learning Outcome.</p>'}
   ]:[
    {selector:'.statement-ksb-card,.outcome-list',title:'Select Knowledge',html:'<p>Tick every Knowledge criterion genuinely covered by the statement. Skills and Behaviours are not available in learner statements. The minimum increases by 30 words for each selected criterion.</p>'},
        {selector:'#statementText',title:'Write the learner statement',html:'<p>Explain what you did, how you did it, the safety and quality checks completed and what you learned. Reach the minimum word count shown.</p>'},
    {selector:'.signature-pad,.signature',title:'Learner signature',html:'<p>The learner signs the statement before submission.</p>'},
    {selector:'#submitSection',title:'Submit and lock',html:'<p>Submit the completed statement. It counts as one evidence type against every selected KSB.</p>'}
   ],
   witness:COURSE.nvqUnits?[
    {selector:'input[data-field="personName"],input[data-field="role"],input[data-field="contactDetails"]',title:'Witness details',html:'<p>The witness enters their name, job role and preferred contact details so the testimony can be authenticated.</p>'},
    {selector:'input[data-field="activity"]',title:'Activity observed',html:'<p>Briefly describe the workplace activity the witness personally observed.</p>'},
    {selector:'.score-list,.outcome-list',title:'Select achieved outcomes',html:'<p>Select only the Learning Outcomes the witness genuinely observed. Add the required outcome photographs where shown.</p>'},
    {selector:'.generated-feedback-text,textarea[data-field="feedback"]',title:'Witness account',html:'<p>Record a clear first-hand account of what the learner did and how the selected outcomes were demonstrated.</p>'},
    {selector:'.signature-pad,.signature',title:'Witness signature',html:'<p>The witness signs the testimony, then submits and locks it as a separate evidence item.</p>'}
   ]:[
    {selector:'input[data-field="personName"],input[data-field="role"],input[data-field="contactDetails"]',title:'Witness details',html:'<p>The witness enters their name, job role and preferred contact details. This must be the person who directly observed the work.</p>'},
    {selector:'input[data-field="activity"]',title:'Activity observed',html:'<p>Briefly describe the exact workplace activity personally witnessed.</p>'},
    {selector:'.score-list',title:'Rate what you saw',html:'<p>Select only the Skills or Behaviours you genuinely observed, then rate each one: 1 = Training required, 2 = Satisfactory, 3 = Competent.</p>'},
    {selector:'textarea[data-field="feedback"]',title:'Witness testimony',html:'<p>Describe what the learner actually did and what you personally observed.</p>'},
    {selector:'.signature-pad,.signature',title:'Witness signature',html:'<p>The witness signs the testimony, then submits and locks the evidence.</p>'}
   ],
   practical:COURSE.nvqUnits?[
    {selector:'input[data-field="tutor"],textarea[data-field="activity"]',title:'Assessor and activity details',html:'<p>The assessor records their name and describes the practical activity observed.</p>'},
    {selector:'.score-list,.outcome-list',title:'Select observed outcomes',html:'<p>Select only the Learning Outcomes directly observed during the assessment.</p>'},
    {selector:'.outcome-photo-control,.practical-photo-row',title:'Add observation photographs',html:'<p>Add the required clear landscape photograph for every selected Learning Outcome.</p>'},
    {selector:'.generated-feedback-text,textarea[data-field="feedback"]',title:'Observation record',html:'<p>Complete the assessor observation account, including the work seen, the standard achieved and any areas for development.</p>'},
    {selector:'.signature-pad,.signature',title:'Assessor signature',html:'<p>The assessor signs, then submits and locks the observation as an assessor-only evidence item.</p>'}
   ]:[
    {selector:'input[data-field="tutor"]',title:'Assessor details',html:'<p>The tutor or assessor enters their name before marking the practical assessment.</p>'},
    {selector:'.technical-drawing-preview',title:'Observation evidence',html:'<p>The issued technical drawing is displayed on the assessment page. Tap it for full-screen viewing, pinch zoom, printing or an A4 PDF.</p>'},
    {selector:'.practical-photo-row',title:'Finished-work photographs',html:'<p>Add at least one clear photograph of the completed practical work. Additional photographs can also be added.</p>'},
    {selector:'.score-list',title:'Score demonstrated Skills',html:'<p>Select only Skills actually demonstrated, then award the relevant score out of five. Unobserved Skills must remain unselected and are excluded from the result.</p>'},
    {selector:'.generated-feedback-text,textarea[data-field="feedback"]',title:'Assessment feedback',html:'<p>Update the assessment comments and record the result, strengths and areas for development.</p>'},
    {selector:'.signature-pad,.signature',title:'Assessor signature and submit',html:'<p>The assessor signs and submits the completed practical assessment.</p>'}
   ],
   professionalDiscussion:[
    {selector:'.professional-discussion-details',title:'Discussion details',html:'<p>The assessor or discussion lead enters their name and briefly describes the work or topic discussed.</p>'},
    {selector:'.professional-discussion-list',title:COURSE.nvqUnits?'Choose relevant outcomes':'Choose relevant Knowledge and Behaviours',html:`<p>Record only the ${COURSE.nvqUnits?'Learning Outcomes':'Knowledge or Behaviour KSBs'} genuinely evidenced during the discussion. Unevidenced items should be left without a recording.</p>`},
    {selector:'.professional-discussion-record-button',title:'Record separate audio',html:`<p>Tap <strong>Record Audio</strong> beside each relevant ${COURSE.nvqUnits?'outcome':'KSB'} and save a clear assessor-led discussion response.</p>`},
    {selector:'.professional-discussion-audio,.walkthrough-mini-saved',title:'Review saved evidence',html:'<p>Play back each saved recording. Replace or remove it before submission when it does not clearly evidence the selected criterion.</p>'},
    {selector:'.signature-pad,.signature',title:'Assessor signature',html:'<p>The assessor or discussion lead signs the completed discussion.</p>'},
    {selector:'#submitSection',title:'Submit and lock',html:'<p>Submit the discussion when the details, signature and at least one relevant recording are complete. Only criteria with saved audio appear as evidenced.</p>'}
   ],
   discussion:[
    {selector:'.walkthrough-tile-list,.video-criterion',title:'Choose what the video evidences',html:'<p>Record video only against the Learning Outcomes genuinely demonstrated in the walkthrough.</p>'},
    {selector:'.video-add,.camera-button,.walkthrough-video-button',title:'Record in landscape',html:'<p>Record a separate landscape video explaining the work, safety controls, method and quality checks for that outcome.</p>'},
    {selector:'.video-preview,.saved-video,.walkthrough-mini-saved',title:'Review each video',html:'<p>Review the saved clip and replace or remove it when needed.</p>'},
    {selector:'#submitSection,.save-walkthrough',title:'Submit the walkthrough',html:'<p>Submit and lock the completed video walkthrough. Only outcomes with a saved video count as evidence.</p>'}
   ],
   supporting:[
    {selector:'.media-buttons,.upload-box',title:'Add supporting files',html:'<p>Add relevant certificates, RAMS, drawings, delivery notes, photographs or videos.</p>'},
    {selector:'.support-file-name,.file-list',title:'Name every item',html:'<p>Give each uploaded item a clear evidence name so it can be identified in the portfolio.</p>'},
    {selector:'#submitSection',title:'Submit the evidence',html:'<p>Submit only files that genuinely support the assignment criteria.</p>'}
   ]
  };
  return {title:names[s]||'Evidence',html:'',steps:sectionSteps[s]||common.section.steps};
 }
 const extraViews={
  tools:{title:'Tools',html:'',steps:[{selector:'.tool-tile,.tools-grid button',focusIndex:0,title:'Choose a tool',html:'<p>Tap the tool needed for the current task.</p>'},{selector:'.calculator-inputs,input',title:'Enter job information',html:'<p>Enter the measurements or details requested by the selected tool.</p>'},{selector:'.calculator-result,.result,.calc-result',title:'Check the result',html:'<p>Review the result and confirm it against the job drawings, specification or manufacturer information.</p>'}]},
  drawingmate:{title:'DrawingMate',html:'',steps:[{selector:'.tool-tabs,.drawing-tabs',title:'Choose a drawing section',html:'<p>Select symbols, hatching, scale or the setting-out tool required.</p>'},{selector:'.drawing-tool,.calculator-card',focusIndex:0,title:'Use the selected tool',html:'<p>Enter the requested dimensions or choose the required construction symbol or hatch pattern.</p>'},{selector:'.drawing-result,.calc-result,.result',title:'Check before use',html:'<p>Review the displayed guide or result and confirm all dimensions before applying it to practical work.</p>'}]},
  'learning-support':{title:'Learning Support',html:'',steps:[{selector:'.support-tile,.accessibility-option',focusIndex:0,title:'Choose support',html:'<p>Select the reading, writing, planning, focus, hearing or memory support needed.</p>'},{selector:'.support-tabs',title:'Move between support sections',html:'<p>Use the tabs to return Home or open Reading, Writing, Planner and Settings.</p>'},{selector:'[data-a11y-setting]',focusIndex:0,title:'Adjust accessibility',html:'<p>Switch options on or adjust their controls. Changes apply immediately and are stored on this device.</p>'}]},
  'trade-courses':{title:'Trade Courses',html:'<p>Select a course tile, read the learning content and start the test. Complete every question and submit to save the result and create a certificate where the pass requirement is met.</p>'},
  library:{title:'Trade Courses',html:'<p>Select a course tile, work through its content and complete the test. Saved results remain available in Academy.</p>'},
  'trade-test':{title:'Trade Course Test',html:'<p>Read each question, select one answer and move through the full test. Submit at the end to save the score. Review incorrect answers from the result page.</p>'},
  'trade-result':{title:'Trade Course Result',html:'<p>Review the score, grade and question feedback. Use the available button to retry or return to the course list. A certificate is saved when the required standard is achieved.</p>'},
  'functional-skills':{title:'Functional Skills',html:'<p>Choose English or maths and the required level. Start the test, answer every question and submit it to save the result.</p>'},
  'functional-test':{title:'Functional Skills Test',html:'<p>Read each question carefully, select or enter the answer and continue until all questions are complete. Submit the test to save the result.</p>'},
  'functional-result':{title:'Functional Skills Result',html:'<p>Review the total score and answer feedback. Retry the assessment where needed or return to Functional Skills to choose another activity.</p>'},
  'academy-knowledge':{title:'Knowledge Practice',html:'<p>Select a topic or assignment, answer the questions and submit the completed attempt. Use the feedback to review incorrect answers and repeat the activity where needed.</p>'},
  'knowledge-slides':{title:'Knowledge Revision',html:'<p>Move through the revision slides in order. Use Next and Back to review the content, then start the linked knowledge test when ready.</p>'},
  lesson:{title:'Academy Lesson',html:'<p>Read each section in order and use the navigation controls to continue. Complete the questions or activity shown before leaving the lesson.</p>'},
  certificates:{title:'Certificates',html:'<p>Tap a saved certificate to open it. Review the learner, course, score and award date, then use the download control to save a copy.</p>'},
  epa:{title:COURSE.nvqUnits?'NVQ':'EPA',html:'',steps:COURSE.nvqUnits?[{selector:'.review-quick-status',title:'Qualification status',html:'<p>This section brings together the completion information already recorded in the course.</p>'},{selector:'.review-tracker-list',title:'Completion progress',html:'<p>Review Evidence Packs, Learning Outcomes, Guided Learning Hours and time on course in one place.</p>'}]:[{selector:'.epa-dashboard-tile',focusIndex:0,title:'Knowledge Practice',html:'<p>Open Knowledge Practice for random EPA-style multiple-choice questions from the course bank.</p>'},{selector:'.epa-dashboard-tile',focusIndex:1,title:'Professional Discussion',html:'<p>Practise spoken EPA responses and keep each completed attempt in the results history.</p>'},{selector:'.epa-dashboard-tile',focusIndex:2,title:'EPA Practical',html:'<p>Generate a timed practical activity, prepare the task, complete it and record the assessment result.</p>'},{selector:'.epa-dashboard-tile',focusIndex:3,title:'Scores and Results',html:'<p>Review every saved EPA attempt and any available practical PDF report.</p>'}]},
  'epa-results':{title:'EPA Scores & Results',html:'<p>Use the filters or search to find previous attempts. Tap an attempt to open its score, feedback and report. The best result is highlighted where available.</p>'},
  'epa-test':{title:'EPA Knowledge Practice',html:'<p>Answer every multiple-choice question, then submit the attempt. The result page shows the score, grade and answer feedback.</p>'},
  'epa-result':{title:'EPA Knowledge Result',html:'<p>Review the score and each answer. Use the retry control to start a new attempt or return to EPA Academy.</p>'},
  'epa-discussion':{title:'Professional Discussion Practice',html:'<p>Open each prompt, record or enter your response and save it. Complete the discussion to create a result that can be reviewed from Scores & Results.</p>'},
  'epa-discussion-result':{title:'Professional Discussion Result',html:'<p>Review the completed responses, score and feedback. Use the available control to begin a new practice attempt or return to EPA Academy.</p>'},
  'epa-practical':{title:'EPA Practical',html:'<p>Read the generated task, select the tools, materials and PPE, then complete the timed practical. The assessor enters the marking scores and final result. Submit the completed attempt to save it in Scores & Results.</p>'},
  'knowledge-test':{title:'Assignment Knowledge Test',html:'<p>Answer every question for this Evidence Pack and submit the test. Review the result before returning to the assignment.</p>'},
  'knowledge-result':{title:'Assignment Knowledge Result',html:'<p>Review the score and answer feedback. Retry where needed or return to the assignment.</p>'},
  reviewmate:{title:'Reviews',html:'',steps:state.reviewMateTab==='plus'?[{selector:'.reviewmate-main-tabs',title:'Reviews+',html:'<p>Use the two tabs to switch between the existing live-target view and the complete progress-review meeting workflow.</p>'},{selector:'.reviewplus-period',title:'Automatic review-period evidence',html:`<p>Reviews+ compares this meeting with the previous signed review and lists progress gained, new evidence, new ${COURSE.nvqUnits?'Learning Outcomes':'KSBs'}, ${learningHoursShortLabel()} and Academy activity.</p>`},{selector:'.reviewplus-block',focusIndex:1,title:'Record the meeting discussion',html:'<p>Enter attendance, capture the learner reflection with voice-to-text, add employer comments and record barriers or support agreed.</p>'},{selector:'.reviewplus-signing',title:'Sign and complete the review',html:'<p>The learner and employer sign on the device. Completing the review activates the next five targets and downloads one professional A4 review PDF.</p>'}]:[{selector:'.reviewmate-progress',title:'Live learner position',html:`<p>The ring and progress scales read current assignment, KSB or LO, ${learningHoursShortLabel()} and EPA data from the app.</p>`},{selector:'.reviewmate-target',focusIndex:0,title:'Five prioritised targets',html:`<p>Reviews favours incomplete KSBs or Learning Outcomes, then considers outstanding evidence, ${learningHoursShortLabel()}, Academy results, EPA readiness and portfolio uploads.</p>`},{selector:'[data-review-go]',focusIndex:0,title:'Open the required task',html:`<p>Tap <strong>Go</strong> on a target to open the exact assignment evidence, Knowledge Slides, test, ${learningHoursShortLabel()} entry, EPA practice or portfolio action.</p>`},{selector:'.reviewmate-current-head,.reviewmate-settings',title:'Reviews and reminders',html:'<p>Choose the weekly reminder day and an 8, 10 or 12-week review interval. Incomplete targets keep repeating in RemindMate until completed.</p>'}]}
 };return common[v]||extraViews[v]||{title:'How to use this page',html:'<p>Complete the fields and controls shown, save or submit at the bottom, then use Back to return to the previous page.</p>'};
}
function closePageHelp(){
 const modal=document.getElementById('pageHelpModal');
 if(!modal)return;
 modal.classList.add('closing');
 document.body.classList.remove('page-help-open');
 setTimeout(()=>modal.remove(),180);
}
function buildPageHelpPhone(selector='',focusIndex=0){
 const source=app.cloneNode(true);
 source.querySelectorAll('script,style,.page-help-modal,.help-tour-overlay').forEach(x=>x.remove());
 if(state.view==='settings'){source.querySelectorAll('#tintOverlayOptions').forEach(el=>{el.hidden=false;el.removeAttribute('hidden');el.setAttribute('aria-hidden','false');el.classList.remove('disabled');el.classList.add('enabled')})}
 if(selector){const targets=[...source.querySelectorAll(selector)];let target=targets[Math.min(Math.max(0,focusIndex||0),Math.max(0,targets.length-1))];if(target){const settingRow=target.closest?.('.settings-switch-row,[data-help-tile],.settings-card');if(state.view==='settings'&&settingRow)target=settingRow;target.classList.add('page-help-phone-focus')}}
 source.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
 source.querySelectorAll('button,input,select,textarea,a').forEach(el=>{el.tabIndex=-1;el.setAttribute('aria-hidden','true')});
 return source.innerHTML;
}
function scrollPageHelpPhoneToFocus(instant=false){
 const screen=document.querySelector('#pageHelpModal .page-help-phone-screen');
 const scale=document.getElementById('pageHelpPhoneScale');
 const target=scale?.querySelector('.page-help-phone-focus');
 if(!screen||!scale||!target)return;
 requestAnimationFrame(()=>{
  // Keep the phone frame fixed. Only move the page vertically inside the screen.
  const computed=getComputedStyle(scale);
  const transform=computed.transform;
  let zoom=1;
  if(transform&&transform!=='none'){
   const match=transform.match(/^matrix\(([^)]+)\)$/);
   if(match){const values=match[1].split(',').map(Number);zoom=Math.abs(values[0])||1}
  }
  const offsetWithinScale=el=>{
   let top=0,node=el;
   while(node&&node!==scale){top+=node.offsetTop||0;node=node.offsetParent}
   return top;
  };
  const visibleHeight=screen.clientHeight/zoom;
  const contentHeight=Math.max(scale.scrollHeight,scale.offsetHeight,780);
  const targetTop=offsetWithinScale(target);
  const targetHeight=target.offsetHeight||0;
  const maximumScroll=Math.max(0,contentHeight-visibleHeight);
  const desired=Math.min(maximumScroll,Math.max(0,targetTop-(visibleHeight-targetHeight)/2));
  const screenPixels=desired*zoom;
  scale.style.setProperty('transition',instant?'none':'transform .32s cubic-bezier(.2,.75,.25,1)','important');
  // The enlarged guide phone uses an !important scale rule, so the scrolling
  // transform must also be applied with !important or the marker moves while
  // the cloned page remains fixed at the top.
  scale.style.setProperty('transform',`translate3d(0, ${-screenPixels}px, 0) scale(${zoom})`,'important');
  screen.scrollTop=0;
  screen.scrollLeft=0;
 });
}
function pageHelpSelectors(){
 const map={
  home:['.progress-summary','.assignment-card,.evidence-pack-card','.evidence-icons','.submitted-badge,.status-badge','.learner-help-wrap'],
  assignment:['.assignment-header,.evidence-pack-header','.evidence-tile,.assignment-action-card','.criteria-grid,.ksb-grid','.download-pack,.download-evidence-package','.confirm-upload'],
  resources:['.resource-tile,.toolbox-tile','.resource-tile,.toolbox-tile','.resource-tile,.toolbox-tile','.resource-tile,.toolbox-tile'],
  notepad:['#addNote,.notepad-add','.note-editor,.notepad-form','.note-media-actions,.media-buttons','#saveNote,.save-note','.note-search,.search-button'],
  measuremate:['.calculator-card,.measure-tool','.calculator-inputs,input','.calculator-result,.result'],
  materialmate:['.material-card,.calculator-card','.calculator-inputs,input','.wastage-control,.wastage','.calculator-result,.result'],
  projectmate:['.project-card,.project-list','.project-brief,.customer-brief','.materials-section,.labour-section','.wastage-check','.save-project,.btn'],
  walkthrough:['.video-criterion,.walkthrough-item','.video-add,.camera-button','.video-preview,.saved-video','.save-walkthrough,.btn'],
  section:['.evidence-form,.section-card','.criteria-grid,.ksb-grid','.media-buttons,.photo-grid','.signature-pad,.signature','.submit-lock,.btn'],
  tools:['.tool-tile,.tools-grid button'],drawingmate:['.drawing-tool,.calculator-card'],
  'learning-support':['.support-tile,.accessibility-option'],
  'trade-courses':['.trade-course-card,.academy-card'],library:['.trade-course-card,.academy-card'],
  'trade-test':['.question-card','.answer-option','.test-navigation','.submit-test,.btn'],
  'trade-result':['.result-summary','.answer-review','.retry-test,.btn'],
  'functional-skills':['.functional-card,.academy-card'],
  'functional-test':['.question-card','.answer-option','.test-navigation','.submit-test,.btn'],
  'functional-result':['.result-summary','.answer-review','.retry-test,.btn'],
  'academy-knowledge':['.knowledge-topic,.academy-card','.question-card','.submit-test,.btn'],
  'knowledge-slides':['.knowledge-slide','.slide-navigation','.knowledge-complete,.btn'],
  lesson:['.lesson-card,.lesson-content','.lesson-navigation,.btn'],
  certificates:['.certificate-card','.certificate-download,.btn'],
  epa:['.epa-tile,.academy-square-tile','.epa-tile,.academy-square-tile','.epa-tile,.academy-square-tile','.epa-tile,.academy-square-tile'],
  'epa-results':['.epa-result-card,.attempt-card','.filter-bar,.search-bar'],
  'epa-test':['.question-card','.answer-option','.submit-test,.btn'],
  'epa-result':['.result-summary','.answer-review','.retry-test,.btn'],
  'epa-discussion':['.discussion-prompt','.recording-controls','.complete-discussion,.btn'],
  'epa-discussion-result':['.result-summary','.response-review','.retry-discussion,.btn'],
  'epa-practical':['.practical-task','.selection-grid,.tools-materials-ppe','.timer','.assessor-marking','.submit-practical,.btn'],
  'knowledge-test':['.question-card','.answer-option','.submit-test,.btn'],
  'knowledge-result':['.result-summary','.answer-review','.retry-test,.btn']
 };
 return map[state.view]||['main section','.btn'];
}
function compactPageHelpSteps(h){
 if(Array.isArray(h.steps)&&h.steps.length)return h.steps.map(step=>({selector:step.selector||'',focusIndex:step.focusIndex||0,title:step.title,html:step.html}));
 const holder=document.createElement('div');holder.innerHTML=h.html||'';
 const selectors=pageHelpSelectors();
 const slides=[];const selectorUses={};
 const withFocus=(selector)=>{const key=selector||'';const focusIndex=selectorUses[key]||0;selectorUses[key]=focusIndex+1;return {selector:key,focusIndex};};
 const intro=[...holder.children].find(el=>el.tagName==='P'&&el.textContent.trim());
 if(intro)slides.push({...withFocus(selectors[0]||''),title:h.title,html:`<p>${intro.innerHTML}</p>`});
 const items=[...holder.querySelectorAll('li')];
 items.forEach((li,index)=>{
  const strong=li.querySelector('strong');
  const title=strong?strong.textContent.replace(/:$/,''):items.length>1?`${h.title} · ${index+1}`:h.title;
  slides.push({...withFocus(selectors[Math.min(index+1,selectors.length-1)]||selectors[0]||''),title,html:`<p>${li.innerHTML}</p>`});
 });
 const remaining=[...holder.children].filter(el=>el.tagName==='P'&&el!==intro&&!el.closest('li'));
 remaining.forEach((el,index)=>slides.push({...withFocus(selectors[Math.min(slides.length,selectors.length-1)]||''),title:slides.length?`${h.title} · Finish`:h.title,html:`<p>${el.innerHTML}</p>`}));
 if(!slides.length){
  const text=holder.textContent.trim()||'Use the controls shown on this page, then save or submit your work.';
  const sentences=text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[text];
  sentences.forEach((sentence,index)=>slides.push({...withFocus(selectors[Math.min(index,selectors.length-1)]||''),title:index?`${h.title} · ${index+1}`:h.title,html:`<p>${sentence.trim()}</p>`}));
 }
 return slides;
}
function openPageHelp(){
 closePageHelp();
 const h=currentHelp(),steps=compactPageHelpSteps(h);
 let helpStep=0;
 const active=steps[0];
 const phone=buildPageHelpPhone(active.selector||'',active.focusIndex||0);
 const stepControls=`<div class="page-help-step-controls"><button type="button" class="btn secondary" id="pageHelpPrevious" disabled>Back</button><span id="pageHelpStepCount">1 of ${steps.length}</span><button type="button" class="btn" id="pageHelpNext">${steps.length===1?'Finish':'Next'}</button></div>`;
 document.body.insertAdjacentHTML('beforeend',`<div class="page-help-modal" id="pageHelpModal" role="presentation"><div class="page-help-sheet" role="dialog" aria-modal="true" aria-labelledby="pageHelpTitle"><button type="button" class="page-help-close" data-close-page-help aria-label="Close help">×</button><div class="page-help-body"><div class="page-help-phone" aria-label="Preview of this Apprentice Plus page"><div class="page-help-phone-speaker"></div><div class="page-help-phone-screen"><div class="page-help-phone-scale" id="pageHelpPhoneScale">${phone}</div></div><div class="page-help-phone-home"></div></div><div class="page-help-instructions"><div class="page-help-symbol">i</div><h2 id="pageHelpTitle">${esc(active.title||h.title)}</h2><div class="page-help-content" id="pageHelpContent">${active.html||h.html}</div>${stepControls}</div></div><div class="page-help-footer"><button type="button" class="link-button" id="pageHelpReplay">Replay quick tour</button><button type="button" class="btn" data-close-page-help>Close</button></div><div class="page-help-drag" aria-hidden="true"></div></div></div>`);
 document.body.classList.add('page-help-open');
 const modal=document.getElementById('pageHelpModal'),sheet=modal.querySelector('.page-help-sheet');
 scrollPageHelpPhoneToFocus(true);
 if(steps){
  const renderHelpStep=()=>{const step=steps[helpStep];document.getElementById('pageHelpTitle').textContent=step.title;document.getElementById('pageHelpContent').innerHTML=step.html;document.getElementById('pageHelpPhoneScale').innerHTML=buildPageHelpPhone(step.selector,step.focusIndex||0);document.getElementById('pageHelpStepCount').textContent=`${helpStep+1} of ${steps.length}`;const prev=document.getElementById('pageHelpPrevious'),next=document.getElementById('pageHelpNext');prev.disabled=helpStep===0;next.textContent=helpStep===steps.length-1?'Finish':'Next';scrollPageHelpPhoneToFocus(false)};
  document.getElementById('pageHelpPrevious').onclick=()=>{if(helpStep>0){helpStep--;renderHelpStep()}};
  document.getElementById('pageHelpNext').onclick=()=>{if(helpStep<steps.length-1){helpStep++;renderHelpStep()}else closePageHelp()};
 }
 modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-close-page-help]')){e.preventDefault();e.stopPropagation();closePageHelp()}});
 document.getElementById('pageHelpReplay').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();closePageHelp();localStorage.removeItem(HELP_TOUR_KEY);setTimeout(startHelpTour,220)});
 let startY=0,currentY=0,dragging=false;
 sheet.addEventListener('touchstart',e=>{if(sheet.scrollTop>0)return;startY=e.touches[0].clientY;currentY=startY;dragging=true},{passive:true});
 sheet.addEventListener('touchmove',e=>{if(!dragging)return;currentY=e.touches[0].clientY;const dy=Math.max(0,currentY-startY);sheet.style.transform=`translateY(${Math.min(dy,160)}px)`},{passive:true});
 sheet.addEventListener('touchend',()=>{if(!dragging)return;dragging=false;const dy=currentY-startY;sheet.style.transform='';if(dy>90)closePageHelp()},{passive:true});
 setTimeout(()=>modal.querySelector('.page-help-close')?.focus(),20);
}
function attachPageHelp(){const pageHelpButton=document.getElementById('pageHelpButton');if(pageHelpButton){pageHelpButton.innerHTML=appIcon('info');pageHelpButton.setAttribute('aria-label','Information about this page');pageHelpButton.title='Page information'}const courseProgressBtn=document.getElementById('courseProgressBtn');if(courseProgressBtn){courseProgressBtn.onclick=showCourseProgress;courseProgressBtn.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showCourseProgress()}}}maybeStartHelpTour()}
const HELP_TOUR_STEPS=[
 {view:'home',selector:'.main-logo-title-tile',title:'Home',text:'Home shows your current course position, required learning hours to date and overall progress.'},
 {view:'course',selector:'.assignment-card',title:'Course',text:`Open an ${COURSE.nvqUnits?'Evidence Pack':'assignment'} to collect evidence and check what is still required.`},
 {view:'epa',selector:COURSE.nvqUnits?'.review-tracker-list':'.epa-dashboard-grid',title:COURSE.nvqUnits?'NVQ':'EPA',text:COURSE.nvqUnits?'Review qualification completion in one dedicated section.':'Use EPA for Knowledge Practice, Professional Discussion, Practical preparation and saved results.'},
 {view:'toolkit',selector:'.academy-grid, .phone-app-grid',title:'Toolkit',text:'Toolkit contains the Academy and supporting miniapps; it is separate from the evidence needed to complete the course.'}
]
let helpTourIndex=0,helpTourRunning=false,helpTourOriginalView=null,helpTourStartTimer=null;
function maybeStartHelpTour(){if(helpTourRunning||helpTourStartTimer||!state.profile||localStorage.getItem(HELP_TOUR_KEY)==='1'||state.view!=='home')return;helpTourStartTimer=setTimeout(()=>{helpTourStartTimer=null;startHelpTour()},500)}
function renderTourView(step){
 state.view=step.view;
 state.section=null;
 if(step.view==='assignment')state.assignment=state.assignment||1;
 render();
 window.scrollTo(0,0);
}
function buildTourPhone(step){
 const source=app.cloneNode(true);
 source.querySelectorAll('script,style,.page-help-modal,.help-tour-overlay').forEach(x=>x.remove());
 if(state.view==='settings'){source.querySelectorAll('#tintOverlayOptions').forEach(el=>{el.hidden=false;el.removeAttribute('hidden');el.setAttribute('aria-hidden','false');el.classList.remove('disabled');el.classList.add('enabled')})}
 const target=source.querySelector(step.selector);
 if(target){target.classList.add('tour-phone-focus');target.scrollIntoView?.({block:'center'})}
 source.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
 source.querySelectorAll('button,input,select,textarea,a').forEach(el=>{el.tabIndex=-1;el.setAttribute('aria-hidden','true')});
 return source.innerHTML;
}
function startHelpTour(){
 if(helpTourStartTimer){clearTimeout(helpTourStartTimer);helpTourStartTimer=null}
 if(!state.profile||helpTourRunning)return;
 closePageHelp();
 helpTourRunning=true;helpTourIndex=0;helpTourOriginalView={view:state.view,assignment:state.assignment,section:state.section};
 document.body.classList.add('help-tour-open');
 showHelpTourStep();
}
function finishHelpTour(completed=true){
 helpTourRunning=false;
 if(helpTourStartTimer){clearTimeout(helpTourStartTimer);helpTourStartTimer=null}
 localStorage.setItem(HELP_TOUR_KEY,'1');
 document.getElementById('helpTourOverlay')?.remove();
 document.body.classList.remove('help-tour-open');
 state.view='home';state.assignment=null;state.section=null;render();window.scrollTo(0,0);
}
function showHelpTourStep(){
 document.getElementById('helpTourOverlay')?.remove();
 const step=HELP_TOUR_STEPS[helpTourIndex];
 if(!step)return finishHelpTour();
 renderTourView(step);
 const phone=buildTourPhone(step);
 document.body.insertAdjacentHTML('beforeend',`<div class="help-tour-overlay" id="helpTourOverlay" role="dialog" aria-modal="true" aria-labelledby="helpTourTitle"><div class="help-tour-layout"><div class="tour-phone" aria-label="Preview of the Apprentice Plus screen"><div class="tour-phone-speaker"></div><div class="tour-phone-screen"><div class="tour-phone-scale">${phone}</div></div><div class="tour-phone-home"></div></div><div class="help-tour-card"><div class="help-tour-top"><div class="help-tour-count">Step ${helpTourIndex+1} of ${HELP_TOUR_STEPS.length}</div><button type="button" class="help-tour-x" id="helpTourClose" aria-label="Close tour">×</button></div><h2 id="helpTourTitle">${esc(step.title)}</h2><p>${esc(step.text)}</p><div class="help-tour-dots">${HELP_TOUR_STEPS.map((_,i)=>`<span class="${i===helpTourIndex?'active':''}"></span>`).join('')}</div><div class="help-tour-actions"><button type="button" class="link-button" id="helpTourSkip">Skip tour</button><div class="help-tour-nav">${helpTourIndex?'<button type="button" class="btn secondary" id="helpTourPrevious">Back</button>':''}<button type="button" class="btn" id="helpTourNext">${helpTourIndex===HELP_TOUR_STEPS.length-1?'Finish':'Next'}</button></div></div></div></div></div>`);
 const overlay=document.getElementById('helpTourOverlay');
 overlay.addEventListener('click',e=>{if(e.target===overlay)finishHelpTour(false)});
 overlay.querySelector('#helpTourClose').onclick=()=>finishHelpTour(false);
 overlay.querySelector('#helpTourSkip').onclick=()=>finishHelpTour(true);
 const prev=overlay.querySelector('#helpTourPrevious');if(prev)prev.onclick=()=>{helpTourIndex--;showHelpTourStep()};
 overlay.querySelector('#helpTourNext').onclick=()=>{helpTourIndex++;if(helpTourIndex>=HELP_TOUR_STEPS.length)finishHelpTour(true);else showHelpTourStep()};
}
window.replayApprenticeTour=()=>{localStorage.removeItem(HELP_TOUR_KEY);startHelpTour()};

async function removeOlderUpdateSafetyBackups(keepKey){
 if(!db)return;
 return new Promise((resolve,reject)=>{
  const tx=db.transaction('store','readwrite'),store=tx.objectStore('store'),request=store.openCursor();
  request.onsuccess=()=>{const cursor=request.result;if(!cursor)return;const key=String(cursor.key||'');if(key.startsWith('updateSafetyBackup:')&&key!==keepKey)cursor.delete();cursor.continue()};
  request.onerror=()=>reject(request.error);
  tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('Backup cleanup was aborted'));
 });
}
async function createUpdateSafetyBackup(){
 const key=`updateSafetyBackup:${APP_VERSION}`;
 try{if(await getStore(key))return true}catch(error){console.warn('Unable to check update backup',error)}
 // Keep only one safety backup. Previous versions duplicated the full learner data on every update,
 // which could exhaust IndexedDB quota and incorrectly replace the app with a storage error screen.
 try{await removeOlderUpdateSafetyBackups(key)}catch(error){console.warn('Old update backups could not be removed',error)}
 try{
  await putStore(key,{app:'Apprentice+',appVersion:APP_VERSION,created:new Date().toISOString(),activeCourse:ACTIVE_COURSE_ID,profile:structuredClone(state.profile),data:structuredClone(state.data)});
  return true;
 }catch(error){
  console.warn('Update safety backup skipped because device storage is full or unavailable',error);
  return false;
 }
}
let pendingAppUpdate=null;
let updateReloading=false;
const DEFAULT_UPDATE_INFO={version:'A new version',features:['Performance improvements and minor fixes.']};
function normaliseUpdateInfo(info){
 const features=Array.isArray(info?.features)?info.features.filter(Boolean).map(String).slice(0,8):[];
 return {version:String(info?.version||DEFAULT_UPDATE_INFO.version),features:features.length?features:DEFAULT_UPDATE_INFO.features};
}
function syncUpdateBadge(){
 const badge=document.getElementById('updateNotificationButton');
 if(badge)badge.hidden=true;
}
function requestWaitingWorkerInfo(worker){
 if(!worker)return;
 try{worker.postMessage({type:'GET_UPDATE_INFO'})}catch(error){console.warn('Unable to request update details',error)}
}
function markUpdateReady(worker,info){
 if(!worker)return;
 pendingAppUpdate={worker,info:normaliseUpdateInfo(info)};
 window.apprenticePlusPendingUpdateInfo=pendingAppUpdate.info;
 window.dispatchEvent(new CustomEvent('apprenticeplus:update-ready',{detail:pendingAppUpdate.info}));
 syncUpdateBadge();
}
function closeUpdateReadyModal(){document.getElementById('updateReadyModal')?.remove()}
window.openUpdateReadyModal=function openUpdateReadyModal(){
 if(!pendingAppUpdate)return;
 closeUpdateReadyModal();
 const info=pendingAppUpdate.info;
 const features=info.features.map(item=>`<li>${esc(item)}</li>`).join('');
 document.body.insertAdjacentHTML('beforeend',`<div class="modal update-ready-modal" id="updateReadyModal"><section class="update-ready-card" role="dialog" aria-modal="true" aria-labelledby="updateReadyTitle"><button type="button" class="update-ready-close" id="closeUpdateReady" aria-label="Close">×</button><div class="update-ready-icon">↑</div><p class="update-ready-kicker">APPRENTICE+ ${esc(info.version)}</p><h2 id="updateReadyTitle">A new update is ready</h2><p class="update-ready-copy">Install the latest version now. Your saved learner work and evidence will stay on this device.</p><div class="update-ready-features"><strong>What’s included</strong><ul>${features}</ul></div><button type="button" class="btn update-ready-action" id="installReadyUpdate">Let’s go</button><p class="update-ready-small">The app will refresh once to finish installing the update.</p></section></div>`);
 const modal=document.getElementById('updateReadyModal');
 modal.querySelector('#closeUpdateReady').onclick=closeUpdateReadyModal;
 modal.onclick=e=>{if(e.target===modal)closeUpdateReadyModal()};
 modal.querySelector('#installReadyUpdate').onclick=async()=>{
  const button=modal.querySelector('#installReadyUpdate');
  button.disabled=true;button.textContent='Updating…';
  try{await createUpdateSafetyBackup()}catch(error){console.warn('Update backup could not be created',error)}
  try{pendingAppUpdate.worker.postMessage({type:'SKIP_WAITING'})}catch(error){button.disabled=false;button.textContent='Let’s go';toast('Unable to start the update. Please try again.')}
 };
}
async function registerAutoUpdater(){
 if(!('serviceWorker'in navigator))return;
 navigator.serviceWorker.addEventListener('message',event=>{
  if(event.data?.type==='UPDATE_INFO'&&pendingAppUpdate?.worker){markUpdateReady(pendingAppUpdate.worker,event.data.info)}
  if(event.data?.type==='OPEN_REMINDMATE'){state.view='remindmate';state.remindMateTab='home';state.editingReminderId=null;render();window.scrollTo(0,0)}
 });
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(updateReloading)return;
  updateReloading=true;
  window.location.reload();
 });
 const registration=await navigator.serviceWorker.register('./service-worker.js',{updateViaCache:'none'});
 const inspectWaiting=()=>{if(registration.waiting){markUpdateReady(registration.waiting,DEFAULT_UPDATE_INFO);requestWaitingWorkerInfo(registration.waiting)}};
 inspectWaiting();
 registration.addEventListener('updatefound',()=>{
  const worker=registration.installing;if(!worker)return;
  worker.addEventListener('statechange',()=>{
   if(worker.state==='installed'&&navigator.serviceWorker.controller){markUpdateReady(worker,DEFAULT_UPDATE_INFO);requestWaitingWorkerInfo(worker)}
  });
 });
 let lastUpdateCheckAt=0;
 const checkForUpdate=()=>{
  const now=Date.now();
  inspectWaiting();
  if(now-lastUpdateCheckAt<30000)return;
  lastUpdateCheckAt=now;
  registration.update().catch(()=>{});
 };
 checkForUpdate();
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')checkForUpdate()});
 window.addEventListener('focus',checkForUpdate);
 window.setInterval(checkForUpdate,60*60*1000);
}

const updateBadgeObserver=new MutationObserver(()=>syncUpdateBadge());
updateBadgeObserver.observe(app,{childList:true,subtree:true});
document.addEventListener('click',e=>{const badge=e.target.closest('#updateNotificationButton');if(!badge)return;e.preventDefault();e.stopPropagation();window.openUpdateReadyModal()});
document.addEventListener('click',e=>{const help=e.target.closest('#pageHelpButton');if(!help)return;e.preventDefault();e.stopPropagation();openPageHelp()});
document.addEventListener('keydown',e=>{
 const pageHelp=document.getElementById('pageHelpModal');
 const tour=document.getElementById('helpTourOverlay');
 if(e.key==='Escape'){
  if(pageHelp)closePageHelp();else if(helpTourRunning)finishHelpTour(false);
  return;
 }
 if(pageHelp&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){
  const button=document.getElementById(e.key==='ArrowLeft'?'pageHelpPrevious':'pageHelpNext');
  if(button&&!button.disabled){e.preventDefault();button.click()}
  return;
 }
 if(tour&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){
  const button=tour.querySelector(e.key==='ArrowLeft'?'#helpTourPrevious':'#helpTourNext');
  if(button&&!button.disabled){e.preventDefault();button.click()}
 }
});
window.addEventListener('popstate',()=>{if(document.getElementById('pageHelpModal'))closePageHelp();else if(helpTourRunning)finishHelpTour(false)});
let primaryNavigationLocked=false;
function activatePrimaryNavigation(target){
 if(primaryNavigationLocked)return;
 primaryNavigationLocked=true;
 cleanupTransientUi();
 if(target==='home'){state.view='home';state.assignment=null;state.section=null}
 else if(target==='course'){state.view='course';state.assignment=null;state.section=null}
 else if(target==='epa'){state.view='epa';state.assignment=null;state.section=null}
 else if(target==='ksb-matrix'&&!COURSE.nvqUnits){state.view='ksb-matrix';state.assignment=null;state.section=null}
 else if(target==='toolkit'){state.view='toolkit';state.assignment=null;state.section=null;state.editingNoteId=null}
 try{render()}catch(error){
  console.error(`Unable to open ${target}`,error);
  app.innerHTML=shell(`<section class="card panel"><h2>This page could not open</h2><p class="muted">Apprentice+ kept your saved work. Tap another navigation button and try this page again.</p><button type="button" class="btn" id="retryCurrentPage">Try again</button></section>`);
  document.getElementById('retryCurrentPage')?.addEventListener('click',()=>{primaryNavigationLocked=false;activatePrimaryNavigation(target)});
 }
 requestAnimationFrame(()=>{try{syncReadAloudControl();syncReadingGuide()}catch(error){console.warn(error)}window.scrollTo({top:0,left:0,behavior:'instant'});primaryNavigationLocked=false});
 window.setTimeout(()=>{primaryNavigationLocked=false},500);
}
function visibleBlockingModal(){
 return [...document.querySelectorAll('.modal,.learning-support-modal,.page-help-modal,.help-tour-overlay')].some(node=>{
  if(node.hidden||node.getAttribute('aria-hidden')==='true')return false;
  const style=getComputedStyle(node);return style.display!=='none'&&style.visibility!=='hidden'&&style.pointerEvents!=='none';
 });
}
function navButtonFromPoint(x,y){
 const buttons=[...document.querySelectorAll('.bottom-nav-item[data-nav]')];
 return buttons.find(button=>{const r=button.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom})||null;
}
function handlePrimaryNavigationEvent(e){
 let nav=e.target?.closest?.('[data-nav]');
 if(!nav&&Number.isFinite(e.clientX)&&Number.isFinite(e.clientY)&&!visibleBlockingModal())nav=navButtonFromPoint(e.clientX,e.clientY);
 if(!nav)return;
 e.preventDefault();e.stopPropagation();
 activatePrimaryNavigation(nav.dataset.nav);
}
// Capture-phase handlers keep the bottom navigation responsive even if a stale child
// listener, accessibility control or invisible overlay attempts to consume the tap.
document.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')handlePrimaryNavigationEvent(e)},{capture:true,passive:false});
document.addEventListener('click',handlePrimaryNavigationEvent,{capture:true,passive:false});
function restoreAppAfterResume(){
 if(document.visibilityState==='hidden')return;
 document.documentElement.style.pointerEvents='';document.body.style.pointerEvents='';app.style.pointerEvents='';
 document.querySelectorAll('.bottom-nav-item').forEach(button=>{button.disabled=false;button.removeAttribute('aria-disabled')});
 // Remove only stale, hidden backdrops that can intercept the first tap after resume.
 document.querySelectorAll('.modal[aria-hidden="true"],.modal.hidden,.help-tour-overlay[aria-hidden="true"],#learningSupportInfoModal[aria-hidden="true"]').forEach(node=>node.remove());if(!document.getElementById('learningSupportInfoModal'))document.body.classList.remove('learning-support-modal-open');
 primaryNavigationLocked=false;
 refreshAppNotifications();
 if(monthlyReminderPending())setTimeout(()=>showMonthlyPortfolioReminder(false),150);
}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')requestAnimationFrame(restoreAppAfterResume)});
window.addEventListener('pageshow',()=>requestAnimationFrame(restoreAppAfterResume));
window.addEventListener('focus',()=>requestAnimationFrame(restoreAppAfterResume));

(async()=>{
 try{db=await openDB();await load()}
 catch(error){console.error('Unable to load learner data',error);app.innerHTML=shell(`<section class="card panel"><h2>Unable to open learner data</h2><p class="muted">Reload the app. Your saved work has not been deleted.</p></section>`);return}
 try{await createUpdateSafetyBackup()}catch(error){console.warn('Update backup was skipped',error)}
 try{await registerAutoUpdater()}catch(error){console.warn('Automatic updates are temporarily unavailable',error)}
 try{refreshAppNotifications();window.setInterval(refreshAppNotifications,60000)}catch(error){console.warn('Reminder notifications could not be refreshed',error)}
 try{window.setInterval(checkMonthlyPortfolioReminder,60000);setTimeout(()=>showMonthlyPortfolioReminder(false),500)}catch(error){console.warn('Monthly portfolio reminders could not be started',error)}
})()


// v1.3.9 Targeted Revision Engine
const TR_STORAGE_KEY='apprenticeplus.targetedRevision';
function getTargetedRevisions(){try{return JSON.parse(localStorage.getItem(TR_STORAGE_KEY)||'[]')}catch(e){return[]}}
function saveTargetedRevisions(items){localStorage.setItem(TR_STORAGE_KEY,JSON.stringify(items))}
function updateTargetedRevision({title,assignment,source,score}){
 if(score>3)return;
 const priority=score===1?'Critical':score===2?'High':'Medium';
 const items=getTargetedRevisions();
 const i=items.findIndex(r=>r.title===title&&r.assignment===assignment);
 const now=new Date().toISOString();
 if(i>=0){
   items[i]={...items[i],source,latestScore:score,priority,status:'Reopened',updated:now};
 }else{
   items.push({title,assignment,source,latestScore:score,priority,status:'Not Started',created:now});
 }
 saveTargetedRevisions(items);
}


/* EPA_INTERVIEW_FRAMEWORK_V140 */
const EPA_INTERVIEW_FRAMEWORK=`You are an experienced End-Point Assessor for construction apprenticeships.`;
const EPA_MCQ_FRAMEWORK=typeof THEORY_MCQ_FRAMEWORK_V140!=='undefined'?THEORY_MCQ_FRAMEWORK_V140:'Use the approved Apprentice+ question bank, mark every answer consistently and explain the correct trade reasoning in plain UK English.';

// V1.5.10 reading guide layout and floating control positioning.
applyAppSettings();


/* V1.5.41 — mobile keyboard and fixed navigation coordination */
(function installKeyboardViewportCoordinator(){
  if(window.__apKeyboardViewportCoordinator)return;
  window.__apKeyboardViewportCoordinator=true;
  const root=document.documentElement;
  let baseline=Math.max(window.innerHeight,window.visualViewport?.height||0);
  const update=()=>{
    const viewportHeight=window.visualViewport?.height||window.innerHeight;
    const focused=document.activeElement;
    const editable=!!focused&&(/^(INPUT|TEXTAREA|SELECT)$/.test(focused.tagName)||focused.isContentEditable);
    if(!editable&&viewportHeight>baseline-60)baseline=Math.max(baseline,viewportHeight);
    const keyboardOpen=editable&&(baseline-viewportHeight>120);
    root.classList.toggle('keyboard-open',keyboardOpen);
    root.style.setProperty('--keyboard-height',`${Math.max(0,baseline-viewportHeight)}px`);
  };
  window.visualViewport?.addEventListener('resize',update,{passive:true});
  window.visualViewport?.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update,{passive:true});
  document.addEventListener('focusin',()=>setTimeout(update,80));
  document.addEventListener('focusout',()=>setTimeout(update,180));
  update();
})();
