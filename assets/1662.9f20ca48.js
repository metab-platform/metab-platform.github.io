const a=[-.42,.39,.79,-.1,.89,-.02,.18,-.16,.11,.38,.53,.06,-.05,-.71,.69,.03,.31,.08,-.21,-.16,-.08,-.13,.1,.48,.55,.77,-.12,.13,.34,-.05,.43,-.2,.88,.16,.17,.14,.85,.52,.2,.58,-.07,.81,.68,-.06,.06,.37,.09,-.12,.17,.07,.17,.03,.41,.72,.28,.42,.33,.04,.26,.74,.27,.79,.71,-.05,.25,.01,.8,.57,-.1,-.02,-.11,.63,.18,-.12,.82,.12,-.05,.23,.44,.1,-.51,.61,-.15,.7,-.13,-.16,.67,.11,-.76,.51,.01,.07,.04,-.67,.09,-.18,-.74,-.08,-.18,.28,-.04,.71,.31,-.08,.35,.08,-.09,-.13,.76,.43,.01,.18,-.11,-.6,-.08,.77,.16,-.03,-.29,.51,-.12,-.06,.42,-.21,.16,.4,.69,-.32,.05,.89,-.27,-.51,-.17,0,.5,-.16,-.08,.08,.01,-.02,.81,.09,.63,.69,.02,-.12,-.01,-.1,.53,-.23,.71,-.15,-.03,.07,-.19,-.02,.05,.06,-.15,.58,-.07,.56,.09,.07,.1,.16,.47,-.03,-.12,.67,.02,.07,-.12,-.35,.6,.04,-.03,.07,.1,.83,-.1,.07,.1,.76,.36,-.08,.17,.25,.2,-.16,-.19,-.01,.1,.45,.66,.82,.55,.22,-.03,-.2,.22,.44,.89,0,-.53,.51,.1,.11,.08,-.15,-.23,.63,-.03,.75,.05,.34,-.12,-.05,.07,-.22,.34,.23,.31,.78,.4,.9,-.19,.02,.16,.13,-.14,-.11,.52,.7,.23,.08,.57,.23,-.09,.1,.2,.64,-.25,-.23,.08,-.27,.14,.08,.24,-.06,-.04,-.09,.27,.1,.85,-.06,.18,.22,.02,.76,.06,-.08,.21,.82,-.12,.32,-.1,.68,.1,.53,.02,-.41,.84,.73,.6,-.05,.18,.14,.71,.15,.03,-.16,.35,-.52,0,.56,.04,.83,-.06,-.06,-.21,.09,.79,-.18,-.06,.69,.31,-.31,-.04,.09,.01,.91,-.09,-.17,.09,.42,-.11,.43,-.1,.32,.77,.01,-.2,.03,.22,.07,-.13,-.01,.7,.3,.68,-.11,.64,.76,-.16,-.02,.8,-.23,.04,0,-.54,.47,.14,.16,-.14,.06,.1,.29,-.06,-.19,.35,.7,-.29,-.09,.85,.75,.17,.03,.63,-.03,.67,-.39,.17,-.04,-.45,.39,.22,.06,.65,.77,.35,.14,-.05,-.17,-.1,-.68,.13,.89,.34,.15,.29,-.26,.11,-.23,.27,.09,.34,.66,.06,.01,.15,.04,.14,.13,-.03,.32,-.05,.04,.7,.8,.71,-.11,.14,.06,.05,.91,-.28,-.16,-.22,.17,-.1,-.15,.69,.27,.11,.14,.6,.7,.54,.46,.67,-.56,-.38,.69,0,.09,.78,.78,.04,-.38,.07,.78,.14,-.07,.22,.89,.86,.02,.1,-.4,-.32,-.27,.45,.11,-.14,.75,-.24,.85,.93,.58,.58,.64,.66,.02,.18,.32,.89,.75,-.06,-.35,.22,.29,-.86,-.13,-.12,-.1,-.12,.89,-.05,.51,.74,.77,-.71,.14,.03,-.07,-.42,-.01,-.48,.72,-.04,.9,.54,.18,-.02,.75,.65,-.01,.81,-.14,.59,.72,.73,.16,.17,-.13,.37,-.31,.55,.59,.04,.07,-.37,-.2,.85,.89,-.14,-.06,.62,-.32,.03,-.19,.55,.54,.73,-.15,.03,.59,.83,.33,.72,-.15,.72,0,.17,-.04,.15,-.19,.09,.69,.04,.88,-.09,-.16,.33,-.01,.25,.4,.02,.67,-.09,-.16,-.22,-.26,-.04,.06,.01,.38,-.32,.2,.1,.05,-.16,.1,.11,-.19,.02,.09,.59,.06,-.05,.9,.85,.66,.69,-.15,-.32,-.16,-.28,-.16,.67,0,.05,-.24,-.09,-.2,-.16,.11,.16,.03,.66,.74,.13,-.31,.77,.89,-.12,-.36,.11,.25,.11,.24,.65,-.03,.32,.71,.91,.52,.09,.84,-.16,.11,-.03,.61,-.21,-.73,.65,.81,.31,.11,.66,.81,.84,.08,.78,-.08,-.01,-.18,.2,-.01,.15,.78,-.09,0,-.21,-.07,.92,-.26,.05,.09,-.11,-.06,.12,-.13,-.16,-.09,.22,-.02,.69,-.38,-.18,-.36,-.25,.05,.3,.26,.76,-.24,-.28,-.18,.01,.73,-.26,.12,.29,.73,-.36,.7,.06,.29,-.06,-.75,-.03,.92,.75,.04,.47,-.01,-.19,-.02,.92,.68,.87,.04,.21,.07,.08,-.13,.56,.72,.24,.1,-.04,-.1,.32,-.31,.54,.82,-.41,.17,-.06,-.3,.64,.72,-.09,.23,-.51,.75,.79,-.34,-.04,-.21,-.17,-.22,-.03,-.39,.44,.12,.54,-.57,.71,-.06,.3,.79,-.01,-.02,-.12,.53,-.03,-.09,.77,-.21,.19,.02,-.2,-.11,-.13,.09,-.17,-.16,-.1,.63,.81,-.02,.69,.68,-.3,-.21,-.23,.62,-.52,.11,.79,.1,.25,-.11,.87,-.18,.15,-.12,.44,.54,-.3,.05,-.06,-.43,.22,.82,-.09,.46,-.13,-.04,-.09,.29,.68,.14,-.13,.49,.66,.02,.4,-.07,.78,.19,.52,.68,.7,-.16,-.06,.09,-.26,-.09,.82,.08,.01,-.33,.03,-.15,.88,.07,.78,-.05,.01,.77,.67,.56,.17,.14,-.02,-.08,-.24,-.19,.44,.47,.86,-.01,.87,.62,-.47,.26,-.2,.23,-.36,.78,.63,.38,.26,-.17,.08,0,-.04,-.15,.79,-.22,.51,-.2,-.66,.08,.16,.92,.08,.11,-.25,.67,-.08,.88,-.09,.09,-.02,-.04,-.07,.9,-.13,-.2,0,-.09,.01,-.03,.22,-.2,.52,.74,-.05,-.29,-.15,.7,-.01,.01,.36,.05,-.07,.04,.29,-.06,.07,.15,.07,-.02,-.03,-.09,.49,.89,-.16,-.32,-.28,-.16,-.32,.08,0,-.35,-.4,.16,-.05,0,-.19,.02,.24,.1,-.07,.11,-.03,.57,.15,.77,.83,-.04,-.03,.21,.84,-.17,.74,-.64,-.52,.23,.73,.01,-.46,-.15,.49,.84,.12,-.07,.06,.02,0,.63,.2,-.06,.09,-.17,-.08,.03,0,-.15,.54,.29,-.04,-.17,-.36,.03,-.19,-.06,-.41,.46,.84,.86,.01,.9,.71,.06,-.02,.76,.72,.82,.74,-.82,.14,0,.45,.84,.11,-.01,-.01,.6,-.06,.1,-.14,.76,.11,.17,-.24,-.11,-.17,-.14,-.03,.32,.87,.01,.78,0,.75,.07,-.1,-.11,.56,.19,-.04,.05,-.58,-.19,.05,-.3,.55,-.72,.63,-.18,-.19,.03,.05,.58,.86,-.23,-.17,-.04,.06,-.25,-.4,.15,.11,.11,.35,-.3,-.04,-.24,-.14,-.07,.1,-.04,.07,.09,-.03,-.04,.19,-.07,.15,.16,-.05,.32,-.13,-.02,-.06,.47,.01,-.02,-.19,-.2,.32,-.46,-.33,.15,.72,.03,.35,.31,.2,-.02,.77,.13,.19,.06,-.19,-.1,.29,0,-.08,.4,.83,-.19,.4,-.05,-.21,.93,-.21,-.12,-.16,-.01,.1,-.29,-.08,.5,-.12,.55,.3,-.07,.34,-.25,-.32,-.04,-.14,.75,-.03,.01,.07,.65,.1,.09,0,.15,.7,-.11,.13,.1,.29,.82,-.07,.47,.77,-.28,.62,.84,.06,-.15,.1,0,.17,.22,.09,-.24,-.11,.57,.01,-.4,.76,-.16,.55,.59,-.25,-.11,.81,.82,-.35,-.19,-.4,.27,.84,.26,.79,.07,.67,-.04,-.12,.24,.19,-.02,-.06,-.13,-.24,.67,.06,.88,-.18,.67,-.13,.17,-.27,0,-.12,.46,-.02,-.19,-.2,.78,.89,-.2,.06,.87,.77,-.2,.08,-.35,.85,.08,.1,.39,.77,0,.8,.43,.6,-.16,.08,-.32,.14,.69,.17,-.11,.02,-.16,.17,.02,.48,.47,-.09,0,.68,.39,.88,.69,.57,.46,-.19,.25,-.71,0,.43,.17,.85,.11,.41,-.02,-.3,-.21,.1,-.32,-.39,.1,.9,.87,.13,.66,.07,-.27,-.54,.01,.86,.08,-.2,.7,.7,-.29,.11,.37,-.01,.81,.03,.64,-.36,.73,.49,-.17,.83,.16,-.31,-.31,.55,-.09,-.06,.71,.59,.06,-.11,.75,.2,.01,.02,.13,-.05,-.09,.1,0,.02,-.36,.7,.09,.87,.57,.54,.04,-.02,.01,.87,.84,.75,-.06,.03,-.02,.03,.29,.7,.07,.72,-.18,-.06,.05,.2,-.03,.32,-.26,-.33,.62,-.71,.91,-.05,-.36,.04,.16,-.12,-.04,.15,.05,.7,-.04,.6,.22,.15,-.36,.56,-.28,-.25,-.12,.51,-.07,.38,-.11,.21,-.01,.9,.14,-.08,.1,-.12,.73,.76,.51,-.28,-.08,-.16,.68,.59,.47,.75,.32,-.02,.09,.14,.67,.16,-.17,.9,0,.16,.88,-.84,.33,-.21,.1,.18,.31,.88,.09,.1,-.26,-.23,-.28,-.14,-.2,.74,.75,.45,-.11,-.03,.8,-.3,.28,-.01,.26,-.43,-.02,-.02,.68,.24,-.26,-.24,.54,.09,-.05,.17,.46,-.04,-.12,.14,-.07,.36,.25,-.02,-.05,-.1,.11,-.12,-.19,.34,.53,-.12,-.3,-.47,-.22,.56,.05,-.03,-.26,-.48,-.04,.02,.67,.02,-.27,-.37,-.38,.24,-.47,-.07,-.33,-.22,.08,-.07,.34,.13,-.04,.33,.56,-.05,.31,.08,.26,.88,.26,-.29,.21,.9,-.21,-.11,-.02,.27,.75,.29,.58,.11,.17,-.24,-.13,.71,.77,.08,-.06,-.02,.8,-.06,-.08,.13,-.05,.34,.12,.01,.15,-.04,.1,.73,-.08,-.05,.75,-.1,.14,.69,.16,.75,.69,.02,-.21,.18,.09,.23,.62,-.38,.75,.04,-.36,.02,-.21,.05,.24,-.45,-.25,.14,.48,.8,.55,.63,-.04,-.01,-.02,-.1,-.06,.26,-.02,.2,.56,.25,-.07,.2,.23,.02,-.18,-.58,.02,.56,-.16,.58,.31,.24,-.11,-.07,.22,-.12,.32,-.33,.42,.22,-.15,-.09,.24,-.4,.66,.28,-.02,-.04,.47,.15,-.05,.13,.42,.13,.21,.8,.11,-.33,.29,.87,.21,.02,.5,.41,.36,.15,.21,-.15,.19,.78,-.25,.35,.4,-.03,.08,.29,.21,-.01,.32,.84,-.02,.19,0,-.16,.45,-.05,.18,.57,-.03,.01,.65,.42,.92,.8,-.03,.7,.66,.71,.23,-.28,-.05,.57,.11,.58,.02,.61,.57,.07,.06,.62,.46,.6,.52,.08,-.14,.58,.47,.21,0,.53,.24,.6,.13,.75,.72,.37,.68,.07,.67,-.16,-.03,.38,.6,-.32,-.02,.68,.53,.44,.18,.2,.58,.76,.76,.75,-.07,-.12,-.02,.16,-.12,.87,-.02,.13,.65,.17,.37,.42,.02,.7,.77,-.18,.03,.67,.14,.31,.72,-.21,-.11,.54,.35,.18,.58,.11,.64,.2,.67,-.25,.31,-.01,-.1,.02,.15,.01,.24,.75,.13,.32,.23,.25,-.02,-.02,.68,.54,.56,.55,.71,-.13,.09,-.16,.12,.12,.05,-.17,.63,.44,.71,.07,.56,-.15,.02,.21,-.05,.37,-.28,.15,1,.91,.71,.77,-.06,.74,.25,.45,.18,-.52,.41,.28,-.49,.55,-.16,.57,-.14,.73,.52,.06,.8,-.13,.09,.3,.08,.09,.46,.16,-.26,.04,.01,.04,.03,-.01,.8,.86,.52,-.16,.67,.57,.53,.68,.61,.92,.1,-.25,0,.63,.06,-.36,-.23,.16,.21,.04,.92,.74,.62,-.23,.74,.31,-.02,.25,.11,.74,.54,.26,-.39,-.07,.02,-.04,-.1,.14,.72,.55,.48,-.35,.24,.15,.8,.02,.04,-.2,.1,.71,-.12,.72,.61,.77,.76,.06,.4,.44,.68,-.03,.23,-.13,.38,-.63,-.11,-.03,-.66,-.04,-.3,-.06,-.13,-.28,.12,.38,.42,-.17,.82,.89,-.23,.66,-.44,-.12,-.41,-.03,.83,.9,.9,.53,.18,.25,.41,.27,.34,.56,.26,.78,.87,.39,.38,.13,.29,-.08,.4,.73,.73,-.04,.05,-.03,-.06,.75,.06,.3,-.04,.36,.89,.66,.69,.87,.91,.73,0,.47,-.12,-.22,.71,-.05,-.12,-.04,.66,.83,.59,.25,.04,.6,.2,.72,.21,-.11,.08,-.04,.04,-.03,.62,-.36,.01,-.21,.84,-.18,.69,-.24,-.15,-.08,.08,-.18,-.17,.88,-.08,-.09,.25,.07,.33,.73,-.34,-.45,-.21,-.02,.64,-.22,-.2,.46,.37,.23,-.17,.8,-.1,.71,.07,.89,-.08,.24,.15,.03,.35,.12,.31,-.03,-.76,-.26,-.14,.49,.57,.82,.38,-.19,.17,.69,.17,.35,.11,-.11,-.17,.74,.88,.02,.37,.79,.36,.27,.08,.86,.81,.04,-.22,.05,.28,.26,.05,-.29,.56,.32,-.06,0,.9,-.35,-.01,.71,-.05,-.03,.44,.08,.07,-.14,.7,-.34,.61,-.04,.09,-.18,-.03,.51,.47,-.13,.05,.07,-.03,.88,.93,.66,.17,.67,.8,.9,.67,.82,-.06,.03,.25,.78,-.05,.27,.01,-.16,.16,.83,.76,-.38,.63,-.15,.18,.86,.13,.11,.09,.03,-.3,-.18,.04,.11,.53,.9,.42,.86,.25,.07,.24,.1,.35,-.06,-.11,.22,.58,.85,-.07,-.22,-.69,.19,.75,.36,.76,.18,.86,.04,-.1,.55,-.69,.81,.85,.93,.24,.58,.26,.67,.64,-.07,.48,.73,.68,.29,.89,.82,.77,.19,.9,.43,.2,-.02,.86,.81,.79,.89,.8,-.41,.7,.64,.16,-.64,.88,.03,.9,-.51,.03,.61,.32,.84,.71,-.03,.05,.17,-.25,.83,-.14,.74,.42,.69,-.15,-.03,.07,-.09,.07,.13,.25,-.15,.12,.91,.06,.03,.34];export{a as rvalData};
