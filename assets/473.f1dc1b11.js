const a=[.01,0,0,.64,0,0,.51,.37,.9,.05,0,.01,0,0,0,.01,0,.99,0,.16,.48,.18,.89,0,0,0,.27,.22,.18,.44,0,.43,0,0,.01,.04,0,0,.73,0,.46,0,0,.29,.15,.01,.67,.02,.65,.49,.41,0,0,0,0,0,.03,0,.71,0,0,0,0,.85,.23,.95,0,0,.68,.89,.53,0,.05,.17,0,.02,.22,0,0,.04,.02,.01,.56,0,.49,0,0,.17,0,0,.1,.23,.94,0,.02,0,0,0,.17,0,.82,0,.01,.31,.05,.01,.04,0,0,.01,.18,.43,.14,.04,.89,0,.31,.77,.53,.02,0,.08,0,.03,.09,.17,0,.5,.5,0,.29,.04,.3,.91,0,.79,.42,.14,.93,0,0,0,.01,0,0,.53,.31,.7,0,.45,0,.71,.8,.01,.54,.3,.13,0,.56,0,.85,0,.07,.85,.77,.06,0,.72,.87,0,0,.46,.97,.09,.01,.86,.88,.31,.06,0,.52,.06,.58,0,.01,0,0,0,.2,.58,.49,.21,.05,0,0,0,0,0,0,.33,.27,0,0,.01,.04,0,.86,.43,.05,0,.47,0,.03,0,0,.04,.13,.9,.77,.01,.02,.4,.16,0,.49,0,.94,.69,0,.72,.8,.91,.03,0,0,0,0,.22,.07,.59,.03,0,.08,.79,.73,.41,.45,.02,0,.59,.37,0,.01,.79,0,0,.57,.01,.92,0,.06,.49,.02,0,.69,.08,.71,0,.14,0,.05,.75,0,0,0,0,.56,0,0,.77,.28,.02,.01,0,.89,0,.13,0,.47,.45,.65,.5,0,.4,.28,0,.01,.26,.05,.11,.14,0,.65,.08,0,.31,.32,0,.76,.02,0,.26,0,0,.01,.11,.7,.84,0,.53,0,.48,0,0,.16,.65,0,.17,.66,.73,0,.01,.08,.02,.12,.25,.49,0,.8,.25,0,0,.04,.67,0,0,.38,.11,0,.72,0,.8,0,.62,.01,.02,.19,.63,0,0,.01,.42,.38,0,.81,0,0,0,0,.36,.27,.33,.54,.83,0,.27,.32,0,.67,.04,.06,.97,.46,.1,.98,.07,.83,.72,0,0,0,0,.04,.93,.46,0,.03,.08,.36,.74,.17,.59,0,.18,.26,.42,0,0,.01,0,0,0,.01,0,.05,.01,0,0,.2,0,0,0,.12,0,.59,0,0,.02,.84,.04,0,.37,.01,0,.68,0,.25,0,0,0,0,.01,0,.02,.54,.02,0,0,.86,.71,.09,.06,0,.35,.43,.66,.06,0,.04,.09,0,0,.04,0,.24,.81,.01,.03,.31,0,.02,0,0,0,.67,0,0,.65,0,.05,0,0,0,.58,.28,.41,.03,.01,0,0,.95,.02,0,.07,0,0,.07,.09,0,.45,.49,.55,0,.01,0,.16,.18,0,0,0,0,.19,0,.52,.08,.7,0,.77,.02,0,.83,0,.62,.26,.01,0,0,0,.1,0,.94,.07,.03,.83,0,0,.35,.08,.03,.01,.45,.8,0,.77,.37,.05,0,.84,0,.23,.17,0,0,0,0,0,.02,.16,.04,.83,0,.45,.27,.29,.28,0,.17,.15,0,.02,0,0,.37,.1,0,0,.04,0,.46,.55,.13,0,0,.71,.02,0,0,0,.76,0,.04,.69,.22,0,.07,.21,0,0,0,.03,0,0,0,0,0,.07,.54,.58,0,.09,.54,0,0,.05,0,.88,0,.68,.55,0,.09,.49,.31,.62,.26,0,.65,.67,0,.1,0,.02,.02,.26,.07,.04,0,.87,.76,.01,.01,0,.14,.02,.11,0,.02,0,.01,.04,0,.03,.73,0,0,.07,.01,.63,0,.6,0,0,0,.01,.4,0,.64,.46,0,0,.67,0,.4,.48,.01,.19,0,0,.1,.08,.54,.03,0,0,.27,0,.22,0,0,.45,.69,.14,.15,0,0,0,0,0,0,.07,0,.55,.06,.01,.02,.1,.42,0,0,.24,0,.25,0,.17,.03,.44,.03,.31,.06,.28,.65,0,0,.01,0,.05,.03,.11,0,0,.46,.02,0,.94,.07,.88,0,.06,.24,0,0,0,.13,.51,.08,.87,.65,0,.08,0,0,.43,.82,0,0,.86,.06,.01,0,.74,.04,.26,0,.18,.21,0,0,0,.34,0,.13,.61,0,0,.53,.55,.6,.97,0,.26,0,.52,0,0,0,0,.09,0,.19,.04,.02,.17,0,0,0,.82,0,0,0,.04,0,.01,0,0,0,.38,.02,.61,.03,.44,.19,.82,0,.25,.04,.35,0,.41,.75,0,0,.05,.08,.16,0,0,.27,0,.45,.52,.35,0,.08,.13,.13,.72,.8,.12,0,.18,0,0,0,.07,.67,0,.06,.91,.04,.02,.5,.48,.02,.04,.46,.5,0,.52,.42,.33,0,0,.04,.01,.08,.39,.08,0,.21,.1,.01,0,.02,.5,.42,.18,.99,.62,.59,0,.57,0,.41,0,0,.7,.31,.98,0,.22,0,0,0,0,0,0,.36,0,0,0,0,.2,.31,.25,0,0,0,1,0,.73,0,.45,.36,.05,0,.34,0,.99,.05,.79,.55,0,0,0,0,0,0,0,0,.51,.13,0,0,0,.01,0,.07,.12,0,0,0,.91,.9,.08,.6,.68,.51,0,.73,.86,.12,.73,.03,.15,.95,.44,0,.36,0,.24,0,.72,.47,.87,0,.42,.55,.04,0,.17,0,.85,0,0,.01,.33,.04,.79,.35,0,0,.68,.01,.76,.22,0,.03,0,0,.01,.26,.21,.86,.18,.12,.94,.91,.25,.71,.31,.98,.1,.16,.04,0,.09,0,.01,0,0,.44,0,.82,.08,.92,.12,0,.26,.04,.01,0,.08,0,.02,.01,.01,0,.57,0,.11,.07,.2,.01,.84,.2,0,0,.08,0,.78,.96,0,0,.01,.15,.6,0,.19,.2,0,.5,0,.05,.96,.02,.36,.76,.75,.78,0,.11,0,.91,.01,.35,.13,.55,.22,0,.16,.08,0,0,0,.73,.01,0,.41,0,0,0,.12,.25,.5,0,.73,.84,0,.06,.01,.2,.01,0,.16,0,0,.06,.07,0,0,.55,.01,.85,.28,0,0,0,.78,0,.56,0,.02,.17,.11,.74,0,0,0,.08,0,.81,0,0,0,0,0,.69,.01,.1,.35,.11,0,0,0,.08,0,0,.13,0,.06,0,0,.13,.04,0,0,0,0,0,.14,0,.92,0,0,.85,.83,0,.71,0,0,.01,.01,0,.85,0,0,0,0,0,0,.19,0,0,.68,0,.91,0,.01,.23,.14,.17,.03,.07,.32,.02,0,0,0,.59,0,.13,.44,0,.23,0,0,.11,0,0,.02,.2,0,0,0,.99,0,.16,0,.01,.91,0,0,0,.19,0,.39,.24,0,.02,.1,.91,0,0,0,0,0,.03,.04,.11,.09,.39,.02,0,.34,0,0,.89,.01,.01,0,0,0,0,.45,0,.77,0,.18,0,0,0,.67,.08,0,0,.63,.02,0,.39,0,.25,0,.85,.13,.08,.01,.05,.42,.11,0,0,.89,0,.15,.02,.13,0,.01,.51,.35,0,0,0,.75,.88,0,0,.59,.12,0,.04,0,0,0,.41,.49,.15,0,.07,0,0,.01,.26,.08,.23,0,0,.23,0,.25,.58,0,0,.15,0,.82,.05,0,0,0,.45,.02,0,.06,.87,0,0,0,0,.1,.43,0,.12,.05,.05,.07,.21,.15,.34,0,.15,0,.01,.03,.1,.31,.6,0,0,.27,0,.78,0,.15,0,.22,.84,.18,.64,.77,0,0,0,.44,.03,.74,0,.78,.28,.11,.01,.27,.73,0,.01,.63,.19,.09,0,.01,.52,.17,.41,.61,.91,0,0,.6,0,0,0,0,.09,.03,0,.01,.52,0,0,.03,.76,.24,.01,0,.16,0,.09,.24,0,.39,0,0,0,.26,.84,0,.6,.56,0,.52,.01,0,.17,.04,.37,.05,0,.26,.15,0,.09,.36,0,.23,0,0,.2,0,0,.01,.04,0,.09,0,0,.24,.95,.02,.55,0,.2,.39,.27,.02,0,0,0,.88,.53,.15,.82,.24,0,.21,0,0,0,.56,.06,0,.29,.91,0,.68,0,.06,0,0,.02,0,.56,.01,0,.66,.25,.17,.18,.78,.45,0,.05,0,.07,.11,.63,.07,.03,.01,.65,0,.31,.05,0,.19,0,.01,0,.82,.09,0,.02,.68,.35,.18,.01,.08,0,.14,.01,.04,.76,.16,.27,0,.18,.45,0,0,.02,.81,.37,0,.51,.78,0,.66,.34,0,0,0,0,.49,0,0,0,.39,0,.04,.01,.18,.04,.17,0,0,0,.45,0,0,0,.06,.86,.96,.01,.13,.23,.41,.03,.17,0,.39,0,0,.2,0,0,0,.2,.13,.01,0,.23,.69,0,0,0,.33,.05,.11,0,0,0,.86,.5,.93,.77,.34,0,.74,.02,0,.49,.03,.08,.73,0,0,.64,.2,0,.6,.17,0,0,.1,.04,0,.06,0,.61,0,0,0,.02,0,.28,.11,.37,.01,.93,.71,0,.93,0,0,.24,.12,.48,0,0,0,0,0,.2,.01,.46,.21,.06,.64,.12,0,0,0,.09,0,.22,.03,.06,.24,.01,.11,.26,0,0,0,0,.48,0,.02,0,.09,.02,0,.11,.03,.01,0,0,0,0,0,.2,0,.03,.27,0,.12,.16,.01,.13,.06,.02,.8,.12,.53,.38,0,0,0,.7,0,0,0,0,.01,0,.72,.95,.91,0,.49,0,.33,.42,.52,.4,0,0,0,.03,0,.01,.72,.46,.68,0,0,.03,.06,0,.75,.81,.62,.01,0,0,0,.15,.21,.4,0,0,.24,.04,.1,0,.91,0,0,0,0,.49,.02,0,0,.46,.29,.62,.03,0,.02,.54,0,.14,.28,.01,.91,.08,0,.01,0,0,0,0,.22,0,.06,.06,.01,.18,0,0,0,0,.29,.03,.01,.05,.02,0,0,0,0,.04,0,.13,.33,.34,.02,0,0,.25,.73,.03,.8,0,.01,0,0,.02,0,0,0,0,0,0,.29,0,.35,.11,0,.29,.06,.02,0,0,0,.01,.44,0,.02,0,.29,.29,.22,.49,0,0,0,.46,.33,.5,0,0,0,.91,.93,0,.82,.03,.5,0,.47,.54,.18,.62,.18,0,.59,.04,0,.99,0,0,.96,0,0,.04,.35,0,.15,0,.87,0,.26,0,.15,.96,.3,.33,0,0,0,0,.66,0,0,0,0,.23,.2,0,.12,.21,0,.27,.02,0,0,0,0,0,.69,0,.01,0,0,.94,.24,.95,0,.02,.09,0,0,.42,.31,.08,0,0,.74,0,.55,0,0,.51,0,.54,0,.04,0,.42,.43,.94,.93,.02,.13,0,.02,.18,.28,0,0,0,.13,0,0,0,0,0,0,.18,.02,0,.12,0,0,.24,0,0,0,.11,0,.87,0,0,.88,.84,0,.22,.01,0,.89,.33,0,0,.16,0,.03,.02,.74,.08,.02,.82,.01,.23,0,0,.04,.87,.02,.09,0,0,0,.04,0,.04,.01,0,.36,0,0,0,0,0,0,0,.01,.5,.04,0,0,.01,0,0,0,.02,0,0,.13,.91,0,0,0,0,0,.04,0,0,.1,0,0,0,0,.06,.63,0,.01,0,0,.74,.26,.46,.97,0,.57,0,0,0,.02,.12,.05,.09,0,0,.47,.95,.34,0,0,.34,0];export{a as pvalData};
