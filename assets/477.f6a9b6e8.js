const a=[-.2,.2,.68,-.2,.58,.06,.14,.13,.14,.42,.59,-.01,-.06,-.57,.64,-.04,.21,-.09,-.28,-.06,.01,-.43,.22,.45,.4,.51,-.32,.3,.28,-.28,.39,-.21,.69,.06,.05,.16,.66,.45,.1,.49,.07,.49,.72,-.16,.02,.29,-.07,-.02,-.09,.28,.27,-.11,.34,.6,.43,.61,.38,.13,-.04,.52,.55,.57,.66,-.04,0,-.38,.57,.44,-.09,-.03,.1,.43,.42,-.12,.47,.13,-.13,.46,.3,.09,-.36,.35,-.15,.39,-.21,-.31,.49,.04,-.49,.39,.19,.05,.39,-.61,.07,-.13,-.47,-.06,-.27,.45,-.18,.63,.25,-.15,.35,.05,-.18,-.15,.72,.31,.05,.37,-.04,-.49,-.11,.33,.15,-.39,-.13,.39,-.12,-.16,.46,-.28,.3,.41,.42,-.48,-.25,.63,.17,-.11,-.11,.35,.37,-.44,.23,.05,-.2,-.05,.59,.05,.41,.52,.12,.07,.16,-.23,.57,-.14,.63,.34,.04,.21,.2,.08,-.18,.06,.01,.57,.12,.37,.14,.13,.41,.33,.35,-.18,0,.51,.02,-.15,.17,-.18,.51,-.17,-.04,-.26,.3,.58,-.1,.07,.09,.43,.38,-.06,.17,.25,.35,-.1,-.11,.37,.03,.54,.68,.72,.45,.23,-.05,-.32,.32,.62,.64,.06,-.32,.59,.27,.24,.47,-.18,.19,.39,.04,.51,.12,.46,-.1,.34,-.16,-.27,.33,.19,.15,.66,.31,.66,.23,-.18,.27,-.06,-.07,-.19,.31,.59,.11,.11,.37,.27,-.11,.16,.35,.41,.13,.05,.44,.22,.11,.19,.05,-.02,.09,-.28,.42,-.03,.59,-.06,.13,.32,-.02,.41,.14,-.08,.49,.58,-.17,.3,-.04,.4,.12,.36,-.11,-.44,.62,.7,.27,-.18,-.14,.34,.79,-.11,.29,-.28,.42,-.44,.09,.78,-.12,.62,.05,-.26,.08,.25,.69,.27,.15,.7,.54,-.17,.19,.44,.27,.58,-.22,-.14,.18,.25,-.1,.49,-.14,.51,.49,-.04,-.29,.08,-.04,.43,.09,.13,.65,.4,.39,-.07,.42,.57,.05,.04,.67,-.37,.1,.04,-.42,.35,.2,-.02,-.4,-.01,-.25,.43,.23,-.12,.67,.6,-.21,-.12,.64,.7,.08,.19,.72,.07,.65,-.05,.18,.03,-.29,.47,.12,.14,.63,.43,.26,.21,-.02,-.18,0,-.51,-.08,.68,.37,.03,-.15,-.12,.16,-.07,.41,.22,.01,.39,.03,.14,.08,.06,.14,.22,-.06,.26,.06,-.06,.65,.66,.75,-.18,.16,.39,.34,.63,-.48,-.13,-.41,.28,-.25,-.18,.67,.36,.24,.08,.39,.67,.42,.26,.65,-.51,-.56,.72,.01,.05,.51,.46,.28,-.35,.2,.59,-.28,.04,-.04,.64,.64,-.06,.17,-.11,.11,-.14,.34,.22,.21,.54,.18,.7,.69,.6,.41,.36,.44,0,.47,.41,.63,.69,-.03,-.41,.63,.34,-.66,-.12,-.14,-.12,-.31,.65,-.02,.51,.58,.82,-.45,.3,.2,-.08,-.32,.03,-.38,.64,-.03,.65,.56,.11,.13,.79,1,.46,.68,-.37,.6,.53,.32,.42,.38,-.12,.41,-.17,.3,.5,.05,0,-.13,-.11,.66,.61,-.09,-.06,.54,.01,.2,-.32,.46,.38,.46,-.17,-.08,.73,.63,.5,.58,-.2,.51,.08,.46,-.33,.3,.29,.28,.37,.02,.65,.02,-.12,.15,0,.35,.28,.25,.78,.26,-.09,-.06,.11,.05,.25,.16,.42,-.36,.11,.2,.15,-.22,-.19,.03,-.26,.19,-.18,.5,-.1,-.18,.65,.81,.56,.57,-.11,-.36,.06,-.23,-.08,.47,-.33,-.15,.13,-.1,-.13,-.1,.07,.28,.04,.56,.61,.3,-.13,.31,.68,-.21,-.31,.28,0,.03,.26,.46,-.06,.52,.43,.7,.34,-.34,.63,-.12,.21,.01,.51,.13,-.53,.79,.57,.28,.57,.55,.52,.53,.32,.47,-.37,.21,-.15,.2,-.23,.06,.58,-.05,.36,-.13,-.03,.65,.23,-.08,.16,.15,0,.41,-.04,-.07,-.08,.3,-.02,.48,.1,-.14,-.13,-.09,.25,.31,.41,.77,.17,.13,-.3,.11,.61,-.42,.3,.2,.46,-.39,.5,-.05,.5,-.18,-.59,.25,.73,.79,.2,.22,-.05,-.31,-.02,.59,.67,.55,.19,.12,.07,.1,-.15,.45,.48,.36,.09,-.08,-.28,.3,-.03,.52,.51,-.39,.18,-.01,-.4,.47,.63,.02,.34,-.3,.47,.72,-.05,.02,-.24,-.28,-.21,-.02,-.18,.48,.02,.46,-.36,.36,.25,.47,.55,.1,-.04,-.13,.29,.09,-.29,.71,.04,.29,.54,-.1,-.16,.02,.15,-.09,-.23,.25,.48,.66,.14,.51,.39,-.17,-.3,-.16,.44,-.34,.4,.67,.08,.5,.2,.64,-.13,.25,.06,.33,.67,-.27,-.27,-.1,-.24,.21,.63,-.1,.44,-.02,-.16,-.21,.19,.37,.45,-.2,.01,.66,-.02,.33,-.28,.72,.25,.04,.65,.55,-.18,-.16,-.01,-.27,-.05,.58,.11,.15,-.31,.28,.27,.56,.24,.63,-.08,.14,.5,.58,.42,.29,.42,-.14,-.23,-.56,-.16,.38,.4,.63,-.13,.71,.42,-.36,.33,-.01,.25,-.48,.66,.52,.3,.63,-.36,.14,-.02,.03,-.09,.65,-.51,.31,.11,-.48,-.22,-.03,.61,.03,.06,.11,.49,.01,.63,-.07,.25,-.18,.07,-.3,.63,-.05,-.21,0,-.2,.05,.22,.21,-.3,.65,.59,-.12,.07,-.1,.54,-.03,-.28,.65,.1,-.11,-.28,.35,-.03,.09,.1,.17,.05,.38,-.07,.55,.7,-.18,-.13,-.34,-.09,-.29,.12,.04,.08,-.3,.22,-.09,.15,-.07,.12,.16,.26,-.01,.17,-.32,.95,.11,.57,.54,.04,.15,.13,.62,.25,.54,-.5,-.39,.38,.44,-.06,-.24,-.12,.44,.66,.46,-.24,-.01,-.04,.04,.71,.1,.24,0,.18,-.01,-.27,-.18,-.07,.45,.17,.06,.09,.01,.03,-.06,-.13,-.14,.3,.62,.58,.1,.69,.27,.12,.36,.63,.42,.53,.42,-.62,.35,-.24,.41,.49,-.01,-.05,.02,.37,-.03,.29,.27,.62,.17,.07,.16,.01,-.24,-.17,.25,.09,.57,-.2,.45,.3,.7,.19,.22,.01,.35,.13,-.05,.28,-.45,-.1,-.28,-.35,.45,-.58,.31,.25,-.16,0,.32,.77,.68,.13,-.52,.34,.57,.18,-.13,.15,.13,.19,.55,.16,.22,.22,-.12,.05,.02,0,0,.14,-.11,-.17,.05,.02,.05,.07,-.07,.12,-.2,0,-.08,.57,.27,-.24,.01,-.1,.67,-.2,-.4,0,.4,.21,.34,.39,.27,-.07,.82,.09,.22,-.09,.11,-.08,.34,.02,-.06,.67,.59,.15,.3,.02,.15,.7,-.34,-.31,.04,.13,-.03,-.08,-.05,.47,.34,.89,.19,.4,.07,.04,-.25,.03,0,.7,-.23,.02,.4,.36,.24,.07,-.19,.41,.64,-.17,.18,.14,.32,.59,-.29,.67,.68,-.02,.48,.59,.11,-.25,.17,-.13,.45,-.24,.06,-.17,-.43,.46,.05,-.4,.65,-.3,.5,.47,.1,-.17,.72,.71,-.11,-.31,-.09,.24,.53,.28,.74,.08,.73,-.13,-.23,.4,.36,.01,-.32,-.26,-.28,.4,.11,.61,-.23,.47,-.12,.23,-.2,.06,-.04,.2,.06,-.16,-.07,.71,.71,-.12,.04,.49,.7,-.11,.13,-.39,.61,-.07,.07,.28,.5,.09,.62,.24,.62,.03,.16,-.48,.23,.51,.11,.03,.09,.07,.18,.12,.37,.49,-.24,.28,.69,.26,.64,.61,.48,.62,-.05,.24,-.65,.03,.52,.14,.6,.11,.21,-.12,.05,-.1,.09,-.08,-.31,.13,.64,.63,-.11,.57,-.09,.09,-.2,-.06,.71,.17,-.19,.64,.57,-.43,.03,.44,.13,.77,.06,.53,-.26,.59,.12,.24,.73,-.07,-.25,-.13,.36,-.16,-.09,.42,.29,.21,.07,.49,.36,.08,.11,.21,-.11,-.36,-.07,.02,-.39,-.28,.8,.06,.52,.83,.26,.08,-.03,.09,.61,.48,.73,.01,.1,-.05,.01,.2,.74,.11,.58,-.06,-.27,.15,.08,-.07,.37,-.35,.11,.6,-.46,.63,-.02,-.13,-.24,.16,-.39,-.22,.46,.05,.59,.02,.53,.18,.38,.15,.64,-.17,.01,-.06,.42,.02,.62,.13,.11,-.03,.64,-.03,-.03,.07,-.14,.46,.57,.5,-.17,.04,-.17,.58,.43,.46,.69,.36,.06,.09,0,.47,.37,-.09,.67,-.08,.1,.62,-.58,.11,-.3,.29,.26,.46,.59,.04,.19,-.21,-.29,-.05,-.03,-.25,.42,.52,.51,-.32,-.05,.76,-.13,.28,-.22,-.05,-.06,-.05,-.05,.79,.6,-.2,-.47,.27,.47,.05,.06,.56,.05,-.18,.41,.21,.5,.36,0,.23,.04,.34,.04,.21,.49,.45,-.11,.12,-.04,.25,.66,.18,.05,-.09,-.23,.39,.38,.64,.17,.11,-.07,-.11,.26,-.07,-.21,.05,.17,.01,.4,.74,.2,-.11,.46,.55,.13,.53,.11,.4,.62,.12,.07,.14,.68,-.25,.22,.01,.21,.69,.29,.49,-.06,.33,-.38,-.16,.7,.65,.19,.01,-.1,.62,.08,-.2,.36,-.06,.4,.04,-.07,.3,.29,.02,.72,-.13,-.12,.53,.08,.21,.62,.21,.43,.53,-.05,-.1,.42,.06,.31,.5,-.01,.43,.1,.12,-.09,-.45,-.01,.52,-.28,.05,.17,.38,.58,.54,.53,-.03,-.12,.04,-.13,-.13,.25,-.21,.37,.53,.31,-.23,.26,.46,.16,-.29,-.13,-.36,.5,-.01,.57,.53,.35,-.08,.13,.41,-.09,.29,.03,.42,.35,.31,.04,.27,-.12,.62,.35,.08,-.16,.31,.01,0,.18,.45,.22,.51,.57,.22,-.33,.66,.7,.27,.03,.44,.47,.2,-.08,.52,-.23,.11,.45,-.09,.43,.39,.06,.26,.35,.39,.05,.06,.6,.05,.12,-.37,-.26,.45,.21,.18,.61,.05,.12,.67,.47,.64,.71,.18,.7,.58,.66,.14,-.29,.11,.36,.23,.37,-.02,.5,.61,.01,.18,.48,.39,.52,.33,.06,-.11,.52,.23,.12,.34,.4,.47,.41,.1,.68,.7,.22,.52,.12,.97,.18,-.44,.54,.44,-.15,.02,.72,.23,.56,.49,.59,.22,.69,.62,.62,-.23,-.19,.3,.06,.1,.51,.36,.18,.58,-.16,.11,-.05,.24,.62,.73,-.19,-.42,.59,.42,.52,.67,-.11,-.03,.55,.58,.19,.49,.27,.57,.22,.58,-.22,.48,-.05,-.05,.13,.22,-.04,-.06,.57,.09,.34,.22,.5,.09,.22,.69,.7,.5,.71,.47,-.23,.1,.04,.42,.25,.01,-.13,.47,.61,.42,-.05,.6,-.25,-.11,.4,.33,.4,-.12,.1,.65,.59,.7,.64,.16,.55,.54,.6,.28,-.44,.5,.09,-.04,.44,-.18,.47,-.16,.64,.66,.2,.52,-.27,.43,.4,.36,.01,.37,.4,.11,-.02,.25,.14,-.02,-.07,.57,.69,.45,.02,.48,.49,.52,.57,.36,.59,.14,0,-.1,.45,.18,-.45,-.16,.44,.43,.15,.7,.58,.31,-.18,.52,.35,-.27,.35,-.05,.35,.86,.65,-.28,-.18,-.08,.02,.18,.18,.63,.4,.8,-.17,.29,.49,.71,.06,.03,-.17,0,.78,.02,.58,.42,.61,.59,.11,.41,.48,.59,-.25,.02,-.15,.23,-.21,-.23,.27,-.65,-.07,-.07,-.07,-.01,-.2,-.01,.3,.49,-.07,.49,.68,-.22,.68,.01,-.34,-.48,-.12,.69,.67,.66,.26,.36,.3,.23,.31,.39,.33,-.03,.71,.57,.39,.47,.26,.26,.18,.42,.4,.7,.01,-.23,-.03,-.06,.54,.34,.47,.19,.51,.68,.6,.57,.66,.65,.54,.07,.38,.08,-.3,.82,.17,-.16,.11,.67,.76,.55,.18,.11,.34,.33,.56,.18,-.06,.05,-.12,.1,.08,.66,-.26,.5,.31,.71,-.14,.34,.07,.06,-.23,-.1,-.18,-.29,.68,-.12,.14,.34,.11,.3,.47,.05,-.38,0,-.07,.71,-.08,.03,.36,.48,.47,.3,.52,-.23,.48,.08,.65,.3,.37,.34,.11,.4,-.01,.43,-.02,-.51,-.32,-.22,.49,.5,.56,.37,-.19,-.25,.41,.37,.25,.14,-.11,.05,.47,.57,.05,.41,.5,.12,.29,.22,.67,.54,-.31,.04,.23,.47,.37,.15,-.28,.6,.12,-.1,-.02,.69,-.16,.02,.37,.15,-.07,.45,-.18,.05,-.21,.63,-.28,.35,.04,.07,-.14,.07,.47,.47,-.07,.1,.19,-.05,.67,.7,.42,.01,.56,.63,.6,.39,.67,.08,.07,.32,.47,.09,.03,.05,-.26,.13,.64,.52,-.02,.46,-.12,.39,.59,.08,.38,-.01,.07,-.41,-.02,-.01,.05,.4,.61,.37,.77,.44,.01,.47,.23,.07,.33,-.21,.08,.62,.63,.21,.15,-.45,.28,.58,.26,.66,.29,.6,.14,.05,.72,-.45,.51,.61,.7,.27,.51,.2,.5,.35,.32,.2,.52,.53,.42,.65,.5,.6,.07,.64,.27,.21,-.16,.65,.48,.5,.52,.53,-.19,.52,.55,.48,-.66,.51,.08,.67,-.04,0,.42,.25,.55,.6,-.15,.12,-.25,.12,.65,-.08,.73,.47,.44,-.34,-.31,.09,-.24,.03,.19,.33,-.26,-.05,.62,.08,0,.33];export{a as rvalData};
