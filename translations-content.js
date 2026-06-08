/* ═══════════════════════════════════════════════════════════
   translations-content.js
   Energy Compass — multilingual content data (EN + KZ)
   RU data lives in the main HTML files (unchanged)
   ═══════════════════════════════════════════════════════════ */

var CONTENT = {

/* ══════════════════════════════════════════════════════════════
   ENGLISH
══════════════════════════════════════════════════════════════ */
en: {

DAYS: {
1:{
  name:'Day of Start & Leadership',tag:'Sun Day',
  desc:[
    'A day of high personal energy and leadership potential. One of the most productive days for launching new directions, initiatives and processes. The day\'s energy is powerful and requires conscious management — it flows toward creation or destruction.',
    'Stay in a strategic state: calmly build a plan, set goals and take first steps. Avoid impulsive decisions and dominating others — leadership today should inspire, not suppress.',
    'Use the strength of this day to the fullest: begin what you\'ve been planning. The bolder and more intentional your actions today, the stronger the foundation for future growth.'
  ],
  do:['Launch new projects and initiatives','Build strategy and long-term plans','Show leadership and take responsibility','Start processes that have been postponed','Work on personal brand and positioning'],
  dont:['Sign contracts or financial agreements','Slip into ego and self-assertion at others\' expense','Make major impulsive decisions without strategy','Live by others\' expectations and scripts'],
  plus:'High productivity, leadership influence, ability to inspire. Everything started has a strong initial impulse.',
  minus:'Risk of egocentric behaviour and desire to suppress others. Impulsiveness can destroy what was built over time.',
  mantra:'"I make decisions with power and responsibility. Today I am the author of my life."',
  ritual:['Rise early — before 7 AM. This is your power hour','Write down 1 main goal for today — large and clear','10 minutes in silence — visualise your day','Drink warm lemon water — activate your metabolism','Say aloud: "Today I create, not destroy"'],
  week:'Start day. Begin new ventures, show initiative. Do not sign contracts.'
},
2:{
  name:'Day of Diplomacy & Partnership',tag:'Moon Day',
  desc:[
    'A day when the ability to build and maintain relationships plays the key role. The day\'s energy is directed toward communication, cooperation and diplomacy. This is a time to strengthen partnerships, not to make harsh independent decisions.',
    'You may feel doubt or a desire to clarify relationships — do not make sharp decisions under emotional influence. Any tension is best resolved through dialogue, flexibility and compromise.',
    'Stay physically active: walks, physical work and helping others will support your energy balance. Living through diplomacy today means ending the day with stronger connections.'
  ],
  do:['Establish and strengthen business and personal relationships','Negotiate through dialogue and mutual respect','Listen to partners and show flexibility','Help others and be useful to your circle','Move physically: walks, activity'],
  dont:['Make major strategic decisions alone','Sever business or personal ties under emotional influence','Show duplicity or manipulation','Surrender to doubt and low mood'],
  plus:'Ability to find common ground, build partnerships. Opportunities arrive through relationships.',
  minus:'Low mood, doubt, reluctance to act. Risk of destroying important connections due to an emotional decision.',
  mantra:'"I build relationships through respect and understanding. The world around me is my ally."',
  ritual:['Start the day with gratitude — recall 3 people who helped you','Call or message someone important — just to support them','Go for a walk — water (fountain, river) amplifies the day\'s energy','Avoid making decisions before noon','Evening: write down who you were useful to today'],
  week:'Diplomacy day. Communicate and build connections. Do not make decisions.'
},
3:{
  name:'Day of Analysis & Results',tag:'Jupiter Day',
  desc:[
    'One of the most favourable days for making balanced decisions. Analytical thinking is working at full capacity — use it for signing contracts, closing agreements and business meetings.',
    'A good day for medical procedures, diagnostics and routine check-ups. Everything done through systematic analysis and clear calculation has a high probability of success.',
    'Keep analytical thinking active and do not let impulse take over. Base decisions on facts, data and a clear plan.'
  ],
  do:['Sign contracts and business agreements','Make well-considered strategic decisions','Make planned major purchases','Undergo medical procedures and check-ups','Analyse data and build plans','Hold business negotiations'],
  dont:['Act on impulse without analysis','Make decisions impulsively','Show stubbornness and refuse to hear facts'],
  plus:'High analytical accuracy, success in matters worked through logic. High probability of success.',
  minus:'Impulse and tendency toward risky decisions. Laziness is the enemy of this day.',
  mantra:'"I analyse, plan and act with precision. Every decision I make is grounded in facts."',
  ritual:['Make a prioritised task list for the day','30 minutes of professional reading in the morning','5 minutes of silence and analysis before important meetings','Write down 3 things to review or check','Evening: analyse the day — what worked, what didn\'t'],
  week:'Analysis day. Sign contracts, make decisions. A favourable day.'
},
4:{
  name:'Day of Goal-Setting & Transformation',tag:'Rahu Day',
  desc:[
    'A day with special energy that amplifies everything — both positive and negative. If you are in a resourceful state of mind, expect positive and sometimes unexpected events: new opportunities, financial inflows, valuable encounters.',
    'If your inner state is negative, Rahu\'s energy amplifies chaos, losses and destruction. The main task of the day is to tune into positivity in the morning, set priorities and clearly define your goals.',
    'Rahu Day is a goal-setting day. It is recommended to gain knowledge, take courses and work on setting goals. Starting new projects and signing contracts is not advised.'
  ],
  do:['Set goals and establish priorities','Take courses and read professional literature','Work on strategy and action plans','Maintain a positive emotional mindset','Communicate with highly competent people'],
  dont:['Start new projects and business processes','Sign contracts or make financial decisions','Sink into chaos and uncertainty','Criticise and judge those around you'],
  plus:'Mystically favourable day: money, valuable connections and opportunities may arrive. Intuition is heightened.',
  minus:'In a negative mindset — losses and unforeseen expenses. Your state of mind determines everything.',
  mantra:'"My goals are clear. I see the path and walk it with joy and gratitude."',
  ritual:['Write 3 main goals for the coming month in the morning','Meditation or quiet reflection — 10 minutes','Read 1 page of a book in your field','Smile at yourself in the mirror — set your inner state','Avoid news and negative content throughout the day'],
  week:'Goal-setting day. Learn, set goals, stay positive. Do not sign contracts.'
},
5:{
  name:'Day of Communication & Opportunities',tag:'Mercury Day',
  desc:[
    'One of the best days for active interaction with people. New acquaintances, business meetings, networking, social media activity — all deliver maximum return. The more quality communication, the more new opportunities.',
    'Everything hidden becomes visible. It is important to remain honest and open yourself. The key principle — say "yes" instead of entering disputes. The energy of opportunity is blocked wherever there is struggle and resistance.',
    'Signing contracts is not advised — this day is for communication and building connections. Be open, active and easy in your interactions.'
  ],
  do:['Actively communicate, meet people and build connections','Hold business meetings and negotiations','Publish content on social media','Develop personal brand and image','Attend events and networking'],
  dont:['Sign contracts or make large financial transactions','Enter disputes and struggles','Withdraw and avoid communication','Lie or show duplicity'],
  plus:'Scaling through communication, business and personal brand development. New contacts bring real opportunities.',
  minus:'Carelessness and superficiality. Risk of saying too much — everything hidden becomes visible.',
  mantra:'"I am open to the world and people. Every conversation brings me new opportunities."',
  ritual:['Write to 3 people you haven\'t spoken to in a while','Update your social media profile or publish a post','Set an intention: meet someone new today','Dress brightly and stylishly — appearance amplifies the day\'s energy','Say "yes" to offers you would normally put off'],
  week:'Communication day. Talk, network, publish content.'
},
6:{
  name:'Day of Success & Prosperity',tag:'Venus Day',
  desc:[
    'One of the most favourable days for making decisions and taking significant action. The day\'s energy is directed toward creation through harmony. Make decisions from a state of inner confidence, not fear.',
    'A good day for signing contracts, major purchases and launching large-scale projects. Investment inflows are possible. Control your emotions — act with a cool head.',
    'In a negative state, you may feel drawn to comfort, resentfulness or reluctance to move forward. Maintaining discipline is important.'
  ],
  do:['Sign contracts and close agreements','Make large planned purchases','Launch major projects','Make strategically important decisions','Build relationships with warmth','Complete unfinished business'],
  dont:['Show resentfulness or hold grudges','Sink into laziness and passive comfort','Judge and categorise people'],
  plus:'Growth and success in all areas. The possibility of realising a dream and attracting investment.',
  minus:'Laziness, excess, tendency toward passive consumption. Risk of chronic ailments flaring up.',
  mantra:'"Today I act from strength and love. Success and prosperity are my natural state."',
  ritual:['Start the day with a gratitude practice — write 5 things you are grateful for','Dress beautifully — Venus loves aesthetics','Take one important action you have been postponing','Treat yourself to something pleasant — coffee, flowers, good music','Tell your loved ones what they mean to you'],
  week:'Success day. Sign contracts, make purchases. The most favourable day.'
},
7:{
  name:'Day of Inner Work & Transformation',tag:'Ketu Day',
  desc:[
    'A day of deep inner work. Ketu\'s energy is directed inward — this is a time for reflection, spiritual practices, learning and making sense of the path walked. Important business tasks are best postponed.',
    'On this day there is a high chance that active actions will produce no results. It is recommended to remain in a state of inner peace: meditate, practice yoga, read, learn. Intuition is heightened.',
    'Crisis situations on this day serve as catalysts for growth of consciousness. Do not resist transformation — use it as a tool for development.'
  ],
  do:['Engage in spiritual practices, meditation and yoga','Take courses and read','Analyse and reflect on past experience','Rest and restore inner resources'],
  dont:['Start new projects','Sign contracts','Engage in chaotic activity','Have operations or sell real estate'],
  plus:'Heightened intuition, access to deep insights, transformation of consciousness.',
  minus:'Aggression, mental chaos. In a negative state — crisis and depression.',
  mantra:'"I listen to my inner wisdom. Peace is my strength."',
  ritual:['Wake 15 minutes earlier than usual — sit in silence','Yoga or stretching — at least 20 minutes','Write in your journal: what worries you, what you want','Avoid social media for half the day','Evening: light a candle, meditate for 10 minutes'],
  week:'Transformation day. Learn, meditate, rest. Postpone active tasks.'
},
8:{
  name:'Day of Discipline & Results',tag:'Saturn Day',
  desc:[
    'Saturn Day is a day of hard work, discipline and summing up results. The energy rewards those who work systematically and punishes those who are idle. This is a day for work.',
    'A good day to sign contracts. Taking on loans is not recommended. Saturn\'s energy is directed toward karma — you receive what you have sown earlier.',
    'Doubt may arise and a desire to control everything — this is normal. Direct your will toward your own effectiveness, not controlling others. Saturn values humility and diligence.'
  ],
  do:['Work hard and productively','Sign contracts','Learn and acquire new skills','Bring order to your affairs and documents','Analyse results and summarise'],
  dont:['Take loans or financial obligations','Be lazy or postpone tasks','Excessively control others','Lead a dissolute lifestyle'],
  plus:'Practicality, high work capacity. Results of past efforts make themselves known.',
  minus:'Inaction, zone of restrictions. Karmic retribution for past mistakes.',
  mantra:'"My work is my karma. Every action today builds my tomorrow."',
  ritual:['Write a list of 5 tasks — complete all of them','Clean your workspace — order outside creates order within','Decline entertainment until all tasks are done','Write down what you learned this week','Go to bed on time — discipline in small things creates discipline in big things'],
  week:'Work day. Work, learn, sign contracts. Do not take loans.'
},
9:{
  name:'Day of Service & Cycle Completion',tag:'Mars Day',
  desc:[
    'A completion day: things that were started are reaching their end. This is the time to sum up, engage in charity and help others.',
    'The energy of the day carries aggression — it is important not to give in to emotions and remain at peace. Everything that comes through struggle works against you. Act from a state of calm strength.',
    'Unexpected opportunities may emerge. A good day for charity and completing long-term projects.'
  ],
  do:['Complete started projects','Engage in charity and help others','Summarise a period','Serve people without expectation of gratitude'],
  dont:['Sign contracts or start new projects','Make strategic decisions','Give in to emotions and act from aggression'],
  plus:'Completing tasks with dignity, discovering new opportunities, growth through service.',
  minus:'Aggression, unmanaged emotions. Struggle leads to losses.',
  mantra:'"I complete with dignity and open to the new. My service is my strength."',
  ritual:['Write a list of unfinished tasks — complete at least one','Do something kind for another person — selflessly','Clean your home — free up space for the new','Evening: thank the passing day for its lessons','Go to sleep with the intention of starting fresh tomorrow'],
  week:'Service day. Complete tasks and help others. Do not sign contracts or start new projects.'
}
},

MONTHS: {
1:{name:'Month of Start & Leadership',tag:'Sun Month',desc:['A month of starting a new cycle and active leadership. Energy is directed toward creation or destruction depending on your inner state. This is the time to launch new projects, form a vision for years ahead and build strategy.','Many ideas come from different spheres of life. The key is not to scatter your attention but to set priorities and build a clear plan. Cultivate your personal brand and be visible — this month favours those who inspire others.','Signing contracts is not recommended, but beginning processes and launching new habits is good. Be careful of arrogance and unwillingness to listen to others.'],do:['Launch new projects','Build personal strategy and mission','Show leadership','Strengthen personal brand','Form a vision for 9 years ahead'],dont:['Sign contracts','Show arrogance and ego','Live by others\' scripts'],plus:'High start energy, leadership influence.',minus:'Over-ego, unwillingness to listen. Risk of impulsive decisions.'},
2:{name:'Month of Diplomacy & Partnership',tag:'Moon Month',desc:['A month for building and strengthening relationships. There is an opportunity to take existing partnerships to a new level. The month\'s energy favours communication in teams and with loved ones.','Doubts may arise when making decisions — use analysis and take responsibility. Sharp decisions to break off relationships must not be made.','It is recommended to conserve energy and spend time near water. Compromise is the best strategy of the month.'],do:['Build partnership connections','Show flexibility and compromise','Engage in recovery'],dont:['Break off relationships on emotions','Show manipulation'],plus:'Opportunities through relationships and diplomacy.',minus:'Low mood, doubt, manipulation.'},
3:{name:'Month of Analysis & Success',tag:'Jupiter Month',desc:['A month of strategic analysis and high performance. Everything done through systematic analysis will be successful. Time to write plans and audit all spheres of life.','It is good to gain knowledge, attend trainings and develop professionally. A good time for business meetings and purchases.','In the negative — impulse and laziness. Analyse first, then act.'],do:['Analyse all spheres','Compose plans and strategies','Take training','Hold business meetings'],dont:['Act on impulse','Show stubbornness'],plus:'High probability of success for all well-considered actions.',minus:'Impulse, laziness, unwillingness to analyse.'},
4:{name:'Month of Focus & Goal-Setting',tag:'Rahu Month',desc:['A month of transformation and goal-setting. Rahu governs goal-setting and true knowledge. Depending on your state, either positive mystical events or negative ones may occur.','If you are in a resourceful state — expect money and valuable meetings to arrive. In a negative state — chaos and unforeseen expenses.','Setting goals is the main task of the month. Rejoice in life and spread joy to those around you.'],do:['Set clear goals','Work on strategy','Maintain a positive mindset'],dont:['Criticise and judge','Create conflicts'],plus:'A mystically favourable month with the right mindset.',minus:'Chaos, unforeseen expenses in a negative state.'},
5:{name:'Month of Communication & Scaling',tag:'Mercury Month',desc:['A month of active communication and business scaling. The more quality communication, the more opportunities.','A good time for closing commercial deals. Work on your image and personal brand.','In the negative — struggle and confrontation. Hidden things become visible.'],do:['Communicate actively','Close commercial deals','Develop personal brand'],dont:['Enter into struggle','Lie or be dishonest'],plus:'Scaling through communication.',minus:'Confrontation, loss of valuable contacts.'},
6:{name:'Month of Success & Prosperity',tag:'Venus Month',desc:['A month when dreams can come true. Build relationships with warmth — this is the key to success.','Complete what has been started, do not open new fronts. Investment inflows are possible.','Channel energy into creativity and creation. Maintain discipline.'],do:['Complete started projects','Build relationships through care','Engage in creativity'],dont:['Sink into laziness','Show resentfulness'],plus:'Growth, success, realisation of a dream.',minus:'Laziness, excess, passivity.'},
7:{name:'Month of Transformation & Rethinking',tag:'Ketu Month',desc:['A month of deep transformation. If you are in a resourceful state — you rise to a new level. If in a negative state — crisis.','It is recommended to be maximally disciplined in body and mind. Walk at least 12 km per day.','Destroy old limiting beliefs. Listen to your intuition.'],do:['Practice body and mind discipline','Engage in spiritual practices','Develop intuition'],dont:['Have surgical operations','Sell real estate'],plus:'Transformation of consciousness, rise to a new level.',minus:'Crisis, depression, chaos.'},
8:{name:'Month of Discipline & Achievements',tag:'Saturn Month',desc:['The strongest month of the year. A month of hard work and receiving results. Direct all of the year\'s work into this month.','Taking loans is not allowed. A month of asceticism — maximum focus on work.','Throw out the unnecessary not only from your home but from your life.'],do:['Work and learn to the maximum','Sum up results','Maintain discipline'],dont:['Take loans','Lead an idle lifestyle'],plus:'Receiving results of years of work.',minus:'Idleness, zone of restrictions.'},
9:{name:'Month of Service & Completion',tag:'Mars Month',desc:['A month of completing the cycle and serving people. It is better not to plan important strategic matters.','Monitor your emotional background. The main task is to recognise your fears and transform them.','Be sure to give attention to your health. Direct energy toward service without expectation of gratitude.'],do:['Serve people','Attend to health','Complete long-term projects'],dont:['Plan large-scale new ventures','Expect gratitude'],plus:'Completing the cycle with dignity.',minus:'Aggression, fears, instability.'}
},

YEARS: {
1:{name:'Year of Start & Leadership',tag:'Sun Year · Beginning of a New Cycle',desc:['You are entering a new nine-year cycle. This is a year of leadership, courage and independence. Time to step forward, take responsibility and act. The bolder your steps now, the stronger the foundation for the next 8 years.','Launch new projects even in the absence of ideal conditions. Form a vision for 9 years ahead: mission, goals, strategy. Make decisions independently, without looking at others\' opinions.','Strengthen your confidence, charisma and personal influence. Work through the fear of being visible. Leadership should inspire, not suppress.'],do:['Launch new projects','Form a vision for years ahead','Work on confidence and charisma'],dont:['Live by others\' expectations','Suppress others'],plus:'Powerful start impulse, leadership influence.',minus:'Egocentrism, unwillingness to listen, impulsiveness.',mantra:'"I create my own life. I am the leader of my path."'},
2:{name:'Year of Partnership & Connections',tag:'Moon Year · Year of Diplomacy',desc:['A year of building and deepening relationships. Opportunities arrive through people and partnerships, not through solitary actions.','There is an opportunity to build new valuable partnerships or take existing ones to a new level.','In the negative — low mood and doubt. Sharp decisions to break off relationships must not be made.'],do:['Build and deepen partnerships','Show diplomacy','Find compromise'],dont:['Break off relationships on emotions','Show manipulation'],plus:'Opportunities through relationships.',minus:'Low mood, doubt.',mantra:'"My relationships are my strength. I build bridges, not walls."'},
3:{name:'Year of Strategy & Growth',tag:'Jupiter Year · Year of Analysis',desc:['A year of systematic analysis and high performance. Everything built through planning will yield results.','A favourable year for business meetings and learning. Pay special attention to health.','In the negative — impulse and laziness. Analysis first — then action.'],do:['Conduct strategic analysis','Learn','Make business deals'],dont:['Act on impulse','Be lazy'],plus:'High probability of success for all well-considered actions.',minus:'Impulse and laziness.',mantra:'"Analysis is my tool. Systematic approach is my result."'},
4:{name:'Year of Focus & Goal-Setting',tag:'Rahu Year · Year of Goal-Setting',desc:['A year of transformation through goals. Rahu governs goal-setting and true knowledge.','Learn to distinguish priority goals from secondary ones. Communicate with highly competent people.','Set goals and bring order. Rejoice and spread joy to those around you.'],do:['Set clear priority goals','Gain knowledge'],dont:['Criticise','Create chaos'],plus:'With the right mindset: money, meetings, opportunities.',minus:'With a negative mindset: chaos, unforeseen expenses.',mantra:'"My goals are clear. I act according to priorities."'},
5:{name:'Year of Communication & Scaling',tag:'Mercury Year · Year of Communications',desc:['A year of active communication and business scaling. The more quality communication, the more opportunities.','Learn to achieve goals through effective means. Work on your image and personal brand.','In the negative — confrontation. Approach everything through the lens of communication and business.'],do:['Communicate actively','Scale business','Develop personal brand'],dont:['Enter into struggle','Show dishonesty'],plus:'Scaling through communication.',minus:'Confrontation, struggle.',mantra:'"My communication creates opportunities. I am open to the world."'},
6:{name:'Year of Success & Prosperity',tag:'Venus Year · Year of Success',desc:['A year of success through harmony and creation. Success comes through unconditional treatment of people.','Investments and the realisation of long-held dreams may arrive. Act with a cool head.','In work — complete what has been started. The year is favourable for creativity.'],do:['Build relationships through care','Accept investment opportunities','Complete started projects'],dont:['Show resentfulness','Sink into laziness'],plus:'Success, prosperity, realisation of a dream.',minus:'Laziness, excess, passivity.',mantra:'"I attract success through inner abundance and harmony."'},
7:{name:'Year of Transformation & Rethinking',tag:'Ketu Year · Year of Transformation',desc:['A year of deep transformation of consciousness. Crises this year are catalysts for growth.','A year of asceticism and discipline. Walk at least 12 km per day. Intuition is well developed.','Destroy old limiting beliefs. Develop consciousness.'],do:['Practice body and mind discipline','Engage in spiritual practices','Develop intuition'],dont:['Have operations','Sell real estate'],plus:'Transformation of consciousness, rise to a new level.',minus:'Crisis, depression, chaos.',mantra:'"I transform and rise to a new level of consciousness."'},
8:{name:'Year of Discipline & Achievements',tag:'Saturn Year · Year of Hard Work',desc:['The strongest year in the cycle. A year of harvesting the fruits of years of work. You receive what you have sown.','Taking loans is not allowed. A year of asceticism — maximum focus on work.','Control others less. Throw out the unnecessary from your life.'],do:['Work and learn to the maximum','Sum up results','Maintain discipline'],dont:['Take loans','Lead an idle lifestyle'],plus:'Receiving results of years of work.',minus:'Karmic retribution for past mistakes.',mantra:'"My work and knowledge are my eternal capital."'},
9:{name:'Year of Service',tag:'Mars Year · Year of Completion',desc:['A year of completing the nine-year cycle. Time to serve people and draw global conclusions.','Watch your health. The emotional background is unstable — keep yourself in check.','Direct your forces toward service without expectation of gratitude. Enter the new cycle with a fresh start.'],do:['Serve people','Attend to health','Sum up the cycle'],dont:['Plan large-scale new projects','Expect gratitude'],plus:'Completing the cycle with dignity.',minus:'Aggression, fears, instability.',mantra:'"I serve the world and complete the cycle with dignity and gratitude."'}
},

PERSONALITY: {
1:`When describing a personality it is important to understand that every person can be in two states: in the plus (positive) or in the minus (negative). In the plus, a person has one set of qualities; in the minus, the opposite set. Your realisation in life depends directly on which state you are in.\n\nYou are a strong personality. Independent, self-reliant and ambitious. Your vector of consciousness is directed solely toward yourself. You dislike being told what to do and how. Your inner motto: "I already know everything." You are a pioneer — you go where others fear to tread.\n\nIn the plus (positive emotions): independence, courage, determination, confidence. In the minus (negative emotions): egoism, aggression, domineering behaviour, despotism.\n\nFor successful self-realisation you need to work on your own egoism!`,
2:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYou are a subtle psychologist. You can sense people. Your consciousness vector is directed toward understanding others. You have a gift — to understand people and situations better than others. You can become an excellent diplomat, psychologist or mediator.\n\nIn the plus: understanding, diplomacy, intuition, gentleness. In the minus: depression, doubt, duplicity, manipulativeness.\n\nFor successful self-realisation you need to learn to understand other people!`,
3:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYou are a born mentor and analyst. Your consciousness vector is directed toward analysis and management. You are very intelligent, rational and fair. Knowledge and intellect are your main assets.\n\nIn the plus: analytical mindset, mentorship, fairness, wisdom, intellect. In the minus: coldness, calculation, harshness, injustice.\n\nFor successful self-realisation you need to develop the wisdom of a mentor!`,
4:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYou are a person with creative thinking, an innovator, transformer and fighter for justice. You are very kind. You are born to give and it is important to you that everything is fair. Your consciousness vector is directed toward finding goals. In your activities, freedom and creativity are important — you do things your own way, unconventionally.\n\nYou feel most comfortable in stability. In the minus: dissatisfaction, destruction of what has been built, detachment, apathy.\n\nFor successful self-realisation you need to study the laws of positive thinking!`,
5:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYour logic, mind and intellect work excellently — you act from reason, not emotional impulse. Freedom is more valuable to you than money. You have high communication skills, so in trade and business you have no equal. You are kind, but cool.\n\nYour consciousness vector is directed toward logic: right/wrong, logical/illogical. You generally have refined taste and a sense of style.\n\nBecause you have a fine aura, you are very easy to offend. Your task is to increase love.`,
6:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYou are a diamond of society. The Creator has given you energies of wisdom and sexuality. Compared to others, you easily attract investments and receive material goods.\n\nYour consciousness vector is directed toward personal comfort, love and sensuality. Your soul realises itself through creativity. You are youthful, courteous, love luxury and are artistic.\n\nIn the minus: resentfulness, carelessness in relationships.`,
7:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nFrom birth you have charisma, 100% intuition and sexual energy. Your consciousness vector is directed toward recognition of your actions. If you work on yourself and raise your energy to your mind — you become a genius.\n\n97% of all your energy is concentrated in the first chakra, so if it is not raised to the mind, qualities such as mental chaos, inattentiveness will manifest.\n\nFor successful self-realisation you need to live in discipline of the mind!`,
8:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYou have qualities such as: control, meticulousness, materialism and realism. Your consciousness vector is directed toward control of the material world. Your soul realises itself through work — the harder the work, the clearer the mind.\n\nIn the minus: doubt, mistrust of society, total control, idleness and solitude.\n\nFor successful self-realisation you need to move away from control and come to serving people!`,
9:`When describing a personality it is important to understand that every person can be in two states: in the plus or in the minus. Your realisation in life depends directly on which state you are in.\n\nYou are a person of action with a highly emotional, rather impulsive character. Your consciousness vector is directed solely toward victory.\n\nIn the plus: swiftness, athleticism, dynamism, a warrior spirit. In the minus: rage, paranoia, naivety.\n\nFor successful self-realisation you need to move away from emotions and act from reason!`
},

MISSION_TEXT: {
1:'You have excellent organisational skills. You strive for power, leadership and recognition. You seek to earn money through power. It is very important to you that the last word always remains yours. Your task — to pass on the knowledge of strategy to others without binding them to yourself.',
2:'Your actions are filled with eternal doubts. Actions are dual — you lose time while doubting (do/don\'t, agree/disagree, etc.). A mission of small but constant opportunities. Your task — build correct sequential steps and act!',
3:'You often strive to gain benefit through analysis. This is the most effective mission because it has no "friendship of nations", only analysis. At the same time, these are the most dangerous people as they build their actions on calculation. Your task — with wisdom and love, create opportunities for other people.',
4:'You feel an incredible drive to pass on knowledge. If this does not happen — you feel dissatisfied. You seek something new and strive for transformation. When you pass on true knowledge, the sails of your financial success fill with wind.',
5:'You often feel a drive toward struggle in your actions, and struggle leads to energy loss, which means money loss. You feel a desire to go against the current. Your first word is "no". If you move away from struggle — enormous opportunities will open. Watch your inner harmony!',
6:'In your actions you generally try to ensure convenience and comfort in everything. You feel a drive toward rest, pleasure and love. You do not want to toil but want to enjoy — egoism for yourself. It is important for you to realise yourself in creativity — otherwise you risk burning through your life in vain.',
7:'You have a strong drive toward self-assertion. A self-confident person who wants to prove their worth to everyone. You can realise yourself in any sphere and reach great heights if you learn to act through strategy and justification.',
8:'Solitude does not oppress you in the least — in it you feel comfortable. Finance is not your main goal — you are more of a person of ideas. You value yourself highly. Obstacles always appear on your life path, and for you this is completely normal. Your motto: "I rest at work." You have high work capacity, so your mind is constantly at work.',
9:'You feel a drive to emotionally help someone. You have the most responsible, most noble and most dangerous mission. Your life motto should be: "Do good and throw the key in the water. Don\'t wait for anything in return." Act through analysis.'
},

TRIGGERS: {
1:['People don\'t do what I want','Break down from disagreement','Don\'t respond to requests','When someone stands their ground','Don\'t take criticism or jokes','Get irritated when people don\'t take responsibility','Irritated by whiners, weak, slow people','Independence — those who leave patronage','Another person\'s success','Cannot stand being taught how to live','When not listened to in conversation','When authority is not recognised','Limitation of personal space','When the laws of 1 are violated','When not served','When not the centre of attention','When argued with'],
2:['When not understood','When too little attention is given','When no feedback is provided','When mood is not shared','Irritated by having to explain at length yet still not understood','When rushed or pushed','When rushed into making decisions','When 2s are made guilty','When told "Decide yourself"','When caught in manipulation','When there\'s no clarity and specifics','Irritated by arrogant, proud people','Being ignored','Coldness in relationships','Rudeness'],
3:['Irritated by stupidity','Irritated by chaos','When their instructions are violated','When taught without being asked','When care and advice are not appreciated','Tactlessness irritates','Empty talk irritates','Injustice toward me irritates','Irritated by whiners and bores','Competition','Empty waste of time irritates'],
4:['When dishonest (violate agreements, deceive, act hypocritically)','Dislike idlers, whiners, victims','Monotony and routine','Encroachment on property without permission','Wasting time','When interrupted','When put in boxes or restricted','When stopped from dreaming','Hypocrisy, flattery','Unpunctuality','When ideas and goals are not supported','Dislike greed','When used'],
5:['Inconsistent in their actions','When 5 realises they are being manipulated or controlled','Restriction of freedom: deadlines, control','When not understood the first time','When people don\'t think on a large scale','Monotony and routine irritates','Slowness, inefficiency','Irritated by unstylish, unclean people','Intrusiveness, clinginess','When money is not in their hands','When told how to do things'],
6:['When not comfortable','When plans are disrupted','Lack of tactile contact','When people lecture','Requirement to be disciplined','When there\'s a fuss','When dirty, tasteless, ugly','Lack of love','When not allowed to sleep','Lack of intimacy','Conflict situations and high emotional tension'],
7:['Act better than 7','Think better than 7','Non-recognition','When 7s are not noticed','Weak-spirited people','When people don\'t develop','Laziness irritates','When not the centre of attention','Greed irritates','When genius ideas are not recognised','Public humiliation, criticism'],
8:['Those who don\'t see a path to earning','Poor people','Slow people','Dreamers with their head in the clouds','People who can\'t be taught','Those who devalue work','Undisciplined, untidy people','Those who don\'t follow rules','Irritated by queues and loss of time','Chaos and irrational use of resources','When 8s themselves are controlled','Unpunctuality'],
9:['When not thanked for help','Those who don\'t need help, who devalue it','Irritated by egoists','Unresponsive, unsupportive people','Weaklings, the slow','When the winner\'s spot is unattainable','Dishonest and insincere people','When the weak are hurt','Other people\'s victories','Refusals, the word "no"']
},

HOW_TO: {
1:`• Say "no" to perfectionism. Work with what you have now — make "choice" your habit.\n• Make decisions\n• Develop strategy and act according to it\n• Take responsibility and show initiative more often`,
2:`• Visit the theatre twice a month paying attention to actors' emotions\n• Visit 5 religious confessions and try to understand people through religion\n• More often go toward compromise in relationships\n• Ask people deep questions: "Did I understand you correctly?"\n• Study psychology in general`,
3:`• Keep a planner/diary. Plan your day on paper in the morning, analyse in the evening.\n• Make a plan for the week / month / year and analyse at the end of the period.`,
4:`• Do the "Wheel of Life Balance" practice to help you define life priorities and goals.`,
5:`• Write down 5 people toward whom you hold a grudge or whom you have hurt. Call and ask for forgiveness.\n• Don't close in on yourself — go to people. Communicate, get acquainted, build communication.\n• Daily communicate with people above you in level of success and income.\n• Develop an oral "business card" — a 30-second, 1-minute and 3-minute self-presentation.`,
6:`• Read the book "The 5 Love Languages"\n• Contemplation of beauty: watch sunrises and sunsets\n• Daily do a "Gratitude Practice"\n• Keep a "Success Diary" (record even minor victories and joys)\n• Complete started tasks`,
7:`• Raise your kundalini energy: practice yoga, sports, dance. Heart rate should be around 130 bpm`,
8:`• Build experience in your field (about 1000 hours)\n• Avoid laziness and procrastination — don't put things off`,
9:`• Take care of your health: sport, massage, nutrition`
},

PROF_BEFORE33: {
1:{type:'Strategist · Strategic Thinking',institutes:'Management, Economics & Finance, Political Science & Public Administration, Entrepreneurship & Startups, Corporate Law, International Law, Leadership Psychology, Public Speaking'},
2:{type:'Diplomat · Empathetic Thinking',institutes:'Psychology & Psychotherapy, International Relations & Diplomacy, Mediation & Conflict Resolution, HR Management, Social Sciences & Communications, Cultural Studies, Linguistics'},
3:{type:'Analyst · Analytical Thinking',institutes:'Data Analysis, Financial Analytics, Economics & Statistics, Business Analytics, Accounting, IT & Programming, Mathematics, Medicine, Systems Engineering, Robotics'},
4:{type:'Innovator · Creative Thinking',institutes:'Marketing & Advertising, Media & Communications, Journalism, Art & Creative Industries, Directing, Technology & IT, Entrepreneurship & Innovation'},
5:{type:'Business Logic · Logical Thinking',institutes:'Business & Entrepreneurship, Logistics & Supply Chain, Programming, IT & Automation, PR, Engineering, Mathematics & Physics, Fashion, Style & Aesthetics'},
6:{type:'Corporate Culture · Creative Thinking',institutes:'Art & Design (Architecture, Interior, Clothing, Jewellery), Finance & Investment, Fine Arts, Tourism & Hospitality, Luxury Management, Psychology of Emotions, Luxury Real Estate'},
7:{type:'Technologist · Intuitive Thinking',institutes:'Crisis Management, Risk Management, Alternative Medicine & Yoga, Spiritual & Philosophical Studies, Innovative Entrepreneurship, Cognitive Psychology & Neuroscience, Ecology, Law'},
8:{type:'Control · Practical Thinking',institutes:'Finance, Credit & Management (Audit, Accounting), Investment Analysis, Real Estate Management, Quality Control (ISO), Operational Management, Industry Security, Tax Law'},
9:{type:'Social Support · Tactical Thinking',institutes:'Sports & Physical Education, Military Sciences & Security, Medicine & Surgery, Intensive Care, Project Management, Event Management, Social Work, Theatre & Cinema'}
},

PROF_MISSION: {
1:{competence:'Strategist. Competence in building and implementing strategy',industry:'Management of all resources',activity:'Management / strategy / career counselling / leadership'},
2:{competence:'Diplomat. Competence in diplomacy, understanding relationships and situations, conflict management',industry:'Diplomacy and management of interpersonal relationships',activity:'Building relationships / mentoring / coaching / business connections'},
3:{competence:'Analyst. Competence in analysis, systematic management, finance and credit',industry:'Analysis and management of statistics and information',activity:'Analysis, systematisation, management / education / training / mentoring / statistics'},
4:{competence:'Innovator. Competence in goal-setting and achievement. Knowledge (education), creative thinking',industry:'Innovation, creative industry',activity:'Goal definition and setting / marketing / innovation, creativity / knowledge transfer'},
5:{competence:'Business Logic. Competence in identifying market needs (value). Correct sequential actions',industry:'Communication management. Technical intelligence',activity:'Identifying product value / sales / logistics / entrepreneurship / service'},
6:{competence:'Corporate Culture. Competence in creating a corporate environment, trusted relationships and improving service quality. HR',industry:'Creative, corporate culture',activity:'Service / psychology / creating comfort and creativity / HR'},
7:{competence:'Technologist. Competence in technological processes and developing solutions for their improvement',industry:'Innovative development and implementation',activity:'Fast and precise implementation of goals / technology / innovation'},
8:{competence:'Control. Competence in creating regulations to achieve target indicators (results control)',industry:'Regulation and labour discipline',activity:'Control of production / creative processes and resources / quality control / QC'},
9:{competence:'Social Support. Competence in uniting people and ideas for the promotion of common goals (value)',industry:'Security and management of social projects',activity:'Idea generation and promotion / charity / security / production'}
},

ENERGY_LABELS:{1:'Decision-making, psychic energy',2:'Understanding and sensitivity',3:'Analysis, goal realisation mechanism',4:'Goal / idea / ancestral knowledge',5:'Adequate communication',6:'Wisdom, sense of happiness',7:'Kundalini energy / divine fuel',8:'Work / experience from past life',9:'Action energy / opportunities'},

CS_NAMES:{1:'Leader',2:'Psychologist',3:'Mentor',4:'Innovator',5:'Communicator',6:'Creator',7:'Technologist',8:'Realist',9:'Warrior'},
DOBROTAS:{1:'Generous (should become purposeful)',2:'Mystical (should become caring)',3:'Cold (should become kind)',4:'The kindest (should become kindness through analysis)',5:'Unknown (should become unconditional love)',6:'Selective (should become kindness through spirituality)',7:'Aggressive (no kindness, only aggression)',8:'Egoistic (should become responsive)',9:'"You scratch my back" (should become generous)'},
SOUL:{1:'Through leadership or autonomous work',2:'Through relationships',3:'Through mentorship',4:'Everywhere through creativity',5:'Through technical intelligence',6:'Through creativity',7:'Everywhere through yoga and body discipline',8:'Through work (any environment)',9:'Through an idea'},
EGO_VEC:{1:'Only toward oneself',2:'Toward understanding another person and the situation',3:'Toward analysis and management',4:'Toward seeking a goal',5:'Toward logic',6:'Toward one\'s own comfort',7:'Toward recognition of actions',8:'Toward control and results',9:'Toward victory'},
WANTS:{1:'Power, independence, recognition of significance',2:'Understanding, relationships',3:'To analyse, manage, care',4:'Honesty, achieving goals, creativity',5:'Freedom, personal benefit',6:'Comfort, love, pleasure',7:'Recognition of actions, rapid realisation of ideas',8:'To control the material world, results',9:'To help, adventure, victory'},
GOAL_CS:{1:'Material (power, career, money)',2:'Moral-karmic (relationships)',3:'Material (analysis, management)',4:'Moral-karmic (building relationships)',5:'Cool communication (for business)',6:'Moksha (releasing sexual energy, comfort)',7:'Spiritual (development and nourishment for the soul)',8:'Material (money, real estate)',9:'Moral-karmic (relationships)'},
EGO_JOY:{1:'Own individuality and realisation of ego',2:'Relationships with mutual understanding',3:'Mentorship and acquiring knowledge',4:'What one gives away',5:'Freedom, realisation of technical intelligence, communication',6:'Own comfort',7:'Recognition',8:'Counting money, control, results',9:'Victories and the process of battle'},
DESTROY:{1:'Inability to acquire individuality, own conservatism',2:'Misunderstanding, constant doubts, deep perfectionism',3:'If not realised in mentorship, injustice',4:'Inability to express creativity, dishonesty',5:'Loss of freedom, absence of logic',6:'Elevated emotions, absence of comfort',7:'Absence of recognition, if kundalini energy is not raised',8:'Absence of results, excessive control',9:'Elevated emotions, absence of an idea, own adventurism'},
DISEASES:{1:'Heart diseases',2:'Kidney and urogenital diseases',3:'Liver diseases',4:'Nervous system diseases',5:'Skin diseases, allergies',6:'Diabetes mellitus, kidney diseases',7:'Reproductive system diseases',8:'Bone system diseases',9:'Injuries, surgical interventions'},
PLUS_CS:{1:'Independence, courage, determination, confidence, initiative, organisational skills',2:'Understanding, diplomacy, intuition, gentleness, ability to listen and sense people',3:'Analytical mindset, mentorship, fairness, wisdom, intellect, management ability',4:'Creativity, honesty, kindness, transformational thinking, defending the weak, initiative',5:'Logic, sociability, style, large-scale thinking, adaptability, business acumen',6:'Wisdom, creativity, sexuality, attracting investments, artistry, attractiveness',7:'Charisma, intuition, rapid realisation of ideas, genius, mental discipline, sexual energy',8:'Diligence, objectivity, practicality, meticulousness, materialism, high work capacity',9:'Swiftness, warrior spirit, dynamism, drive to help, idealism, persistence'},
MINUS_CS:{1:'Egoism, aggression, domineering behaviour, despotism, unwillingness to listen, suppression of will',2:'Depression, doubt, duplicity, manipulativeness, indecisiveness, dependence on others\' opinions',3:'Coldness, calculation, harshness, injustice, competitiveness, lack of empathy',4:'Dissatisfaction, destruction of what was built, detachment, apathy, indecisiveness, depression',5:'Struggle, disagreement, touchiness, carelessness, being emotionally cold, moving into confrontation',6:'Resentfulness, laziness, carelessness in relationships, envy, suffering because of love',7:'Mental chaos, aggression, overconfidence, no middle ground, suicidality',8:'Total control, mistrust, idleness, solitude, doubt, inability to delegate',9:'Rage, paranoia, naivety, emotional burnout, leaving things unfinished'},
MISSION_PLUS:{1:'Leadership, patronage, protection',2:'Diplomatic actions through understanding',3:'Fair benefit and management',4:'Creative, honest actions, knowledge transfer',5:'High communication ability',6:'Creative actions directed at people\'s development through creativity',7:'Coordinated transformation',8:'High work capacity, constant effort day by day',9:'Service and benefit to society, helping people at the emotional level'},
MISSION_MINUS:{1:'Aggression, suppression of others\' will, despotism',2:'Misunderstanding, duality, duplicity, low mood',3:'Self-serving calculation and impulse',4:'Negative transformation, fraudulent actions',5:'Struggle, disagreement, creating antisocial situations',6:'Sinking into depression and suffering because of love, resentfulness',7:'Creating crisis, misunderstanding, self-confident unjustified actions, illusion',8:'Solitude, idleness',9:'Self-torment, emotional burnout'},
MISSION_GOAL:{1:'Material (power, career)',2:'Moral-karmic',3:'Material (analysis, benefit, fair management)',4:'Moral-karmic',5:'Cool communication',6:'Moksha (personal comfort)',7:'Spiritual communication',8:'Material (money, real estate)',9:'Moral-karmic (relationships)'},
COLOR_CS:{1:'Yellow',2:'Silver',3:'Orange',4:'Grey-brown',5:'Green',6:'Lilac',7:'Grey-lilac',8:'Black/dark blue',9:'Red'},
COLOR_CLOTHES:{1:'Red, white',2:'White, light green',3:'Yellow',4:'Green, blue, grey',5:'Green, blue',6:'Pink, turquoise, light blue',7:'Green, grey, blue',8:'Blue, light blue',9:'Red, brown, pink'},
COLOR_WALLET:{1:'Silver',2:'Yellow',3:'Red',4:'Grey-lilac',5:'Green',6:'Lilac',7:'Grey-brown',8:'Lilac',9:'Orange'},
WEEK_DAYS:{1:'Sunday',2:'Monday',3:'Thursday',4:'Thursday',5:'Wednesday',6:'Friday',7:'Friday',8:'Saturday',9:'Tuesday'},

DOW:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
MONTHS_SHORT:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

UI:{
  logo_title:'Personal Energy Calendar',
  logo_sub:'Digital Consulting',
  theme_dark:'Dark theme',
  theme_light:'Light theme',
  lang_switch:'Language',
  input_title:'Enter your date of birth',
  input_sub:'Get your personal energy for today and recommendations for the week ahead',
  btn_calc:'Calculate',
  today_prefix:'Today:',
  section_today:'Your energy indicators for today',
  label_year:'Personal Year',
  label_month:'Personal Month',
  label_pday:'Personal Day',
  label_cday:'Universal Day',
  warn_text:'<strong>Warning — 10th, 20th or 30th of the month.</strong> This day carries an elevated risk of nullifying results. It is not recommended to start new projects, sign contracts, take loans or make large purchases. Use the day for analysis, planning and inner work.',
  section_pday:'Energy of the Personal Day',
  section_cday:'Energy of the Universal Day',
  section_month:'Energy of the Personal Month',
  section_year:'Energy of the Personal Year',
  section_week:'Recommendations for the week ahead',
  rec_do:'Recommended',
  rec_dont:'Not recommended',
  plus_label:'In the positive',
  minus_label:'In the negative',
  mantra_label:'Mantra of the Day',
  mantra_year_label:'Mantra of the Year',
  ritual_label:'Morning Ritual',
  week_detail_personal:'Personal day',
  week_detail_universal:'Universal day',
  week_detail_mantra:'Mantra of the day',
  week_detail_rec:'Recommended',
  week_detail_avoid:'Avoid',
  week_warn:'day of the month — do not start new ventures, sign contracts or take loans',
  psycho_title:'Personality Psychoanalysis',
  psycho_sub:'Enter name and date of birth for a personal analysis',
  psycho_name_ph:'Client name',
  psycho_dob_ph:'DD.MM.YYYY',
  psycho_btn:'Get analysis',
  psycho_link_btn:'🔗 Create link',
  cs_label:'Personality Number',
  mission_label:'Mission',
  back_btn:'← Cabinet',
  copy_link:'Copy link',
  close:'Close',
  link_ready:'Link is ready ✦',
  link_send_to:'Send this link to',
  link_send_client:'the client',
  link_valid:'The link is valid indefinitely and opens on any device',
  link_copied:'Copied ✓',
  limit_text_prefix:'Used',
  limit_text_middle:'of',
  limit_text_suffix:'free analyses',
  limit_exhausted_title:'Free limit exhausted',
  limit_exhausted_sub:'You have used all free psychoanalyses. For full access please contact the administrator.',
  back_cabinet:'← Return to cabinet',
  s_prof_before33:'Professional orientation up to age 33',
  s_prof_mission:'Professional orientation by mission',
  s_compat:'Compatibility by personality number',
  s_colors:'Colours and symbols',
  s_matrix:'Number matrix',
  s_active_lines:'Active lines in your matrix',
  s_no_lines:'Lines in the matrix',
  s_no_lines_text:'Your matrix has no complete lines. This means all qualities develop through life experience and conscious self-work.',
  s_energies:'Energies in the matrix',
  s_how_to:'How to develop absent energies',
  s_triggers:'Triggers — what irritates',
  s_general_rec:'General recommendations',
  present:'✓ Present',
  absent:'✗ Absent',
  present_energies:'Present energies',
  absent_energies:'Absent energies',
  all_energies:'✅ All energies are present!',
  compat_best:'Best:',
  compat_good:'Good:',
  compat_neutral:'Neutral:',
  compat_bad:'Negative:',
  color_num:'Personality number colour',
  color_clothes:'Clothing colour palette',
  color_wallet:'Wallet / bag colour',
  lucky_day:'Your day of the week',
  matrix_hint:'Numbers present in the date of birth are highlighted in gold',
  dobrata:'Kindness',
  soul_real:'Soul realises through',
  ego_vec:'EGO vector directed',
  cs_wants:'Personality number wants',
  cs_goal:'Goal of the personality number',
  ego_joy:'EGO enjoys',
  destroys:'Destroyed by',
  diseases:'Diseases when EGO suffers',
  proftype:'Personality type',
  rec_spheres:'Recommended spheres',
  competence:'Personality / Competence',
  industry:'Industry / Need',
  activity:'Activity',
  s_char:'Characteristics',
  s_plus_minus:'In the positive and in the negative',
  s_destroy:'Destroyed by',
  analysis_sub:'Personal analysis · Digital Consulting',
  personal_analysis:'Personal Analysis',
  gen_rec_1:'Strive to fulfil your Life Task and do not divide people',
  gen_rec_2:'Drink warm water up to 45°C (1 litre per 30 kg of body weight)',
  gen_rec_3:'Walk at least 6 km per day at 5 km/h and above',
  gen_rec_4:'Consume sour fruits and vegetables throughout the day (produce serotonin — the "happiness hormone")',
  gen_rec_5:'Have breakfast 1 hour after walking (preferably fruit)',
  gen_rec_6:'Visit a bathhouse at least twice a week',
  gen_rec_money:'Money:',
  gen_rec_money_text:'work, eat and talk on the phone facing north. Sleep with your head to the south, feet to the north. Keep your safe and cash in the northern part of the room',
  gen_rec_contracts:'Contracts:',
  gen_rec_contracts_text:'read facing north, then turn your body to the east and sign'
}
},

/* ══════════════════════════════════════════════════════════════
   ҚАЗАҚША (KZ)
══════════════════════════════════════════════════════════════ */
kz: {

DAYS: {
1:{
  name:'Бастама және көшбасшылық күні',tag:'Күн күні',
  desc:[
    'Жоғары жеке энергия мен көшбасшылық потенциалы бар күн. Жаңа бағыттар, бастамалар мен процестер іске қосу үшін ең өнімді күндердің бірі. Күннің энергиясы қуатты және саналы басқаруды талап етеді — ол жасампаздыққа немесе жоюшылыққа бағытталады.',
    'Стратегиялық күйде болыңыз: тыныш жоспар құрыңыз, мақсаттар белгілеңіз және алғашқы қадамдар жасаңыз. Импульстік шешімдерден және басқаларды басып-жаншудан аулақ болыңыз — бүгінгі көшбасшылық шабыттандыруы керек, жаншымауы керек.',
    'Бұл күннің күшін барынша пайдаланыңыз: ұзақ уақыт бойы жоспарлаған нәрсені бастаңыз. Бүгінгі іс-қимылдар неғұрлым батыл және саналы болса, болашақ дамудың іргетасы соғұрлым берік болады.'
  ],
  do:['Жаңа жобалар мен бастамаларды іске қосу','Стратегия мен ұзақ мерзімді жоспар жасау','Көшбасшылық қасиеттерін көрсету және жауапкершілік алу','Ұзақ уақыт бойы кейінге қалдырылған процестерді бастау','Жеке позициялау мен брендке жұмыс жасау'],
  dont:['Шарттарға және қаржылық келісімдерге қол қою','Басқалар есебінен эгоизм мен өзін-өзі дәлелдеуге беріну','Стратегиясыз ірі шешімдерді импульстік түрде қабылдау','Басқалардың күтулері мен сценарийлері бойынша өмір сүру'],
  plus:'Жоғары өнімділік, көшбасшылық ықпал, шабыттандыру қабілеті. Бастаған барлық нәрсе күшті серпінге ие болады.',
  minus:'Эгоцентристік мінез-құлық және басқаларды басып-жаншу қаупі. Импульстілік ұзақ уақыт бойы салынған нәрсені бұза алады.',
  mantra:'«Мен шешімдерді күш пен жауапкершілікпен қабылдаймын. Бүгін мен өз өмірімнің авторымын»',
  ritual:['Ерте тұрыңыз — таңертең 7-ге дейін. Бұл сіздің күш сағатыңыз','Бүгінгі 1 негізгі мақсатты жазып алыңыз — ірі, нақты','10 минут тыныштықта — күніңізді елестетіңіз','Лимонды жылы су ішіңіз — зат алмасуды іске қосыңыз','Қатты айтыңыз: «Бүгін мен жасаймын, жоймаймын»'],
  week:'Бастама күні. Жаңа істер бастаңыз, бастама жасаңыз. Шарттарға қол қоймаңыз.'
},
2:{
  name:'Дипломатия және серіктестік күні',tag:'Ай күні',
  desc:[
    'Қарым-қатынасты орнату және сақтауға қабілеттілік шешуші рөл атқаратын күн. Күннің энергиясы қарым-қатынасқа, ынтымақтастыққа және дипломатияға бағытталған. Бұл серіктестік байланыстарын нығайтатын уақыт.',
    'Бұл күні күмән пайда болуы немесе қарым-қатынасты нақтылауға деген ұмтылыс туындауы мүмкін — эмоция ықпалымен өткір шешімдер қабылдамаңыз. Кез келген шиеленісті диалог, иілгіштік пен компромисс арқылы шешу жақсы.',
    'Белсенді қозғалыста болу ұсынылады: серуен, дене еңбегі және басқаларға көмек энергетикалық балансты сақтауға мүмкіндік береді.'
  ],
  do:['Іскери және жеке қарым-қатынасты орнату және нығайту','Диалог пен өзара сыйластық арқылы келіссөз жүргізу','Серіктестерді тыңдау және икемділік танытуу','Басқаларға көмектесу және ортаңызға пайдалы болу','Дене белсенділігі: серуен, белсенділік'],
  dont:['Маңызды стратегиялық шешімдерді дербес қабылдау','Эмоция ықпалымен іскери және жеке қарым-қатынасты үзу','Екіжүзділік пен манипуляция жасау','Күмән мен депрессивті көңіл-күйге беріну'],
  plus:'Ортақ тіл табу, серіктестік орнату қабілеті. Мүмкіндіктер қарым-қатынас арқылы келеді.',
  minus:'Депрессивтілік, күмән, іс-әрекет жасауға деген жалқаулық. Эмоционалды шешім нәтижесінде маңызды байланыстарды бұзу қаупі.',
  mantra:'«Мен қарым-қатынасты сыйластық пен түсіністік арқылы орнатамын. Маңайымдағы әлем — менің одақтасым»',
  ritual:['Күнді ризашылықпен бастаңыз — сізге көмектескен 3 адамды еске алыңыз','Маңызды біреуге қоңырау шалыңыз немесе хабар жіберіңіз — жай қолдау үшін','Серуенге шығыңыз — су (бұлақ, өзен) күн энергиясын күшейтеді','Түске дейін шешім қабылдаудан аулақ болыңыз','Кешке: бүгін кімге пайдалы болғаныңызды жазып алыңыз'],
  week:'Дипломатия күні. Байланысыңыз, байланыс орнатыңыз. Шешім қабылдамаңыз.'
},
3:{
  name:'Талдау және нәтиже күні',tag:'Юпитер күні',
  desc:[
    'Теңгерілген шешімдер қабылдауға ең қолайлы күндердің бірі. Аналитикалық ойлаудың энергиясы толық қуатпен жұмыс істейді — мұны шарттарға қол қою, келісімдер жасасу және іскери кездесулерге пайдаланыңыз.',
    'Медициналық рәсімдер, диагностика және жоспарлы тексерулер үшін қолайлы күн. Жүйелік талдау мен нақты есеп арқылы жасалған нәрсенің барлығы жоғары табысқа ие болу ықтималдығы жоғары.',
    'Аналитикалық ойлауды сақтаңыз және ойлауға азарттың жетіп кетуіне жол бермеңіз. Шешімдерді фактілерге, деректерге және нақты жоспарға негіздеңіз.'
  ],
  do:['Шарттар мен іскери келісімдерге қол қою','Теңгерілген стратегиялық шешімдер қабылдау','Жоспарланған ірі сатып алуларды жасау','Медициналық рәсімдер мен тексерулерден өту','Деректерді талдау және жоспарлар жасау','Іскери келіссөздер жүргізу'],
  dont:['Талдаусыз азарттыққа беріну','Шешімдерді импульстік түрде қабылдау','Қыңырлық пен фактілерді тыңдамауды көрсету'],
  plus:'Жоғары аналитикалық дәлдік, логика арқылы өңделген іс-шараларда табыс. Табысқа ие болудың жоғары ықтималдығы.',
  minus:'Азарттылық және тәуекелді шешімдерге бейімділік. Жалқаулық — бұл күннің жауы.',
  mantra:'«Мен талдаймын, жоспарлаймын және нақтылықпен әрекет етемін. Менің әрбір шешімім фактілерге негізделген»',
  ritual:['Күн бойынша басымдықтар бойынша тапсырмалар тізімін жасаңыз','Таңертең кәсіби әдебиетті 30 минут оқыңыз','Маңызды кездесулерден бұрын — 5 минут тыныштық пен талдау','Тексеру немесе қайта қарау қажет 3 нәрсені жазып алыңыз','Кешке күн талдауын жүргізіңіз: нәтижелі болды, нәтижесіз болды'],
  week:'Талдау күні. Шарттарға қол қойыңыз, шешімдер қабылдаңыз. Қолайлы күн.'
},
4:{
  name:'Мақсат қою және трансформация күні',tag:'Раху күні',
  desc:[
    'Ерекше энергиясы бар күн, ол барлығын — позитивті де, негативті де — күшейтеді. Егер рухыңыз ресурстық күйде болса — позитивті, кейде күтпеген оқиғаларды күтіңіз: жаңа мүмкіндіктер, қаржылық түсімдер, бағалы кездесулер.',
    'Егер ішкі күй негативті болса — Раху энергиясы хаосты, шығындар мен жойылуды күшейтеді. Күннің негізгі міндеті — таңертен позитивке баптау, басымдықтар белгілеу және күнге арналған мақсаттарды нақты анықтау.',
    'Раху күні — мақсат қою күні. Білім алу, оқулар өту, мақсаттар қою жұмысын жасау ұсынылады. Жаңа жобалар бастау және шарттарға қол қою ұсынылмайды.'
  ],
  do:['Мақсаттар қою және басымдықтар белгілеу','Оқулардан өту және кәсіби әдебиет оқу','Стратегия мен іс-қимыл жоспарына жұмыс жасау','Оң психоэмоционалдық көңіл-күйді сақтау','Жоғары құзыреттілік деңгейіндегі адамдармен қарым-қатынас жасау'],
  dont:['Жаңа жобалар мен бизнес-процестер бастамау','Шарттарға қол қоймау және қаржылық шешімдер қабылдамау','Хаос пен белгісіздікке батпау','Айналаныздағыларды сынамау және айыптамау'],
  plus:'Мистикалық тұрғыдан қолайлы күн: ақша, бағалы танысулар, мүмкіндіктер келуі мүмкін. Интуиция шиеленісті.',
  minus:'Негативті көңіл-күй кезінде — шығындар, күтпеген шығыстар. Рухтың күйі барлығын анықтайды.',
  mantra:'«Менің мақсаттарым анық. Мен жолды көремін және оған қуаныш пен ризашылықпен жүремін»',
  ritual:['Таңертен ең жақын айға арналған 3 негізгі мақсатты жазыңыз','Медитация немесе тыныш ой — 10 минут','Өз тақырыбыңыздағы кітаптың 1 бетін оқыңыз','Айнаға өзіңізге күліңіз — ішкі күйді баптаңыз','Бүкіл күн бойы жаңалықтар мен негативті контенттен аулақ болыңыз'],
  week:'Мақсат қою күні. Оқыңыз, мақсат қойыңыз, позитивте болыңыз. Шарттарға қол қоймаңыз.'
},
5:{
  name:'Коммуникация және мүмкіндіктер күні',tag:'Меркурий күні',
  desc:[
    'Адамдармен белсенді өзара іс-қимыл жасаудың ең жақсы күндерінің бірі. Жаңа танысулар, іскери кездесулер, нетворкинг, әлеуметтік желілердегі белсенділік — барлығы максималды нәтиже береді. Сапалы коммуникация неғұрлым көп болса, жаңа мүмкіндіктер де соғұрлым көп болады.',
    'Жасырын барлығы айқын болады. Өзіңіз адал және ашық болу маңызды. Негізгі принцип — дауласуға кіріспей «иә» деп айту. Мүмкіндіктер энергиясы күрес пен қарсылық болған жерде бөгеледі.',
    'Шарттарға қол қою ұсынылмайды — бұл күн коммуникация мен байланыс орнату үшін. Ашық, белсенді және қарым-қатынасқа жеңіл болыңыз.'
  ],
  do:['Белсенді қарым-қатынас жасау, танысу және байланыс орнату','Іскери кездесулер мен келіссөздер жүргізу','Әлеуметтік желілерде контент жариялау','Жеке бренд пен имиджді дамыту','Іс-шаралар мен нетворкингке қатысу'],
  dont:['Шарттарға қол қоймау және ірі қаржылық операциялар жасамау','Дауластарға кіріспеу','Оқшаулану және қарым-қатынастан аулақ болу','Өтірік айту және екіжүзділік жасау'],
  plus:'Коммуникация арқылы масштабтау, бизнес пен жеке брендті дамыту. Жаңа контактілер нақты мүмкіндіктер әкеледі.',
  minus:'Немқұрайлылық пен үстірттілік. Артық айту қаупі — жасырын барлығы айқын болады.',
  mantra:'«Мен әлем мен адамдарға ашықпын. Әрбір сөйлесу маған жаңа мүмкіндіктер әкеледі»',
  ritual:['Ұзақ уақыт бойы хабарласпаған 3 адамға жазыңыз','Әлеуметтік желілердегі профиліңізді жаңартыңыз немесе пост жариялаңыз','Ниет қойыңыз: бүгін жаңа біреумен танысу','Жарқын және сәнді киініңіз — сыртқы бейне күн энергиясын күшейтеді','Әдетте кейінге қалдыратын ұсыныстарға «иә» деп айтыңыз'],
  week:'Коммуникация күні. Байланысыңыз, танысыңыз, контент жариялаңыз.'
},
6:{
  name:'Табыс және гүлдену күні',tag:'Венера күні',
  desc:[
    'Маңызды шешімдер қабылдау және маңызды іс-қимылдар жасаудың ең қолайлы күндерінің бірі. Күннің энергиясы үйлесімділік арқылы жасампаздыққа бағытталған. Шешімдерді қорқыныштан емес, ішкі сенімділік күйінен қабылдаңыз.',
    'Шарттарға қол қою, ірі сатып алулар жасау, ауқымды жобаларды іске қосу үшін қолайлы күн. Инвестициялық түсімдер мүмкін. Эмоцияны бақылаңыз — суық баспен әрекет етіңіз.',
    'Минуста жайлылыққа тартылу, кекшілдік немесе алға ілгерілемеу ниетсіздігі пайда болуы мүмкін. Тәртіпті сақтау маңызды.'
  ],
  do:['Шарттарға қол қоюу және келісімдер жасасу','Жоспарланған ірі сатып алулар жасау','Ауқымды жобаларды іске қосу','Стратегиялық маңызды шешімдер қабылдау','Қарым-қатынасты жылылықпен орнату','Аяқталмаған істерді аяқтау'],
  dont:['Кекшілдік пен кинәшілдік танытпау','Жалқаулық пен пассивті жайлылыққа кетпеу','Адамдарды соттамау және бөлмеу'],
  plus:'Барлық бағыттарда даму мен табыс. Арманды жүзеге асыру және инвестиция тарту мүмкіндігі.',
  minus:'Жалқаулық, шектен тыс, пассивті тұтынуға тартылу. Созылмалы аурулардың асқыну қаупі.',
  mantra:'«Бүгін мен күш пен сүйіспеншіліктен әрекет етемін. Табыс пен гүлдену — менің табиғи күйім»',
  ritual:['Күнді ризашылық практикасынан бастаңыз — алғысы бар 5 нәрсені жазыңыз','Сәнді киініңіз — Венера эстетиканы жақсы көреді','Ұзақ уақыт бойы кейінге қалдырған бір маңызды іс-қимыл жасаңыз','Өзіңізге бір жағымды нәрсе жасаңыз — кофе, гүлдер, жағымды музыка','Жақындарыңызға олардың сіз үшін не мағынасы бар екенін айтыңыз'],
  week:'Табыс күні. Шарттарға қол қойыңыз, сатып алулар жасаңыз. Ең қолайлы күн.'
},
7:{
  name:'Ішкі жұмыс және трансформация күні',tag:'Кету күні',
  desc:[
    'Терең ішкі жұмыс күні. Кету энергиясы ішке бағытталған — бұл рефлексия, рухани практикалар, оқу және өткен жолды ой-пікіге тіреудің уақыты. Маңызды іскери тапсырмаларды кейінге қалдырған жөн.',
    'Бұл күні белсенді іс-қимылдардың нәтижелерін жоюдың жоғары ықтималдығы бар. Ішкі тыныштық күйінде болу ұсынылады: медитация жасау, йогамен айналысу, оқу, оқыту. Интуиция шиеленісті.',
    'Бұл күннің дағдарыс жағдайлары сана өсуінің катализаторы болып қызмет етеді. Трансформацияға қарсы тұрмаңыз — оны даму құралы ретінде пайдаланыңыз.'
  ],
  do:['Рухани практикалармен, медитациямен және йогамен айналысу','Оқу пройти және әдебиет оқу','Өткен тәжірибені талдау және ой-пікіге тіреу','Демалу және ішкі ресурсты қалпына келтіру'],
  dont:['Жаңа жобалар бастамау','Шарттарға қол қоймау','Хаотикалық іс-қимылдармен айналыспау','Операциялар жасамау және жылжымайтын мүлік сатпау'],
  plus:'Жіті интуиция, терең инсайттарға қол жеткізу, сананың трансформациясы.',
  minus:'Агрессия, санадағы хаос. Негативті күйде — дағдарыс пен депрессия.',
  mantra:'«Мен өзімнің ішкі даналығыма тыңдаймын. Бейбітшілік — менің күшім»',
  ritual:['Әдеттегіден 15 минут ерте тұрыңыз — тыныштықта болыңыз','Йога немесе созылу — кемінде 20 минут','Күнделікке жазыңыз: не мазалайды, не қалайды','Жарты күн бойы әлеуметтік желілерден бас тартыңыз','Кешке: шам жағыңыз, 10 минут медитация жасаңыз'],
  week:'Трансформация күні. Оқыңыз, медитация жасаңыз, демалыңыз. Белсенді істерді кейінге қалдырыңыз.'
},
8:{
  name:'Тәртіп және нәтиже күні',tag:'Сатурн күні',
  desc:[
    'Сатурн күні — табанды еңбек, тәртіп және қорытынды шығару күні. Энергия жүйелі түрде еңбек етушілерді марапаттайды, әрекетсіздерді жазалайды. Бұл еңбек күні.',
    'Шарттар жасасу үшін қолайлы күн. Несие алу ұсынылмайды. Сатурн энергиясы кармаға бағытталған — бұрын егілген нәрсені аласыз.',
    'Күмән пайда болуы және барлығын бақылауға деген ұмтылыс туындауы мүмкін — бұл қалыпты. Еркті басқаларды бақылауға емес, өзіңіздің тиімділігіңізге бағыттаңыз. Сатурн кішіпейілділік пен еңбексүйгіштікті бағалайды.'
  ],
  do:['Көп және өнімді жұмыс жасау','Шарттар жасасу','Оқу және жаңа дағдылар меңгеру','Іс-қағаздарды реттеу','Нәтижелерді талдау және қорытынды шығару'],
  dont:['Несие және қаржылық міндеттемелер алмау','Жалқаулық пен тапсырмаларды кейінге қалдыру','Басқаларды шектен тыс бақылау','Еркін өмір салтымен болу'],
  plus:'Практикалық, жоғары жұмысқабілеттілік. Өткен күш-жігердің нәтижелері өзін-өзі байқатады.',
  minus:'Іс-әрекетсіздік, шектеулер аймағы. Өткен қателіктер үшін кармалық жаза.',
  mantra:'«Менің еңбегім — менің кармам. Бүгінгі әрбір іс-қимыл менің ертеңімді салады»',
  ritual:['5 тапсырманың тізімін жасаңыз — барлығын соңына дейін орындаңыз','Жұмыс орнын жиыстырыңыз — сыртқы тәртіп іштегі тәртіп жасайды','Барлық тапсырмалар орындалғанша ойын-сауықтан бас тартыңыз','Осы аптада нені үйренгеніңізді жазып алыңыз','Уақтылы ұйықтаңыз — кішкентай нәрседегі тәртіп үлкен нәрседегі тәртіп жасайды'],
  week:'Еңбек күні. Жұмыс жасаңыз, оқыңыз, шарттар жасасыңыз. Несие алмаңыз.'
},
9:{
  name:'Қызмет ету және цикл аяқтау күні',tag:'Марс күні',
  desc:[
    'Аяқтау күні: бастаған істер финалға жетіп жатыр. Бұл қорытынды шығаратын, қайырымдылықпен айналысатын, басқаларға көмектесетін уақыт.',
    'Күннің энергиясы жауынгерлікке ие — эмоцияларға беріліп кетпей, тыныштықта болу маңызды. Күрес арқылы келген барлығы сізге қарсы жұмыс жасайды. Тыныш күш күйінен әрекет етіңіз.',
    'Күтпеген мүмкіндіктерді ашуға болады. Қайырымдылық пен ұзақ мерзімді жобаларды аяқтау үшін жақсы күн.'
  ],
  do:['Бастаған жобаларды аяқтау','Қайырымдылықпен айналысу және басқаларға көмектесу','Кезеңнің қорытындысын шығару','Алғыс күтпей адамдарға қызмет ету'],
  dont:['Шарттарға қол қоймау және жаңа жобалар бастамау','Стратегиялық шешімдер қабылдамау','Эмоцияларға беріну және агрессиядан әрекет ету'],
  plus:'Істерді қадір-қасиетпен аяқтау, жаңа мүмкіндіктерді ашу, қызмет ету арқылы өсу.',
  minus:'Жауынгерлік, басқарылмайтын эмоциялар. Күрес шығындарға алып келеді.',
  mantra:'«Мен қадір-қасиетпен аяқтаймын және жаңаға ашыламын. Менің қызметім — менің күшім»',
  ritual:['Аяқталмаған істер тізімін жазыңыз — кемінде біреуін аяқтаңыз','Басқа адам үшін жақсы нәрсе жасаңыз — тегін','Үйді жиыстырыңыз — жаңаға орын босатыңыз','Кешке: өтіп жатқан күнге сабақтары үшін алғыс айтыңыз','Ертеңді таза парақтан бастау ниетімен ұйықтаңыз'],
  week:'Қызмет ету күні. Істерді аяқтаңыз, басқаларға көмектесіңіз. Шарттарға қол қоймаңыз, жаңа жобалар бастамаңыз.'
}
},

MONTHS: {
1:{name:'Бастама және көшбасшылық айы',tag:'Күн айы',desc:['Жаңа цикл бастаудың және белсенді көшбасшылықтың айы. Энергия ішкі күйіңізге байланысты жасампаздыққа немесе жоюшылыққа бағытталған. Жаңа жобаларды іске қосу, жылдарға арналған көзқарас қалыптастыру және стратегия жасаудың уақыты.','Өмірдің әртүрлі салаларынан көптеген идеялар келеді. Маңыздысы — шашырамау, басымдықтар белгілеу және нақты жоспар жасау. Жеке брендіңізді дамытыңыз — бұл ай басқаларды шабыттандыратындар үшін қолайлы.','Шарттарға қол қою ұсынылмайды, бірақ процестерді бастау және жаңа әдеттерді іске қосу жақсы. Менмендік пен басқаларды тыңдамауға берілмеңіз.'],do:['Жаңа жобаларды іске қосу','Жеке стратегия мен миссия жасау','Көшбасшылықты көрсету','Жеке брендті нығайту','9 жылға арналған көзқарас қалыптастыру'],dont:['Шарттарға қол қоймау','Менмендік пен эгоизм жасамау','Басқалардың сценарийі бойынша өмір сүрмеу'],plus:'Жоғары бастама энергиясы, көшбасшылық ықпалы.',minus:'Шектен тыс эгоизм, тыңдамау ниетсіздігі. Импульстік шешімдер қаупі.'},
2:{name:'Дипломатия және серіктестік айы',tag:'Ай айы',desc:['Қарым-қатынасты орнату және нығайтудың айы. Бар серіктестіктерді жаңа деңгейге шығару мүмкіндігі бар. Ай энергиясы ұжымдағы және жақындармен қарым-қатынасқа қолайлы.','Шешімдер қабылдаудан бас тарту кезінде күмән пайда болуы мүмкін — талдауды пайдаланыңыз және жауапкершілікті өз мойныңызға алыңыз. Эмоция бойынша қарым-қатынасты үзу туралы өткір шешімдер қабылдауға болмайды.','Энергияны сақтау, судың жанында уақыт өткізу ұсынылады. Компромисс — айдың ең жақсы стратегиясы.'],do:['Серіктестік байланыстарды орнату','Икемділік пен компромисс танытуу','Қалпына келтірумен айналысу'],dont:['Эмоция бойынша қарым-қатынасты үзу','Манипуляция жасау'],plus:'Қарым-қатынас пен дипломатия арқылы мүмкіндіктер.',minus:'Депрессивтілік, күмән, манипуляция.'},
3:{name:'Талдау және табыс айы',tag:'Юпитер айы',desc:['Стратегиялық талдау мен жоғары нәтижелілік айы. Жүйелік талдау арқылы жасалған барлығы сәтті болады. Жоспарларды жазу және өмірдің барлық салаларын тексеру уақыты.','Білім алу, тренингтерге бару, кәсіби дамыту — жақсы. Іскери кездесулер мен сатып алулар үшін жақсы уақыт.','Минуста — азарттылық пен жалқаулық. Алдымен талдаңыз, содан кейін әрекет жасаңыз.'],do:['Барлық салаларды талдау жүргізу','Жоспарлар мен стратегиялар жасау','Оқудан өту','Іскери кездесулер жүргізу'],dont:['Азарттыққа беріну','Қыңырлық таныту'],plus:'Барлық ойластырылған іс-қимылдардың сәтті болуының жоғары ықтималдығы.',minus:'Азарттылық, жалқаулық, талдамауға ниетсіздік.'},
4:{name:'Фокус және мақсат қою айы',tag:'Раху айы',desc:['Трансформация және мақсат қою айы. Раху планетасы мақсат қою мен нағыз білімге жауапты. Күйіңізге байланысты не оң мистикалық оқиғалар, не теріс болуы мүмкін.','Ресурстық күйде болсаңыз — ақша мен бағалы кездесулердің келуін күтіңіз. Негативті күйде — хаос пен күтпеген шығыстар.','Мақсаттар белгілеу — айдың негізгі міндеті. Өмірден қуаныңыз және айналаңыздағыларға қуаныш сыйлаңыз.'],do:['Нақты мақсаттар белгілеу','Стратегия жасауға жұмыс жасау','Оң көңіл-күйді сақтау'],dont:['Сынамау және айыптамау','Жанжал туғызбау'],plus:'Дұрыс көңіл-күзде мистикалық тұрғыдан қолайлы ай.',minus:'Негативті күйде хаос, күтпеген шығыстар.'},
5:{name:'Коммуникация және масштабтау айы',tag:'Меркурий айы',desc:['Белсенді коммуникация және бизнесті масштабтау айы. Сапалы қарым-қатынас неғұрлым көп болса, мүмкіндіктер де соғұрлым көп болады.','Сауда мәмілелерін жасасу үшін жақсы уақыт. Имидж пен жеке брендіңізге жұмыс жасаңыз.','Минуста — күрес пен конфронтация. Жасырын айқын болады.'],do:['Белсенді қарым-қатынас жасау','Сауда мәмілелерін жасасу','Жеке брендті дамыту'],dont:['Күреске кіріспеу','Жалған айтпау және адал болу'],plus:'Коммуникация арқылы масштабтау.',minus:'Конфронтация, бағалы контактілерді жоғалту.'},
6:{name:'Табыс және гүлдену айы',tag:'Венера айы',desc:['Арман жүзеге асуы мүмкін ай. Қарым-қатынасты жылылықпен орнатыңыз — бұл табыстың кілті.','Бастаған нәрсені аяқтаңыз, жаңа майдандар ашпаңыз. Инвестициялық түсімдер мүмкін.','Энергияны шығармашылық пен жасампаздыққа бағыттаңыз. Тәртіпті сақтаңыз.'],do:['Бастаған жобаларды аяқтау','Қамқорлық арқылы қарым-қатынас орнату','Шығармашылықпен айналысу'],dont:['Жалқаулыққа кетпеу','Кекшілдік таныту'],plus:'Даму, табыс, арманды жүзеге асыру.',minus:'Жалқаулық, шамадан тыс тамақтану, пассивтілік.'},
7:{name:'Трансформация және қайта ойлау айы',tag:'Кету айы',desc:['Терең трансформация айы. Ресурстық күйде болсаңыз — жаңа деңгейге шығу. Минуста болсаңыз — дағдарыс.','Дене мен санада барынша тәртіпті болу ұсынылады. Күніне кемінде 12 км жаяу жүру.','Ескі шектеуші сенімдерді бұзыңыз. Интуицияңызды тыңдаңыз.'],do:['Дене мен сана тәртібін практикалау','Рухани практикалармен айналысу','Интуицияны дамыту'],dont:['Хирургиялық операциялар жасамау','Жылжымайтын мүлік сатпау'],plus:'Сананың трансформациясы, жаңа деңгейге шығу.',minus:'Дағдарыс, депрессия, хаос.'},
8:{name:'Тәртіп және жетістіктер айы',tag:'Сатурн айы',desc:['Жылдың ең күшті айы. Табанды еңбек пен нәтижелер алудың айы. Жылдың барлық еңбегін осы айға бағыттаңыз.','Несие алуға болмайды. Аскетизм айы — жұмысқа максималды фокус.','Тек үйден ғана емес, өмірден де қажетсіз нәрселерді алып тастаңыз.'],do:['Барынша жұмыс жасау және оқу','Қорытындылар шығару','Тәртіпті сақтау'],dont:['Несие алмау','Жеңіл-желпі өмір салтын ұстамау'],plus:'Жылдар бойы еңбектің нәтижелерін алу.',minus:'Жалқаулық, шектеулер аймағы.'},
9:{name:'Қызмет ету және аяқтау айы',tag:'Марс айы',desc:['Цикл аяқтау және адамдарға қызмет ету айы. Маңызды стратегиялық істерді жоспарламаған жөн.','Эмоционалдық фонды қадағалаңыз. Негізгі міндет — қорқыныштарыңызды сезініп, оларды трансформациялау.','Денсаулыққа міндетті түрде назар аударыңыз. Алғыс күтпей адамдарға қызмет етуге энергия бағыттаңыз.'],do:['Адамдарға қызмет ету','Денсаулықпен айналысу','Ұзақ мерзімді жобаларды аяқтау'],dont:['Ауқымды жаңа істер жоспарламау','Алғыс күтпеу'],plus:'Цикл аяқтаудың қадір-қасиеті.',minus:'Жауынгерлік, қорқыныш, тұрақсыздық.'}
},

YEARS: {
1:{name:'Бастама және Көшбасшылық жылы',tag:'Күн жылы · Жаңа циклдің басы',desc:['Сіз жаңа тоғыз жылдық циклге кіресіз. Бұл көшбасшылық, батылдық пен дербестік жылы. Ілгерілеп, жауапкершілік алу және әрекет ету уақыты. Қазір қадамдар неғұрлым батыл болса, келесі 8 жылдың іргетасы соғұрлым берік болады.','Мінсіз жағдайлар болмаса да жаңа жобаларды іске қосыңыз. 9 жылға арналған көзқарас қалыптастырыңыз: миссия, мақсаттар, стратегия. Шешімдерді басқалардың пікіріне қарамай дербес қабылдаңыз.','Сенімділігіңізді, харизманыз бен жеке ықпалыңызды нығайтыңыз. Байқалу қорқынышын өңдеңіз. Көшбасшылық шабыттандыруы керек, жаншымауы керек.'],do:['Жаңа жобаларды іске қосу','Жылдарға арналған көзқарас қалыптастыру','Сенімділік пен харизмаға жұмыс жасау'],dont:['Басқалардың күтулері бойынша өмір сүру','Басқаларды жаншу'],plus:'Қуатты бастама серпіні, көшбасшылық ықпалы.',minus:'Эгоцентризм, тыңдамауға ниетсіздік, импульстілік.',mantra:'"Мен өз өмірімді өзім жасаймын. Мен өз жолымның көшбасшысымын."'},
2:{name:'Серіктестік және Байланыстар жылы',tag:'Ай жылы · Дипломатия жылы',desc:['Қарым-қатынасты орнату және тереңдету жылы. Мүмкіндіктер адамдар мен серіктестіктер арқылы, жеке іс-қимылдар арқылы емес, келеді.','Жаңа бағалы серіктестіктер орнату немесе бар серіктестіктерді жаңа деңгейге шығару мүмкіндігі бар.','Минуста — депрессивтілік пен күмән. Қарым-қатынасты үзу туралы өткір шешімдер қабылдауға болмайды.'],do:['Серіктестіктерді орнату және тереңдету','Дипломатиялық мінез-құлық танытуу','Компромиске бару'],dont:['Эмоция бойынша қарым-қатынасты үзу','Манипуляция жасау'],plus:'Қарым-қатынас арқылы мүмкіндіктер.',minus:'Депрессивтілік, күмән.',mantra:'"Менің қарым-қатынасым — менің күшім. Мен көпір саламын, қабырға емес."'},
3:{name:'Стратегия және Өсу жылы',tag:'Юпитер жылы · Талдау жылы',desc:['Жүйелік талдау мен жоғары нәтижелілік жылы. Жоспарлау арқылы салынған барлығы нәтиже береді.','Іскери кездесулер мен оқу үшін қолайлы жыл. Денсаулыққа ерекше назар аударыңыз.','Минуста — азарттылық пен жалқаулық. Алдымен талдаңыз — содан кейін іс-қимыл жасаңыз.'],do:['Стратегиялық талдау жүргізу','Оқу','Іскери мәмілелер жасасу'],dont:['Азарттыққа беріну','Жалқаулық жасау'],plus:'Барлық ойластырылған іс-қимылдардың сәтті болуының жоғары ықтималдығы.',minus:'Азарттылық пен жалқаулық.',mantra:'"Талдау — менің құралым. Жүйелілік — менің нәтижем."'},
4:{name:'Фокус және Мақсат Қою жылы',tag:'Раху жылы · Мақсат қою жылы',desc:['Мақсаттар арқылы трансформация жылы. Раху планетасы мақсат қою мен нағыз білімге жауапты.','Басымдықты мақсаттарды екінші дәрежелі мақсаттардан ажырата үйреніңіз. Жоғары құзыреттілік деңгейіндегі адамдармен қарым-қатынас жасаңыз.','Мақсаттар белгілеңіз және тәртіп орнатыңыз. Қуаныңыз және айналаңыздағыларға қуаныш сыйлаңыз.'],do:['Нақты басымдықты мақсаттар белгілеу','Білім алу'],dont:['Сынамау','Хаос туғызбау'],plus:'Дұрыс көңіл-күзде: ақша, кездесулер, мүмкіндіктер.',minus:'Негативті көңіл-күзде: хаос, күтпеген шығыстар.',mantra:'"Менің мақсаттарым анық. Мен басымдықтар бойынша әрекет етемін."'},
5:{name:'Коммуникация және Масштабтау жылы',tag:'Меркурий жылы · Коммуникациялар жылы',desc:['Белсенді коммуникация және бизнесті масштабтау жылы. Сапалы қарым-қатынас неғұрлым көп болса, мүмкіндіктер де соғұрлым көп болады.','Мақсаттарға тиімді жолмен қол жеткізуді үйреніңіз. Имидж пен жеке брендіңізге жұмыс жасаңыз.','Минуста — конфронтация. Барлығына коммуникация және бизнес призмасы арқылы қараңыз.'],do:['Белсенді қарым-қатынас жасау','Бизнесті масштабтау','Жеке брендті дамыту'],dont:['Күреске кіріспеу','Адалсыздық жасамау'],plus:'Коммуникация арқылы масштабтау.',minus:'Конфронтация, күрес.',mantra:'"Менің коммуникациям мүмкіндіктер жасайды. Мен әлемге ашықпын."'},
6:{name:'Табыс және Гүлдену жылы',tag:'Венера жылы · Табыс жылы',desc:['Үйлесімділік пен жасампаздық арқылы табыс жылы. Табыс адамдарға сарапшысыз қарым-қатынас арқылы келеді.','Инвестициялар мен ескі арман жүзеге асуы мүмкін. Суық басмен әрекет етіңіз.','Жұмыста — бастаған нәрсені аяқтаңыз. Жыл шығармашылыққа қолайлы.'],do:['Қамқорлық арқылы қарым-қатынас орнату','Инвестициялық мүмкіндіктерді қабылдау','Бастаған жобаларды аяқтау'],dont:['Кекшілдік таныту','Жалқаулыққа кету'],plus:'Табыс, гүлдену, арманды жүзеге асыру.',minus:'Жалқаулық, шамадан тыс тамақтану, пассивтілік.',mantra:'"Мен ішкі молшылық пен үйлесімділік арқылы табысты тартамын."'},
7:{name:'Трансформация және Қайта Ойлау жылы',tag:'Кету жылы · Трансформация жылы',desc:['Сананың терең трансформациясы жылы. Бұл жылдың дағдарыстары — өсудің катализаторлары.','Аскетизм мен тәртіп жылы. Күніне кемінде 12 км жаяу жүру. Интуиция жақсы дамыған.','Ескі шектеуші сенімдерді бұзыңыз. Санаңызды дамытыңыз.'],do:['Дене мен сана тәртібін практикалау','Рухани практикалармен айналысу','Интуицияны дамыту'],dont:['Операциялар жасамау','Жылжымайтын мүлік сатпау'],plus:'Сананың трансформациясы, жаңа деңгейге шығу.',minus:'Дағдарыс, депрессия, хаос.',mantra:'"Мен трансформацияланамын және сананың жаңа деңгейіне шығамын."'},
8:{name:'Тәртіп және Жетістіктер жылы',tag:'Сатурн жылы · Табанды еңбек жылы',desc:['Циклдегі ең күшті жыл. Жылдар бойы еңбектің жемістерін жинаудың жылы. Егілгеніңізді аласыз.','Несие алуға болмайды. Аскетизм жылы — жұмысқа максималды фокус.','Басқаларды аз бақылаңыз. Өміріңізден қажетсіз нәрселерді алып тастаңыз.'],do:['Барынша жұмыс жасау және оқу','Қорытындылар шығару','Тәртіпті сақтау'],dont:['Несие алмау','Жеңіл-желпі өмір салтын ұстамау'],plus:'Жылдар бойы еңбектің нәтижелерін алу.',minus:'Өткен қателіктер үшін кармалық жаза.',mantra:'"Менің еңбегім мен білімім — менің мәңгілік капиталым."'},
9:{name:'Қызмет Ету жылы',tag:'Марс жылы · Аяқтау жылы',desc:['Тоғыз жылдық циклді аяқтаудың жылы. Адамдарға қызмет ету және жаһандық қорытындылар шығару уақыты.','Денсаулықты қадағалаңыз. Эмоционалдық фон тұрақсыз — өзіңізді ұстаңыз.','Алғыс күтпей адамдарға қызмет етуге күштерді бағыттаңыз. Жаңа циклге таза парақтан кіріңіз.'],do:['Адамдарға қызмет ету','Денсаулықпен айналысу','Цикл қорытындысын шығару'],dont:['Ауқымды жаңа жобаларды жоспарламау','Алғыс күтпеу'],plus:'Цикл аяқтаудың қадір-қасиеті.',minus:'Жауынгерлік, қорқыныш, тұрақсыздық.',mantra:'"Мен дүниеге қызмет етемін және циклды қадір-қасиет пен ризашылықпен аяқтаймын."'}
},

PERSONALITY: {
1:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста (позитивте) немесе минуста (негативте). Плюста адамда бір қасиеттер жиыны болады, минуста — тиісінше қарама-қарсысы. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіз — күшті тұлғасыз. Дербес, өзіне-өзі сенімді және мақсатты адам. Сана векторы тек өзіңізге бағытталған. Сізге не істеу керек пен қалай екенін айтқанды ұнатпайсыз. Ішкі ұранжауыңыз: «Мен өзім барлығын білемін». Сіз — пионерсіз, барлар барудан қорқатын жерге барасыз.\n\nПлюста (позитивті эмоцияларда): дербестік, батылдық, мақсатшылдық, сенімділік. Минуста (негативті эмоцияларда): эгоизм, агрессивтілік, билікшілдік, деспотизм.\n\nОмірде сәтті іске асыру үшін өзіңіздің эгоизміңізге жұмыс жасау қажет!`,
2:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіз — нәзік психологсыз. Адамдарды сезе аласыз. Сана векторы басқа адамды түсінуге деген ұмтылысқа бағытталған. Сізде сыйлық бар — адамдар мен жағдайларды басқалардан жақсырақ түсіну. Дипломат, психолог немесе медиатор бола аласыз.\n\nПлюста: түсіністік, дипломатиялылық, интуиция, жұмсақтық. Минуста: депрессия, күмән, екіжүзділік, манипулятивтілік.\n\nОмірде сәтті іске асыру үшін басқа адамдарды түсінуді үйрену қажет!`,
3:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіз — туа біткен тәлімгер және аналитиксіз. Сана векторы талдау мен басқаруға бағытталған. Сіз өте ақылды, байсалды, әділ адамсыз. Білім мен интеллект — сіздің негізгі активтеріңіз.\n\nПлюста: аналитикалық ойлау, тәлімгерлік, әділдік, даналық, интеллект. Минуста: суықтық, есептеушілік, қаттылық, әділетсіздік.\n\nОмірде сәтті іске асыру үшін тәлімгер даналығын дамыту қажет!`,
4:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіз — шығармашылық ойлаулы адам, новатор, трансформатор және әділдік үшін күресші. Сіз өте жомартсыз. Бере туылдыңыз және бәрі әділ болуы маңызды. Сана векторы мақсат іздеуге бағытталған. Іс-қимылдарда еркіндік пен шығармашылық маңызды.\n\nОрнықтылық күйінде жайлы сезінесіз. Минуста: қанағатсыздық, салынған нәрсені жою, немқұрайлылық, апатия.\n\nОмірде сәтті іске асыру үшін позитивті ойлау заңдарын зерттеу қажет!`,
5:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіздің логикаңыз, ойыңыз бен интеллектіңіз тамаша жұмыс жасайды — эмоционалды емес, мақсаттылықтан шыққан іс-қимылдар жасайсыз. Еркіндік ақшадан бағалырақ. Жоғары коммуникабельдігіңіз бар, сондықтан сауда мен бизнес саласында баратаны жоқсыз. Жомартсыз, бірақ суықсыз.\n\nСана векторы логикаға бағытталған: дұрыс/бұрыс, логикалы/логикалы емес. Талғампаз талғам мен сәнге сезімталдық бар.\n\nНәзік аурасы болғандықтан, жеңіл ренжисіз. Міндетіңіз — сүйіспеншілікті арттыру.`,
6:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіз — қоғамның бриллиантысыз. Жаратушы сізге даналық пен сексуалдылық энергиясын берді. Басқалармен салыстырғанда сіз оңай инвестиция тартасыз және материалдық игіліктер аласыз.\n\nСана векторы жеке жайлылыққа, сүйіспеншілік пен сезімталдыққа бағытталған. Жан шығармашылық арқылы іске асады. Жастық күйде, сыпайысыз, сән-салтанатты жақсы көресіз, артистіксіз.\n\nМинуста: кекшілдік, қарым-қатынаста немқұрайлылық.`,
7:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nТуылғаннан харизма, 100% интуиция мен сексуалдық энергия бар. Сана векторы іс-қимылдарыңыздың мойындалуына бағытталған. Өзіңізге жұмыс жасап, энергияны санаңызға бағыттасаңыз — данышпан болып шығасыз.\n\nБарлық энергияңыздың 97% бірінші чакрада шоғырланған, сондықтан оны санаға бағыттамасаңыз, зейінсіздік сияқты қасиеттер пайда болады.\n\nОмірде сәтті іске асыру үшін сана тәртібінде өмір сүру қажет!`,
8:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСізде мынадай қасиеттер бар: бақылау, мұқияттылық, материализм және реализм. Сана векторы материалдық әлемді бақылауға бағытталған. Жан еңбек арқылы іске асады — жұмыс неғұрлым қиын болса, сана соғұрлым айқын болады.\n\nМинуста: күмән, қоғамға сенімсіздік, тотальды бақылау, жалқаулық пен оқшаулану.\n\nОмірде сәтті іске асыру үшін бақылаудан кетіп, адамдарға қызмет етуге келу қажет!`,
9:`Жеке тұлғаны сипаттау кезінде әрбір адам екі күйде бола алатынын түсіну маңызды: плюста немесе минуста. Өміріңіздегі іске асыруыңыз тікелей қай күйде болғаныңызға байланысты.\n\nСіз — іс-қимыл адамысыз, өте эмоционалды, аздап қызба мінезіңіз бар. Сана векторы тек жеңіске бағытталған.\n\nПлюста: жылдамдық, спортшылдық, динамизм, жауынгерлік рух. Минуста: ашу, паранойя, аңқаулық.\n\nОмірде сәтті іске асыру үшін эмоциялардан кетіп, мақсаттылықтан іс-қимыл жасау қажет!`
},

MISSION_TEXT: {
1:'Тамаша ұйымдастырушылық қабілеттеріңіз бар. Биліктке, басшылыққа және мойындалуға ұмтыласыз. Ақшаны билік арқылы тапқыңыз келеді. Сіз үшін соңғы сөздің әрқашан өзіңізде қалуы өте маңызды. Міндетіңіз — стратегия білімін басқа адамдарға жеткізу, оларды өзіңізге байламай.',
2:'Іс-қимылдарыңызда мәңгілік күмәндер бар. Іс-қимылдар дуальды — күмәнданып жатқанда уақытты жоғалтасыз. Кішкентай, бірақ тұрақты мүмкіндіктер миссиясы. Міндетіңіз — дұрыс бірізді қадамдар жасау және іс-қимыл жасау!',
3:'Іс-қимылдарыңызда жиі талдау арқылы пайда алуға ұмтыласыз. Бұл ең тиімді миссия, өйткені онда «халықтар достығы» жоқ, тек талдау бар. Міндетіңіз — даналық пен сүйіспеншілікпен басқа адамдарға мүмкіндіктер жасау.',
4:'Білімді жеткізуге деген керемет ұмтылысты сезінесіз. Бұл болмаса — қанағатсыздық сезінесіз. Нақты білімді жеткізгенде қаржылық табыс желкені толады.',
5:'Іс-қимылдарыңызда жиі күреске ұмтыласыз, ал күрес энергияны, тиісінше ақшаны жоғалтуға алып келеді. Кедергіге қарсы жүруге деген ұмтылыс сезінесіз. Бірінші сөзіңіз «жоқ». Күрестен кетсеңіз — орасан мүмкіндіктер ашылады. Ішкі үйлесімдіні қадағалаңыз!',
6:'Іс-қимылдарыңызда барлығында ыңғайлылық пен жайлылықты қамтамасыз етуге тырысасыз. Демалуға, ләззатқа және сүйіспеншілікке ұмтыласыз. Шығармашылықта іске асыру маңызды — әйтпесе өмірді бекерге өткізуіңіз мүмкін.',
7:'Өзін-өзі дәлелдеуге деген күшті ұмтылыс сезінесіз. Стратегия мен негіздеме арқылы іс-қимыл жасауды үйренсеңіз, кез келген саладан іске асып, үлкен биіктерге жете аласыз.',
8:'Жалғыздық мүлде тұтқындамайды — ол күйде жайлы сезінесіз. Қаржы — басты мақсатыңыз емес, сіз идея адамысыз. Өзіңізді жоғары бағалайсыз. Жоғары жұмысқабілеттілігіңіз бар, сондықтан сана үнемі жұмыста.',
9:'Біреуге эмоционалды түрде көмектесуге деген ұмтылыс сезінесіз. Ең жауапты, ең асыл және ең қауіпті миссия сіздікі. Өмірлік ұранжауыңыз: «Жақсылық жаса да, кілтті суға тастай бер. Ешнәрсе күтпе». Талдау арқылы іс-қимыл жасаңыз.'
},

TRIGGERS: {
1:['Адамдар мен қалағандай жасамайды','Келіспеуден бұзылады','Өтініштерге жауап бермейді','Адам өз ұстанымын қорғағанда','Сынды және өздеріне бағытталған әзілдерді қабылдамайды','Адамдар жауапкершілік алмаса ренжиді','Арызданушылар, әлсіздер, баяулар ренжітеді','Дербестік — қамқорлықтан кеткендер','Басқа адамның табысы','Өмір сүруді үйреткенді шыдамайды','Сөйлесуде тыңдалмаса','Беделді мойындамаса','Жеке кеңістікті шектеу','Бірлік заңдарын бұзса','Қызмет етілмесе','Назар орталығында болмаса','Дауласса'],
2:['Түсінбегенде','Аз назар аударылғанда, құшақтамағанда','Кері байланыс бермегенде','Көңіл-күйін бөліспегенде','Ұзақ түсіндіруге тура келгенде, бірақ бәрібір түсінбесе ренжиді','Асыққанда, жеделдеткенде','Шешім қабылдауды асыққанда','Екілерді кінәлі жасағанда','«Өзің шешім қабыл» дегенде','Манипуляцияда ұсталғанда','Нақтылық пен айқындылық болмаса','Менмен, мақтаншақ адамдар ренжітеді','Елемеу','Қарым-қатынастағы суықтық','Дөрекілік'],
3:['Ақымақтар ренжітеді','Хаос ренжітеді','Нұсқаулықтарын бұзғанда','Сұрамастан үйреткенде','Қамқорлығы мен кеңестерін бағаламағанда','Бестактілік ренжітеді','Бос сөз ренжітеді','Маған деген әділетсіздік ренжітеді','Арызданушылар мен зерігушілер ренжітеді','Бәсекелестік','Уақытты бекерге жою ренжітеді'],
4:['Адал болмағанда (келісімдерді бұзса, алдаса, екіжүзді болса)','Жалқаулар, арызданушылар, құрбандар ұнамайды','Біркелкілік, монотондылық','Рұқсатсыз мүлікке қол сұғу','Уақытты ұрлау','Сөзін кескенде','Шектеп, шеңберге алғанда','Арман курмауды кедергі жасағанда','Екіжүзділік, жарамсақтық','Уақытымен болмау','Идеялар мен мақсаттарды қолдамағанда','Сараңдықты ұнатпайды','Пайдаланғанда'],
5:['Іс-қимылдарда бірізді болмайды','5 санының манипуляцияға ұшырағанын немесе бақыланғанын сезгенде','Еркіндікті шектеу: мерзімдер, бақылау','Бірінші рет түсінбегенде','Адамдар ауқымды ойламағанда','Біркелкілік, монотондылық ренжітеді','Баяулық, тиімсіздік','Сәнсіз, ұқыпсыз адамдар ренжітеді','Сырластық, жабысқаналық','Ақша өз қолында болмаса','Қалай жасау керек екенін айтса'],
6:['Жайсыз болғанда','Жоспарларды бұзғанда','Жанасу жетіспегенде','Ақыл үйреткенде','Тәртіпті болу қажеттілігі','Тым тыз-тыз болғанда','Лас, дәмсіз, әдемісіз болғанда','Сүйіспеншілік жетіспегенде','Ұйықтауға бермегенде','Жақындық жетіспегенде','Жанжал жағдайлары мен жоғары эмоционалды фон'],
7:['7-ден жақсырақ мінез-құлық жасайды','7-ден жақсырақ ойлайды','Мойындалмау','7-лерді байқамаса','Рухсыз әлсіздер','Адамдар дамымаса','Жалқаулық ренжітеді','Назар орталығында болмаса','Сараңдық ренжітеді','Данышпандық идеяларды мойындамаса','Жалпыалдында кемсіту, сын'],
8:['Табыс жолын көрмейтіндер','Кедейлер','Баяулар','Бұлтта ойнайтын армандаушылар','Үйретілмейтін адамдар','Еңбекті бағаламайтындар','Тәртіпсіз, ұқыпсыз адамдар','Заңды сақтамайтындар','Кезектер мен уақытты жоғалту ренжітеді','Хаос және ресурстарды нерационалды пайдалану','Сегіздіктердің өздерін бақылағанда','Уақытымен болмау'],
9:['Көмегі үшін алғыс айтпаса','Көмек қажет емес, олар көмекті бағаламайды','Эгоисттер ренжітеді','Жауапсыз, қолдамайтын адамдар','Әлсіздер, баяулар','Жеңімпаз орны жетіп-жетпейтін болса','Жалған және шынайы емес адамдар','Әлсіздерді ренжіткенде','Басқа адамдардың жеңісі','Бас тарту, «жоқ» сөзі']
},

HOW_TO: {
1:`• Перфекционизмге «жоқ» деп айтыңыз. Қазір барымен жұмыс жасаңыз.\n• Шешімдер қабылдаңыз\n• Стратегия жасаңыз және оған сай іс-қимыл жасаңыз\n• Жауапкершілікті алыңыз және жиі бастама жасаңыз`,
2:`• Актерлердің эмоцияларына назар аудара отырып, айына 2 рет театрға барыңыз\n• 5 діни конфессияны аралаңыз және дін арқылы адамдарды түсінуге тырысыңыз\n• Қарым-қатынаста жиі компромиске барыңыз\n• Адамдарға терең сұрақтар қойыңыз: «Мен сізді дұрыс түсіндім бе?»\n• Психологияны жалпы зерттеңіз`,
3:`• Күнтізбе/күнделік жүргізіңіз. Таңертен күнді жоспарлаңыз, кешке талдаңыз.\n• Апта / ай / жыл жоспарын жасаңыз.`,
4:`• «Өмірлік баланс дөңгелегі» практикасын жасаңыз.`,
5:`• Ренжіп жүрген немесе сіз ренжіткен 5 адамды жазып алыңыз. Кешірім сұраңыз.\n• Өзіңізге жабылмаңыз — адамдарға барыңыз. Байланысыңыз, танысыңыз.\n• Күнделікті табыстылық пен табыс деңгейі жоғары адамдармен байланыс жасаңыз.\n• Ауызша «визит карточка» дайындаңыз — 30 секунд, 1 минут және 3 минуттық өзіңізді таныстыру.`,
6:`• «Сүйіспеншіліктің 5 тілі» кітабын оқыңыз\n• Таң мен кеш батысты бақылаңыз\n• Күнделікті «Ризашылық практикасын» жасаңыз\n• «Табыс күнделігін» жүргізіңіз\n• Бастаған істерді аяқтаңыз`,
7:`• Энергияны көтеріңіз: йогамен, спортпен, биймен айналысыңыз. Жүрек соғысы шамамен 130 соққы/мин болуы керек`,
8:`• Өз ісіңізде тәжірибе жинақтаңыз (шамамен 1000 сағат)\n• Жалқаулық пен прокрастинациядан аулақ болыңыз`,
9:`• Денсаулығыңызбен айналысыңыз: спорт, массаж, тамақтану`
},

PROF_BEFORE33: {
1:{type:'Стратег · Стратегиялық ойлау',institutes:'Менеджмент, Экономика мен қаржы, Саясаттану, Кәсіпкерлік пен стартаптар, Корпоративтік құқық, Халықаралық құқық, Көшбасшылық психологиясы, Шешендік өнері'},
2:{type:'Дипломат · Эмпатикалық ойлау',institutes:'Психология мен психотерапия, Халықаралық қатынастар мен дипломатия, Медиация мен жанжалтану, Персоналды басқару (HR), Әлеуметтік ғылымдар мен коммуникациялар, Мәдениеттану, Лингвистика'},
3:{type:'Аналитик · Аналитикалық ойлау',institutes:'Деректерді талдау, Қаржылық аналитика, Экономика мен статистика, Бизнес-аналитика, Бухгалтерлік есеп, IT мен бағдарламалау, Математика, Медицина, Жүйелік инженерия'},
4:{type:'Новатор · Шығармашылық ойлау',institutes:'Маркетинг пен жарнама, Медиа мен коммуникациялар, Журналистика, Өнер мен шығармашылық индустриялар, Режиссура, Технологиялар мен IT, Кәсіпкерлік пен инновациялар'},
5:{type:'Бизнес-логика · Логикалық ойлау',institutes:'Бизнес пен кәсіпкерлік, Логистика, Бағдарламалау, IT мен автоматтандыру, Қоғаммен байланыс (PR), Математика мен физика, Сән, стиль және эстетика'},
6:{type:'Корпоративтік мәдениет · Шығармашылық ойлау',institutes:'Өнер мен дизайн (сәулет, интерьер, киім, зергерлік), Қаржы мен инвестициялар, Туризм мен қонақжайлылық бизнесі, Luxury-менеджмент, Эмоциялар психологиясы'},
7:{type:'Технолог · Интуитивтік ойлау',institutes:'Дағдарыс-менеджмент, Тәуекелдерді басқару, Балама медицина мен йога, Рухани зерттеулер, Инновациялық кәсіпкерлік, Когнитивтік психология мен нейроғылым, Экология, Заңгерлік'},
8:{type:'Бақылау · Практикалық ойлау',institutes:'Қаржы, несие мен басқару (аудит, есеп), Инвестициялық талдау, Жылжымайтын мүлік басқарымы, Сапа бақылауы (ISO), Операциялық менеджмент, Салық құқығы'},
9:{type:'Әлеуметтік қолдау · Тактикалық ойлау',institutes:'Спорт пен дене шынықтыру, Әскери ғылымдар мен қауіпсіздік, Медицина мен хирургия, Жобаларды басқару, Ивент-менеджмент, Әлеуметтік жұмыс, Театр мен кино'}
},

PROF_MISSION: {
1:{competence:'Стратег. Стратегия жасау және іске асырудағы құзыреттілік',industry:'Барлық ресурстарды басқару',activity:'Менеджмент / стратегия / мансаптық бағдарлау / көшбасшылық'},
2:{competence:'Дипломат. Дипломатия, қарым-қатынас пен жағдайларды түсінудегі құзыреттілік, жанжалдарды басқару',industry:'Тұлғааралық қарым-қатынастарды дипломатия мен басқару',activity:'Қарым-қатынас орнату / тәлімгерлік / коучинг / іскери байланыстар'},
3:{competence:'Аналитик. Талдаудағы, жүйелік басқарудағы, қаржы мен несиедегі құзыреттілік',industry:'Статистика мен ақпаратты талдау және басқару',activity:'Талдау, жүйелеу, басқару / білім беру / оқыту / тәлімгерлік / статистика'},
4:{competence:'Новатор. Мақсат қою мен оған жетудегі құзыреттілік. Шығармашылық ойлау',industry:'Новаторлық, шығармашылық индустрия',activity:'Мақсат анықтау мен қою / маркетинг / шығармашылық / білімді жеткізу'},
5:{competence:'Бизнес-логика. Нарықтың қажеттіліктерін анықтаудағы құзыреттілік. Дұрыс-бірізді іс-қимылдар',industry:'Коммуникацияларды басқару. Техникалық интеллект',activity:'Өнімнің пайдасын анықтау / сатылым / логистика / кәсіпкерлік / сервис'},
6:{competence:'Корпоративтік мәдениет. Корпоративтік орта жасаудағы, сенімді қарым-қатынас орнатудағы және сервис сапасын арттырудағы құзыреттілік. HR',industry:'Шығармашылық, корпоративтік мәдениет',activity:'Сервис / психология / жайлылық пен шығармашылық жасау / HR'},
7:{competence:'Технолог. Технологиялық процестердегі және оларды жетілдіру шешімдерін әзірлеудегі құзыреттілік',industry:'Инновациялық даму мен енгізу',activity:'Мақсаттарды жылдам енгізу / технология / инновациялар'},
8:{competence:'Бақылау. Нысаналы көрсеткіштерге жету үшін регламент жасаудағы құзыреттілік (нәтижелерді бақылау)',industry:'Регламент пен еңбек тәртібі',activity:'Өндірістік / шығармашылық процестер мен ресурстарды бақылау / сапа бақылауы'},
9:{competence:'Әлеуметтік қолдау. Жалпы мақсаттарды алға жылжыту үшін адамдар мен идеяларды біріктірудегі құзыреттілік',industry:'Қауіпсіздік пен әлеуметтік жобаларды басқару',activity:'Идеяларды генерациялау мен алға жылжыту / қайырымдылық / қауіпсіздік / өндіріс'}
},

ENERGY_LABELS:{1:'Шешім қабылдау, психикалық энергия',2:'Түсіністік пен сезімталдық',3:'Талдау, мақсат іске асыру механизмі',4:'Мақсат / идея / ата-бабалар білімі',5:'Адекватты коммуникация',6:'Даналық, бақыт сезімі',7:'Кундалини энергиясы / дивинді бензин',8:'Еңбек / өткен өмір тәжірибесі',9:'Іс-қимыл энергиясы / мүмкіндіктер'},

CS_NAMES:{1:'Көшбасшы',2:'Психолог',3:'Тәлімгер',4:'Новатор',5:'Коммуникатор',6:'Шығармашы',7:'Технолог',8:'Реалист',9:'Жауынгер'},
DOBROTAS:{1:'Жомарт (мақсатты болуы керек)',2:'Мистикалық (қамқор болуы керек)',3:'Суық (жомарт болуы керек)',4:'Ең жомарт (талдау арқылы жомарттыққа айналуы керек)',5:'Белгісіз (шарт қоймайтын сүйіспеншілікке айналуы керек)',6:'Таңдамалы (рухани жомарттыққа айналуы керек)',7:'Агрессивті (жомарттық жоқ, агрессия бар)',8:'Эгоисттік (сезімтал болуы керек)',9:'«Сен маған — мен саған» (жомарт болуы керек)'},
SOUL:{1:'Басшылық немесе дербес еңбек арқылы',2:'Қарым-қатынас арқылы',3:'Тәлімгерлік арқылы',4:'Барлық жерде шығармашылық арқылы',5:'Техникалық интеллект арқылы',6:'Шығармашылық арқылы',7:'Барлық жерде йога мен дене тәртібі арқылы',8:'Еңбек арқылы (кез келген орта)',9:'Идея арқылы'},
EGO_VEC:{1:'Тек өзіне',2:'Басқа адамды және жағдайды түсіну ұмтылысына',3:'Талдау мен басқаруға',4:'Мақсат іздеуге',5:'Логикаға',6:'Өзінің жайлылығына',7:'Іс-қимылдарды мойындатуға',8:'Бақылау мен нәтижеге',9:'Жеңіске'},
WANTS:{1:'Билік, дербестік, маңыздылықты мойындату',2:'Түсіністік, қарым-қатынас',3:'Талдау, басқару, қамқорлық жасау',4:'Адалдық, мақсатқа жету, шығармашылық',5:'Еркіндік, өзіне пайда',6:'Жайлылық, сүйіспеншілік, ләззат',7:'Іс-қимылдарды мойындату, идеяларды жылдам іске асыру',8:'Материалдық әлемді бақылау, нәтиже',9:'Көмектесу, авантюра, жеңіс'},
GOAL_CS:{1:'Материалдық (билік, мансап, ақша)',2:'Моральдық-кармалық (қарым-қатынас)',3:'Материалдық (талдау, басқару)',4:'Моральдық-кармалық (қарым-қатынас орнату)',5:'Суық коммуникация (бизнес үшін)',6:'Мокша (сексуалдық энергияны босату, жайлылық)',7:'Рухани (жанды дамыту мен толтыру)',8:'Материалдық (ақша, жылжымайтын мүлік)',9:'Моральдық-кармалық (қарым-қатынас)'},
EGO_JOY:{1:'Өзінің жеке тұлғалығы мен эгосын іске асырудан',2:'Өзара түсіністіктегі қарым-қатынастан',3:'Тәлімгерлік пен білім алудан',4:'Беретін нәрсесінен',5:'Еркіндіктен, техникалық интеллектіні іске асырудан, коммуникациядан',6:'Өзінің жайлылығынан',7:'Мойындалудан',8:'Ақша санаудан, бақылаудан, нәтижеден',9:'Жеңістер мен соғыс процесінен'},
DESTROY:{1:'Жеке тұлғалықты иеленудің мүмкін еместігінен, өзінің консерватизмінен',2:'Түсінбеушіліктен, тұрақты күмәндардан, терең перфекционизмнен',3:'Тәлімгерлікте іске аспасаңыз, әділетсіздіктен',4:'Шығармашылықты таныта алмаудан, адалсыздықтан',5:'Еркіндікті жоғалтудан, логиканың болмауынан',6:'Жоғарылаған эмоциялардан, жайлылықтың болмауынан',7:'Мойындаудың болмауынан, кундалини энергиясы көтерілмесе',8:'Нәтиженің болмауынан, жоғарылаған бақылаудан',9:'Жоғарылаған эмоциялардан, идеяның болмауынан, өзінің авантюризмінен'},
DISEASES:{1:'Жүрек аурулары',2:'Бүйрек, несеп-жыныс аурулары',3:'Бауыр аурулары',4:'Жүйке жүйесі аурулары',5:'Тері аурулары, аллергиялар',6:'Қант диабеті, бүйрек',7:'Репродуктивті жүйе аурулары',8:'Сүйек жүйесі аурулары',9:'Жарақаттар, хирургиялық іс-шаралар'},
PLUS_CS:{1:'Дербестік, батылдық, мақсатшылдық, сенімділік, бастамашылдық, ұйымдастырушылық қабілеттер',2:'Түсіністік, дипломатиялылық, интуиция, жұмсақтық, тыңдай білу',3:'Аналитикалық ойлау, тәлімгерлік, әділдік, даналық, интеллект, басқару қабілеті',4:'Шығармашылық, адалдық, жомарттық, трансформациялық ойлау',5:'Логика, коммуникабельділік, стиль, ауқымды ойлау, бейімделу қабілеті',6:'Даналық, шығармашылық, сексуалдылық, инвестиция тарту, артистизм',7:'Харизма, интуиция, идеяларды жылдам іске асыру, данышпандық, сана тәртібі',8:'Еңбексүйгіштік, объективтілік, практикалдылық, мұқияттылық, жоғары жұмысқабілеттілік',9:'Жылдамдық, жауынгерлік рух, динамизм, көмектесуге деген ұмтылыс, идеялылық'},
MINUS_CS:{1:'Эгоизм, агрессивтілік, билікшілдік, деспотизм, тыңдамауға ниетсіздік, еріктің басылуы',2:'Депрессия, күмән, екіжүзділік, манипулятивтілік, шешімсіздік',3:'Суықтық, есептеушілік, қаттылық, әділетсіздік, бәсекелестік, эмпатияның болмауы',4:'Қанағатсыздық, салынған нәрсені жою, немқұрайлылық, апатия, шешімсіздік',5:'Күрес, келіспеушілік, ренжігіштік, немқұрайлылық, конфронтацияға кету',6:'Кекшілдік, жалқаулық, қарым-қатынаста немқұрайлылық, қызғаныш',7:'Санадағы хаос, агрессия, өте жоғары өзіне сенімділік, орта жолдың болмауы',8:'Тотальды бақылау, сенімсіздік, жалқаулық, оқшаулану, делегирлей алмау',9:'Ашу, паранойя, аңқаулық, эмоционалды жану, бастаған істерді аяқтамау'},
MISSION_PLUS:{1:'Көшбасшылық, қамқорлық, қорғаныш',2:'Түсіністік арқылы дипломатиялық іс-қимылдар',3:'Әділ пайда мен басқару',4:'Шығармашылық, адал іс-қимылдар, білімді жеткізу',5:'Жоғары коммуникация қабілеті',6:'Адамдарды шығармашылық арқылы дамытуға бағытталған шығармашылық іс-қимылдар',7:'Келісілген трансформация',8:'Жоғары жұмысқабілеттілік, күнделікті тұрақты күш салу',9:'Қоғамға қызмет ету мен пайда, эмоция деңгейінде адамдарға көмек'},
MISSION_MINUS:{1:'Агрессия, басқалардың еріктерін басу, деспотизм',2:'Түсінбеушілік, дуальдылық, екіжүзділік, депрессивтілік',3:'Корыстық есеп пен азарттылық',4:'Негативті трансформация, алаяқтық іс-қимылдар',5:'Күрес, келіспеушілік, антиәлеуметтік жағдайлар жасау',6:'Депрессияға және сүйіспеншілік нәтижесіндегі азапқа кету, кекшілдік',7:'Дағдарыс туғызу, түсінбеушілік, иллюзия',8:'Оқшаулану, жалқаулық',9:'Өзін-өзі жеу, эмоционалды жану'},
MISSION_GOAL:{1:'Материалдық (билік, мансап)',2:'Моральдық-кармалық',3:'Материалдық (талдау, пайда, әділ басқару)',4:'Моральдық-кармалық',5:'Суық коммуникация',6:'Мокша (өзі үшін жайлылық)',7:'Рухани коммуникация',8:'Материалдық (ақша, жылжымайтын мүлік)',9:'Моральдық-кармалық (қарым-қатынас)'},
COLOR_CS:{1:'Сары',2:'Күміс',3:'Қызғылт сары',4:'Сұр-қоңыр',5:'Жасыл',6:'Сирень',7:'Сұр-сирень',8:'Қара/қою-көк',9:'Қызыл'},
COLOR_CLOTHES:{1:'Қызыл, ақ',2:'Ақ, ашық жасыл',3:'Сары',4:'Жасыл, көк, сұр',5:'Жасыл, көк',6:'Қызғылт, бирюза, ашық көк',7:'Жасыл, сұр, көк',8:'Көк, ашық көк',9:'Қызыл, қоңыр, қызғылт'},
COLOR_WALLET:{1:'Күміс',2:'Сары',3:'Қызыл',4:'Сұр-сирень',5:'Жасыл',6:'Сирень',7:'Сұр-қоңыр',8:'Сирень',9:'Қызғылт сары'},
WEEK_DAYS:{1:'Жексенбі',2:'Дүйсенбі',3:'Бейсенбі',4:'Бейсенбі',5:'Сәрсенбі',6:'Жұма',7:'Жұма',8:'Сенбі',9:'Сейсенбі'},

DOW:['Жс','Дс','Сс','Ср','Бс','Жм','Сб'],
MONTHS_SHORT:['Қаң','Ақп','Нау','Сәу','Мам','Мау','Шіл','Там','Қыр','Қаз','Қар','Жел'],

UI:{
  logo_title:'Жеке Энергетикалық Күнтізбе',
  logo_sub:'Digital Consulting',
  theme_dark:'Қараңғы тақырып',
  theme_light:'Жарық тақырып',
  lang_switch:'Тіл',
  input_title:'Туған күніңізді енгізіңіз',
  input_sub:'Бүгінгі жеке энергияңызды және апта бойынша ұсыныстарды алыңыз',
  btn_calc:'Есептеу',
  today_prefix:'Бүгін:',
  section_today:'Бүгінгі энергетикалық көрсеткіштеріңіз',
  label_year:'Жеке жыл',
  label_month:'Жеке ай',
  label_pday:'Жеке күн',
  label_cday:'Жалпы күн',
  warn_text:'<strong>Назар аударыңыз — айдың 10, 20 немесе 30-шы күні.</strong> Бұл күн нәтижелердің жойылу тәуекелін арттырады. Жаңа жобалар бастамау, шарттарға қол қоймау, несие алмау және ірі сатып алулар жасамау ұсынылады. Күнді талдауға, жоспарлауға және ішкі жұмысқа пайдаланыңыз.',
  section_pday:'Жеке күн энергиясы',
  section_cday:'Жалпы күн энергиясы',
  section_month:'Жеке ай энергиясы',
  section_year:'Жеке жыл энергиясы',
  section_week:'Алдағы апта бойынша ұсыныстар',
  rec_do:'Ұсынылады',
  rec_dont:'Ұсынылмайды',
  plus_label:'Плюста',
  minus_label:'Минуста',
  mantra_label:'Күн мантрасы',
  mantra_year_label:'Жыл мантрасы',
  ritual_label:'Таңертеңгі ритуал',
  week_detail_personal:'Жеке күн',
  week_detail_universal:'Жалпы күн',
  week_detail_mantra:'Күн мантрасы',
  week_detail_rec:'Ұсынылады',
  week_detail_avoid:'Аулақ болу',
  week_warn:'айдың күні — жаңа істер бастамаңыз, шарттарға қол қоймаңыз, несие алмаңыз',
  psycho_title:'Тұлғалық психоанализ',
  psycho_sub:'Жеке талдау үшін есімді және туған күнді енгізіңіз',
  psycho_name_ph:'Клиент есімі',
  psycho_dob_ph:'КК.АА.ЖЖЖЖ',
  psycho_btn:'Талдау алу',
  psycho_link_btn:'🔗 Сілтеме жасау',
  cs_label:'Тұлғалық сан',
  mission_label:'Миссия',
  back_btn:'← Кабинет',
  copy_link:'Сілтемені көшіру',
  close:'Жабу',
  link_ready:'Сілтеме дайын ✦',
  link_send_to:'Бұл сілтемені',
  link_send_client:'клиентке жіберіңіз',
  link_valid:'Сілтеме мерзімсіз жарамды және кез келген құрылғыда ашылады',
  link_copied:'Көшірілді ✓',
  limit_text_prefix:'Пайдаланылды',
  limit_text_middle:'/',
  limit_text_suffix:'тегін талдаудан',
  limit_exhausted_title:'Тегін лимит таусылды',
  limit_exhausted_sub:'Барлық тегін психоанализдерді пайдаландыңыз. Толық қол жеткізу үшін әкімшімен байланысыңыз.',
  back_cabinet:'← Кабинетке оралу',
  s_prof_before33:'33 жасқа дейінгі кәсіптік бағдарлау',
  s_prof_mission:'Миссия бойынша кәсіптік бағдарлау',
  s_compat:'Тұлғалық сан бойынша үйлесімділік',
  s_colors:'Түстер мен символдар',
  s_matrix:'Сандар матрицасы',
  s_active_lines:'Матрицадағы белсенді сызықтар',
  s_no_lines:'Матрицадағы сызықтар',
  s_no_lines_text:'Матрицаңызда толық сызықтар жоқ. Бұл барлық қасиеттердің өмірлік тәжірибе мен саналы өзін-өзі жетілдіру арқылы дамитынын білдіреді.',
  s_energies:'Матрицадағы энергиялар',
  s_how_to:'Жоқ энергияларды қалай нарақтандыруға болады',
  s_triggers:'Триггерлер — не ренжітеді',
  s_general_rec:'Жалпы ұсыныстар',
  present:'✓ Бар',
  absent:'✗ Жоқ',
  present_energies:'Бар энергиялар',
  absent_energies:'Жоқ энергиялар',
  all_energies:'✅ Барлық энергиялар бар!',
  compat_best:'Ең жақсы:',
  compat_good:'Жақсы:',
  compat_neutral:'Бейтарап:',
  compat_bad:'Теріс:',
  color_num:'Тұлғалық сан түсі',
  color_clothes:'Киім түс гаммасы',
  color_wallet:'Әмиян / сөмке түсі',
  lucky_day:'Сіздің аптаның күні',
  matrix_hint:'Туған күндегі сандар алтынмен ерекшеленген',
  dobrata:'Жомарттық',
  soul_real:'Жан іске асады',
  ego_vec:'ЭГО векторы бағытталған',
  cs_wants:'Тұлғалық сан не қалайды',
  cs_goal:'Тұлғалық санның мақсаты',
  ego_joy:'ЭГО ләззат алады',
  destroys:'Бұзылады',
  diseases:'ЭГО азаптанғанда аурулар',
  proftype:'Тұлға түрі',
  rec_spheres:'Ұсынылатын салалар',
  competence:'Тұлға / Құзыреттілік',
  industry:'Сала / Қажеттілік',
  activity:'Қызмет',
  s_char:'Сипаттамалар',
  s_plus_minus:'Плюста және минуста',
  s_destroy:'Бұзылады',
  analysis_sub:'Жеке талдау · Digital Consulting',
  personal_analysis:'Жеке Талдау',
  gen_rec_1:'Өміршілік міндетіңізді орындауға ұмтылыңыз және адамдарды бөлмеңіз',
  gen_rec_2:'45°С-қа дейін жылы су ішіңіз (30 кг дене салмағына — 1 литр су)',
  gen_rec_3:'Күнделікті кемінде 6 км жаяу жүріңіз, жылдамдығы 5 км/сағ және одан жоғары',
  gen_rec_4:'Күн бойына қышқыл жемістер мен көкөністер жеңіз (серотонин — «бақыт гормонын» өндіреді)',
  gen_rec_5:'Жаяу жүргеннен 1 сағат өткен соң таңертеңгі ас ішіңіз (жемістер жақсырақ)',
  gen_rec_6:'Аптасына кемінде 2 рет монша барыңыз',
  gen_rec_money:'Ақша:',
  gen_rec_money_text:'солтүстікке қарап жұмыс жасаңыз, тамақтаныңыз, телефонмен сөйлесіңіз. Оңтүстікке бас қойып, солтүстікке аяқ салып ұйықтаңыз. Сейфті және қолма-қол ақшаны бөлменің солтүстік бөлігінде сақтаңыз',
  gen_rec_contracts:'Шарттар:',
  gen_rec_contracts_text:'солтүстікке қарап оқыңыз, содан кейін шығысқа бұрылып қол қойыңыз'
}
}

}; // end CONTENT
