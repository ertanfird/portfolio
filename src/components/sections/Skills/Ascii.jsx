import React from 'react';

const Ascii = ({props}) => {
    const rows = [                                                                                                    
        '     SSSSSSSSSSSSSSS kkkkkkkk             iiii  lllllll lllllll                  ',
        '   SS:::::::::::::::Sk::::::k            i::::i l:::::l l:::::l                  ',
        '  S:::::SSSSSS::::::Sk::::::k             iiii  l:::::l l:::::l                  ',
        '  S:::::S     SSSSSSSk::::::k                   l:::::l l:::::l                  ',
        '  S:::::S             k:::::k    kkkkkkkiiiiiii  l::::l  l::::l     ssssssssss   ',
        '  S:::::S             k:::::k   k:::::k i:::::i  l::::l  l::::l   ss::::::::::s  ',
        '   S::::SSSS          k:::::k  k:::::k   i::::i  l::::l  l::::l ss:::::::::::::s ',
        '    SS::::::SSSSS     k:::::k k:::::k    i::::i  l::::l  l::::l s::::::ssss:::::s',
        '      SSS::::::::SS   k::::::k:::::k     i::::i  l::::l  l::::l  s:::::s  ssssss ',
        '         SSSSSS::::S  k:::::::::::k      i::::i  l::::l  l::::l    s::::::s      ',
        '              S:::::S k:::::::::::k      i::::i  l::::l  l::::l       s::::::s   ',
        '              S:::::S k::::::k:::::k     i::::i  l::::l  l::::l ssssss   s:::::s ',
        '  SSSSSSS     S:::::Sk::::::k k:::::k   i::::::il::::::ll::::::ls:::::ssss::::::s',
        '  S::::::SSSSSS:::::Sk::::::k  k:::::k  i::::::il::::::ll::::::ls::::::::::::::s ',
        '  S:::::::::::::::SS k::::::k   k:::::k i::::::il::::::ll::::::l s:::::::::::ss  ',
        '   SSSSSSSSSSSSSSS   kkkkkkkk    kkkkkkkiiiiiiiillllllllllllllll  sssssssssss   '
    ]
    return (
        <div className="bash__item bash__ascii">
            {rows.map((row) =>
                <p className="bash__row" key={row + Math.random()}>{row}</p>
            )}
        </div>
    );
}


export default Ascii;
