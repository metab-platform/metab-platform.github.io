const a=[-.29,.25,.52,-.16,.55,.14,.22,.16,.45,.16,.72,-.02,0,-.56,.75,-.15,.18,-.06,-.23,.02,.03,-.21,.07,.52,.66,.67,-.18,.14,.32,-.11,.37,-.09,.77,-.06,.2,.2,.65,.55,.18,.56,.08,.63,.54,-.2,.07,.45,.03,.17,.2,.21,.24,-.09,.21,.55,.4,.66,.63,.03,0,.67,.35,.7,.57,-.01,.38,-.29,.64,.57,.09,-.2,-.03,.47,.29,-.21,.5,0,-.04,.27,.14,.09,-.41,.51,-.14,.59,-.15,-.1,.69,.13,-.51,.39,-.05,.06,.41,-.61,.11,.11,-.55,-.14,-.07,.32,-.13,.57,.32,-.16,.38,.16,-.06,.02,.84,.31,.02,.34,-.03,-.46,.05,.52,-.02,-.18,.09,.64,-.12,-.06,.33,-.1,.27,.46,.42,-.24,-.32,.69,.06,-.12,-.16,.14,.32,-.12,.1,.08,-.18,-.18,.62,-.06,.5,.7,.02,.06,.19,-.12,.59,-.06,.56,.13,-.01,.17,.16,-.06,.04,-.01,-.07,.71,0,.38,.11,.16,.41,.23,.36,-.16,.08,.7,.03,-.09,-.04,-.12,.63,-.04,.08,-.02,.16,.63,.12,.16,.03,.43,.46,-.03,.12,.05,.05,-.16,-.19,.18,.09,.58,.64,.65,.42,.03,-.05,-.13,.24,.66,.7,.04,-.26,.5,.17,.17,.33,-.17,.04,.61,-.06,.64,.02,.36,-.06,.21,-.04,-.08,.33,.3,.14,.62,.4,.7,.07,-.11,.24,.11,.05,-.1,.52,.41,.08,.06,.54,.33,-.2,.06,.23,.56,.15,-.01,.37,.03,-.01,.14,.12,-.11,-.02,-.01,.38,.24,.6,.16,.13,.41,.01,.36,.09,-.2,.43,.61,-.13,.35,-.01,.57,.31,.55,.01,-.41,.63,.48,.39,.01,.06,.23,.62,.21,.17,-.06,.4,-.4,.2,.8,.04,.7,-.08,.01,.14,.22,.8,.12,.11,.51,.53,-.28,-.01,.18,.14,.59,-.08,-.21,.14,.46,.11,.39,-.15,.55,.57,-.09,-.21,-.04,.08,.18,-.14,-.04,.41,.2,.54,-.04,.53,.63,-.1,.15,.77,-.34,.3,.17,-.36,.41,.42,.02,-.23,-.02,-.16,.44,.22,.05,.53,.46,-.14,-.05,.63,.55,.07,.1,.53,.21,.65,-.21,.21,.18,-.36,.39,.2,.03,.46,.39,.54,.11,.1,.04,.08,-.49,-.03,.68,.13,-.01,.16,-.21,.42,.03,.19,.17,.16,.55,.03,.02,.12,.16,.1,.13,0,.39,-.06,-.02,.69,.74,.55,-.08,.13,.22,.23,.6,-.23,-.2,-.37,.31,-.17,.02,.49,.59,.1,.06,.45,.51,.42,.31,.43,-.43,-.29,.54,.04,-.03,.55,.59,.17,-.11,.14,.68,-.04,.03,.24,.71,.71,-.04,.2,-.13,.12,-.05,.6,.09,-.08,.49,-.03,.77,.67,.53,.41,.53,.55,.19,.17,.37,.65,.78,.22,-.32,.5,.29,-.72,.07,-.07,-.07,-.03,.67,-.03,.53,.42,.77,-.53,.19,.05,.12,-.35,.05,-.47,.56,.12,.66,.46,.05,.03,.88,.71,.28,.61,-.08,.57,.6,.38,.46,.07,.13,.31,-.2,.47,.32,.05,-.01,.01,-.15,.53,.73,-.19,-.12,.57,-.04,.15,-.31,.41,.57,.49,-.14,-.08,.76,.71,.2,.56,.04,.57,.12,.18,-.09,.04,.22,.2,.54,-.04,.56,.12,-.07,.12,-.01,.35,.06,.18,.76,.17,-.18,-.11,-.05,.05,.09,.14,.4,-.32,.18,.13,-.02,-.12,.05,.13,-.05,.08,.04,.36,-.01,-.08,.7,.65,.4,.63,-.11,-.31,.04,-.32,.02,.31,-.15,.21,.12,-.14,-.19,-.05,-.09,.06,0,.43,.43,.2,-.12,.45,.59,-.23,-.15,.14,.14,.11,.22,.5,.12,.42,.57,.66,.32,-.12,.64,-.17,.1,.03,.45,.13,-.66,.75,.49,.21,.34,.57,.54,.46,.2,.42,-.21,.11,.06,.16,-.1,.12,.63,-.12,.17,-.18,-.04,.63,.03,-.11,.09,.02,.14,.33,-.1,.04,-.16,.3,-.08,.49,-.02,-.06,-.05,-.07,.08,.35,.27,.86,.04,-.06,-.05,-.03,.7,-.18,.15,.08,.55,-.33,.58,.12,.39,-.11,-.65,.21,.68,.87,.15,.32,-.1,-.24,.04,.59,.52,.63,-.04,.06,.04,.12,.05,.65,.59,.56,.09,-.13,-.11,.24,-.2,.53,.54,-.29,.17,-.01,-.31,.56,.72,-.02,.25,-.29,.63,.82,-.03,-.07,-.11,-.25,-.15,-.19,-.08,.32,.07,.35,-.4,.54,.26,.54,.49,.1,-.01,-.16,.31,.02,-.11,.72,.05,.18,.38,-.17,-.22,.31,.12,-.13,-.05,.27,.49,.64,.01,.66,.41,-.14,-.18,-.22,.3,-.3,.24,.75,.04,.42,.08,.68,-.17,.14,-.07,.63,.56,-.09,-.02,-.12,-.29,.51,.66,.08,.34,-.12,.15,-.13,.34,.4,.35,.07,.1,.65,-.04,.1,-.25,.83,.07,.16,.51,.48,-.14,.11,.12,-.28,-.09,.55,.03,.04,-.31,.11,.23,.64,.03,.56,.12,.02,.55,.4,.41,.37,.24,.08,-.01,-.21,.05,.35,.5,.76,-.2,.59,.55,-.24,.23,.21,.19,-.34,.55,.48,.52,.52,-.21,-.02,.06,.07,-.16,.75,-.23,.47,.16,-.49,.05,.04,.72,-.03,.36,.11,.59,.03,.65,.05,.13,0,.02,-.21,.69,-.1,-.16,-.03,.03,-.19,.12,.14,-.09,.51,.71,-.03,.06,-.04,.39,.15,0,.53,.09,-.03,-.11,.57,-.05,.01,.23,-.03,-.1,.35,.19,.6,.69,.07,-.2,-.27,-.24,-.25,.14,.22,.06,-.03,.21,-.07,.04,-.14,-.05,.15,.2,-.06,.08,-.11,.7,.32,.59,.59,-.04,.01,.41,.58,.1,.61,-.48,-.39,.29,.46,-.19,-.31,-.23,.37,.68,.53,-.14,.11,-.02,-.04,1,.19,.13,-.05,.13,-.17,-.02,-.08,-.15,.38,.41,-.05,.11,-.01,.04,-.12,-.07,-.13,.37,.59,.49,-.06,.66,.4,-.06,.17,.45,.56,.66,.54,-.58,.24,-.15,.29,.56,-.06,.13,-.01,.53,.09,.13,.26,.62,.05,.2,.18,.13,.07,.07,.19,.2,.64,-.11,.58,.3,.83,.15,.08,.01,.42,.07,.01,.19,-.38,-.13,-.13,-.25,.52,-.48,.53,.17,-.14,.03,.21,.74,.63,.08,-.28,.24,.39,.19,-.23,.15,.07,.04,.44,-.02,.13,0,-.2,.05,.01,.01,.02,.15,-.13,-.08,-.07,-.05,.06,.1,-.1,.11,-.26,-.01,.03,.54,.31,.01,.02,-.13,.51,-.24,-.33,.11,.53,.1,.37,.4,.11,.03,.75,.06,.12,-.02,0,.03,.31,.19,.03,.56,.71,.11,.31,-.02,.17,.65,-.1,-.14,-.07,.02,.02,-.11,-.11,.29,.09,.69,.18,.23,.37,-.07,-.29,.04,-.13,.84,.03,.01,.25,.61,-.01,.22,-.17,.43,.47,-.16,.23,.12,.22,.52,.03,.69,.55,.02,.41,.61,.01,0,.01,-.11,.28,.02,-.02,-.12,-.17,.65,.07,-.34,.57,-.05,.28,.44,.1,.12,.75,.75,-.01,-.21,-.24,.49,.58,.59,.58,.12,.68,.01,-.15,.23,.22,.02,-.02,-.1,-.1,.64,.09,.72,-.14,.59,-.16,.08,-.15,.1,-.16,.32,-.12,-.1,-.17,.71,.64,-.12,.18,.49,.82,-.1,.04,-.22,.71,.08,.12,.33,.54,-.01,.74,.25,.51,-.02,.11,-.26,.09,.46,.2,-.03,-.01,.17,.09,0,.56,.46,-.2,.14,.82,.34,.59,.71,.38,.6,-.16,.14,-.72,.15,.49,.08,.66,.14,.49,-.09,-.03,-.03,.1,-.35,-.24,.05,.64,.69,-.01,.4,-.04,.07,-.21,.19,.69,.15,-.2,.51,.51,-.43,.12,.54,.01,.63,.17,.49,-.12,.4,.15,.08,.6,-.07,-.29,-.16,.55,-.09,.1,.59,.22,.03,-.01,.58,.4,-.02,.02,.03,-.02,-.05,-.04,-.17,-.28,-.42,.66,.09,.46,.66,.43,.1,-.08,-.01,.68,.6,.62,-.09,.01,-.07,-.05,.28,.79,.09,.64,-.12,-.2,-.03,.18,.22,.32,-.27,.13,.51,-.49,.66,.21,-.06,-.04,.01,-.24,-.17,.29,.01,.53,-.05,.54,.3,.16,-.05,.57,-.24,.11,-.05,.46,.05,.66,.12,.4,0,.61,-.03,.08,.07,-.4,.65,.59,.43,-.29,.08,.07,.45,.52,.27,.84,.53,.21,.14,.09,.55,.2,-.11,.7,-.05,.02,.67,-.54,.3,.02,.14,.13,.58,.66,-.07,.18,.03,-.22,-.27,-.1,-.17,.37,.54,.36,-.11,-.13,.67,-.24,.49,-.11,.24,-.11,-.04,-.14,.71,.51,-.17,-.14,.51,.36,.05,.04,.5,-.03,-.13,.3,.16,.37,.47,.09,.22,.05,.28,-.02,.16,.46,.46,-.05,.14,-.17,.22,.57,.2,.01,-.18,-.25,.35,.3,.46,.21,.12,-.04,-.17,.22,-.09,-.08,.04,.1,.03,.19,.37,.21,-.06,.4,.53,.03,.49,.2,.32,.68,.28,.02,.26,.62,-.2,.1,-.02,.09,.54,.44,.57,.23,.27,-.32,-.08,.67,.63,.13,.15,.02,.67,-.04,-.12,.24,-.12,.61,.08,.01,.22,.15,.05,.64,-.09,-.01,.75,.02,.16,.58,.02,.59,.71,.14,-.15,.27,.05,.18,.51,-.03,.58,-.03,.08,-.07,-.31,0,.44,-.3,.09,.08,.63,.61,.73,.7,-.01,.03,.05,-.11,-.1,.31,-.13,.33,.5,.26,-.16,.14,.4,.15,-.18,-.16,-.1,.45,-.13,.56,.49,.37,-.13,.2,.3,-.19,.33,-.03,.52,.32,.15,.11,.32,-.11,.55,.4,-.03,-.17,.36,-.05,.11,.08,.43,.28,.34,.55,.15,-.34,.5,.71,.34,-.1,.66,.48,.3,.1,.37,-.2,.15,.6,-.19,.33,.58,-.08,.05,.37,.26,.05,.25,.69,-.02,.13,-.13,-.22,.57,.11,.42,.45,-.08,-.04,.7,.32,.62,.75,.13,.46,.52,.65,.48,-.2,.03,.51,-.09,.51,.27,.57,.4,-.07,-.02,.62,.28,.59,.41,-.01,-.35,.39,.46,.19,.15,.5,.21,.57,.05,.69,.48,.54,.63,.04,.75,.02,-.27,.41,.56,-.17,-.05,.57,.31,.39,.32,.44,.29,.55,.72,.58,.21,-.09,.14,.32,.16,.57,.11,.09,.76,.07,.26,.17,.27,.52,.58,-.2,-.08,.42,.44,.5,.53,-.2,.17,.63,.47,.16,.5,.22,.63,.13,.62,-.24,.41,.15,-.15,.08,.18,-.08,.3,.43,.26,.41,.06,.35,.04,-.01,.52,.81,.56,.81,.63,-.19,.28,-.02,.22,.3,-.06,0,.64,.38,.56,-.06,.36,-.22,-.08,.21,.13,.39,-.15,.05,.63,.56,.67,.67,.03,.44,.45,.45,.31,-.39,.51,.29,-.07,.54,-.21,.4,-.1,.46,.63,.13,.65,-.2,.33,.63,.14,.02,.45,.28,.1,-.07,.03,.34,-.01,.02,.68,.65,.57,-.11,.55,.58,.68,.62,.6,.69,.08,-.05,-.01,.66,.02,-.39,-.08,.16,.16,-.02,.68,.36,.17,.05,.6,.15,-.11,.56,.08,.42,.64,.51,-.22,-.03,-.08,.01,.18,.17,.42,.34,.64,-.05,.34,.25,.77,.04,.15,-.26,.01,.57,-.04,.48,.49,.69,.62,.02,.29,.62,.62,-.16,.01,-.09,.55,-.27,-.24,.26,-.52,-.08,-.32,.01,.08,-.18,.02,.38,.42,-.17,.58,.63,.03,.43,.01,-.24,-.33,-.09,.67,.63,.66,.27,.34,.43,.24,.42,.35,.48,.1,.71,.66,.51,.42,.29,.33,.05,.31,.53,.52,-.12,-.08,.13,.01,.69,.46,.4,0,.66,.69,.56,.43,.63,.67,.46,.02,.37,-.05,-.37,.68,.03,-.15,.03,.74,.77,.59,.34,-.02,.33,.31,.49,.05,-.12,.04,-.15,0,0,.7,-.28,.42,.19,.75,-.16,.48,.06,-.05,.07,-.15,-.13,-.04,.66,-.07,.01,.43,-.04,.25,.55,.03,-.35,-.11,-.12,.8,-.07,-.11,.46,.43,.33,.12,.56,-.02,.64,.07,.69,.18,.32,.24,-.02,.38,.2,.26,-.12,-.63,-.22,-.07,.46,.52,.51,.36,-.24,.01,.59,.25,.25,.09,-.17,.07,.63,.53,-.08,.47,.58,.32,.2,.07,.58,.63,-.12,-.03,.27,.33,.4,.07,-.22,.37,.45,-.09,-.04,.63,-.22,0,.54,.08,-.05,.48,-.17,.04,-.2,.57,-.35,.49,-.13,.01,-.1,-.12,.45,.49,-.13,-.1,.01,-.19,.66,.68,.28,.12,.39,.53,.65,.52,.77,.01,-.01,.29,.57,-.01,.21,-.03,-.15,.01,.62,.69,.04,.58,.01,.35,.59,.15,.34,-.09,.06,-.37,-.09,.06,-.03,.39,.6,.37,.65,.35,-.01,.45,.21,.25,.23,-.01,.07,.69,.73,.18,.05,-.56,.27,.59,.36,.46,.11,.69,.15,.03,.81,-.58,.63,.58,.68,.15,.44,.08,.52,.29,.28,.53,.36,.7,.24,.68,.63,.54,.14,.68,.33,.11,-.09,.73,.63,.6,.63,.57,-.1,.51,.52,.42,-.6,.63,.03,.65,-.11,-.05,.44,.32,.58,.53,-.19,.02,-.03,-.09,.54,.06,.66,.41,.53,-.18,-.17,.08,-.1,.12,.08,.54,.07,.16,.71,.08,.06,.33];export{a as rvalData};
