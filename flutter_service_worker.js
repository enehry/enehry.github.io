'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d1b3382b0128f9daecd8138ef354bfd5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "152e950509e03dc8397585b1b9e9ba52",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f32d9d18c072c5f96d4dc6b8c7dc2577",
".git/logs/refs/heads/main": "732ce1d9a3c2aea6eccb7b5cc3cdc7e8",
".git/logs/refs/remotes/origin/main": "cbc560e8694c3eeef77cef0f44d3ed31",
".git/objects/00/1a2849f9e13ebe17170e2447f66fece64407ef": "840a29c5ac1377617481ade0ab1a7a1e",
".git/objects/00/241a7d58518ba791ede4c5fb3aa678334b9575": "2e7e1e8d31534247469101a08359fbd5",
".git/objects/01/b0327b0e2dd73d14ce13d8d6131b145d1e953b": "ee084bf782afb08840ea008026a23399",
".git/objects/01/f1fc7a4b5161ba157db1162e1b8e741fe1723e": "18c82b74679e75aa1b476947c15a9125",
".git/objects/05/22b4d6e77d996002098346204158e9174951fe": "72892117d117412ce3476d9c76fc858b",
".git/objects/0d/202a44bdb88b50827d210c08c514c539e60b2b": "5e8d1c91e2232c216d09b1fe84c82138",
".git/objects/10/2755c1566f86db8017132bcff818f9cb3467c2": "dc0db571610b0a9d907fbf685ce6fd38",
".git/objects/11/dabd6831cca8d4089bc4f09dccb34e53ca5c7d": "69e4b24c45f0c4224e62ada9ae7fb50c",
".git/objects/12/17219a580d85146831b94fad92fb0654d8e507": "c6e7f3d089f21465b3ac94cf17cdce22",
".git/objects/12/e58289a402685bd2b597788ac1452ca24c1995": "7b3aa72600f71d13f6ab50440db49ab8",
".git/objects/16/b7646ece0426c7d67d286052ee03eb634e8023": "446987e24ceb299c512f226df212a76f",
".git/objects/16/ec51b223a8aeb58670cd6059b9eb90e32fbd41": "3cce71f45caeec9467c5a8a1a9ce75a8",
".git/objects/17/40b065e1d12e21bad481cec53f35696a8189e7": "d51d332a3428576f44c7faf395c47c0e",
".git/objects/17/ac0d536e2cfd185ba3eef17a186ddb36092fd4": "28a43e30e893814626008768d06fb401",
".git/objects/18/11b499cf2fadceb1bf4242c0514374d5664b3f": "2ad3e9c55e2e4f639080a7e73596277d",
".git/objects/18/c1a714523e22c37c48a6df9d4a448839bb0ded": "b67fd9236e4fec569f280b40e6759dd5",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/1a/cf502d467a9a7cf46e7f6a84a81674736129ca": "61297aaa263fcfb6371ee55abbca6356",
".git/objects/1b/7d844f695b83e84b8d362368755e2afef71cc6": "74e678d39e863f6d9156a13ca8ba1a4b",
".git/objects/1b/95d87ac86848c699cbb1b46b8d2061e1d11ff5": "49e0f713c9e7e5a2711e7a6aeaa28a2b",
".git/objects/1b/9952dd46d6377e6837b7db2eac291518be121a": "ff7fe1eef30f63e0763ff9004fb6d022",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/a3f971e8509bbc9349ad2f7b8da98332de4549": "04a72640a2936d1bdb0a6c1f477ddb4a",
".git/objects/1c/fd878c8c14868f2913a2f86291d8147d905459": "fa878251a4935833452c9611a83ca458",
".git/objects/1f/3244bd4faffd27fa18dea4a96ac949ce310fcd": "39b126e6db628fe5d0f21eb021a500a7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/c4e9b5deb136c7077de4aeec5d08ffd3c509bf": "12b52f8228d15f25498a18bc5da81043",
".git/objects/21/57d9d8af0c0d17c855c01a58153ceb0c70ab31": "440c60d22ce719f17138234aff9d4cca",
".git/objects/22/a5f21859cc2d71a5691349694e57eb697b4755": "7a3d26f75fe5e4d7fc9fa13695a9cd85",
".git/objects/24/896cb6548f0c5435443e9c87735629e3d0ad31": "6d1e3296009a9efd03ad269524a83985",
".git/objects/26/7711cd7039458d67eb2734380a5ada2d868bc6": "dc5bd56f3a4e86be829a1eb4aca828c4",
".git/objects/27/033ce90d2491bc19c00556b1ddbd5539a088aa": "744f88fb373a840a55dd754c727b86a1",
".git/objects/2b/f55c7c467f064463bf2f9084597dcfcd370ffe": "0c65adf9911faf2da30a169f03970b09",
".git/objects/2e/794241e8b698b31d98d1e0ba1eccec91a6e4a7": "952aeafb221ab91762c7dc592c3e8051",
".git/objects/2f/2f7527e0070e504c63f52234d24cbb33001591": "fd69d2271455010a153b48b2b2a1f130",
".git/objects/2f/9793d6d6a8b0505c92082dc53d2b037a3e4580": "3cb31deb68d15dd8cdadabccf546928f",
".git/objects/2f/e63f267fe27d1712cf519fe85f53acd00a5e1b": "4effa7ec5195f4f0a217001465cb74a0",
".git/objects/30/024d94023cda1b10c2c33f1f6e068835cb64a1": "01a3753834e81f52045c3158c776e707",
".git/objects/30/40e88709568e1aabe76bd031d8be3d04462fc8": "6ea9268fa5a3394ccd35417efd7c1db5",
".git/objects/30/7f508f5e03189dcb256ecc94651f9058cdcd6b": "d322d0a2fdd47334d0c69032d6ddcb13",
".git/objects/30/b314ff2fc85b670730bb5b33ec7d6f526b2162": "68cb12af3abb893d0fdbe31966653e16",
".git/objects/33/310b1266001b76e4bcd0b163d97b5e2d975676": "5b86572aa4d7bea84ddab42018f2a2e7",
".git/objects/33/5aa9da0a099ea02b7c55bc99f72119237eb654": "a552ac6e6a3e9ed7062a3d78e2a83e1b",
".git/objects/33/719abc83a3be5b213f4fa67d5989e48f1e7c3a": "cff7368b63e0e5c500405bcd288b0d3e",
".git/objects/35/0979340a204cfe3e82a52fbd77db568a06e312": "1d144ea8a809dbf43f02681406695453",
".git/objects/36/0149e13a775d9768923632e5b46f842340916d": "abadb98956480aba02b17a8fc54b2208",
".git/objects/36/05542d6c7164e1bfedfe269e8fb6b220cb5599": "1a97961b115e72ca49b15b92dc31ccdb",
".git/objects/36/246b7c74928bd81c3684a4013aa25926b9f0c8": "5ecb9bd50fef35c7addab01a8108dad9",
".git/objects/37/63e1e24ac4c5cc720bea954bf79637ad39c457": "aef957d407f3ba731cec872a13fc19be",
".git/objects/38/15da581c7e3e59e69869a6ac8cbb50eed514fb": "cee43fdd0460bb2ccf0f40a27c42b172",
".git/objects/3a/d774269b21419136f6ad83d1045e367289ebf3": "e7aa5c9baffd0888e13d33c1886c8a3a",
".git/objects/3b/69754769ddd1dfbe9cf020bf904d0cf9c10d7c": "ff35e50cc58bf94318957094eb168e46",
".git/objects/3c/fc344a6f31d9931728880904124848d70c247a": "24b44312c0c5f39e0bcb4134199246b5",
".git/objects/3d/b2bae044328823f4ad1e56b78b9ab0a33da8a7": "01d97155802f25b18e832a10cb6e20a1",
".git/objects/3e/89a8e366f3cd670b8ec8c668254f5607df5f62": "949c68c6f367059fbb1aa85bb0eaaf10",
".git/objects/3e/90b1587deee5a2bff056f4317f7586457327b5": "c2e74494587ba9c5555bcddd6dbe3567",
".git/objects/40/6d7c078cd12acccddb6aa406bd572319b33779": "53a6e5a9f22f29e2e44df0dcb8d839d0",
".git/objects/41/3edef53ce4a5cb4244ca3a793a4fa3e1d05515": "a80c381a4207e245a3c3513ada5c5c80",
".git/objects/41/494ef15c6239f436abd209da685b953ecdb73c": "2cf8d42e380b19c88f944da8e799002d",
".git/objects/41/8dc0e3767cfdd2e86791976cc6a9f8cfa6b967": "862e18cc2480c9bf6087784d34ba5d0a",
".git/objects/42/2894368a7fd611ea8c26c38454e64ece678193": "4b2a0060957d10a8132f0945c9afeef1",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/44/931ede445c4316897dfb85da1a1365d2c5232b": "c6942a7dbc06e765f0631d7b68c0ba34",
".git/objects/47/1f8b801de2c37a541174186c6b9b839f1d8609": "e3ca7e5cc448992d23e428c10b8933fd",
".git/objects/47/48d63759ded87ed264a2b923e2ce84dd07cc76": "0eb0e3d9c56604dfd629418336a6fc69",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/189b91ad6bcd12fe08c7d256fa1dfa73acfe09": "6c9a67723285a8101c42d916aa53f4f2",
".git/objects/4a/ea8a0bc05f57c8e4dc214c7544e3c6b57d17d3": "229eb01681aad491615c3b7836e9502e",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4d/2f76c5e40f088a3dfb55800e73903119057d6b": "9cac36a9ac6d8b9356aed3fa1aeb4168",
".git/objects/52/3f96c7645eea25353d64d9d723916315fb3402": "910e358753731c935e52b931f7538d87",
".git/objects/52/510e1d426057cb8a5728a182b43c8f70e9cb52": "4d839e53df05ddbf9d70bfd1dbb5e8fa",
".git/objects/53/39d1a09df4986cc3f41f519485f18f83dce6da": "6d9012951590b11db858d9cfbd2ade96",
".git/objects/53/7510d879ffbd7f14c5de49598eb2ab35178222": "0d121345c79420aa7fda0ef8f42a0190",
".git/objects/56/0d8df9e6bfa418769463057e0d4433114ab4b9": "1fcf49a7f0c7a6ecc347b372b745010d",
".git/objects/57/31f2f4dbcd06f66051d78aa981fd918a0ce582": "4c8c8989a46451c3faa44c902a92545e",
".git/objects/58/878f3d35c0d1dfe9a1a5f89f90d7e8021e82ee": "adde2da85e7bd1ece626fd0cc910ad89",
".git/objects/5b/e4618d52fa387d3bbab50c21c4ddc5d4f63cc1": "27cb2df0706b398f6962b557ceb5912f",
".git/objects/5c/e84b901c96cca5fc98fe461b97ffe3d8323313": "696a31dc980acd1460fdfa848d289d9c",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/5c/fdbe165f3019c3849a1ed45e3d49eac435fc63": "44c3838c98baa07346b9cfccf592c640",
".git/objects/5e/08071452fb8bfcc4dbfd3a54ec3a34768db4f5": "2eccc32f47ceb6522febe209092c3916",
".git/objects/5e/1e3bc7aaf4571c4f6d2d6b10ab39ee7656a3a7": "588726e5842b7c5960867ad9728bc848",
".git/objects/5e/bda66055733773d3df5653206884b783276d0e": "8a0d135017fa2f22a88695521c0f4b8a",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/63/bc437e762966c685e5c2ec5065bb7c863616fa": "2af6b34622e2da0d04428a144fce5601",
".git/objects/64/2a048175466d9e5598b59195d1a0c4a34d22da": "5a52d0e58683d3c77a21fd92153bc88f",
".git/objects/65/055aa6121a5ca486a297e0d9378267a0765b19": "863e3154596e41852f377fd5df36298f",
".git/objects/65/9929cd360d309a90e95b4164c8843b2d4f0315": "8478ec057f48ea8c554208405cfa2b54",
".git/objects/66/2f355799beffd329afbb082d1cb615c8d13c1d": "bf0bdbdc2fdd707e381b5e2d846c48a1",
".git/objects/67/bdfc38061f4aa31aeffe974cfc990b5c9cbd17": "3a23cbbef73e3e1b40899d16f484891e",
".git/objects/68/e127f1f956cb456aa6a8c6647b30f0eb8e0fdd": "ccf707b3d6c827b0eaf15cd6c71d1ef0",
".git/objects/69/cafc6d7fa897e9fac2a149ad712d3c89271f3c": "c48cd36c0ebb1e634c19d54af368cd1f",
".git/objects/6a/1e75f1cdd375989cd813a9208f515e4c93e58c": "bbc7a3d14975454096f9f4b039810b4f",
".git/objects/6a/694b54c609e0f57319f68cd5e18c3b85abf60b": "6b784ce427c9a909c3238ebd1a30eb45",
".git/objects/6a/883688678e4de620a900981a8e287784308c08": "23cbcca16497f779900e60ebb9eb728c",
".git/objects/6e/9d747899a2a3138667d57cf1cbb768ca9c7142": "76363c279d5bbe5df4f335c769bda15d",
".git/objects/6f/25d2e7314aea70cd8348e8b6f9693a9c4f7aec": "ddb512b5cbae12bdb34f1fc7b9b28fba",
".git/objects/70/9ab43e729c9bbd59fe56aac3bd2aed2ce501a4": "ab902312fca9b8c3304b4485175f97ce",
".git/objects/70/9ec28e3926a1189891b2bbcaaf6d5e01157aba": "88e3cdcc4ce4b113479ebd0953027190",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/74/4f1a8dd35b9f538ba6e12d78077df400c47529": "1e1543af9e19b67aa4720dfb13031738",
".git/objects/75/ca2ef9527dc0f3bd160e7409fe7e2e6727c5bd": "12ff1e49be9ebdd3cb3ea7b59898c021",
".git/objects/76/3689d6af38971c97f1dc0735ce7626a6701915": "8e9a91be75982e943ada8a9b1d643436",
".git/objects/77/9c87830abf1468d63d726dd559bafd57c996e4": "970fe5ccab19d055526a99c6f5142ccb",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ee7415763781fedbcbd80929c8eaf1e264bfce": "a0b9efbed8ee1f59fe3560717698776f",
".git/objects/7b/0ebf54ac85845ae92589cbd232321cd2acfa5a": "b5a47f88784c6d39e219394492d451b8",
".git/objects/7d/47ac1c6973b56a98ccda611eebf24b4c3c6d23": "805426d67f7c30ef27e6ba5666d9a1b7",
".git/objects/7d/73a7ddaa3af91997327295458116f906fdfb96": "a1c511c342a8b8a67f21000d6cd2e8c8",
".git/objects/80/3ee18c8b46dddb546ad96a6ded4c540291b0d2": "c7172038fc7582729b667d1762bdc5e5",
".git/objects/80/46606e85fb1dd2c3ede1b79aac0a7254fd177e": "fab4b5e9623ef42862e1018fccf03703",
".git/objects/80/9e725130c037219765d91d8d917d63143a8270": "248ade1af9917e711829ac7f532460aa",
".git/objects/82/f5be23a6348daba27c8e731658fa5b70e715e4": "87ca260290e7fcd0d81d96798e0152d0",
".git/objects/85/64cd41111bc31cc0805a0269bc45c3a533f106": "113372f6b753b72a6d7397928ba0127a",
".git/objects/86/c4e82771234a8aaf2aa27a762fd7380f48a37f": "ef151b4400aba30c4974c66c93d73d2e",
".git/objects/87/d3e5a563c6f356252038c5d71e3088d00b3745": "af7086733881a31114de929d03bc6f93",
".git/objects/88/7b42628d0c2b274c1a6f732d94b2cbccc672bf": "394cb5f8fe23585cd4caa7ae62b7f341",
".git/objects/88/cd2cb27d791d2f74b64a1312c0b7143c2aade6": "6c629403ed6d92b865ee0700e47b8c16",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/55a3e538351ad7a4304a2aacad84ad58d2e06b": "4f60c4aa62e781fabeae21328af253f8",
".git/objects/89/5727f07d8e923b8eb8f10211121dad2f2172a8": "a2738d5f1a21869d44069dad67c7cc57",
".git/objects/89/58b19d9270e259429b86a6d3a8f84479e2423a": "31636a3a75cceb8c37f684967d8a8e16",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/dbf0f4634e35d5e8ed52432ad412fdd3c7c3f5": "419779bf47dbc6b0e6a620a0f6ae598a",
".git/objects/8e/35908e7b4ecd7684d79af6e295adcdf6b680f0": "75a928a7f415d4497b21fde2ed1c6447",
".git/objects/8e/cff855f8426be031bc9108c0e2e6bde57c9e62": "e034f364a5572a79870739f72c66e751",
".git/objects/91/188c68127dc1fa4bff1b7fcb54b190f146e92b": "691977d6dd043cd862e375ee4fd115f0",
".git/objects/91/891993f385d15889ac5edbff608843fe24718f": "417edf2068f67340f088fdf3dd498a33",
".git/objects/92/ee6350938ad052cc81f057aeca5dfbae534b74": "332bd1ac8425b2ff61a5ac335cb89e50",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/95/1110dabc6ccc29924bd2fc94b824571f8c244b": "055bb5d3b6c9e105e32c0289fc0118af",
".git/objects/97/2b43da5c33974a18ebaae97feb3acd5b572678": "8dcd91a1593223f85718b354012e0fe5",
".git/objects/97/bbcba534dbafaaf7b7a16a0ea64e1225925637": "7431a6710e738175b7a359311091dcb6",
".git/objects/98/1e73450de37555fc7a5511869968d7a4c94dc5": "0d77e74e7e450761907dc1d79507bad9",
".git/objects/9d/20b846798e995ac040e52b1f4e0d95fa8ce5f0": "76775b3563156d2ffeb200418df4c937",
".git/objects/9f/1ba91d20d4bf9b1a613067657586483bb00d2d": "b4401acc98c8624370a8b5d51fb30658",
".git/objects/a1/2d10b89c3ab6287d83c2d125e2926d13c4e2fb": "9373cde3964ab8470fb5bb9f4d219ae7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/541b2ccd86fceea0c91052082a856c05bfe761": "93c6e9d9a915fe2d1421c0623e18235a",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a5/7b53940a8528d010a3d6c292a6fc2c42c4100c": "5bec0a4d1c6b3f732ffb143fc38897bd",
".git/objects/a6/b581f2af0c399bb789e64374c1baf242761cb5": "68a318750d90ba01a22edc6d6e12e536",
".git/objects/a6/bffc09d984da00a069792a5d9ced1009311da1": "79245a3822a6d4803cc47a3efc51d393",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/eed3d40fb19616f1e9a9dcff5da07ebea95e2c": "049446fd1a4c92b964fa11cd320cf87f",
".git/objects/aa/73be39391af2a36509b17d54244f1602efd3ea": "5c3c064e5da8dd5ee9a5f3a85d9c5dab",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/aa/a2efd622de618c4ed4e49902d2a052127a2165": "3f9b72be77aabff2483e2b94aa28ef17",
".git/objects/aa/a9f6fccf372ac4379564c314c36d86d33d252d": "507c5fa9912c31ad63ee03ba4823acce",
".git/objects/ad/c4c9b47c566ed30cc359f0c29ee6470d81cd6b": "5720fd457fb068cd37ad18bd569fe974",
".git/objects/ad/cefbde1597d70abbfc26ced74ecff73f48d479": "27368ec24cbcd003ed17266dc707de3b",
".git/objects/b0/f659dbd5993e3a075dbea16e1405cda1c6b4e5": "06f2eac84c8b23ae978ca099d87c48ca",
".git/objects/b2/0a0be5e50c71e48571fe19170def5266d065ec": "7611970f468b01aaeedb346866924ba6",
".git/objects/b3/c580a37788b59b09fdbb331cc2898e4bf5abd5": "bc307ebf569e8a803560afbdc399a4ad",
".git/objects/b6/d9906e5338cf1be0971e5a98e00532df4eb1e0": "b8d8f6cf67e9acb1f39f289309605eab",
".git/objects/b7/361c6cda98972313c54fd2d7e1ee2229520149": "600d2e3feff1869d2620d6d4d686b0e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ff675c112d6e926feab6641dfb20c3ef4cea61": "93d08a6e7fdec5ba3c2d12330682780e",
".git/objects/ba/2cf4fa04a40b808649d434ae8f8f507f04e748": "8716fa1e6a936574387a9a1c13d29682",
".git/objects/ba/8687b2dd858b61e2ad7c87679cb8896da53466": "298708b5b8817060d26de12d366b8560",
".git/objects/bb/86793d9aa80058b04f21e87f164915e38604c9": "a7eed42ba0836b8b19c994e62d012e6d",
".git/objects/bd/1688cae162cd76a401414227028c7b83e643a9": "94025c44e3c4c40484e600734fd42d88",
".git/objects/bd/2c4020f5fec9f7cd00a6dddcd8b92fb430a90d": "86e2c8562a96074bb8a4682372717001",
".git/objects/bd/a7de0e60f0c2458a85642419cb32b44b2c559b": "ddcd570812051ea047a1b1352f6049c3",
".git/objects/be/37192febabc2e2a3a9cb595c06e00f2605d093": "76a5415e0ae5176e2ad9a3d07d79c6b2",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/38f0cd99e4fc07603fe8c439bc48e327151a23": "bd7e45257907cc8464188a9a315e7daf",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/97acdc04990b1e39297e607460246de02393d0": "41e2076b38a20f5f9fbf776e4ca28c54",
".git/objects/c0/65fe6dfcef079ddc553c79dd83e439a1abed77": "47617ff9fbb5746660fd31a86564a27c",
".git/objects/c1/3405192534d65b71d3a4be5113bbff7b5b67a0": "ec418adaa5ad757430eddfe36f4a6cc6",
".git/objects/c2/1e3b1ab814681f3473482e17b7047b27c0e867": "22bf9354131029cd339ad3a95ee6ccc6",
".git/objects/c2/684472c405e7287bc368a7bf48ac6b107d01e0": "195e10c80df226907a5facc827ee341a",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c3/63a18c3b2a6b0bbab603ddc7c01377de2920ed": "13ccfa65e0529d0acd7a5668b4804714",
".git/objects/c3/cf54e7d4c0e5e0bd56d723500f517c6a2a3c8c": "4ce46840a0e616483fc40422a9cfe967",
".git/objects/c4/14b092bbec77235b9efcb244bade26905cb9b9": "7c6a91df6e760b09e82136b95d5d94ba",
".git/objects/c4/3659d25ecc702bcdba6971fbc10ffaeec7ce31": "20c44af31e0792b8a8987f5b9d8e3bd8",
".git/objects/c6/71e14b48be74cf5a0245c8361279e9ea844477": "a94bc21f0b4c6b1b7e50ed85c4ede2f5",
".git/objects/c8/637e4ac00abb55a224de09f3453a91cff6397b": "3d2568ee4cfacd3ff6fba46a58b1ae39",
".git/objects/cb/52d5599b8a58cba8116a3a63e05ce19f1b454f": "eeaf321824b2e07d3a7150e630f5ea2c",
".git/objects/cc/04d6abafa5756abe1affab816717887bd37bed": "e32f42cd962e0b28282733c7f73b0dfd",
".git/objects/cc/f832951c23a7a8b98b32f202912ce65be022db": "b8d55b6a61419056473b9ce8254a39f1",
".git/objects/ce/ba39fa3a277d146650f38823d1564b0e0f3e24": "e8ce596f8d13ec64d8cddd45ad021a26",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/d4/6d88ba8167193b60ef03b7dc5c610ddcfe01b3": "bf22cbe78b2ec407dace7eacea16ef83",
".git/objects/d7/b7143e6f92fd4327bc4d62fc3a087c9b66f16c": "940836c2b16afb1eb74fbe4dc0c395d4",
".git/objects/da/382e41c921d152be43128b08093d9ce548e011": "45f3f2d6cf861c5c2de234e1119a86d3",
".git/objects/db/ef31e9a4bfddffad6bd4a54ac11f297dae33e8": "01a7e1c362f4f3b36e31b27cad25ed97",
".git/objects/db/ef928c3ed388d57772378a41f1cde5926c04b5": "85ca75cd89fc2025cc5c98571a396076",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/de/23c66a9a92a854afb615bab1ddbb1d7345663e": "39aab7efac57f5e897474fe4f77acf15",
".git/objects/de/a56926cac44645ed7469d107922f857fe24a3e": "0d24da767ec0650db9f72b05032b79ea",
".git/objects/e1/4332edf42853d465f1cdba125c341ea3bfd09d": "ea322a2df089f3be307f3fdf8797b64c",
".git/objects/e2/99fd59ae842f9c3c3d43b110ffdf8b7bb4a4ea": "5eaa4fa25046b68efa061b1bc79915fd",
".git/objects/e2/e54a230bafddf53b5e99733e6c71a2c50e606b": "5d5ed31efcb28a0d5d7e6bfbc3078f4a",
".git/objects/e2/fdc35b63a0efd223fc73480d954863790a1d37": "71c02d01688189b96ad13e3b85cc83b4",
".git/objects/e4/cbf53e0a2c4a89bd560c6f914cb17eb6b8dbbc": "8d3240fe6cf2b8f4c06e2aaf0e96cbef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5555840513c08b69be8022bf3de5944ed9299c": "4acfa4b25b9a004724e2b555d5229394",
".git/objects/ea/60af1025f9bd7444bf0da90d4e252985a1e3e2": "11e19f35aa75f6c6b9bbee47a6822ce4",
".git/objects/ea/f3a33eb70bf4326415d0114c6e7e32b2639318": "395d43e67749830a37c5087631027f3d",
".git/objects/ec/f12f059fe704de32739b6072d6252f517f4b24": "a455c62d878105095dfaa243b7540eee",
".git/objects/ed/14c39444fd2a5e987d47f2522d16080f5b70bc": "5a31117f73370261cca2a496fb81ceec",
".git/objects/ed/38efb1da47de08a34a011db271764365053b53": "15052538a0c056e7f92d7a1d1019f196",
".git/objects/ed/be4034af3395f28e422d53db8e30f879d555d8": "36fa9a00aece793597f250b91b46a767",
".git/objects/ef/607a587a0a8e2da10fd05e3153f17a46e5019d": "3b7a3ec307f3511d2fab51347a629ac6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/0e7b9589e3d07c4b712bc839a7b48b12536d0d": "9248e73ff23f441323f34cc1a054052c",
".git/objects/f9/7e883647f3fcde97115cc6a660477915083026": "3d04912727b08cf459bef39431204452",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/fb/85814f513646339bb204646c33e5fec57b0656": "382e4fab880791363c986f68d7fa71e8",
".git/objects/fe/1d401142c61027dc787dee54a4b4fc1b23ac99": "19b6a998744dea0a9b34c0e11fe3c914",
".git/objects/ff/02148c5d5761d43986dcadb557befcd2dab664": "04d27cb83d0ae32793b81914a0c9eb1b",
".git/objects/ff/4f044671aaf7b4ffe7556d1b0e354961d4f6c9": "c01240e8a23e78a4f765a7f30b31b324",
".git/refs/heads/main": "abb0e89a0eefdd4dbcbf49f831d7074c",
".git/refs/remotes/origin/main": "abb0e89a0eefdd4dbcbf49f831d7074c",
"assets/AssetManifest.json": "779518b6c580c144f25bbc2e625fa323",
"assets/assets/font/RobotoSlab-Regular.ttf": "2e935203e7200edebf345ee19a80f435",
"assets/assets/icons/coin.svg": "f7c1068aa9a1d895c7f7879421622fd7",
"assets/assets/icons/logo.png": "332d03aa821855534bdb1aa4d5f8eb77",
"assets/assets/icons/logo.svg": "b5e699313949f9603e7d95442681a2cc",
"assets/assets/icons/nehry.png": "49da1f7f7951fed33c4eac2a5e9c3426",
"assets/assets/icons/stages.svg": "7a3a6996e304847b73fb2ea78e389a20",
"assets/assets/icons/warn.svg": "77f8cef7226983fb731d0c35dc4c50c2",
"assets/assets/images/addition_1.jpg": "853dfdd7b2b84ec02368e900c68d87cf",
"assets/assets/images/addition_2.jpg": "f97325a8bb667ed87e6cfd3738b18c8a",
"assets/assets/images/addition_3.jpg": "7aebb8957efe86bb0940b1d94e4749a1",
"assets/assets/images/addition_4.jpg": "0223375df64f70c7f9c08857b73230d8",
"assets/assets/images/angle_1.jpg": "405171b32b2909533de97a3c4333cc9d",
"assets/assets/images/angle_2.jpg": "f74ad07328dc046e8d5df16073746c9d",
"assets/assets/images/angle_3.jpg": "9e073f166c9a74246dddd538da75001d",
"assets/assets/images/angle_4.jpg": "c690f2b61103e3672b27c93a4bb9c6f6",
"assets/assets/images/arc_1.jpg": "5b46037ef222365bee9cf0499069c9a6",
"assets/assets/images/arc_2.jpg": "99b07c1b6146aecdb8420e1c1215d76b",
"assets/assets/images/arc_3.jpg": "89d984e2cd796667df25f095afafe58e",
"assets/assets/images/arc_4.jpg": "987e968d856fe0141d3525dd5faa3cc8",
"assets/assets/images/ascending_1.jpg": "644c9f9e54f6f712a952423636aeb50a",
"assets/assets/images/ascending_2.jpg": "adffc279a529a02c92182b9470c7a096",
"assets/assets/images/ascending_3.jpg": "4e727dbdd48b98084b592ec8b2da7fb3",
"assets/assets/images/ascending_4.jpg": "1ac2985dc75d20b2a55ca45c5cea8285",
"assets/assets/images/binary_1.jpg": "3b7c5cf5487f8c35695510b9f47620ef",
"assets/assets/images/binary_2.jpg": "16339f7d915338bc0f28faa0612f85a1",
"assets/assets/images/binary_3.jpg": "7252771c428e7ce30dfa08b0cf123a96",
"assets/assets/images/binary_4.jpg": "f20855f50281300eede03b4076798d4d",
"assets/assets/images/chord_1.jpg": "33f88ee90b907bb7a45917aae8825315",
"assets/assets/images/chord_2.jpg": "f9383d132c79ca36c2402a23fe7ff3b9",
"assets/assets/images/chord_3.jpg": "7f40372df11793b7ade16253336e87b1",
"assets/assets/images/chord_4.jpg": "33ca252d5e78f0c81c61485b56610895",
"assets/assets/images/congruence_1.jpg": "2d1c9ed364e0f22277d42da1006950b7",
"assets/assets/images/congruence_2.jpg": "23c047880e5ab49e1de00169dbb68d80",
"assets/assets/images/congruence_3.jpg": "919e4d12bbd32a96a1b1e9595c4b1fb0",
"assets/assets/images/congruence_4.jpg": "f92dba35551298266166db2fa65a2dc3",
"assets/assets/images/constant_1.jpg": "1d2ef2094e0dd841fe4915a2017102c6",
"assets/assets/images/constant_2.jpg": "95ffd9030ef7b50f3fad0f23c5eea01a",
"assets/assets/images/constant_3.jpg": "77aae3bf59572b04d82cbb981feef87a",
"assets/assets/images/constant_4.jpg": "a14529044522e17d077cff1bfad3576f",
"assets/assets/images/decrease_1.jpg": "0de57a1dfeaa83fba3df590146091b84",
"assets/assets/images/decrease_2.jpg": "316903422ef58c8ee14244f782c10931",
"assets/assets/images/decrease_3.jpg": "04152060aa079da742acdf9c0458ca16",
"assets/assets/images/decrease_4.jpg": "9f9dbe13146248949d09180fcac1c044",
"assets/assets/images/denominator_1.jpg": "62b95768a2e2e0fbe031cb7349eeb63a",
"assets/assets/images/denominator_2.jpg": "c2a7f2e9143f286c02bfc25ccdc1ef3b",
"assets/assets/images/denominator_3.jpg": "3ef6cbbbdc380ce0f7a18014c27fcbec",
"assets/assets/images/denominator_4.jpg": "f0f2c75fcebbd3636a8ede81e1dec5cc",
"assets/assets/images/descending_1.jpg": "703a6bb32fc0ee1047e95d527b0f62ce",
"assets/assets/images/descending_2.jpg": "4bca8fbcb6f90ddf7712d495e08dc2e1",
"assets/assets/images/descending_3.jpg": "7e4cfa94c2501cff1276a59d7247c413",
"assets/assets/images/descending_4.jpg": "cf338bd8d95d91e0e41397ea8e683ffe",
"assets/assets/images/exponent_1.jpg": "859266992895db5bb2773ff80f14fdb4",
"assets/assets/images/exponent_2.jpg": "9ea0126cf2cd3785da201df8d5ad7fd1",
"assets/assets/images/exponent_3.jpg": "8f09b9725850b493ca3a941f952a3cd8",
"assets/assets/images/exponent_4.jpg": "cbf11821a4f815f819cec6b9af5ad36c",
"assets/assets/images/expression_1.jpg": "9795445e36d101eb8f6be0585c796cae",
"assets/assets/images/expression_2.jpg": "833ace24179cc77b21a504088470e664",
"assets/assets/images/expression_3.jpg": "7ee4c0091941bbb848fce4e13bd6ae84",
"assets/assets/images/expression_4.jpg": "9c890043ef573c324087c4839c86fbbb",
"assets/assets/images/factorial_1.jpg": "1a592e7d2579b4dac60cc74f473f99c0",
"assets/assets/images/factorial_2.jpg": "1ad65fd2d7ea52eb1b07425843dc24dd",
"assets/assets/images/factorial_3.jpg": "7da808a0a4e61dbaf6f3b64724034679",
"assets/assets/images/factorial_4.jpg": "6f2e13c776423b651d7102072de910b8",
"assets/assets/images/factoring_1.jpg": "91cefd701c9baed5215f2368527f7715",
"assets/assets/images/factoring_2.jpg": "4ea983ad06336f7746cf1792d28ea951",
"assets/assets/images/factoring_3.jpg": "77c5dabfa0171953dabd2c77500add68",
"assets/assets/images/factoring_4.jpg": "e61abf757dd7304a8695c43cbdd21b99",
"assets/assets/images/formula_1.jpg": "e9b50b9c7a03751d0d09e07965653411",
"assets/assets/images/formula_2.jpg": "7e8803fc33dfac88ceab246e236c4f92",
"assets/assets/images/formula_3.jpg": "39df3e5ebaf766ff25a01f8f0400c74c",
"assets/assets/images/formula_4.jpg": "72fc58b848c3c9dbb78b2c183157bf30",
"assets/assets/images/fraction_1.jpg": "21aa59811fe94a277a91098633f4a8de",
"assets/assets/images/fraction_2.jpg": "4d6581bbb08bfb7bbe572b30b4ae8641",
"assets/assets/images/fraction_3.jpg": "871e44fbc1ff1895cf758da2c2d23447",
"assets/assets/images/fraction_4.jpg": "f93c635123e8fde4aa2d0b5c1b443640",
"assets/assets/images/frequency_1.jpg": "811dc88e3bc5bd3dbdac13ab98d1a8b5",
"assets/assets/images/frequency_2.jpg": "72028dd0d3758561a293db339b228514",
"assets/assets/images/frequency_3.jpg": "76d96a654e3719aef80ee4a5182b0fd6",
"assets/assets/images/frequency_4.jpg": "c1d46340797db5ef5b9b06233d0ae4f3",
"assets/assets/images/function_1.jpg": "f2c70a73d0509fefda58c64fe07cabba",
"assets/assets/images/function_2.jpg": "3e7a459c16b7920350ca8bfca216d738",
"assets/assets/images/function_3.jpg": "39b4a96441f47251b11a3e5b6028a97b",
"assets/assets/images/function_4.jpg": "4d8220d40a0421e04910e2b907859bcb",
"assets/assets/images/graph_1.jpg": "e870c012e0d7ac0ae089102149a5bdd7",
"assets/assets/images/graph_2.jpg": "b8f446d72ba0a65d2c5f332aa3a2d7d1",
"assets/assets/images/graph_3.jpg": "eb057034f1b8dbc2ce03e49b60a41a92",
"assets/assets/images/graph_4.jpg": "3475026a63c8fbbdf7271edb476178b7",
"assets/assets/images/imaginary_number_1.jpg": "a57b8161518ea9863618d8ccba6bf83d",
"assets/assets/images/imaginary_number_2.jpg": "3f21e44b2371c76c857f752ea034a7ea",
"assets/assets/images/imaginary_number_3.jpg": "d1bfb78438554692765c13d35155fd3a",
"assets/assets/images/imaginary_number_4.jpg": "dba7fb0877289370fc66e51a4170411f",
"assets/assets/images/infinity_1.jpg": "f7c7e0af6fa12aaaa03b9b02713a1856",
"assets/assets/images/infinity_2.jpg": "3dcaee0ae141695a32d174cd7de8dc87",
"assets/assets/images/infinity_3.jpg": "6092dfdd787ac465c96a17c86728c0b9",
"assets/assets/images/infinity_4.jpg": "08bb2e4b0fc756b001e8851a60c1ecc6",
"assets/assets/images/intersection_1.jpg": "e3a1bf44fddaab285a20f9caafadbbde",
"assets/assets/images/intersection_2.jpg": "a74c81e539b2d7316e77afe34df30364",
"assets/assets/images/intersection_3.jpg": "4178af75a65c12e4456a3ce6f3240702",
"assets/assets/images/intersection_4.jpg": "cdb3c9b4b2c651d151e7cdf7a43d6dfd",
"assets/assets/images/mandelbrot_set_1.jpg": "43e59fa02710ebeaf839628113cd6f22",
"assets/assets/images/mandelbrot_set_2.jpg": "b70b903209ffc9f37b5129470bc8b741",
"assets/assets/images/mandelbrot_set_3.jpg": "b3fa635540758493bed4cea8d775acc9",
"assets/assets/images/mandelbrot_set_4.jpg": "9e5451605668db1803b9a481c778f531",
"assets/assets/images/matrix_1.jpg": "fa46679f33b9e56be2a303c8c8519a56",
"assets/assets/images/matrix_2.jpg": "4227c31eb32f7856c61d5d2cce89b970",
"assets/assets/images/matrix_3.jpg": "296d216f373fcf10c0f3e0cd603b1fdc",
"assets/assets/images/matrix_4.jpg": "32a4bbf52717a7317a9412310ded0ed2",
"assets/assets/images/natural_number_1.jpg": "0a4190758cf2b954fcb9c21627a43a2c",
"assets/assets/images/natural_number_2.jpg": "dda371ed6149bacd10bc31177fe13a21",
"assets/assets/images/natural_number_3.jpg": "cda69afd417ade2389a57f86307c292d",
"assets/assets/images/natural_number_4.jpg": "8f554f2f66df246314adab16bba27a99",
"assets/assets/images/node_1.jpg": "8e7aa15b2132db6a844db3a03e6dfc50",
"assets/assets/images/node_2.jpg": "ba842a3abf7cc364537afee712b5eb4e",
"assets/assets/images/node_3.jpg": "6a0627367adcb0225698599ff364a955",
"assets/assets/images/node_4.jpg": "3178b1bdf367dacc44cc1d2b050e6857",
"assets/assets/images/numerator_1.jpg": "611c43061337bab4ddc056c97cd1cced",
"assets/assets/images/numerator_2.jpg": "a44a78993c2557e20232fed76b8d1f6b",
"assets/assets/images/numerator_3.jpg": "29c8dbb56f0ddd8111a32fcd82310343",
"assets/assets/images/numerator_4.jpg": "a53c0e435ba9e0ea48a852fe886a445f",
"assets/assets/images/origin_1.jpg": "6062ec81c949996fda68d05baa9d1184",
"assets/assets/images/origin_2.jpg": "b316abae7272ae5b721f7344da482d7c",
"assets/assets/images/origin_3.jpg": "b6280243beb5f227fccc79209593bc14",
"assets/assets/images/origin_4.jpg": "204eb9d1e33ae86e436b50cee91d1d51",
"assets/assets/images/parabola_1.jpg": "450825e55e3564a3a497a96b33c07072",
"assets/assets/images/parabola_2.jpg": "91461c0578f5087b7eb86224a322984e",
"assets/assets/images/parabola_3.jpg": "a6ad83cfb5cad9607579e53b7a856ec7",
"assets/assets/images/parabola_4.jpg": "91c094f6e21277a35ff7abe481457821",
"assets/assets/images/parallel_1.jpg": "cab873720602d218a3c17934b3a8ca54",
"assets/assets/images/parallel_2.jpg": "9c4a871a26bb84b962d84b04fe53462e",
"assets/assets/images/parallel_3.jpg": "286989f25fa8dd0579f85bca9d9be364",
"assets/assets/images/parallel_4.jpg": "70cbc1880c6a46ccca9ed268a7ab70e8",
"assets/assets/images/permutation_1.jpg": "e703491e95fcbe86254de5536e3d6550",
"assets/assets/images/permutation_2.jpg": "9fa8ce5a2bff80cde6f62e2fb8b98f36",
"assets/assets/images/permutation_3.jpg": "f58ddd4f021dd6aa2dea06f3bf117842",
"assets/assets/images/permutation_4.jpg": "0ee024a8ee24e4f525fd48aa4946d8f8",
"assets/assets/images/prism_1.jpg": "4f17637dea07da3697560d4adf992892",
"assets/assets/images/prism_2.jpg": "c4f806b8cd29b99d3aa856a6cca037c2",
"assets/assets/images/prism_3.jpg": "c3d1114afab5996e6534c291eb65b1fc",
"assets/assets/images/prism_4.jpg": "5917a0ed2939239ec66a1e797d6e45fd",
"assets/assets/images/reciprocal_1.jpg": "c328147dc415449046d824bf93ae11d2",
"assets/assets/images/reciprocal_2.jpg": "91793f9a3e18c70b1088b542c2d5913f",
"assets/assets/images/reciprocal_3.jpg": "1c1989b7d26fe6ad94e62807a25b5442",
"assets/assets/images/reciprocal_4.jpg": "67df31de67b0a7533f0f9b15789006e4",
"assets/assets/images/relation_1.jpg": "e607f18f91b3101dddffc34caabdba4b",
"assets/assets/images/relation_2.jpg": "77d5de4555917d1e3809791f798b5c17",
"assets/assets/images/relation_3.jpg": "9e036dc01e0fe947511c7e2d9290ab10",
"assets/assets/images/relation_4.jpg": "ba09e5ae360473ed7d62c706c7b9ad7d",
"assets/assets/images/remainder_1.jpg": "39b0e6a3ddc9bb9bfb957bb423976170",
"assets/assets/images/remainder_2.jpg": "c3cd2b79e39179ebba09620a240c1d1a",
"assets/assets/images/remainder_3.jpg": "5674a39dddbc5c1f7eee405565710952",
"assets/assets/images/remainder_4.jpg": "54ac3dce56ca2df5d8a813ccc47bfed0",
"assets/assets/images/segment_1.jpg": "79bdf326d8e4ceb6ca4c7eda8959c62a",
"assets/assets/images/segment_2.jpg": "14b00d63e247ec6937fdce2f5aaa97a5",
"assets/assets/images/segment_3.jpg": "0a9fb8b7b24ed1aad0acfaa7984a6b54",
"assets/assets/images/segment_4.jpg": "3bd9f442b477cdc987d0c26cc3dae461",
"assets/assets/images/slope_1.jpg": "b60abc6df8472e1d33a40d65b53efd58",
"assets/assets/images/slope_2.jpg": "8c6db9c7c1b44857cb2e59cb779d52fe",
"assets/assets/images/slope_3.jpg": "3a36bfb50e547c89f8393c539d387222",
"assets/assets/images/slope_4.jpg": "df9382cd0a2f8d19d360ee9d47b31df3",
"assets/assets/images/subtraction_1.jpg": "ce67d251ad5f9b52f00e652b9c3fba76",
"assets/assets/images/subtraction_2.jpg": "07eb32a1cfe9aa2e8e96a2a88e37312e",
"assets/assets/images/subtraction_3.jpg": "b92f60a51bc73ea03e112a8a407145e2",
"assets/assets/images/subtraction_4.jpg": "bb5f71fae31d0801bb2ec49080dfbe23",
"assets/assets/images/supplementary_1.jpg": "8116a1ec14f6f2899f67191d8e88a45f",
"assets/assets/images/supplementary_2.jpg": "ab7badfb26bca31d4cb05031682cb692",
"assets/assets/images/supplementary_3.jpg": "7ac1569d702ab52b63cbef45f211f0a9",
"assets/assets/images/supplementary_4.jpg": "f9ec925712855e9690240a7e6cc7e5db",
"assets/assets/sounds/click.wav": "d94c1be6d1da27259b4e14b01f14b6df",
"assets/assets/sounds/coin.wav": "cf81c32b9e6e2dfc77e42f55b431c7be",
"assets/assets/sounds/coins.wav": "1aa5ba3d304c30e95c0a8f9b10f99634",
"assets/assets/sounds/error.wav": "e937001aa551f7ea0a3d0106b0b98bbb",
"assets/assets/sounds/load.wav": "8fb75c98bb5ee8764a33b368b68caeb5",
"assets/FontManifest.json": "ff73edefa7be3be74530dd6fe531324d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "ee704e6160fb0c12fc5b203a197ef579",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fcf1bede1257f2c600032a3e2680fe20",
"/": "fcf1bede1257f2c600032a3e2680fe20",
"main.dart.js": "969a052fba0bee5f5edcf5bf8460a5fd",
"manifest.json": "0845a3282377915864eae5649b6c8213",
"version.json": "35f613c237d5ce83d0decd362dbb20de"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
