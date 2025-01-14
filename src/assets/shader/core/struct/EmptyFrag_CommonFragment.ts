export let EmptyFrag_CommonFragment: string = /*wgsl*/ `
    #include "FragmentVarying"
    #include "FragmentOutput.wgsl"
    #include "GlobalUniform"
    #include "Lit_Parmers.wgsl"
    #include "PBRLit.wgsl"

    var<private> ORI_FragmentOutput: FragmentOutput;
    var<private> ORI_VertexVarying: FragmentVarying;
    var<private> ORI_ShadingInput: ShadingStruct;

    @fragment
    fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
        ORI_VertexVarying = vertex_varying;
        ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);

        #if USE_WORLDPOS
        ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
        #endif
        #if USEGBUFFER
        ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_VertexVarying.vWorldNormal,1.0); 
        ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
        #endif

        frag();

        #if USE_DEBUG
        debugFragmentOut();
        #endif
        return ORI_FragmentOutput ;
    }
`


