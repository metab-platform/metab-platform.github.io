const a=[-.41,.39,.88,-.09,.9,-.07,.17,-.28,.07,.37,.56,.09,0,-.77,.73,-.07,.27,.02,-.24,-.18,-.02,-.11,.09,.48,.48,.72,-.02,.21,.31,.04,.4,-.15,.87,.1,.19,.11,.89,.52,.19,.75,-.04,.77,.69,-.1,.07,.36,.04,-.14,.11,.03,.14,-.03,.43,.74,.34,.42,.33,0,.22,.71,.24,.8,.71,-.06,.23,.04,.76,.58,-.08,-.12,-.06,.61,.12,-.1,.8,.09,-.1,.18,.49,.1,-.54,.54,-.21,.65,-.1,-.11,.61,.04,-.72,.52,.04,.07,-.05,-.69,.1,-.17,-.77,-.07,-.18,.21,-.06,.71,.36,-.14,.38,.07,-.06,-.06,.76,.45,-.06,.17,-.06,-.67,-.05,.73,.11,-.04,-.3,.4,-.16,-.07,.36,-.25,.14,.36,.73,-.38,.02,.88,-.33,-.49,-.21,-.02,.49,-.23,-.1,.06,.03,-.09,.79,.03,.52,.61,-.03,-.08,.04,-.14,.53,-.23,.71,-.24,-.06,.02,-.32,-.04,-.02,.08,-.12,.62,-.08,.56,.08,.04,-.03,.1,.47,-.02,-.16,.65,-.04,.03,-.24,-.39,.59,.02,-.07,.11,.01,.82,-.08,.03,.1,.87,.41,-.15,.17,.22,.08,-.16,-.16,-.13,.1,.41,.65,.87,.59,.2,-.02,-.16,.14,.42,.87,.04,-.51,.59,.09,.06,.09,-.16,-.35,.6,-.03,.7,0,.24,-.1,-.19,.04,-.19,.37,.26,.28,.82,.36,.89,-.29,.02,.21,.14,-.09,-.13,.48,.83,.23,.03,.58,.21,-.09,.11,.13,.65,-.36,-.29,-.07,-.39,.12,.11,.23,-.03,-.11,-.11,.33,.01,.82,-.05,.24,.18,.07,.85,.12,-.07,.19,.79,-.2,.34,-.05,.62,.11,.44,.06,-.44,.82,.83,.6,-.06,.24,.07,.78,.08,.01,-.09,.31,-.57,.03,.58,.07,.81,-.05,-.02,-.24,.09,.8,-.3,-.15,.7,.27,-.27,-.02,.17,.01,.94,-.07,-.25,.13,.3,-.09,.44,-.14,.3,.67,-.05,-.21,-.04,.24,.16,-.06,-.02,.8,.32,.62,-.06,.6,.74,-.15,-.01,.83,-.24,.1,.01,-.61,.38,.17,.1,-.05,.05,.08,.31,-.18,-.15,.28,.73,-.25,-.14,.85,.85,.15,.01,.66,-.06,.67,-.43,.15,-.01,-.52,.36,.25,.12,.73,.84,.24,.15,-.02,-.12,-.05,-.74,.06,.9,.27,.12,.27,-.25,.04,-.27,.21,.02,.24,.64,.05,.01,.13,.02,.16,.11,-.03,.3,.03,.05,.78,.86,.79,-.1,.15,.03,.01,.95,-.29,-.15,-.22,.16,-.06,-.14,.79,.24,.04,.14,.57,.77,.51,.46,.79,-.6,-.38,.76,.02,.07,.75,.81,.01,-.47,.06,.79,.06,-.04,.03,.9,.92,.07,.06,-.38,-.41,-.33,.35,.08,-.14,.79,-.29,.86,.93,.59,.6,.53,.57,-.1,.18,.32,.94,.79,-.21,-.38,.18,.21,-.83,-.13,-.2,-.11,-.08,.9,-.16,.38,.78,.82,-.74,.08,.07,-.02,-.42,-.06,-.43,.76,.03,.91,.58,.14,-.02,.77,.67,-.11,.87,-.09,.63,.72,.74,.03,.16,-.11,.34,-.39,.5,.74,.05,.09,-.42,-.19,.88,.83,-.14,-.12,.59,-.35,-.01,-.21,.62,.52,.66,-.25,0,.66,.9,.26,.71,-.17,.67,-.02,.19,-.09,.11,-.19,.03,.64,.08,.94,0,-.15,.3,-.03,.28,.35,.08,.68,-.13,-.16,-.22,-.28,-.07,.02,.08,.39,-.43,.18,.15,.07,-.13,.18,.05,-.22,0,.2,.66,-.01,.04,.89,.92,.8,.6,-.09,-.32,-.26,-.29,-.14,.73,-.01,-.01,-.39,-.16,-.25,-.17,.1,.12,-.02,.76,.83,.02,-.39,.74,.95,-.21,-.33,.1,.2,.04,.26,.61,-.04,.34,.67,.95,.52,-.03,.88,-.27,.05,.04,.72,-.34,-.69,.66,.87,.21,.11,.61,.81,.87,.07,.76,-.02,-.03,-.22,.22,-.08,.12,.83,-.05,-.12,-.19,-.07,.95,-.38,.03,.07,-.18,-.13,.14,-.13,-.16,-.04,.12,0,.68,-.49,-.13,-.37,-.25,0,.32,.27,.79,-.24,-.32,-.11,.03,.7,-.27,.2,.26,.71,-.47,.69,.11,.33,-.03,-.72,-.07,.94,.78,.08,.48,-.03,-.26,-.15,.95,.71,.84,.07,.2,.04,.06,-.11,.44,.62,.2,.11,-.06,0,.31,-.31,.53,.8,-.43,.14,-.09,-.39,.72,.76,-.21,.18,-.48,.7,.79,-.44,-.1,-.23,-.23,-.22,-.09,-.45,.46,.1,.61,-.57,.64,-.22,.2,.75,0,-.03,-.16,.57,-.05,0,.73,-.27,.17,.01,-.17,-.18,-.21,.09,-.22,-.2,-.23,.69,.86,0,.66,.68,-.28,-.17,-.2,.66,-.52,.12,.86,.14,.21,-.12,.88,-.17,.25,-.1,.47,.62,-.26,.13,-.13,-.47,.17,.86,-.09,.33,-.1,-.02,-.04,.17,.69,.17,-.1,.44,.66,.08,.41,-.06,.78,.17,.44,.73,.71,-.17,-.08,-.04,-.32,-.12,.81,.02,0,-.4,.01,-.29,.87,.09,.87,.01,.01,.71,.8,.6,.24,.09,.08,-.02,-.25,-.17,.55,.5,.85,-.02,.91,.53,-.52,.32,-.29,.21,-.41,.77,.65,.34,.16,-.16,.11,.04,.02,-.14,.86,-.23,.46,-.24,-.7,.02,.11,.9,.09,-.02,-.4,.67,-.04,.88,-.09,.15,-.05,-.03,-.14,.87,-.11,-.12,-.03,-.02,-.07,0,.2,-.12,.61,.72,-.15,-.35,-.08,.74,.05,.01,.26,.07,-.22,.03,.27,-.11,.12,.17,.09,.02,-.1,-.02,.45,.9,-.17,-.32,-.36,-.19,-.31,.07,-.11,-.44,-.42,.11,-.11,0,-.27,.06,.19,0,-.1,.04,.05,.61,.13,.77,.8,-.14,-.09,.12,.84,-.33,.74,-.68,-.57,.21,.71,0,-.45,-.2,.55,.75,.22,-.13,.11,-.08,-.05,.65,.11,-.06,.05,-.16,-.12,.11,-.02,-.2,.64,.17,-.01,-.17,-.42,0,-.3,-.08,-.34,.42,.84,.88,-.03,.94,.68,.05,-.13,.89,.75,.79,.66,-.84,.07,-.04,.42,.79,.1,.02,-.06,.52,-.13,.18,-.28,.79,.15,.15,-.34,-.08,-.13,-.13,-.11,.19,.81,.02,.74,.05,.76,.11,-.26,-.11,.59,.07,-.02,.04,-.63,-.18,.04,-.36,.61,-.71,.6,-.15,-.25,.05,-.03,.64,.85,-.3,-.2,-.2,.03,-.33,-.4,.11,.08,.1,.29,-.4,-.07,-.37,-.23,-.12,.06,-.04,.04,.15,-.03,-.07,.14,.02,.14,.17,-.07,.25,-.14,-.01,-.1,.39,-.01,.05,-.25,-.22,.23,-.42,-.41,.14,.64,.13,.4,.36,.19,-.02,.81,.02,.18,.06,-.21,-.08,.31,.04,-.08,.35,.8,-.35,.37,-.1,-.17,.96,-.14,-.14,-.09,-.03,.05,-.25,-.04,.5,-.07,.56,.29,0,.22,-.23,-.21,-.05,-.18,.75,.05,-.01,.05,.55,.03,.1,.01,.11,.8,-.15,.14,.03,.2,.9,-.09,.44,.85,-.25,.52,.82,.01,-.11,.05,-.09,.13,.15,.03,-.29,-.1,.48,.02,-.41,.8,-.1,.7,.56,-.4,-.08,.82,.84,-.47,-.26,-.45,.14,.87,.24,.74,.02,.71,-.06,-.1,.17,.15,.03,-.11,-.09,-.27,.58,.03,.84,-.16,.7,-.11,.19,-.29,.02,-.14,.47,-.01,-.09,-.27,.82,.93,-.26,.01,.86,.77,-.27,-.01,-.45,.8,.1,0,.25,.74,-.04,.74,.59,.74,-.26,.07,-.4,.08,.73,.1,-.09,-.03,-.22,.11,-.04,.35,.35,-.16,-.04,.72,.31,.84,.74,.63,.42,-.15,.28,-.72,.03,.44,.2,.86,.17,.32,-.12,-.36,-.18,.02,-.29,-.33,.06,.92,.87,.04,.81,0,-.31,-.64,-.03,.87,.01,-.21,.73,.73,-.31,.05,.41,.01,.85,.06,.64,-.37,.82,.59,-.28,.91,.18,-.27,-.38,.59,-.09,-.21,.68,.6,.03,-.12,.64,.26,-.05,-.02,.12,-.07,-.04,.05,0,.04,-.36,.77,.1,.87,.52,.45,.05,-.02,-.03,.87,.78,.86,-.14,-.02,-.08,.03,.26,.7,.02,.71,-.15,-.16,.07,.13,-.17,.32,-.29,-.43,.69,-.7,.93,-.2,-.4,.11,.12,-.05,-.02,.02,.03,.73,-.11,.62,.23,.25,-.45,.61,-.25,-.32,-.15,.46,-.11,.43,-.21,.07,-.04,.94,.13,.01,.04,-.15,.65,.74,.45,-.25,-.11,-.15,.74,.46,.47,.76,.27,-.14,.02,.14,.74,.09,-.26,.88,.05,.17,.94,-.85,.37,-.17,.19,.14,.37,.88,.01,.07,-.27,-.31,-.34,-.14,-.22,.82,.74,.62,-.07,-.06,.86,-.29,.27,-.08,.18,-.51,-.01,-.12,.72,.12,-.3,-.36,.46,.14,-.08,.17,.46,-.05,-.14,.14,-.03,.44,.29,-.02,.04,-.09,.08,-.03,-.15,.44,.52,-.1,-.26,-.42,-.17,.56,.04,0,-.18,-.46,0,.02,.64,.06,-.2,-.4,-.36,.24,-.51,-.18,-.37,-.25,.08,-.09,.35,.21,-.16,.35,.58,.01,.43,.03,.25,.88,.28,-.34,.11,.9,-.26,-.12,-.02,.36,.86,.35,.58,-.01,.13,-.33,-.14,.79,.84,.1,-.08,-.03,.81,-.03,-.04,.2,-.05,.37,.07,-.11,.08,-.12,.01,.79,-.16,-.09,.7,-.16,.08,.69,.14,.7,.62,0,-.18,.13,.03,.23,.69,-.42,.7,0,-.33,-.07,-.22,.02,.36,-.47,-.27,.15,.38,.78,.58,.74,-.14,.02,0,-.08,-.04,.25,-.05,.27,.58,.3,-.15,.3,.39,.01,-.21,-.58,.02,.6,-.11,.6,.44,.27,-.12,-.07,.34,-.18,.29,-.27,.45,.23,-.11,-.06,.28,-.42,.69,.25,-.04,-.02,.4,.08,-.06,.05,.39,.12,.13,.78,.07,-.37,.35,.9,.15,-.01,.39,.35,.24,.02,.18,-.21,.2,.73,-.25,.41,.43,-.01,.09,.22,.26,.02,.25,.83,-.1,.17,-.01,-.25,.49,-.05,.12,.59,-.13,.04,.74,.31,.95,.85,-.03,.79,.66,.78,.15,-.25,-.08,.46,.22,.49,-.14,.6,.66,.02,.07,.59,.57,.68,.42,.1,-.11,.65,.32,.23,-.1,.47,.23,.62,.08,.83,.82,.27,.65,.01,.69,-.18,-.07,.4,.62,-.37,.03,.75,.54,.46,.04,.21,.48,.85,.72,.75,-.02,-.08,-.06,-.02,-.19,.89,-.08,.06,.64,.05,.3,.39,.04,.75,.88,-.26,-.07,.77,0,.22,.86,-.21,-.22,.4,.32,.16,.53,.13,.66,.12,.67,-.33,.36,-.13,-.09,.09,.14,-.07,.18,.84,.15,.4,.21,.24,.03,-.08,.73,.56,.6,.57,.67,-.22,-.04,-.28,.14,.23,.01,-.21,.61,.5,.61,.03,.65,-.23,.02,.26,-.16,.38,-.26,.17,.9,.94,.8,.84,-.06,.82,.28,.46,.2,-.52,.4,.22,-.52,.53,-.22,.63,-.14,.86,.55,.11,.76,-.15,-.08,.38,.1,.09,.42,.11,-.38,.04,0,.12,.08,-.05,.81,.91,.55,-.16,.66,.63,.57,.58,.58,.91,.15,-.24,-.09,.59,.1,-.44,-.24,.16,.25,-.01,.96,.81,.67,-.21,.69,.4,-.06,.17,.13,.7,.52,.16,-.37,-.02,-.08,-.04,-.09,.13,.82,.48,.54,-.37,.18,.12,.84,-.03,.02,-.23,0,.79,-.03,.83,.52,.83,.85,.09,.41,.55,.69,.05,.2,-.17,.32,-.6,-.17,-.2,-.73,-.02,-.4,-.03,-.09,-.25,.06,.45,.49,-.15,.72,.96,-.37,.8,-.5,-.04,-.42,-.12,.85,.95,.88,.51,.14,.33,.36,.31,.34,.48,.16,.73,.88,.45,.31,.16,.25,-.05,.41,.72,.81,-.04,.03,.04,-.04,.72,.13,.33,-.01,.32,.92,.61,.83,.93,.91,.74,-.01,.57,-.08,-.2,.78,.01,-.16,-.08,.73,.86,.62,.27,.04,.65,.24,.84,.22,-.08,.04,-.11,-.02,-.07,.66,-.39,-.02,-.2,.86,-.18,.57,-.28,-.15,-.07,.03,-.21,-.22,.86,-.09,-.04,.3,.06,.25,.66,-.37,-.49,-.2,.06,.61,-.15,-.21,.51,.38,.37,-.15,.79,-.2,.69,.12,.89,-.1,.22,.13,.03,.35,.06,.34,-.04,-.72,-.29,-.14,.55,.6,.73,.49,-.2,.13,.63,.17,.34,.08,-.18,-.15,.7,.89,0,.45,.75,.3,.26,.15,.83,.77,.02,-.29,.05,.27,.29,-.02,-.29,.45,.24,-.1,0,.95,-.37,-.03,.67,-.03,.01,.45,.09,.08,-.15,.7,-.29,.64,-.05,.08,-.24,0,.62,.39,-.14,.05,.09,-.18,.9,.92,.77,.12,.81,.9,.86,.57,.84,-.08,.07,.26,.73,-.07,.28,.01,-.2,.14,.82,.7,-.4,.55,-.08,.37,.91,.2,-.02,.08,-.03,-.27,-.18,.12,.05,.56,.91,.41,.93,.24,.09,.2,.25,.37,-.01,-.19,.32,.58,.81,-.04,-.16,-.67,.19,.87,.34,.82,.22,.82,.09,-.05,.57,-.62,.73,.83,.93,.28,.57,.28,.72,.58,-.2,.42,.84,.62,.32,.9,.78,.84,.12,.9,.49,.19,-.04,.84,.77,.72,.86,.78,-.44,.68,.73,.16,-.63,.81,-.02,1,-.5,.07,.64,.33,.8,.71,-.05,-.01,.18,-.28,.86,-.08,.73,.43,.65,-.24,-.03,.09,.02,.03,.1,.19,0,.19,.89,0,-.02,.3];export{a as rvalData};
