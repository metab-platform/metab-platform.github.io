const a=[.56,.27,.72,.39,.5,0,.96,0,0,.8,.01,.7,.49,.25,.03,.38,.9,.27,.08,.83,.37,.67,.45,.68,.01,.49,.49,.16,.5,.14,.73,.04,.14,.03,.01,.37,.98,.21,.32,.6,.38,.4,.11,.84,.54,.17,.19,0,.58,.03,.11,.5,.52,.58,0,.02,0,.33,.19,.36,.01,.95,.38,.32,.41,.06,.38,.37,.94,.34,.29,.03,.01,.27,.06,.94,.37,.03,.27,.33,.74,.07,.75,.36,.78,.31,.3,.01,.35,.26,.16,.72,0,.1,.04,.03,.64,.61,.52,.02,.06,.14,.08,.05,.03,.98,0,.04,0,.16,.88,.02,.87,.13,0,.37,.57,.42,0,.01,.77,.55,.02,.68,.05,.01,.37,.01,.01,.86,0,0,.57,.01,.65,.95,.01,.66,.55,.42,.73,.58,.83,.19,.21,0,.05,.7,0,.06,.18,0,.45,.69,0,0,.02,.71,.83,.03,0,.03,.77,.5,0,.11,.32,.69,0,.66,.24,.81,0,.11,.02,.38,.07,.11,.06,.93,.55,.51,.9,.05,.06,.11,.15,.63,.06,.27,.37,0,.7,0,.02,.02,.11,0,.84,.34,.89,0,.95,.16,.84,0,.31,0,0,.4,0,.88,.26,.86,.36,.3,.62,0,.92,.35,0,.12,.37,.42,.01,.85,0,.79,0,.29,.7,.38,.51,.59,.89,.3,.57,.71,.6,.82,.62,.83,0,.2,0,0,.58,.77,.63,.45,0,.63,0,.01,.52,.77,.74,0,.7,.15,.32,.86,0,.61,.6,.04,.4,.39,.14,.47,.44,.48,.59,.32,.52,.27,.18,.05,.13,.78,0,.02,.08,.11,0,0,.11,.76,.01,.04,0,.12,.06,0,0,.11,.05,.38,.06,0,.21,.86,.46,.21,.85,.96,0,.37,.21,.22,.06,.14,.27,.34,0,0,.01,.27,.57,.79,.29,.23,.32,.42,.02,0,.05,.18,0,0,.58,.06,.34,.08,.05,.08,.06,0,0,0,0,.66,.87,.58,.81,.43,.33,.01,.14,.12,.01,.38,.18,0,.05,.02,.29,.89,.21,.24,.58,.92,0,.26,.04,.62,.71,.91,.81,.01,.95,.19,.04,0,.23,.01,.11,.38,.5,.01,.4,.13,.82,.54,.04,.01,.96,.47,.01,.16,.02,.21,.31,0,0,.9,.77,.09,.11,.04,.32,.05,.07,0,.04,.7,.95,.06,.07,.2,.48,.33,.9,.02,0,.62,.79,.25,0,.67,.01,.29,.39,.88,.4,.77,.52,.39,.05,.06,0,0,.01,.05,0,.08,0,.04,.96,0,.04,.42,.32,.93,.72,0,.76,.07,.32,.17,0,.03,.35,.14,.73,.14,.81,.71,0,.04,.93,.01,.97,.13,.02,0,.06,.1,.62,.43,.07,.59,.27,.81,.01,0,0,0,.06,.07,.01,1,.52,0,.44,.06,0,.11,.95,.59,.18,.46,0,.57,.65,.92,.03,.14,.01,.01,.01,.35,.03,.27,.12,.86,.89,0,.41,.25,.07,.08,.21,.79,.88,.23,.01,0,.04,.43,.27,.51,0,.62,.01,.38,.18,.66,.54,0,0,.04,.86,.11,.31,.06,0,0,.03,.31,.11,.21,.51,.17,.14,.93,.16,.24,.77,.02,0,.85,.57,.87,.76,.81,.22,.66,.02,.8,.62,.54,.74,0,.06,.34,.62,.59,.01,.57,.44,.84,.01,.19,.73,.55,.17,0,.42,.21,.27,.24,.16,.03,0,.61,.86,.03,.27,.99,.49,.07,.27,.72,0,.26,0,.41,.03,0,.01,.16,.91,0,.86,.24,.01,.01,.66,0,.55,.74,.22,0,.43,.28,.9,0,.05,.89,0,.21,0,.72,0,.79,.7,.51,.12,0,.51,.89,.25,.08,0,0,0,.04,0,.51,.52,.92,.49,.06,.06,.31,.09,.65,.11,0,.6,.12,0,.52,0,.07,.87,.36,.06,.42,.79,.17,.81,.2,.73,.46,.94,.03,.14,.59,.01,.56,.15,.15,.03,.12,.2,.2,.84,.78,.44,.1,.01,.12,0,.42,.41,.66,0,0,.88,.48,.23,.24,.58,0,.4,.16,.68,.7,.25,0,0,.58,.26,.17,.08,.07,.12,.92,.01,.14,.21,0,.84,.37,0,.05,.7,.62,0,.02,.72,.29,.28,.61,.16,.93,.99,.36,.81,0,.12,.21,0,0,.92,.63,.05,.57,.03,0,.01,.05,.25,.13,.05,.83,.08,.25,.75,0,.8,.94,.74,0,0,.03,.01,.73,.29,.36,0,0,.06,.41,.3,.86,.78,.36,.49,.35,.68,.27,.02,.83,0,0,.84,.41,.7,0,.4,.81,.23,0,.04,.02,0,.34,.9,.07,0,.59,.43,.25,.62,.3,.4,.06,.02,.76,.05,.19,.55,.02,0,.71,.68,.57,.41,.12,.2,.5,.46,.03,.06,.05,.01,.9,.21,.18,0,.8,.1,.56,.35,0,.03,.19,.62,.97,.43,.68,.86,.7,.99,0,.41,.25,0,.68,.23,.02,.48,.47,.07,.42,0,.77,.26,.69,.02,.11,.3,.1,.33,.5,0,0,0,.62,0,.81,.11,.21,.34,.02,1,0,.12,.18,.13,.02,.06,.41,.22,0,.72,.16,.22,0,.31,.38,.8,.49,0,0,.23,0,.49,.95,.56,0,.95,.3,.68,.08,.56,.3,0,.52,.89,.55,.38,0,.53,0,.64,0,.71,.07,.88,.91,.94,0,.11,0,0,.88,.02,.88,.27,.84,.19,.7,.23,.35,.37,.64,0,.81,.99,.77,.07,.27,0,.49,.19,.77,.51,0,.05,.2,.55,.11,0,.03,.61,.02,0,.03,.08,0,0,0,.83,.75,.57,0,0,.08,.01,.01,.25,.72,.12,0,.42,.92,0,.03,.47,.36,.68,.25,0,0,.02,0,.9,0,.29,0,0,0,.37,.48,.3,0,.08,0,0,0,.2,.05,.29,.01,.56,.05,.78,.49,.64,.35,.54,.63,.75,.12,.13,.6,.72,0,0,.04,0,.3,0,.37,.12,.67,.45,.06,.78,0,.95,.19,.05,.44,.8,.14,.01,.69,.01,0,.32,0,.48,0,.99,.82,0,.76,.02,.01,.9,.01,.98,.81,.81,.65,.01,0,.93,0,.15,0,.1,.2,.1,0,.03,.49,.01,.59,.85,.02,.57,0,.73,.18,.01,.4,.01,.59,.01,0,.8,0,.16,.29,.65,0,.21,.54,0,0,.09,.79,.61,.12,.17,.13,.43,.02,.72,.26,0,.04,.01,.07,0,.63,.58,.37,.75,.01,.46,.02,0,.01,.26,0,.03,.49,.32,.3,.77,.55,.01,.96,.45,.56,.59,.85,.53,.92,.73,.88,.88,.59,.64,.12,.58,.67,.04,.36,0,.06,.16,0,.48,.06,.31,.92,.58,.32,.17,.37,.07,.68,.79,.06,.36,.02,.35,.07,.4,.02,.2,.37,0,0,.69,.08,0,.39,.6,.58,.18,.33,.02,.36,.41,0,0,.04,.79,.61,.29,.14,0,.13,.01,.48,.06,.82,.24,.98,0,.93,.04,0,0,0,.14,.17,.88,.07,.1,0,.2,0,.15,.23,0,.04,.03,.62,.21,0,.2,0,.05,.63,.05,.17,.8,.39,.03,.46,.05,.16,0,.34,.28,.35,.9,.01,.6,.88,0,.42,.04,.42,.37,0,.13,.69,.89,.35,.9,.68,.29,.72,.36,.55,.71,.55,.03,.46,.06,.07,.9,.59,.39,.16,.02,.16,0,0,.67,.46,.34,0,.01,0,.14,.69,0,.71,.52,.98,0,.59,.01,0,.21,.25,.04,.65,.05,0,0,0,.02,.78,.82,.16,.95,.87,.85,.86,.79,.01,.07,.01,0,.03,.79,.07,0,0,.94,.06,.18,.55,.13,.02,.88,.8,.03,.69,.82,.11,.07,.11,.06,0,.76,.47,.41,0,.27,.78,.02,.17,.25,.17,.05,.01,.14,.28,.01,.68,0,.06,0,.79,.98,.04,0,.5,.31,.97,0,.22,.13,0,.88,.05,0,0,0,0,.27,0,.51,0,0,0,0,0,.98,0,.02,0,0,0,.3,.27,.02,0,0,.01,.02,0,0,0,.02,0,.38,0,0,.48,0,0,.43,.43,0,0,0,0,.02,0,.83,.01,.01,.56,.85,.05,0,.16,0,.95,0,.27,.53,.07,0,.93,.11,.74,.06,0,.11,.78,.64,.47,0,.95,0,.59,.34,.15,.47,.45,.41,.11,.94,.21,.12,.02,.08,.6,.19,.17,.88,.41,0,.1,.31,.59,0,.84,.88,0,.74,.91,.75,0,.9,.21,.53,.01,.45,.05,.02,.11,.13,.74,.64,.65,.01,.48,0,0,.42,.03,.01,0,.03,.85,0,.49,.01,.06,0,0,0,.11,0,0,.3,.03,0,0,0,0,.96,.09,0,0,0,.27,.88,.11,.1,.17,.33,0,.04,0,.28,.04,.01,0,.75,0,.95,.02,.01,.23,.01,0,.56,.12,.11,.77,.41,.02,.98,.2,.03,.07,.68,.43,.89,.65,.5,.5,.76,0,0,0,0,.7,.43,0,.02,.79,.16,.18,.19,.06,.17,.04,.32,.3,.7,.64,.92,.03,.09,.49,.92,.55,.1,.01,.1,.09,.48,.8,.69,.17,.01,0,.79,.89,.57,.55,.39,.4,0,.08,.27,0,0,.03,0,.46,.62,.8,0,.69,.05,0,0,0,.52,.25,.65,.08,.77,0,.51,.06,.63,0,.58,.03,.19,.8,.71,0,.3,.79,.38,.37,.26,0,0,.74,.47,.4,.06,0,.17,.16,0,.04,.19,.08,.2,0,.13,.02,.71,.55,.66,.49,.75,.01,0,.14,0,.92,.06,.15,0,.14,0,.99,.43,.76,0,.01,0,.14,.18,.35,.33,.83,.84,.87,.41,.35,.01,0,.01,.01,.9,.69,.62,.11,.51,.63,.94,0,0,0,.63,.01,.15,0,.06,.42,.03,.8,.91,0,.16,.52,.03,0,.01,.16,.51,.5,0,0,.04,.26,0,.16,.57,.83,.28,.31,0,.42,.31,.29,.03,.23,.92,.94,.36,.97,.42,.09,.01,.57,.67,.8,.32,1,.77,.28,.9,.73,.56,.11,0,.2,.9,0,0,.8,.2,.18,.18,0,.01,.13,.23,0,0,.11,.02,.09,.21,.05,.21,.88,.02,.3,.63,.29,.16,.95,.37,.04,0,.08,.07,.25,.21,.1,0,.01,0,.16,.29,.28,.74,.08,.38,.52,0,.01,.59,.78,.81,.82,.4,0,.06,.05,.12,.18,.8,.71,0,.93,0,.93,0,0,.05,0,.01,.57,0,.39,0,.52,0,.03,.27,.29,.85,.68,.07,.04,.93,0,0,.02,0,.37,.87,1,.82,.34,.11,.64,0,.61,.44,0,0,.03,0,0,.19,0,.01,.38,.74,0,.53,.99,.65,.97,.05,.52,.1,0,.6,0,0,.05,.16,.06,0,.18,.06,.11,.32,.79,.72,.27,.01,0,.77,.76,.05,0,.28,0,.31,0,.43,.1,0,0,0,0,.2,.44,.35,.88,.84,0,0,0,.44,.01,.1,.05,.5,.93,.37,.04,.02,0,.66,0,.02,.03,.21,0,.06,.33,.06,0,.61,.65,.39,0,.46,.82,.58,0,.28,.35,.14,.13,0,0,0,.31,.92,.12,.65,.03,.75,.59,.05,.03,.6,0,.24,0,.23,.94,.14,.14,.36,.59,.36,.49,.6,.93,0,0,.81,.01,.5,.21,1,.96,.81,.18,.79,.56,.36,.79,.12,.48,.75,.18,.16,.01,.17,.68,.06,.43,.49,.31,0,.24,0,0,.84,.01,0,.6,0,0,.29,0,.03,.67,.99,.03,.5,.03,.9,0,0,.22,0,.32,.25,.15,.98,.01,.17,.8,0,.8,.03,.36,.09,.77,.13,.1,0,.62,.48,.35,.75,.98,.47,.02,.26,0,0,.06,.69,.17,0,.89,.38,.62,.46,.7,.13,.63,0,.81,.38,.79,.3,.58,0,.14,.06,0,.01,.45,.16,.96,0,.25,.2,.17,.34,.22,.28,.29,.88,.05,.41,.61,.07,.01,.38,.52,.2,.13,.52,.42,.73,0,.02,.2,.78,.1,.94,.02];export{a as pvalData};
